import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';
import { canUserPerformAction, addPendingChange } from '../../../lib/permissions';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

async function readDataFile(filename: string) {
  const filePath = path.join(DATA_DIR, filename);
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

async function writeDataFile(filename: string, data: any) {
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// GET - Fetch all posts
export const GET: APIRoute = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const posts = await readDataFile('posts.json');
    return new Response(
      JSON.stringify(posts),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading posts:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read posts' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// POST - Create new post
export const POST: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'posts', 'create')) {
      return new Response(
        JSON.stringify({ error: 'No permission to create posts' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { title, description, url, pubDate, languages } = body;

    if (!title || !description || !url || !pubDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const posts = await readDataFile('posts.json');
    const newPost = {
      title,
      description,
      url,
      pubDate,
      languages: languages || []
    };

    // Check if user is main admin (can directly publish)
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    // Main admin can publish directly, others need approval
    if (isMainAdmin) {
      posts.push(newPost);
      await writeDataFile('posts.json', posts);

      return new Response(
        JSON.stringify({ success: true, item: newPost, published: true }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Add to pending changes for approval
      await addPendingChange({
        type: 'posts',
        action: 'create',
        data: newPost,
        submittedBy: locals.user.username,
        reason: body.approvalNote || body.reason
      });

      return new Response(
        JSON.stringify({ success: true, pending: true, message: 'Submitted for approval' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error creating post:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create post' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// PUT - Update post
export const PUT: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'posts', 'edit')) {
      return new Response(
        JSON.stringify({ error: 'No permission to edit posts' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { id, title, description, url, pubDate, languages } = body;

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID (title) is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const posts = await readDataFile('posts.json');
    const index = posts.findIndex((item: any) => item.title === id);

    if (index === -1) {
      return new Response(
        JSON.stringify({ error: 'Post not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updatedPost = {
      title: title || posts[index].title,
      description: description || posts[index].description,
      url: url || posts[index].url,
      pubDate: pubDate || posts[index].pubDate,
      languages: languages || posts[index].languages
    };

    // Check if user is main admin
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    if (isMainAdmin) {
      // Direct update
      posts[index] = updatedPost;
      await writeDataFile('posts.json', posts);

      return new Response(
        JSON.stringify({ success: true, item: updatedPost }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Submit for approval
      await addPendingChange({
        type: 'posts',
        action: 'update',
        data: updatedPost,
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
    console.error('Error updating post:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update post' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Delete post
export const DELETE: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'posts', 'delete')) {
      return new Response(
        JSON.stringify({ error: 'No permission to delete posts' }),
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

    const posts = await readDataFile('posts.json');
    const itemToDelete = posts.find((item: any) => item.title === id);

    if (!itemToDelete) {
      return new Response(
        JSON.stringify({ error: 'Post not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if user is main admin
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    if (isMainAdmin) {
      // Direct delete
      const filtered = posts.filter((item: any) => item.title !== id);
      await writeDataFile('posts.json', filtered);

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Submit for approval
      await addPendingChange({
        type: 'posts',
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
    console.error('Error deleting post:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete post' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
