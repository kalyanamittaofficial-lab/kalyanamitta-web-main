import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';
import { canUserPerformAction, canUserPublish, addPendingChange } from '../../../lib/permissions';

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

// GET - Fetch all news items
export const GET: APIRoute = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const news = await readDataFile('news.json');
    return new Response(
      JSON.stringify(news),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading news:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to read news' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// POST - Create new news item
export const POST: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check permission
    if (!canUserPerformAction(locals.user, 'news', 'create')) {
      return new Response(
        JSON.stringify({ error: 'No permission to create news' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { title, titleSinhala, excerpt, excerptSinhala, content, contentSinhala, source, author, date, category, tags, image, url, featured, language, hidden } = body;

    if (!title || !excerpt || !content || !date) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: title, excerpt, content, and date are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const news = await readDataFile('news.json');
    const newItem = {
      id: news.length > 0 ? Math.max(...news.map((n: any) => typeof n.id === 'number' ? n.id : parseInt(n.id) || 0)) + 1 : 1,
      title,
      titleSinhala: titleSinhala || '',
      excerpt,
      excerptSinhala: excerptSinhala || '',
      content,
      contentSinhala: contentSinhala || '',
      source: source || '',
      author: author || '',
      date,
      category: category || '',
      tags: Array.isArray(tags) ? tags : [],
      image: image || '/logo.png',
      url: url || '',
      featured: featured === true,
      language: language || 'English',
      hidden: hidden === true
    };

    // If user can publish directly, add to news; otherwise, add to pending changes
    if (canUserPublish(locals.user, 'news')) {
      news.push(newItem);
      await writeDataFile('news.json', news);

      return new Response(
        JSON.stringify({ success: true, item: newItem, published: true }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      // Add to pending changes for approval
      await addPendingChange({
        type: 'news',
        action: 'create',
        data: newItem,
        submittedBy: locals.user.username,
        reason: body.reason
      });

      return new Response(
        JSON.stringify({ success: true, pending: true, message: 'Submitted for approval' }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error creating news:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create news' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// PUT - Update news item
export const PUT: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { id, title, titleSinhala, excerpt, excerptSinhala, content, contentSinhala, source, author, date, category, tags, image, url, featured, language, hidden } = body;

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const news = await readDataFile('news.json');
    const index = news.findIndex((item: any) => item.id == id);

    if (index === -1) {
      return new Response(
        JSON.stringify({ error: 'News item not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    news[index] = {
      ...news[index],
      title: title || news[index].title,
      titleSinhala: titleSinhala !== undefined ? titleSinhala : news[index].titleSinhala,
      excerpt: excerpt || news[index].excerpt,
      excerptSinhala: excerptSinhala !== undefined ? excerptSinhala : news[index].excerptSinhala,
      content: content || news[index].content,
      contentSinhala: contentSinhala !== undefined ? contentSinhala : news[index].contentSinhala,
      source: source !== undefined ? source : news[index].source,
      author: author !== undefined ? author : news[index].author,
      date: date || news[index].date,
      category: category !== undefined ? category : news[index].category,
      tags: tags !== undefined ? tags : news[index].tags,
      image: image !== undefined ? image : news[index].image,
      url: url !== undefined ? url : news[index].url,
      featured: featured !== undefined ? featured : news[index].featured,
      language: language !== undefined ? language : news[index].language,
      hidden: hidden !== undefined ? hidden : news[index].hidden
    };

    await writeDataFile('news.json', news);

    return new Response(
      JSON.stringify({ success: true, item: news[index] }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error updating news:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update news' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE - Delete news item
export const DELETE: APIRoute = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
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

    const news = await readDataFile('news.json');
    const filtered = news.filter((item: any) => item.id !== id);

    if (filtered.length === news.length) {
      return new Response(
        JSON.stringify({ error: 'News item not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await writeDataFile('news.json', filtered);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error deleting news:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete news' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
