import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';
import { canUserPerformAction, addPendingChange } from '../../../lib/permissions';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

async function readDataFile(filename: string) {
  const filePath = path.join(DATA_DIR, filename);
  const content = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(content);
  // Handle nested resources structure
  return data.resources || data;
}

async function writeLibraryDataFile(data: any) {
  const filePath = path.join(DATA_DIR, 'library.json');
  await fs.writeFile(filePath, JSON.stringify({ resources: data }, null, 2), 'utf-8');
}

async function writeDataFile(filename: string, data: any) {
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// GET - Fetch all library items
export const GET: APIRoute = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const library = await readDataFile('library.json');
    return new Response(
      JSON.stringify(library),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading library:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read library' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// POST - Create new library item
export const POST: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'library', 'create')) {
      return new Response(
        JSON.stringify({ error: 'No permission to create library items' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { title, author, category, description, url, image } = body;

    if (!title || !category) {
      return new Response(
        JSON.stringify({ error: 'Title and category are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const library = await readDataFile('library.json');
    const newItem = {
      id: Date.now().toString(),
      title,
      author: author || '',
      category,
      description: description || '',
      url: url || '',
      image: image || '/placeholder.jpg'
    };

    // Check if user is main admin (can directly publish)
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    // Main admin can publish directly, others need approval
    if (isMainAdmin) {
      library.push(newItem);
      await writeLibraryDataFile(library);

      return new Response(
        JSON.stringify({ success: true, item: newItem, published: true }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Add to pending changes for approval
      await addPendingChange({
        type: 'library',
        action: 'create',
        data: newItem,
        submittedBy: locals.user.username,
        reason: body.approvalNote || body.reason
      });

      return new Response(
        JSON.stringify({ success: true, pending: true, message: 'Submitted for approval' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error creating library item:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create library item' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// PUT - Update library item
export const PUT: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'library', 'edit')) {
      return new Response(
        JSON.stringify({ error: 'No permission to edit library items' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { id, title, author, category, description, url, image } = body;

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const library = await readDataFile('library.json');
    const index = library.findIndex((item: any) => item.id === id);

    if (index === -1) {
      return new Response(
        JSON.stringify({ error: 'Library item not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updatedItem = {
      ...library[index],
      title: title || library[index].title,
      author: author !== undefined ? author : library[index].author,
      category: category || library[index].category,
      description: description !== undefined ? description : library[index].description,
      url: url !== undefined ? url : library[index].url,
      image: image || library[index].image
    };

    // Check if user is main admin
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    if (isMainAdmin) {
      // Direct update
      library[index] = updatedItem;
      await writeLibraryDataFile(library);

      return new Response(
        JSON.stringify({ success: true, item: updatedItem }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Submit for approval
      await addPendingChange({
        type: 'library',
        action: 'update',
        data: updatedItem,
        originalId: id,
        submittedBy: locals.user.username,
        reason: body.approvalNote || body.reason
      });

      return new Response(
        JSON.stringify({ success: true, pending: true, message: 'Update submitted for approval' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error updating library item:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update library item' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Delete library item
export const DELETE: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'library', 'delete')) {
      return new Response(
        JSON.stringify({ error: 'No permission to delete library items' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const library = await readDataFile('library.json');
    const itemToDelete = library.find((item: any) => item.id === id);

    if (!itemToDelete) {
      return new Response(
        JSON.stringify({ error: 'Library item not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if user is main admin
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    if (isMainAdmin) {
      // Direct delete
      const filtered = library.filter((item: any) => item.id !== id);
      await writeLibraryDataFile(filtered);

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Submit for approval
      await addPendingChange({
        type: 'library',
        action: 'delete',
        data: itemToDelete,
        originalId: id,
        submittedBy: locals.user.username,
        reason: 'Deletion request'
      });

      return new Response(
        JSON.stringify({ success: true, pending: true, message: 'Deletion submitted for approval' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error deleting library item:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete library item' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
