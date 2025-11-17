import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../../_assets/astro/server.CkAL1Q0G.js';
import { $ as $$Layout } from '../../_assets/Layout.sRuhOru5.js';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Library = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Library;
  const user = Astro2.locals.user;
  const csrfToken = Astro2.locals.csrfToken;
  if (!user) {
    return Astro2.redirect("/admin/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Library Management - Admin" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="min-h-screen bg-gray-50"> <header class="bg-white shadow-sm border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-4"> <div> <h1 class="text-2xl font-bold text-gray-900">Library Management</h1> </div> <div class="flex items-center space-x-4"> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm">
\u2190 Dashboard
</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
Logout
</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="mb-6 flex justify-between items-center"> <h2 class="text-xl font-semibold text-gray-900">All Library Resources</h2> <button id="addNewBtn" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition shadow-lg hover:shadow-xl">
+ Add Resource
</button> </div> <!-- Loading State --> <div id="loadingState" class="flex flex-col items-center justify-center py-16"> <div class="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-amber-600 mb-4"></div> <p class="text-gray-600 font-medium">Loading library resources...</p> </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300"> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mb-6"> <svg class="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">No Library Resources Yet</h3> <p class="text-gray-600 mb-6">Get started by adding your first resource.</p> <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg>
Add First Resource
</button> </div> <div id="libraryContainer" class="grid grid-cols-1 gap-6"></div> <!-- Modal --> <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"> <div class="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900">Add Resource</h3> <button id="closeModal" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="libraryForm" class="space-y-4"> <input type="hidden" id="itemId"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">URL *</label> <input type="url" id="url" required placeholder="https://example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Teacher/Author</label> <input type="text" id="teacher" placeholder="e.g., Ven. Ajahn Chah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Language</label> <input type="text" id="language" placeholder="e.g., Multilingual" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Source Type</label> <select id="sourceType" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> <option value="Website">Website</option> <option value="Video">Video</option> <option value="Audio">Audio</option> <option value="PDF">PDF</option> <option value="Book">Book</option> <option value="Article">Article</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Category</label> <input type="text" id="category" placeholder="e.g., Buddhist Canon" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">Topics (comma separated)</label> <input type="text" id="topics" placeholder="e.g., Meditation, Dhamma, Suttas" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="flex items-center space-x-4"> <label class="flex items-center"> <input type="checkbox" id="featured" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"> <span class="ml-2 text-sm text-gray-700">Featured</span> </label> <label class="flex items-center"> <input type="checkbox" id="hidden" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"> <span class="ml-2 text-sm text-gray-700">Hidden</span> </label> </div> </div> <div class="flex justify-end space-x-3 pt-4"> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
Cancel
</button> <button type="submit" class="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition">
Save Resource
</button> </div> </form> </div> </div> </div> </main> </div> <script>(function(){`, `
    let libraryData = [];
    let csrfTokenValue = csrfToken;

    window.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('modal');
      const libraryForm = document.getElementById('libraryForm');
      const libraryContainer = document.getElementById('libraryContainer');

      console.log('Library page loaded, elements:', { modal: !!modal, libraryForm: !!libraryForm });

      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
          await fetch('/api/auth/logout', { method: 'POST', headers: { 'X-CSRF-Token': csrfTokenValue } });
          window.location.href = '/admin/login';
        });
      }

      const addNewBtn = document.getElementById('addNewBtn');
      if (addNewBtn) {
        addNewBtn.addEventListener('click', () => {
          console.log('Add Resource clicked');
          document.getElementById('modalTitle').textContent = 'Add Resource';
          if (libraryForm) libraryForm.reset();
          const itemIdInput = document.getElementById('itemId');
          if (itemIdInput) itemIdInput.value = '';
          if (modal) {
            modal.style.display = 'flex';
            modal.classList.remove('hidden');
          }
        });
      }

      const closeModalBtn = document.getElementById('closeModal');
      const cancelBtn = document.getElementById('cancelBtn');
      
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
          if (modal) {
            modal.style.display = 'none';
            modal.classList.add('hidden');
          }
        });
      }
      
      if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
          if (modal) {
            modal.style.display = 'none';
            modal.classList.add('hidden');
          }
        });
      }

      async function loadLibrary() {
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const libraryContainer = document.getElementById('libraryContainer');
        
        try {
          if (loadingState) loadingState.style.display = 'flex';
          if (emptyState) emptyState.style.display = 'none';
          if (libraryContainer) libraryContainer.style.display = 'none';
          
          const response = await fetch('/api/admin/library', {
            headers: { 'Cache-Control': 'no-cache' }
          });
          
          if (!response.ok) {
            if (response.status === 401) {
              window.location.href = '/admin/login';
              return;
            }
            throw new Error(\`HTTP \${response.status}\`);
          }
          
          libraryData = await response.json();
          console.log('Library data loaded:', libraryData);
          
          if (loadingState) loadingState.style.display = 'none';
          
          if (!libraryData || libraryData.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
          } else {
            if (libraryContainer) libraryContainer.style.display = 'grid';
            renderLibrary();
          }
        } catch (error) {
          console.error('Failed to load library:', error);
          if (loadingState) loadingState.style.display = 'none';
          if (libraryContainer) {
            libraryContainer.style.display = 'block';
            libraryContainer.innerHTML = \`<div class="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center"><svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="text-xl font-semibold text-red-900 mb-2">Failed to Load Library</h3><p class="text-red-700 mb-6">\${error.message}</p><button onclick="location.reload()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">Reload Page</button></div>\`;
          }
        }
      }

    function renderLibrary() {
      libraryContainer.innerHTML = libraryData.map(item => \`
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-lg font-semibold text-gray-900">\${item.title}</h3>
                <div class="flex gap-2 ml-2">
                  \${item.featured ? '<span class="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Featured</span>' : ''}
                  \${item.hidden ? '<span class="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Hidden</span>' : ''}
                </div>
              </div>
              <p class="text-gray-600 text-sm mb-3">\${item.description || ''}</p>
              <div class="space-y-1 text-xs text-gray-500">
                \${item.teacher ? \`<p>\u{1F464} \${item.teacher}</p>\` : ''}
                \${item.language ? \`<p>\u{1F310} \${item.language}</p>\` : ''}
                \${item.sourceType ? \`<p>\u{1F4DA} \${item.sourceType}</p>\` : ''}
                \${item.category ? \`<p>\u{1F3F7}\uFE0F \${item.category}</p>\` : ''}
                \${item.topics && item.topics.length ? \`<p>\u{1F516} \${Array.isArray(item.topics) ? item.topics.join(', ') : item.topics}</p>\` : ''}
                \${item.url ? \`<p>\u{1F517} <a href="\${item.url}" target="_blank" class="text-amber-600 hover:underline">View Resource</a></p>\` : ''}
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button onclick="editItem('\${item.id}')" class="text-blue-600 hover:text-blue-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button onclick="deleteItem('\${item.id}')" class="text-red-600 hover:text-red-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      \`).join('');
    }

    window.editItem = (id) => {
      const item = libraryData.find(l => String(l.id) === String(id));
      if (item) {
        document.getElementById('modalTitle').textContent = 'Edit Resource';
        document.getElementById('itemId').value = item.id;
        document.getElementById('title').value = item.title || '';
        document.getElementById('url').value = item.url || '';
        document.getElementById('description').value = item.description || '';
        document.getElementById('teacher').value = item.teacher || '';
        document.getElementById('language').value = item.language || '';
        document.getElementById('sourceType').value = item.sourceType || 'Website';
        document.getElementById('category').value = item.category || '';
        document.getElementById('topics').value = Array.isArray(item.topics) ? item.topics.join(', ') : item.topics || '';
        document.getElementById('featured').checked = item.featured || false;
        document.getElementById('hidden').checked = item.hidden || false;
        modal.classList.remove('hidden');
      }
    };

    window.deleteItem = async (id) => {
      if (!confirm('Are you sure you want to delete this resource?')) return;
      
      try {
        const response = await fetch(\`/api/admin/library?id=\${id}\`, {
          method: 'DELETE',
          headers: { 'X-CSRF-Token': csrfTokenValue }
        });
        
        if (response.ok) {
          await loadLibrary();
        } else {
          alert('Failed to delete resource');
        }
      } catch (error) {
        alert('Error deleting resource');
      }
    };

      if (libraryForm) {
        libraryForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const id = document.getElementById('itemId').value;
          const topicsInput = document.getElementById('topics').value;
          const topicsArray = topicsInput ? topicsInput.split(',').map(t => t.trim()).filter(t => t) : [];
          
          const data = {
            id: id || undefined,
            title: document.getElementById('title').value,
            url: document.getElementById('url').value,
            description: document.getElementById('description').value,
            teacher: document.getElementById('teacher').value,
            language: document.getElementById('language').value,
            sourceType: document.getElementById('sourceType').value,
            category: document.getElementById('category').value,
            topics: topicsArray,
            featured: document.getElementById('featured').checked,
            hidden: document.getElementById('hidden').checked
          };

          try {
            const response = await fetch('/api/admin/library', {
              method: id ? 'PUT' : 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfTokenValue
              },
              body: JSON.stringify(data)
            });

            if (response.ok) {
              if (modal) {
                modal.style.display = 'none';
                modal.classList.add('hidden');
              }
              await loadLibrary();
            } else {
              alert('Failed to save resource');
            }
          } catch (error) {
            console.error('Save error:', error);
            alert('Error saving resource');
          }
        });
      }

      loadLibrary();
    });
  })();<\/script> `], [" ", `<div class="min-h-screen bg-gray-50"> <header class="bg-white shadow-sm border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-4"> <div> <h1 class="text-2xl font-bold text-gray-900">Library Management</h1> </div> <div class="flex items-center space-x-4"> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm">
\u2190 Dashboard
</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
Logout
</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="mb-6 flex justify-between items-center"> <h2 class="text-xl font-semibold text-gray-900">All Library Resources</h2> <button id="addNewBtn" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition shadow-lg hover:shadow-xl">
+ Add Resource
</button> </div> <!-- Loading State --> <div id="loadingState" class="flex flex-col items-center justify-center py-16"> <div class="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-amber-600 mb-4"></div> <p class="text-gray-600 font-medium">Loading library resources...</p> </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300"> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mb-6"> <svg class="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">No Library Resources Yet</h3> <p class="text-gray-600 mb-6">Get started by adding your first resource.</p> <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg>
Add First Resource
</button> </div> <div id="libraryContainer" class="grid grid-cols-1 gap-6"></div> <!-- Modal --> <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"> <div class="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900">Add Resource</h3> <button id="closeModal" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="libraryForm" class="space-y-4"> <input type="hidden" id="itemId"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">URL *</label> <input type="url" id="url" required placeholder="https://example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Teacher/Author</label> <input type="text" id="teacher" placeholder="e.g., Ven. Ajahn Chah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Language</label> <input type="text" id="language" placeholder="e.g., Multilingual" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Source Type</label> <select id="sourceType" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> <option value="Website">Website</option> <option value="Video">Video</option> <option value="Audio">Audio</option> <option value="PDF">PDF</option> <option value="Book">Book</option> <option value="Article">Article</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Category</label> <input type="text" id="category" placeholder="e.g., Buddhist Canon" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="md:col-span-2"> <label class="block text-sm font-medium text-gray-700 mb-2">Topics (comma separated)</label> <input type="text" id="topics" placeholder="e.g., Meditation, Dhamma, Suttas" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div class="flex items-center space-x-4"> <label class="flex items-center"> <input type="checkbox" id="featured" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"> <span class="ml-2 text-sm text-gray-700">Featured</span> </label> <label class="flex items-center"> <input type="checkbox" id="hidden" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"> <span class="ml-2 text-sm text-gray-700">Hidden</span> </label> </div> </div> <div class="flex justify-end space-x-3 pt-4"> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
Cancel
</button> <button type="submit" class="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition">
Save Resource
</button> </div> </form> </div> </div> </div> </main> </div> <script>(function(){`, `
    let libraryData = [];
    let csrfTokenValue = csrfToken;

    window.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('modal');
      const libraryForm = document.getElementById('libraryForm');
      const libraryContainer = document.getElementById('libraryContainer');

      console.log('Library page loaded, elements:', { modal: !!modal, libraryForm: !!libraryForm });

      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
          await fetch('/api/auth/logout', { method: 'POST', headers: { 'X-CSRF-Token': csrfTokenValue } });
          window.location.href = '/admin/login';
        });
      }

      const addNewBtn = document.getElementById('addNewBtn');
      if (addNewBtn) {
        addNewBtn.addEventListener('click', () => {
          console.log('Add Resource clicked');
          document.getElementById('modalTitle').textContent = 'Add Resource';
          if (libraryForm) libraryForm.reset();
          const itemIdInput = document.getElementById('itemId');
          if (itemIdInput) itemIdInput.value = '';
          if (modal) {
            modal.style.display = 'flex';
            modal.classList.remove('hidden');
          }
        });
      }

      const closeModalBtn = document.getElementById('closeModal');
      const cancelBtn = document.getElementById('cancelBtn');
      
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
          if (modal) {
            modal.style.display = 'none';
            modal.classList.add('hidden');
          }
        });
      }
      
      if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
          if (modal) {
            modal.style.display = 'none';
            modal.classList.add('hidden');
          }
        });
      }

      async function loadLibrary() {
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const libraryContainer = document.getElementById('libraryContainer');
        
        try {
          if (loadingState) loadingState.style.display = 'flex';
          if (emptyState) emptyState.style.display = 'none';
          if (libraryContainer) libraryContainer.style.display = 'none';
          
          const response = await fetch('/api/admin/library', {
            headers: { 'Cache-Control': 'no-cache' }
          });
          
          if (!response.ok) {
            if (response.status === 401) {
              window.location.href = '/admin/login';
              return;
            }
            throw new Error(\\\`HTTP \\\${response.status}\\\`);
          }
          
          libraryData = await response.json();
          console.log('Library data loaded:', libraryData);
          
          if (loadingState) loadingState.style.display = 'none';
          
          if (!libraryData || libraryData.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
          } else {
            if (libraryContainer) libraryContainer.style.display = 'grid';
            renderLibrary();
          }
        } catch (error) {
          console.error('Failed to load library:', error);
          if (loadingState) loadingState.style.display = 'none';
          if (libraryContainer) {
            libraryContainer.style.display = 'block';
            libraryContainer.innerHTML = \\\`<div class="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center"><svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="text-xl font-semibold text-red-900 mb-2">Failed to Load Library</h3><p class="text-red-700 mb-6">\\\${error.message}</p><button onclick="location.reload()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">Reload Page</button></div>\\\`;
          }
        }
      }

    function renderLibrary() {
      libraryContainer.innerHTML = libraryData.map(item => \\\`
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-lg font-semibold text-gray-900">\\\${item.title}</h3>
                <div class="flex gap-2 ml-2">
                  \\\${item.featured ? '<span class="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Featured</span>' : ''}
                  \\\${item.hidden ? '<span class="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Hidden</span>' : ''}
                </div>
              </div>
              <p class="text-gray-600 text-sm mb-3">\\\${item.description || ''}</p>
              <div class="space-y-1 text-xs text-gray-500">
                \\\${item.teacher ? \\\`<p>\u{1F464} \\\${item.teacher}</p>\\\` : ''}
                \\\${item.language ? \\\`<p>\u{1F310} \\\${item.language}</p>\\\` : ''}
                \\\${item.sourceType ? \\\`<p>\u{1F4DA} \\\${item.sourceType}</p>\\\` : ''}
                \\\${item.category ? \\\`<p>\u{1F3F7}\uFE0F \\\${item.category}</p>\\\` : ''}
                \\\${item.topics && item.topics.length ? \\\`<p>\u{1F516} \\\${Array.isArray(item.topics) ? item.topics.join(', ') : item.topics}</p>\\\` : ''}
                \\\${item.url ? \\\`<p>\u{1F517} <a href="\\\${item.url}" target="_blank" class="text-amber-600 hover:underline">View Resource</a></p>\\\` : ''}
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button onclick="editItem('\\\${item.id}')" class="text-blue-600 hover:text-blue-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button onclick="deleteItem('\\\${item.id}')" class="text-red-600 hover:text-red-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      \\\`).join('');
    }

    window.editItem = (id) => {
      const item = libraryData.find(l => String(l.id) === String(id));
      if (item) {
        document.getElementById('modalTitle').textContent = 'Edit Resource';
        document.getElementById('itemId').value = item.id;
        document.getElementById('title').value = item.title || '';
        document.getElementById('url').value = item.url || '';
        document.getElementById('description').value = item.description || '';
        document.getElementById('teacher').value = item.teacher || '';
        document.getElementById('language').value = item.language || '';
        document.getElementById('sourceType').value = item.sourceType || 'Website';
        document.getElementById('category').value = item.category || '';
        document.getElementById('topics').value = Array.isArray(item.topics) ? item.topics.join(', ') : item.topics || '';
        document.getElementById('featured').checked = item.featured || false;
        document.getElementById('hidden').checked = item.hidden || false;
        modal.classList.remove('hidden');
      }
    };

    window.deleteItem = async (id) => {
      if (!confirm('Are you sure you want to delete this resource?')) return;
      
      try {
        const response = await fetch(\\\`/api/admin/library?id=\\\${id}\\\`, {
          method: 'DELETE',
          headers: { 'X-CSRF-Token': csrfTokenValue }
        });
        
        if (response.ok) {
          await loadLibrary();
        } else {
          alert('Failed to delete resource');
        }
      } catch (error) {
        alert('Error deleting resource');
      }
    };

      if (libraryForm) {
        libraryForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const id = document.getElementById('itemId').value;
          const topicsInput = document.getElementById('topics').value;
          const topicsArray = topicsInput ? topicsInput.split(',').map(t => t.trim()).filter(t => t) : [];
          
          const data = {
            id: id || undefined,
            title: document.getElementById('title').value,
            url: document.getElementById('url').value,
            description: document.getElementById('description').value,
            teacher: document.getElementById('teacher').value,
            language: document.getElementById('language').value,
            sourceType: document.getElementById('sourceType').value,
            category: document.getElementById('category').value,
            topics: topicsArray,
            featured: document.getElementById('featured').checked,
            hidden: document.getElementById('hidden').checked
          };

          try {
            const response = await fetch('/api/admin/library', {
              method: id ? 'PUT' : 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfTokenValue
              },
              body: JSON.stringify(data)
            });

            if (response.ok) {
              if (modal) {
                modal.style.display = 'none';
                modal.classList.add('hidden');
              }
              await loadLibrary();
            } else {
              alert('Failed to save resource');
            }
          } catch (error) {
            console.error('Save error:', error);
            alert('Error saving resource');
          }
        });
      }

      loadLibrary();
    });
  })();<\/script> `])), maybeRenderHead(), defineScriptVars({ csrfToken })) })}`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/library.astro", void 0);

const $$file = "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/library.astro";
const $$url = "/admin/library";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Library,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
