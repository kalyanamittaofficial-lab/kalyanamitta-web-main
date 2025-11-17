import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const DATA_DIR = path.join(process.cwd(), "src", "data");
async function readDataFile(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
}
async function writeDataFile(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}
const GET = async ({ locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const news = await readDataFile("news.json");
    return new Response(
      JSON.stringify(news),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error reading news:", error);
    return new Response(
      JSON.stringify({ error: "Failed to read news" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const POST = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const { title, titleSinhala, excerpt, excerptSinhala, content, contentSinhala, source, author, date, category, tags, image, url, featured, language, hidden } = body;
    if (!title || !excerpt || !content || !date) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: title, excerpt, content, and date are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const news = await readDataFile("news.json");
    const newItem = {
      id: news.length > 0 ? Math.max(...news.map((n) => typeof n.id === "number" ? n.id : parseInt(n.id) || 0)) + 1 : 1,
      title,
      titleSinhala: titleSinhala || "",
      excerpt,
      excerptSinhala: excerptSinhala || "",
      content,
      contentSinhala: contentSinhala || "",
      source: source || "",
      author: author || "",
      date,
      category: category || "",
      tags: Array.isArray(tags) ? tags : [],
      image: image || "/logo.png",
      url: url || "",
      featured: featured === true,
      language: language || "English",
      hidden: hidden === true
    };
    news.push(newItem);
    await writeDataFile("news.json", news);
    return new Response(
      JSON.stringify({ success: true, item: newItem }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating news:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create news" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const PUT = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const { id, title, titleSinhala, excerpt, excerptSinhala, content, contentSinhala, source, author, date, category, tags, image, url, featured, language, hidden } = body;
    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const news = await readDataFile("news.json");
    const index = news.findIndex((item) => item.id == id);
    if (index === -1) {
      return new Response(
        JSON.stringify({ error: "News item not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    news[index] = {
      ...news[index],
      title: title || news[index].title,
      titleSinhala: titleSinhala !== void 0 ? titleSinhala : news[index].titleSinhala,
      excerpt: excerpt || news[index].excerpt,
      excerptSinhala: excerptSinhala !== void 0 ? excerptSinhala : news[index].excerptSinhala,
      content: content || news[index].content,
      contentSinhala: contentSinhala !== void 0 ? contentSinhala : news[index].contentSinhala,
      source: source !== void 0 ? source : news[index].source,
      author: author !== void 0 ? author : news[index].author,
      date: date || news[index].date,
      category: category !== void 0 ? category : news[index].category,
      tags: tags !== void 0 ? tags : news[index].tags,
      image: image !== void 0 ? image : news[index].image,
      url: url !== void 0 ? url : news[index].url,
      featured: featured !== void 0 ? featured : news[index].featured,
      language: language !== void 0 ? language : news[index].language,
      hidden: hidden !== void 0 ? hidden : news[index].hidden
    };
    await writeDataFile("news.json", news);
    return new Response(
      JSON.stringify({ success: true, item: news[index] }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating news:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update news" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const DELETE = async ({ request, locals }) => {
  try {
    if (!locals.user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const news = await readDataFile("news.json");
    const filtered = news.filter((item) => item.id !== id);
    if (filtered.length === news.length) {
      return new Response(
        JSON.stringify({ error: "News item not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    await writeDataFile("news.json", filtered);
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting news:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete news" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
