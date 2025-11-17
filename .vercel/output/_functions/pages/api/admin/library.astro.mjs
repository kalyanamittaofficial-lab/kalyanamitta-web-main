import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const DATA_DIR = path.join(process.cwd(), "src", "data");
async function readDataFile(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const content = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(content);
  return data.resources || data;
}
async function writeLibraryDataFile(data) {
  const filePath = path.join(DATA_DIR, "library.json");
  await fs.writeFile(filePath, JSON.stringify({ resources: data }, null, 2), "utf-8");
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
    const library = await readDataFile("library.json");
    return new Response(
      JSON.stringify(library),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error reading library:", error);
    return new Response(
      JSON.stringify({ error: "Failed to read library" }),
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
    const { title, author, category, description, url, image } = body;
    if (!title || !category) {
      return new Response(
        JSON.stringify({ error: "Title and category are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const library = await readDataFile("library.json");
    const newItem = {
      id: Date.now().toString(),
      title,
      author: author || "",
      category,
      description: description || "",
      url: url || "",
      image: image || "/placeholder.jpg"
    };
    library.push(newItem);
    await writeLibraryDataFile(library);
    return new Response(
      JSON.stringify({ success: true, item: newItem }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating library item:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create library item" }),
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
    const { id, title, author, category, description, url, image } = body;
    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const library = await readDataFile("library.json");
    const index = library.findIndex((item) => item.id === id);
    if (index === -1) {
      return new Response(
        JSON.stringify({ error: "Library item not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    library[index] = {
      ...library[index],
      title: title || library[index].title,
      author: author !== void 0 ? author : library[index].author,
      category: category || library[index].category,
      description: description !== void 0 ? description : library[index].description,
      url: url !== void 0 ? url : library[index].url,
      image: image || library[index].image
    };
    await writeLibraryDataFile(library);
    return new Response(
      JSON.stringify({ success: true, item: library[index] }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating library item:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update library item" }),
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
    const library = await readDataFile("library.json");
    const filtered = library.filter((item) => item.id !== id);
    if (filtered.length === library.length) {
      return new Response(
        JSON.stringify({ error: "Library item not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    await writeDataFile("library.json", filtered);
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting library item:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete library item" }),
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
