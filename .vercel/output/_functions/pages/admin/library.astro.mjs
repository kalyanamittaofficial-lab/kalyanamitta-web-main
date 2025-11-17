import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, n as defineScriptVars, m as maybeRenderHead } from '../../_assets/astro/server.CrvHwmaT.js';
import { $ as $$AdminLayout } from '../../_assets/AdminLayout.2ZbTGf_w.js';
/* empty css                                      */
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
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Library Management - Admin", "data-astro-cid-ldvb5azg": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="min-h-screen bg-gray-50" data-astro-cid-ldvb5azg> <header class="bg-white shadow-sm border-b border-gray-200" data-astro-cid-ldvb5azg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ldvb5azg> <div class="flex justify-between items-center py-4" data-astro-cid-ldvb5azg> <div data-astro-cid-ldvb5azg> <h1 class="text-2xl font-bold text-gray-900" data-astro-cid-ldvb5azg>Library Management</h1> </div> <div class="flex items-center space-x-4" data-astro-cid-ldvb5azg> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm" data-astro-cid-ldvb5azg>
\u2190 Dashboard
</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition" data-astro-cid-ldvb5azg>
Logout
</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-ldvb5azg> <div class="mb-6 flex justify-between items-center" data-astro-cid-ldvb5azg> <h2 class="text-xl font-semibold text-gray-900" data-astro-cid-ldvb5azg>All Library Resources</h2> <button id="addNewBtn" class="bg-[#8E050F] hover:bg-[#991b1b] text-white px-6 py-2 rounded-lg font-medium transition shadow-lg hover:shadow-xl" data-astro-cid-ldvb5azg>
+ Add Resource
</button> </div> <!-- Loading State --> <div id="loadingState" class="flex flex-col items-center justify-center py-16" data-astro-cid-ldvb5azg> <div class="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-amber-600 mb-4" data-astro-cid-ldvb5azg></div> <p class="text-gray-600 font-medium" data-astro-cid-ldvb5azg>Loading library resources...</p> </div> <!-- Pagination Controls --> <div id="paginationTop" class="hidden mb-4 flex items-center justify-between flex-wrap gap-3" data-astro-cid-ldvb5azg> <div class="text-sm text-gray-600" data-astro-cid-ldvb5azg>
Showing <span id="showingStart" data-astro-cid-ldvb5azg>0</span>-<span id="showingEnd" data-astro-cid-ldvb5azg>0</span> of <span id="totalItems" data-astro-cid-ldvb5azg>0</span> items
</div> <div class="flex gap-2" data-astro-cid-ldvb5azg> <button id="prevPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-ldvb5azg>
Previous
</button> <div id="pageNumbers" class="flex gap-1" data-astro-cid-ldvb5azg></div> <button id="nextPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-ldvb5azg>
Next
</button> </div> </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300" data-astro-cid-ldvb5azg> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mb-6" data-astro-cid-ldvb5azg> <svg class="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldvb5azg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-astro-cid-ldvb5azg></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-ldvb5azg>No Library Resources Yet</h3> <p class="text-gray-600 mb-6" data-astro-cid-ldvb5azg>Get started by adding your first resource.</p> <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl" data-astro-cid-ldvb5azg> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldvb5azg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-ldvb5azg></path> </svg>
Add First Resource
</button> </div> <div id="libraryContainer" class="grid grid-cols-1 gap-6" data-astro-cid-ldvb5azg></div> <!-- Modal --> <!-- Modal --> <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto backdrop-blur-sm" data-astro-cid-ldvb5azg> <div class="min-h-screen flex items-center justify-center p-2 sm:p-4" data-astro-cid-ldvb5azg> <div class="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-5xl my-2 sm:my-8 transform transition-all duration-300" id="modalContent" data-astro-cid-ldvb5azg> <div class="flex flex-col" style="max-height: 95vh;" data-astro-cid-ldvb5azg> <div class="flex-shrink-0 p-4 sm:p-6 border-b border-gray-200" data-astro-cid-ldvb5azg> <div class="flex justify-between items-center" data-astro-cid-ldvb5azg> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900" data-astro-cid-ldvb5azg>Add Resource</h3> <button type="button" id="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors" data-astro-cid-ldvb5azg> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldvb5azg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ldvb5azg></path> </svg> </button> </div> </div> <div class="flex-1 overflow-y-auto p-4 sm:p-6" data-astro-cid-ldvb5azg> <form id="libraryForm" class="space-y-3 sm:space-y-4" data-astro-cid-ldvb5azg> <input type="hidden" id="itemId" data-astro-cid-ldvb5azg> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-ldvb5azg> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>URL *</label> <input type="url" id="url" required placeholder="https://example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg></textarea> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Teacher/Author</label> <input type="text" id="teacher" placeholder="e.g., Ven. Ajahn Chah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Language</label> <input type="text" id="language" placeholder="e.g., Multilingual" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Source Type</label> <select id="sourceType" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> <option value="Website" data-astro-cid-ldvb5azg>Website</option> <option value="Video" data-astro-cid-ldvb5azg>Video</option> <option value="Audio" data-astro-cid-ldvb5azg>Audio</option> <option value="PDF" data-astro-cid-ldvb5azg>PDF</option> <option value="Book" data-astro-cid-ldvb5azg>Book</option> <option value="Article" data-astro-cid-ldvb5azg>Article</option> </select> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Category</label> <input type="text" id="category" placeholder="e.g., Buddhist Canon" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Topics (comma separated)</label> <input type="text" id="topics" placeholder="e.g., Meditation, Dhamma, Suttas" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="flex items-center space-x-4" data-astro-cid-ldvb5azg> <label class="flex items-center" data-astro-cid-ldvb5azg> <input type="checkbox" id="featured" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" data-astro-cid-ldvb5azg> <span class="ml-2 text-sm text-gray-700" data-astro-cid-ldvb5azg>Featured</span> </label> <label class="flex items-center" data-astro-cid-ldvb5azg> <input type="checkbox" id="hidden" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" data-astro-cid-ldvb5azg> <span class="ml-2 text-sm text-gray-700" data-astro-cid-ldvb5azg>Hidden</span> </label> </div> </div> <div class="flex justify-end space-x-3 pt-6" data-astro-cid-ldvb5azg> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition" data-astro-cid-ldvb5azg>
Cancel
</button> <button type="submit" class="px-6 py-2 bg-[#8E050F] hover:bg-[#991b1b] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition" data-astro-cid-ldvb5azg>
Save Resource
</button> </div> </form> </div> </div> </div> </div> </div>  <script>(function(){`, `
    let libraryData = [];
    let csrfTokenValue = csrfToken;
    let currentPage = 1;
    const itemsPerPage = 6;

    // Execute immediately or when DOM is ready
    (function() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
      
      function init() {
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
            modal.classList.remove('hidden');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
              const modalContent = document.getElementById('modalContent');
              if (modalContent) {
                modalContent.style.transform = 'scale(1)';
                modalContent.style.opacity = '1';
              }
            }, 10);
          }
        });
      }

      const closeModalBtn = document.getElementById('closeModal');
      const cancelBtn = document.getElementById('cancelBtn');
      
      function closeModal() {
        if (modal) {
          const modalContent = document.getElementById('modalContent');
          if (modalContent) {
            modalContent.style.transform = 'scale(0.95)';
            modalContent.style.opacity = '0';
          }
          document.body.style.overflow = '';
          setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.add('hidden');
            if (libraryForm) libraryForm.reset();
          }, 200);
        }
      }
      
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
      }
      
      if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
      }
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });

      async function loadLibrary(retryCount = 0) {
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const libraryContainer = document.getElementById('libraryContainer');
        
        try {
          console.log('Loading library...');
          if (loadingState) loadingState.style.display = 'flex';
          if (emptyState) emptyState.style.display = 'none';
          if (libraryContainer) libraryContainer.style.display = 'none';
          
          const response = await fetch('/api/admin/library', {
            method: 'GET',
            headers: { 
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            },
            cache: 'no-store'
          });
          
          console.log('Library response:', response.status);
          
          // Handle rate limiting with retry
          if (response.status === 429) {
            if (retryCount < 2) {
              console.warn(\`Rate limited (429), retrying in \${(retryCount + 1) * 2} seconds...\`);
              await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 2000));
              return loadLibrary(retryCount + 1);
            }
            throw new Error('Too Many Requests - Please wait a moment and refresh the page');
          }
          
          if (!response.ok) {
            if (response.status === 401) {
              window.location.href = '/admin/login';
              return;
            }
            throw new Error(\`HTTP \${response.status}\`);
          }
          
          const rawData = await response.json();
          console.log('Raw library data:', rawData);
          
          // Handle both array and {resources: []} format
          libraryData = Array.isArray(rawData) ? rawData : (rawData.resources || []);
          console.log('Processed library count:', libraryData.length);
          
          if (loadingState) loadingState.style.display = 'none';
          
          if (!libraryData || libraryData.length === 0) {
            console.log('No data, showing empty');
            if (emptyState) emptyState.style.display = 'block';
          } else {
            console.log('Rendering', libraryData.length, 'items');
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
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = libraryData.slice(startIndex, endIndex);
      const totalPages = Math.ceil(libraryData.length / itemsPerPage);
      
      document.getElementById('showingStart').textContent = startIndex + 1;
      document.getElementById('showingEnd').textContent = Math.min(endIndex, libraryData.length);
      document.getElementById('totalItems').textContent = libraryData.length;
      document.getElementById('paginationTop').classList.remove('hidden');
      
      const prevBtn = document.getElementById('prevPage');
      const nextBtn = document.getElementById('nextPage');
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
      
      const pageNumbersContainer = document.getElementById('pageNumbers');
      pageNumbersContainer.innerHTML = '';
      
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + 5);
      if (endPage - startPage < 5) {
        startPage = Math.max(1, endPage - 5);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = \`px-3 py-1 text-sm border rounded-lg \${i === currentPage ? 'bg-[#8E050F] text-white border-[#8E050F]' : 'border-gray-300 hover:bg-gray-50'}\`;
        pageBtn.onclick = () => {
          currentPage = i;
          renderLibrary();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pageNumbersContainer.appendChild(pageBtn);
      }
      
      libraryContainer.innerHTML = paginatedData.map(item => \`
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
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          const modalContent = document.getElementById('modalContent');
          if (modalContent) {
            modalContent.style.transform = 'scale(1)';
            modalContent.style.opacity = '1';
          }
        }, 10);
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

      document.getElementById('prevPage')?.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderLibrary();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      document.getElementById('nextPage')?.addEventListener('click', () => {
        const totalPages = Math.ceil(libraryData.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderLibrary();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      // Load library immediately
      console.log('Library page initialized, loading data...');
      loadLibrary();
      }
    })();
  })();<\/script> </main></div>`], [" ", `<div class="min-h-screen bg-gray-50" data-astro-cid-ldvb5azg> <header class="bg-white shadow-sm border-b border-gray-200" data-astro-cid-ldvb5azg> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ldvb5azg> <div class="flex justify-between items-center py-4" data-astro-cid-ldvb5azg> <div data-astro-cid-ldvb5azg> <h1 class="text-2xl font-bold text-gray-900" data-astro-cid-ldvb5azg>Library Management</h1> </div> <div class="flex items-center space-x-4" data-astro-cid-ldvb5azg> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm" data-astro-cid-ldvb5azg>
\u2190 Dashboard
</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition" data-astro-cid-ldvb5azg>
Logout
</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-ldvb5azg> <div class="mb-6 flex justify-between items-center" data-astro-cid-ldvb5azg> <h2 class="text-xl font-semibold text-gray-900" data-astro-cid-ldvb5azg>All Library Resources</h2> <button id="addNewBtn" class="bg-[#8E050F] hover:bg-[#991b1b] text-white px-6 py-2 rounded-lg font-medium transition shadow-lg hover:shadow-xl" data-astro-cid-ldvb5azg>
+ Add Resource
</button> </div> <!-- Loading State --> <div id="loadingState" class="flex flex-col items-center justify-center py-16" data-astro-cid-ldvb5azg> <div class="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-amber-600 mb-4" data-astro-cid-ldvb5azg></div> <p class="text-gray-600 font-medium" data-astro-cid-ldvb5azg>Loading library resources...</p> </div> <!-- Pagination Controls --> <div id="paginationTop" class="hidden mb-4 flex items-center justify-between flex-wrap gap-3" data-astro-cid-ldvb5azg> <div class="text-sm text-gray-600" data-astro-cid-ldvb5azg>
Showing <span id="showingStart" data-astro-cid-ldvb5azg>0</span>-<span id="showingEnd" data-astro-cid-ldvb5azg>0</span> of <span id="totalItems" data-astro-cid-ldvb5azg>0</span> items
</div> <div class="flex gap-2" data-astro-cid-ldvb5azg> <button id="prevPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-ldvb5azg>
Previous
</button> <div id="pageNumbers" class="flex gap-1" data-astro-cid-ldvb5azg></div> <button id="nextPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-ldvb5azg>
Next
</button> </div> </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300" data-astro-cid-ldvb5azg> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mb-6" data-astro-cid-ldvb5azg> <svg class="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldvb5azg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-astro-cid-ldvb5azg></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-ldvb5azg>No Library Resources Yet</h3> <p class="text-gray-600 mb-6" data-astro-cid-ldvb5azg>Get started by adding your first resource.</p> <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl" data-astro-cid-ldvb5azg> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldvb5azg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-ldvb5azg></path> </svg>
Add First Resource
</button> </div> <div id="libraryContainer" class="grid grid-cols-1 gap-6" data-astro-cid-ldvb5azg></div> <!-- Modal --> <!-- Modal --> <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto backdrop-blur-sm" data-astro-cid-ldvb5azg> <div class="min-h-screen flex items-center justify-center p-2 sm:p-4" data-astro-cid-ldvb5azg> <div class="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-5xl my-2 sm:my-8 transform transition-all duration-300" id="modalContent" data-astro-cid-ldvb5azg> <div class="flex flex-col" style="max-height: 95vh;" data-astro-cid-ldvb5azg> <div class="flex-shrink-0 p-4 sm:p-6 border-b border-gray-200" data-astro-cid-ldvb5azg> <div class="flex justify-between items-center" data-astro-cid-ldvb5azg> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900" data-astro-cid-ldvb5azg>Add Resource</h3> <button type="button" id="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors" data-astro-cid-ldvb5azg> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ldvb5azg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ldvb5azg></path> </svg> </button> </div> </div> <div class="flex-1 overflow-y-auto p-4 sm:p-6" data-astro-cid-ldvb5azg> <form id="libraryForm" class="space-y-3 sm:space-y-4" data-astro-cid-ldvb5azg> <input type="hidden" id="itemId" data-astro-cid-ldvb5azg> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-ldvb5azg> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>URL *</label> <input type="url" id="url" required placeholder="https://example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg></textarea> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Teacher/Author</label> <input type="text" id="teacher" placeholder="e.g., Ven. Ajahn Chah" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Language</label> <input type="text" id="language" placeholder="e.g., Multilingual" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Source Type</label> <select id="sourceType" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> <option value="Website" data-astro-cid-ldvb5azg>Website</option> <option value="Video" data-astro-cid-ldvb5azg>Video</option> <option value="Audio" data-astro-cid-ldvb5azg>Audio</option> <option value="PDF" data-astro-cid-ldvb5azg>PDF</option> <option value="Book" data-astro-cid-ldvb5azg>Book</option> <option value="Article" data-astro-cid-ldvb5azg>Article</option> </select> </div> <div data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Category</label> <input type="text" id="category" placeholder="e.g., Buddhist Canon" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="md:col-span-2" data-astro-cid-ldvb5azg> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-ldvb5azg>Topics (comma separated)</label> <input type="text" id="topics" placeholder="e.g., Meditation, Dhamma, Suttas" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-ldvb5azg> </div> <div class="flex items-center space-x-4" data-astro-cid-ldvb5azg> <label class="flex items-center" data-astro-cid-ldvb5azg> <input type="checkbox" id="featured" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" data-astro-cid-ldvb5azg> <span class="ml-2 text-sm text-gray-700" data-astro-cid-ldvb5azg>Featured</span> </label> <label class="flex items-center" data-astro-cid-ldvb5azg> <input type="checkbox" id="hidden" class="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" data-astro-cid-ldvb5azg> <span class="ml-2 text-sm text-gray-700" data-astro-cid-ldvb5azg>Hidden</span> </label> </div> </div> <div class="flex justify-end space-x-3 pt-6" data-astro-cid-ldvb5azg> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition" data-astro-cid-ldvb5azg>
Cancel
</button> <button type="submit" class="px-6 py-2 bg-[#8E050F] hover:bg-[#991b1b] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition" data-astro-cid-ldvb5azg>
Save Resource
</button> </div> </form> </div> </div> </div> </div> </div>  <script>(function(){`, `
    let libraryData = [];
    let csrfTokenValue = csrfToken;
    let currentPage = 1;
    const itemsPerPage = 6;

    // Execute immediately or when DOM is ready
    (function() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
      
      function init() {
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
            modal.classList.remove('hidden');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
              const modalContent = document.getElementById('modalContent');
              if (modalContent) {
                modalContent.style.transform = 'scale(1)';
                modalContent.style.opacity = '1';
              }
            }, 10);
          }
        });
      }

      const closeModalBtn = document.getElementById('closeModal');
      const cancelBtn = document.getElementById('cancelBtn');
      
      function closeModal() {
        if (modal) {
          const modalContent = document.getElementById('modalContent');
          if (modalContent) {
            modalContent.style.transform = 'scale(0.95)';
            modalContent.style.opacity = '0';
          }
          document.body.style.overflow = '';
          setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.add('hidden');
            if (libraryForm) libraryForm.reset();
          }, 200);
        }
      }
      
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
      }
      
      if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
      }
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });

      async function loadLibrary(retryCount = 0) {
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const libraryContainer = document.getElementById('libraryContainer');
        
        try {
          console.log('Loading library...');
          if (loadingState) loadingState.style.display = 'flex';
          if (emptyState) emptyState.style.display = 'none';
          if (libraryContainer) libraryContainer.style.display = 'none';
          
          const response = await fetch('/api/admin/library', {
            method: 'GET',
            headers: { 
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            },
            cache: 'no-store'
          });
          
          console.log('Library response:', response.status);
          
          // Handle rate limiting with retry
          if (response.status === 429) {
            if (retryCount < 2) {
              console.warn(\\\`Rate limited (429), retrying in \\\${(retryCount + 1) * 2} seconds...\\\`);
              await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 2000));
              return loadLibrary(retryCount + 1);
            }
            throw new Error('Too Many Requests - Please wait a moment and refresh the page');
          }
          
          if (!response.ok) {
            if (response.status === 401) {
              window.location.href = '/admin/login';
              return;
            }
            throw new Error(\\\`HTTP \\\${response.status}\\\`);
          }
          
          const rawData = await response.json();
          console.log('Raw library data:', rawData);
          
          // Handle both array and {resources: []} format
          libraryData = Array.isArray(rawData) ? rawData : (rawData.resources || []);
          console.log('Processed library count:', libraryData.length);
          
          if (loadingState) loadingState.style.display = 'none';
          
          if (!libraryData || libraryData.length === 0) {
            console.log('No data, showing empty');
            if (emptyState) emptyState.style.display = 'block';
          } else {
            console.log('Rendering', libraryData.length, 'items');
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
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = libraryData.slice(startIndex, endIndex);
      const totalPages = Math.ceil(libraryData.length / itemsPerPage);
      
      document.getElementById('showingStart').textContent = startIndex + 1;
      document.getElementById('showingEnd').textContent = Math.min(endIndex, libraryData.length);
      document.getElementById('totalItems').textContent = libraryData.length;
      document.getElementById('paginationTop').classList.remove('hidden');
      
      const prevBtn = document.getElementById('prevPage');
      const nextBtn = document.getElementById('nextPage');
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
      
      const pageNumbersContainer = document.getElementById('pageNumbers');
      pageNumbersContainer.innerHTML = '';
      
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + 5);
      if (endPage - startPage < 5) {
        startPage = Math.max(1, endPage - 5);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = \\\`px-3 py-1 text-sm border rounded-lg \\\${i === currentPage ? 'bg-[#8E050F] text-white border-[#8E050F]' : 'border-gray-300 hover:bg-gray-50'}\\\`;
        pageBtn.onclick = () => {
          currentPage = i;
          renderLibrary();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pageNumbersContainer.appendChild(pageBtn);
      }
      
      libraryContainer.innerHTML = paginatedData.map(item => \\\`
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
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          const modalContent = document.getElementById('modalContent');
          if (modalContent) {
            modalContent.style.transform = 'scale(1)';
            modalContent.style.opacity = '1';
          }
        }, 10);
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

      document.getElementById('prevPage')?.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderLibrary();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      document.getElementById('nextPage')?.addEventListener('click', () => {
        const totalPages = Math.ceil(libraryData.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderLibrary();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      // Load library immediately
      console.log('Library page initialized, loading data...');
      loadLibrary();
      }
    })();
  })();<\/script> </main></div>`])), maybeRenderHead(), defineScriptVars({ csrfToken })) })}`;
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
