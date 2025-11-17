import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../../_assets/astro/server.CkAL1Q0G.js';
import { $ as $$Layout } from '../../_assets/Layout.D7moAORm.js';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const user = Astro2.locals.user;
  const csrfToken = Astro2.locals.csrfToken;
  if (!user) {
    return Astro2.redirect("/admin/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts Management - Admin" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="min-h-screen bg-gray-50"> <header class="bg-white shadow-sm border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-4"> <div> <h1 class="text-2xl font-bold text-gray-900">Posts Management</h1> </div> <div class="flex items-center space-x-4"> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm">\n\u2190 Dashboard\n</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">\nLogout\n</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="mb-6 flex justify-between items-center"> <h2 class="text-xl font-semibold text-gray-900">All Posts</h2> <button id="addNewBtn" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition">\n+ Add Post\n</button> </div> <div id="postsContainer" class="grid grid-cols-1 gap-6"></div> <!-- Modal --> <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"> <div class="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900">Add Post</h3> <button id="closeModal" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="postForm" class="space-y-4"> <input type="hidden" id="itemId"> <div class="grid grid-cols-1 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Post URL *</label> <input type="url" id="url" required placeholder="https://example.com/post" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> <p class="text-xs text-gray-500 mt-1">Full URL to the post content</p> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Publication Date *</label> <input type="date" id="pubDate" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Languages</label> <input type="text" id="languages" placeholder="\u0DC3\u0DD2\u0D82\u0DC4\u0DBD, English (comma separated)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> <p class="text-xs text-gray-500 mt-1">Enter languages separated by commas</p> </div> </div> <div class="flex justify-end space-x-3 pt-4"> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">\nCancel\n</button> <button type="submit" class="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition">\nSave Post\n</button> </div> </form> </div> </div> </div> </main> </div> <script>(function(){', `
    let postsData = [];
    let csrfTokenValue = csrfToken;

    window.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('modal');
      const postForm = document.getElementById('postForm');
      const postsContainer = document.getElementById('postsContainer');

      console.log('Posts page loaded, elements:', { modal: !!modal, postForm: !!postForm });

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
          console.log('Add Post clicked');
          document.getElementById('modalTitle').textContent = 'Add Post';
          if (postForm) postForm.reset();
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

      async function loadPosts() {
      try {
        const response = await fetch('/api/admin/posts');
        postsData = await response.json();
        renderPosts();
      } catch (error) {
        console.error('Failed to load posts:', error);
      }
    }

    function formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    function renderPosts() {
      postsContainer.innerHTML = postsData.map(item => \`
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">\${item.title}</h3>
              <p class="text-gray-600 text-sm mb-3">\${item.description || ''}</p>
              <div class="space-y-1 text-xs text-gray-500">
                \${item.pubDate ? \`<p>\u{1F4C5} \${formatDate(item.pubDate)}</p>\` : ''}
                \${item.languages && item.languages.length ? \`<p>\u{1F310} \${Array.isArray(item.languages) ? item.languages.join(', ') : item.languages}</p>\` : ''}
                \${item.url ? \`<p>\u{1F517} <a href="\${item.url}" target="_blank" class="text-amber-600 hover:underline">View Post</a></p>\` : ''}
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button onclick="editItem('\${item.title}')" class="text-blue-600 hover:text-blue-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button onclick="deleteItem('\${item.title}')" class="text-red-600 hover:text-red-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      \`).join('');
    }

    window.editItem = (title) => {
      const item = postsData.find(p => p.title === title);
      if (item) {
        document.getElementById('modalTitle').textContent = 'Edit Post';
        document.getElementById('itemId').value = title;
        document.getElementById('title').value = item.title || '';
        document.getElementById('description').value = item.description || '';
        document.getElementById('url').value = item.url || '';
        document.getElementById('pubDate').value = item.pubDate || '';
        document.getElementById('languages').value = Array.isArray(item.languages) ? item.languages.join(', ') : item.languages || '';
        modal.classList.remove('hidden');
      }
    };

    window.deleteItem = async (title) => {
      if (!confirm('Are you sure you want to delete this post?')) return;
      
      try {
        const response = await fetch(\`/api/admin/posts?id=\${encodeURIComponent(title)}\`, {
          method: 'DELETE',
          headers: { 'X-CSRF-Token': csrfTokenValue }
        });
        
        if (response.ok) {
          await loadPosts();
        } else {
          alert('Failed to delete post');
        }
      } catch (error) {
        alert('Error deleting post');
      }
    };

      if (postForm) {
        postForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const id = document.getElementById('itemId').value;
          const languagesInput = document.getElementById('languages').value;
          const languagesArray = languagesInput ? languagesInput.split(',').map(l => l.trim()).filter(l => l) : [];
          
          const data = {
            id: id || undefined,
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            url: document.getElementById('url').value,
            pubDate: document.getElementById('pubDate').value,
            languages: languagesArray
          };

          try {
            const response = await fetch('/api/admin/posts', {
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
              await loadPosts();
            } else {
              alert('Failed to save post');
            }
          } catch (error) {
            console.error('Save error:', error);
            alert('Error saving post');
          }
        });
      }

      loadPosts();
    });
  })();<\/script> `], [" ", '<div class="min-h-screen bg-gray-50"> <header class="bg-white shadow-sm border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-4"> <div> <h1 class="text-2xl font-bold text-gray-900">Posts Management</h1> </div> <div class="flex items-center space-x-4"> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm">\n\u2190 Dashboard\n</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">\nLogout\n</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="mb-6 flex justify-between items-center"> <h2 class="text-xl font-semibold text-gray-900">All Posts</h2> <button id="addNewBtn" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition">\n+ Add Post\n</button> </div> <div id="postsContainer" class="grid grid-cols-1 gap-6"></div> <!-- Modal --> <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"> <div class="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900">Add Post</h3> <button id="closeModal" class="text-gray-400 hover:text-gray-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <form id="postForm" class="space-y-4"> <input type="hidden" id="itemId"> <div class="grid grid-cols-1 gap-4"> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"></textarea> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Post URL *</label> <input type="url" id="url" required placeholder="https://example.com/post" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> <p class="text-xs text-gray-500 mt-1">Full URL to the post content</p> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Publication Date *</label> <input type="date" id="pubDate" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> </div> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Languages</label> <input type="text" id="languages" placeholder="\u0DC3\u0DD2\u0D82\u0DC4\u0DBD, English (comma separated)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"> <p class="text-xs text-gray-500 mt-1">Enter languages separated by commas</p> </div> </div> <div class="flex justify-end space-x-3 pt-4"> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">\nCancel\n</button> <button type="submit" class="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition">\nSave Post\n</button> </div> </form> </div> </div> </div> </main> </div> <script>(function(){', `
    let postsData = [];
    let csrfTokenValue = csrfToken;

    window.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('modal');
      const postForm = document.getElementById('postForm');
      const postsContainer = document.getElementById('postsContainer');

      console.log('Posts page loaded, elements:', { modal: !!modal, postForm: !!postForm });

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
          console.log('Add Post clicked');
          document.getElementById('modalTitle').textContent = 'Add Post';
          if (postForm) postForm.reset();
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

      async function loadPosts() {
      try {
        const response = await fetch('/api/admin/posts');
        postsData = await response.json();
        renderPosts();
      } catch (error) {
        console.error('Failed to load posts:', error);
      }
    }

    function formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    function renderPosts() {
      postsContainer.innerHTML = postsData.map(item => \\\`
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">\\\${item.title}</h3>
              <p class="text-gray-600 text-sm mb-3">\\\${item.description || ''}</p>
              <div class="space-y-1 text-xs text-gray-500">
                \\\${item.pubDate ? \\\`<p>\u{1F4C5} \\\${formatDate(item.pubDate)}</p>\\\` : ''}
                \\\${item.languages && item.languages.length ? \\\`<p>\u{1F310} \\\${Array.isArray(item.languages) ? item.languages.join(', ') : item.languages}</p>\\\` : ''}
                \\\${item.url ? \\\`<p>\u{1F517} <a href="\\\${item.url}" target="_blank" class="text-amber-600 hover:underline">View Post</a></p>\\\` : ''}
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button onclick="editItem('\\\${item.title}')" class="text-blue-600 hover:text-blue-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button onclick="deleteItem('\\\${item.title}')" class="text-red-600 hover:text-red-700 p-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      \\\`).join('');
    }

    window.editItem = (title) => {
      const item = postsData.find(p => p.title === title);
      if (item) {
        document.getElementById('modalTitle').textContent = 'Edit Post';
        document.getElementById('itemId').value = title;
        document.getElementById('title').value = item.title || '';
        document.getElementById('description').value = item.description || '';
        document.getElementById('url').value = item.url || '';
        document.getElementById('pubDate').value = item.pubDate || '';
        document.getElementById('languages').value = Array.isArray(item.languages) ? item.languages.join(', ') : item.languages || '';
        modal.classList.remove('hidden');
      }
    };

    window.deleteItem = async (title) => {
      if (!confirm('Are you sure you want to delete this post?')) return;
      
      try {
        const response = await fetch(\\\`/api/admin/posts?id=\\\${encodeURIComponent(title)}\\\`, {
          method: 'DELETE',
          headers: { 'X-CSRF-Token': csrfTokenValue }
        });
        
        if (response.ok) {
          await loadPosts();
        } else {
          alert('Failed to delete post');
        }
      } catch (error) {
        alert('Error deleting post');
      }
    };

      if (postForm) {
        postForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const id = document.getElementById('itemId').value;
          const languagesInput = document.getElementById('languages').value;
          const languagesArray = languagesInput ? languagesInput.split(',').map(l => l.trim()).filter(l => l) : [];
          
          const data = {
            id: id || undefined,
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            url: document.getElementById('url').value,
            pubDate: document.getElementById('pubDate').value,
            languages: languagesArray
          };

          try {
            const response = await fetch('/api/admin/posts', {
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
              await loadPosts();
            } else {
              alert('Failed to save post');
            }
          } catch (error) {
            console.error('Save error:', error);
            alert('Error saving post');
          }
        });
      }

      loadPosts();
    });
  })();<\/script> `])), maybeRenderHead(), defineScriptVars({ csrfToken })) })}`;
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/posts.astro", void 0);

const $$file = "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/admin/posts.astro";
const $$url = "/admin/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
