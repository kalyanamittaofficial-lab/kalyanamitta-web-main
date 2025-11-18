import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

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

// GET - Fetch all Dhammapada quotes
export const GET: APIRoute = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Only admin can access Dhammapada management
    if (locals.user.role !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Forbidden: Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const dhammapada = await readDataFile('dhammapada.json');
    return new Response(
      JSON.stringify(dhammapada),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading dhammapada:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read dhammapada quotes' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// POST - Create new Dhammapada quote
export const POST: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Only admin can create Dhammapada quotes
    if (locals.user.role !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Forbidden: Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { sinhala, english } = body;

    if (!sinhala || !english) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: sinhala and english are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const dhammapada = await readDataFile('dhammapada.json');
    const newQuote = {
      id: dhammapada.length > 0 ? Math.max(...dhammapada.map((q: any) => typeof q.id === 'number' ? q.id : parseInt(q.id) || 0)) + 1 : 1,
      sinhala: sinhala.trim(),
      english: english.trim()
    };

    dhammapada.push(newQuote);
    await writeDataFile('dhammapada.json', dhammapada);

    return new Response(
      JSON.stringify({ 
        message: 'Dhammapada quote created successfully',
        quote: newQuote
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating dhammapada quote:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create dhammapada quote' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// PUT - Update existing Dhammapada quote
export const PUT: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Only admin can update Dhammapada quotes
    if (locals.user.role !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Forbidden: Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { id, sinhala, english } = body;

    if (!id || !sinhala || !english) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: id, sinhala, and english are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const dhammapada = await readDataFile('dhammapada.json');
    const index = dhammapada.findIndex((q: any) => q.id === id || q.id === parseInt(id));

    if (index === -1) {
      return new Response(
        JSON.stringify({ error: 'Dhammapada quote not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    dhammapada[index] = {
      id: parseInt(id),
      sinhala: sinhala.trim(),
      english: english.trim()
    };

    await writeDataFile('dhammapada.json', dhammapada);

    return new Response(
      JSON.stringify({ 
        message: 'Dhammapada quote updated successfully',
        quote: dhammapada[index]
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error updating dhammapada quote:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update dhammapada quote' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Delete Dhammapada quote
export const DELETE: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Only admin can delete Dhammapada quotes
    if (locals.user.role !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Forbidden: Admin access required' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Missing required field: id' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const dhammapada = await readDataFile('dhammapada.json');
    const index = dhammapada.findIndex((q: any) => q.id === id || q.id === parseInt(id));

    if (index === -1) {
      return new Response(
        JSON.stringify({ error: 'Dhammapada quote not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const deletedQuote = dhammapada[index];
    dhammapada.splice(index, 1);
    
    await writeDataFile('dhammapada.json', dhammapada);

    return new Response(
      JSON.stringify({ 
        message: 'Dhammapada quote deleted successfully',
        quote: deletedQuote
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error deleting dhammapada quote:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete dhammapada quote' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
