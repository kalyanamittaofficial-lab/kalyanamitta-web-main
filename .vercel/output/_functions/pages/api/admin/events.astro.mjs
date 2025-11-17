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
    const events = await readDataFile("events.json");
    return new Response(
      JSON.stringify(events),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error reading events:", error);
    return new Response(
      JSON.stringify({ error: "Failed to read events" }),
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
    const { title, date, time, location, description, image } = body;
    if (!title || !date) {
      return new Response(
        JSON.stringify({ error: "Title and date are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const events = await readDataFile("events.json");
    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      time: time || "",
      location: location || "",
      description: description || "",
      image: image || "/placeholder.jpg"
    };
    events.push(newEvent);
    await writeDataFile("events.json", events);
    return new Response(
      JSON.stringify({ success: true, item: newEvent }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create event" }),
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
    const { id, title, date, time, location, description, image } = body;
    if (!id) {
      return new Response(
        JSON.stringify({ error: "ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const events = await readDataFile("events.json");
    const index = events.findIndex((item) => item.id === id);
    if (index === -1) {
      return new Response(
        JSON.stringify({ error: "Event not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    events[index] = {
      ...events[index],
      title: title || events[index].title,
      date: date || events[index].date,
      time: time !== void 0 ? time : events[index].time,
      location: location !== void 0 ? location : events[index].location,
      description: description !== void 0 ? description : events[index].description,
      image: image || events[index].image
    };
    await writeDataFile("events.json", events);
    return new Response(
      JSON.stringify({ success: true, item: events[index] }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating event:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update event" }),
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
    const events = await readDataFile("events.json");
    const filtered = events.filter((item) => item.id !== id);
    if (filtered.length === events.length) {
      return new Response(
        JSON.stringify({ error: "Event not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    await writeDataFile("events.json", filtered);
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete event" }),
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
