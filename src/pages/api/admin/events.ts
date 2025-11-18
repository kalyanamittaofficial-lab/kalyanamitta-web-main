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

// GET - Fetch all events
export const GET: APIRoute = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const events = await readDataFile('events.json');
    return new Response(
      JSON.stringify(events),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading events:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read events' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// POST - Create new event
export const POST: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'events', 'create')) {
      return new Response(
        JSON.stringify({ error: 'No permission to create events' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { title, date, time, location, description, image } = body;

    if (!title || !date) {
      return new Response(
        JSON.stringify({ error: 'Title and date are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const events = await readDataFile('events.json');
    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      time: time || '',
      location: location || '',
      description: description || '',
      image: image || '/placeholder.jpg'
    };

    // Check if user is main admin (can directly publish)
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    // Main admin can publish directly, others need approval
    if (isMainAdmin) {
      events.push(newEvent);
      await writeDataFile('events.json', events);

      return new Response(
        JSON.stringify({ success: true, item: newEvent, published: true }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Add to pending changes for approval
      await addPendingChange({
        type: 'events',
        action: 'create',
        data: newEvent,
        submittedBy: locals.user.username,
        reason: body.approvalNote || body.reason
      });

      return new Response(
        JSON.stringify({ success: true, pending: true, message: 'Submitted for approval' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error creating event:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create event' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// PUT - Update event
export const PUT: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'events', 'edit')) {
      return new Response(
        JSON.stringify({ error: 'No permission to edit events' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { id, title, date, time, location, description, image } = body;

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const events = await readDataFile('events.json');
    const index = events.findIndex((item: any) => item.id === id);

    if (index === -1) {
      return new Response(
        JSON.stringify({ error: 'Event not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updatedEvent = {
      ...events[index],
      title: title || events[index].title,
      date: date || events[index].date,
      time: time !== undefined ? time : events[index].time,
      location: location !== undefined ? location : events[index].location,
      description: description !== undefined ? description : events[index].description,
      image: image || events[index].image
    };

    // Check if user is main admin
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    if (isMainAdmin) {
      // Direct update
      events[index] = updatedEvent;
      await writeDataFile('events.json', events);

      return new Response(
        JSON.stringify({ success: true, item: updatedEvent }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Submit for approval
      await addPendingChange({
        type: 'events',
        action: 'update',
        data: updatedEvent,
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
    console.error('Error updating event:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update event' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Delete event
export const DELETE: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'events', 'delete')) {
      return new Response(
        JSON.stringify({ error: 'No permission to delete events' }),
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

    const events = await readDataFile('events.json');
    const itemToDelete = events.find((item: any) => item.id === id);

    if (!itemToDelete) {
      return new Response(
        JSON.stringify({ error: 'Event not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if user is main admin
    const isMainAdmin = locals.user.role === 'admin' && locals.user.permissions.manageUsers === true;
    
    if (isMainAdmin) {
      // Direct delete
      const filtered = events.filter((item: any) => item.id !== id);
      await writeDataFile('events.json', filtered);

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Submit for approval
      await addPendingChange({
        type: 'events',
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
    console.error('Error deleting event:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete event' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
