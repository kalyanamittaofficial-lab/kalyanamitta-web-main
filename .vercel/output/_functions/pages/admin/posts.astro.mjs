import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, n as defineScriptVars, m as maybeRenderHead } from '../../_assets/astro/server.CrvHwmaT.js';
import { $ as $$AdminLayout } from '../../_assets/AdminLayout.2ZbTGf_w.js';
/* empty css                                    */
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
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Posts Management - Admin", "data-astro-cid-dau52ztc": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="min-h-screen bg-gray-50" data-astro-cid-dau52ztc> <header class="bg-white shadow-sm border-b border-gray-200" data-astro-cid-dau52ztc> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-dau52ztc> <div class="flex justify-between items-center py-4" data-astro-cid-dau52ztc> <div data-astro-cid-dau52ztc> <h1 class="text-2xl font-bold text-gray-900" data-astro-cid-dau52ztc>Posts Management</h1> </div> <div class="flex items-center space-x-4" data-astro-cid-dau52ztc> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm" data-astro-cid-dau52ztc>
\u2190 Dashboard
</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition" data-astro-cid-dau52ztc>
Logout
</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-dau52ztc> <div class="mb-6 flex justify-between items-center" data-astro-cid-dau52ztc> <h2 class="text-xl font-semibold text-gray-900" data-astro-cid-dau52ztc>All Posts</h2> <button id="addNewBtn" class="bg-[#8E050F] hover:bg-[#991b1b] text-white px-6 py-2 rounded-lg font-medium transition shadow-lg hover:shadow-xl" data-astro-cid-dau52ztc>
+ Add Post
</button> </div> <!-- Loading State --> <div id="loadingState" class="flex flex-col items-center justify-center py-16" data-astro-cid-dau52ztc> <div class="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-amber-600 mb-4" data-astro-cid-dau52ztc></div> <p class="text-gray-600 font-medium" data-astro-cid-dau52ztc>Loading posts...</p> </div> <!-- Pagination Controls --> <div id="paginationTop" class="hidden mb-4 flex items-center justify-between flex-wrap gap-3" data-astro-cid-dau52ztc> <div class="text-sm text-gray-600" data-astro-cid-dau52ztc>
Showing <span id="showingStart" data-astro-cid-dau52ztc>0</span>-<span id="showingEnd" data-astro-cid-dau52ztc>0</span> of <span id="totalItems" data-astro-cid-dau52ztc>0</span> items
</div> <div class="flex gap-2" data-astro-cid-dau52ztc> <button id="prevPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-dau52ztc>
Previous
</button> <div id="pageNumbers" class="flex gap-1" data-astro-cid-dau52ztc></div> <button id="nextPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-dau52ztc>
Next
</button> </div> </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300" data-astro-cid-dau52ztc> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-50 mb-6" data-astro-cid-dau52ztc> <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dau52ztc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-astro-cid-dau52ztc></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-dau52ztc>No Posts Yet</h3> <p class="text-gray-600 mb-6" data-astro-cid-dau52ztc>Get started by creating your first post.</p> <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl" data-astro-cid-dau52ztc> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dau52ztc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-dau52ztc></path> </svg>
Create First Post
</button> </div> <div id="postsContainer" class="grid grid-cols-1 gap-6" data-astro-cid-dau52ztc></div> </main> </div>  <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto backdrop-blur-sm" data-astro-cid-dau52ztc> <div class="min-h-screen flex items-center justify-center p-2 sm:p-4" data-astro-cid-dau52ztc> <div class="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-5xl my-2 sm:my-8 transform transition-all duration-300" id="modalContent" data-astro-cid-dau52ztc> <div class="flex flex-col" style="max-height: 95vh;" data-astro-cid-dau52ztc> <div class="flex-shrink-0 p-4 sm:p-6 border-b border-gray-200" data-astro-cid-dau52ztc> <div class="flex justify-between items-center" data-astro-cid-dau52ztc> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900" data-astro-cid-dau52ztc>Add Post</h3> <button type="button" id="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors" data-astro-cid-dau52ztc> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dau52ztc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-dau52ztc></path> </svg> </button> </div> </div> <div class="flex-1 overflow-y-auto p-4 sm:p-6" data-astro-cid-dau52ztc> <form id="postForm" class="space-y-3 sm:space-y-4" data-astro-cid-dau52ztc> <input type="hidden" id="itemId" data-astro-cid-dau52ztc> <div class="grid grid-cols-1 gap-4" data-astro-cid-dau52ztc> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc></textarea> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Post URL *</label> <input type="url" id="url" required placeholder="https://example.com/post" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> <p class="text-xs text-gray-500 mt-1" data-astro-cid-dau52ztc>Full URL to the post content</p> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Publication Date *</label> <input type="date" id="pubDate" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Languages</label> <input type="text" id="languages" placeholder="\u0DC3\u0DD2\u0D82\u0DC4\u0DBD, English (comma separated)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> <p class="text-xs text-gray-500 mt-1" data-astro-cid-dau52ztc>Enter languages separated by commas</p> </div> </div> <div class="flex justify-end space-x-3 pt-6" data-astro-cid-dau52ztc> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition" data-astro-cid-dau52ztc>
Cancel
</button> <button type="submit" class="px-6 py-2 bg-[#8E050F] hover:bg-[#991b1b] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition" data-astro-cid-dau52ztc>
Save Post
</button> </div> </form> </div> </div> </div> </div> </div>  <script>(function(){`, `
    let postsData = [];
    let currentPage = 1;
    const itemsPerPage = 6;
    let csrfTokenValue = csrfToken;

    // Execute immediately or when DOM is ready
    (function() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
      
      function init() {
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
            if (postForm) postForm.reset();
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

      async function loadPosts(retryCount = 0) {
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const postsContainer = document.getElementById('postsContainer');
        
        try {
          if (loadingState) loadingState.style.display = 'flex';
          if (emptyState) emptyState.style.display = 'none';
          if (postsContainer) postsContainer.style.display = 'none';
          
          const response = await fetch('/api/admin/posts', {
            headers: { 'Cache-Control': 'no-cache' }
          });
          
          // Handle rate limiting with retry
          if (response.status === 429) {
            if (retryCount < 2) {
              console.warn(\`Rate limited (429), retrying in \${(retryCount + 1) * 2} seconds...\`);
              await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 2000));
              return loadPosts(retryCount + 1);
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
          
          postsData = await response.json();
          
          if (loadingState) loadingState.style.display = 'none';
          
          if (postsData.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
          } else {
            if (postsContainer) postsContainer.style.display = 'grid';
            renderPosts();
          }
        } catch (error) {
          console.error('Failed to load posts:', error);
          if (loadingState) loadingState.style.display = 'none';
          if (postsContainer) {
            postsContainer.style.display = 'block';
            postsContainer.innerHTML = \`<div class="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center"><svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="text-xl font-semibold text-red-900 mb-2">Failed to Load Posts</h3><p class="text-red-700 mb-6">\${error.message}</p><button onclick="location.reload()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">Reload Page</button></div>\`;
          }
        }
      }

    function formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    function renderPosts() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = postsData.slice(startIndex, endIndex);
      const totalPages = Math.ceil(postsData.length / itemsPerPage);
      
      document.getElementById('showingStart').textContent = startIndex + 1;
      document.getElementById('showingEnd').textContent = Math.min(endIndex, postsData.length);
      document.getElementById('totalItems').textContent = postsData.length;
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
          renderPosts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pageNumbersContainer.appendChild(pageBtn);
      }
      
      postsContainer.innerHTML = paginatedData.map(item => \`
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

      document.getElementById('prevPage')?.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderPosts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      document.getElementById('nextPage')?.addEventListener('click', () => {
        const totalPages = Math.ceil(postsData.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderPosts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      loadPosts();
      }
    })();
  })();<\/script> `], [" ", `<div class="min-h-screen bg-gray-50" data-astro-cid-dau52ztc> <header class="bg-white shadow-sm border-b border-gray-200" data-astro-cid-dau52ztc> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-dau52ztc> <div class="flex justify-between items-center py-4" data-astro-cid-dau52ztc> <div data-astro-cid-dau52ztc> <h1 class="text-2xl font-bold text-gray-900" data-astro-cid-dau52ztc>Posts Management</h1> </div> <div class="flex items-center space-x-4" data-astro-cid-dau52ztc> <a href="/admin/dashboard" class="text-amber-600 hover:text-amber-700 font-medium text-sm" data-astro-cid-dau52ztc>
\u2190 Dashboard
</a> <button id="logoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition" data-astro-cid-dau52ztc>
Logout
</button> </div> </div> </div> </header> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-dau52ztc> <div class="mb-6 flex justify-between items-center" data-astro-cid-dau52ztc> <h2 class="text-xl font-semibold text-gray-900" data-astro-cid-dau52ztc>All Posts</h2> <button id="addNewBtn" class="bg-[#8E050F] hover:bg-[#991b1b] text-white px-6 py-2 rounded-lg font-medium transition shadow-lg hover:shadow-xl" data-astro-cid-dau52ztc>
+ Add Post
</button> </div> <!-- Loading State --> <div id="loadingState" class="flex flex-col items-center justify-center py-16" data-astro-cid-dau52ztc> <div class="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-amber-600 mb-4" data-astro-cid-dau52ztc></div> <p class="text-gray-600 font-medium" data-astro-cid-dau52ztc>Loading posts...</p> </div> <!-- Pagination Controls --> <div id="paginationTop" class="hidden mb-4 flex items-center justify-between flex-wrap gap-3" data-astro-cid-dau52ztc> <div class="text-sm text-gray-600" data-astro-cid-dau52ztc>
Showing <span id="showingStart" data-astro-cid-dau52ztc>0</span>-<span id="showingEnd" data-astro-cid-dau52ztc>0</span> of <span id="totalItems" data-astro-cid-dau52ztc>0</span> items
</div> <div class="flex gap-2" data-astro-cid-dau52ztc> <button id="prevPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-dau52ztc>
Previous
</button> <div id="pageNumbers" class="flex gap-1" data-astro-cid-dau52ztc></div> <button id="nextPage" class="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-dau52ztc>
Next
</button> </div> </div> <!-- Empty State --> <div id="emptyState" class="hidden text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300" data-astro-cid-dau52ztc> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-50 mb-6" data-astro-cid-dau52ztc> <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dau52ztc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-astro-cid-dau52ztc></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-dau52ztc>No Posts Yet</h3> <p class="text-gray-600 mb-6" data-astro-cid-dau52ztc>Get started by creating your first post.</p> <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-xl" data-astro-cid-dau52ztc> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dau52ztc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-dau52ztc></path> </svg>
Create First Post
</button> </div> <div id="postsContainer" class="grid grid-cols-1 gap-6" data-astro-cid-dau52ztc></div> </main> </div>  <div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto backdrop-blur-sm" data-astro-cid-dau52ztc> <div class="min-h-screen flex items-center justify-center p-2 sm:p-4" data-astro-cid-dau52ztc> <div class="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-5xl my-2 sm:my-8 transform transition-all duration-300" id="modalContent" data-astro-cid-dau52ztc> <div class="flex flex-col" style="max-height: 95vh;" data-astro-cid-dau52ztc> <div class="flex-shrink-0 p-4 sm:p-6 border-b border-gray-200" data-astro-cid-dau52ztc> <div class="flex justify-between items-center" data-astro-cid-dau52ztc> <h3 id="modalTitle" class="text-2xl font-bold text-gray-900" data-astro-cid-dau52ztc>Add Post</h3> <button type="button" id="closeModal" class="text-gray-400 hover:text-gray-600 transition-colors" data-astro-cid-dau52ztc> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dau52ztc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-dau52ztc></path> </svg> </button> </div> </div> <div class="flex-1 overflow-y-auto p-4 sm:p-6" data-astro-cid-dau52ztc> <form id="postForm" class="space-y-3 sm:space-y-4" data-astro-cid-dau52ztc> <input type="hidden" id="itemId" data-astro-cid-dau52ztc> <div class="grid grid-cols-1 gap-4" data-astro-cid-dau52ztc> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Title *</label> <input type="text" id="title" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Description *</label> <textarea id="description" required rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc></textarea> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Post URL *</label> <input type="url" id="url" required placeholder="https://example.com/post" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> <p class="text-xs text-gray-500 mt-1" data-astro-cid-dau52ztc>Full URL to the post content</p> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Publication Date *</label> <input type="date" id="pubDate" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> </div> <div data-astro-cid-dau52ztc> <label class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-dau52ztc>Languages</label> <input type="text" id="languages" placeholder="\u0DC3\u0DD2\u0D82\u0DC4\u0DBD, English (comma separated)" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" data-astro-cid-dau52ztc> <p class="text-xs text-gray-500 mt-1" data-astro-cid-dau52ztc>Enter languages separated by commas</p> </div> </div> <div class="flex justify-end space-x-3 pt-6" data-astro-cid-dau52ztc> <button type="button" id="cancelBtn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition" data-astro-cid-dau52ztc>
Cancel
</button> <button type="submit" class="px-6 py-2 bg-[#8E050F] hover:bg-[#991b1b] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition" data-astro-cid-dau52ztc>
Save Post
</button> </div> </form> </div> </div> </div> </div> </div>  <script>(function(){`, `
    let postsData = [];
    let currentPage = 1;
    const itemsPerPage = 6;
    let csrfTokenValue = csrfToken;

    // Execute immediately or when DOM is ready
    (function() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
      
      function init() {
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
            if (postForm) postForm.reset();
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

      async function loadPosts(retryCount = 0) {
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const postsContainer = document.getElementById('postsContainer');
        
        try {
          if (loadingState) loadingState.style.display = 'flex';
          if (emptyState) emptyState.style.display = 'none';
          if (postsContainer) postsContainer.style.display = 'none';
          
          const response = await fetch('/api/admin/posts', {
            headers: { 'Cache-Control': 'no-cache' }
          });
          
          // Handle rate limiting with retry
          if (response.status === 429) {
            if (retryCount < 2) {
              console.warn(\\\`Rate limited (429), retrying in \\\${(retryCount + 1) * 2} seconds...\\\`);
              await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 2000));
              return loadPosts(retryCount + 1);
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
          
          postsData = await response.json();
          
          if (loadingState) loadingState.style.display = 'none';
          
          if (postsData.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
          } else {
            if (postsContainer) postsContainer.style.display = 'grid';
            renderPosts();
          }
        } catch (error) {
          console.error('Failed to load posts:', error);
          if (loadingState) loadingState.style.display = 'none';
          if (postsContainer) {
            postsContainer.style.display = 'block';
            postsContainer.innerHTML = \\\`<div class="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center"><svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h3 class="text-xl font-semibold text-red-900 mb-2">Failed to Load Posts</h3><p class="text-red-700 mb-6">\\\${error.message}</p><button onclick="location.reload()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition">Reload Page</button></div>\\\`;
          }
        }
      }

    function formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    function renderPosts() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = postsData.slice(startIndex, endIndex);
      const totalPages = Math.ceil(postsData.length / itemsPerPage);
      
      document.getElementById('showingStart').textContent = startIndex + 1;
      document.getElementById('showingEnd').textContent = Math.min(endIndex, postsData.length);
      document.getElementById('totalItems').textContent = postsData.length;
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
          renderPosts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pageNumbersContainer.appendChild(pageBtn);
      }
      
      postsContainer.innerHTML = paginatedData.map(item => \\\`
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

      document.getElementById('prevPage')?.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderPosts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      document.getElementById('nextPage')?.addEventListener('click', () => {
        const totalPages = Math.ceil(postsData.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderPosts();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      loadPosts();
      }
    })();
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
