import { e as createComponent, r as renderTemplate, l as defineScriptVars, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../_assets/astro/server.CkAL1Q0G.js';
import { $ as $$Layout } from '../_assets/Layout.D7moAORm.js';
import { n as newsData } from '../_assets/news.CzENSPHZ.js';
/* empty css                                */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$News = createComponent(($$result, $$props, $$slots) => {
  const visibleNews = newsData.filter((news) => !news.hidden);
  const sortedNews = [...visibleNews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredNews = sortedNews.filter((news) => news.featured);
  return renderTemplate(_a || (_a = __template(["", ' <!-- Notice Detail Modal (outside Layout for proper z-index) --> <div id="news-modal" class="fixed inset-0 z-[10000] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm" data-astro-cid-5kj6t6lp> <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" data-astro-cid-5kj6t6lp> <div id="modal-content" class="p-6 md:p-8" data-astro-cid-5kj6t6lp> <!-- Modal content will be inserted here --> </div> </div> </div> <script>(function(){', `
  let currentLanguage = 'English';
  let currentPage = 1;
  const itemsPerPage = 6;
  let filteredNewsData = [];
  
  function updatePagination() {
    const totalPages = Math.ceil(filteredNewsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Show only current page items
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
      const newsId = parseInt(card.querySelector('.read-more-btn').dataset.newsId);
      const cardIndex = filteredNewsData.findIndex(n => n.id === newsId);
      
      if (cardIndex >= startIndex && cardIndex < endIndex) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
    
    // Update pagination info
    const paginationInfo = document.getElementById('pagination-info');
    if (filteredNewsData.length > 0) {
      paginationInfo.textContent = \`Page \${currentPage} of \${totalPages} (\${filteredNewsData.length} notices)\`;
    } else {
      paginationInfo.textContent = '';
    }
    
    // Update page numbers
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      pageBtn.className = \`px-3 py-1 rounded-lg font-medium transition-all \${
        i === currentPage 
          ? 'bg-monk-900 text-white' 
          : 'border-2 border-gray-300 text-gray-700 hover:border-monk-900 hover:bg-monk-50'
      }\`;
      pageBtn.addEventListener('click', () => {
        currentPage = i;
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pageNumbers.appendChild(pageBtn);
    }
    
    // Update prev/next buttons
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Show/hide pagination controls
    const paginationControls = document.getElementById('pagination-controls');
    if (totalPages <= 1) {
      paginationControls.classList.add('hidden');
    } else {
      paginationControls.classList.remove('hidden');
    }
  }
  
  function filterNews() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const languageFilter = document.getElementById('language-filter').value;
    
    // Filter data
    filteredNewsData = newsData.filter(news => {
      const title = (news.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD' ? news.titleSinhala : news.title).toLowerCase();
      const excerpt = (news.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD' ? news.excerptSinhala : news.excerpt).toLowerCase();
      const tags = news.tags.join(' ').toLowerCase();
      
      const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm);
      const matchesCategory = categoryFilter === 'all' || news.category === categoryFilter;
      const matchesLanguage = languageFilter === 'all' || news.language === languageFilter;
      
      return matchesSearch && matchesCategory && matchesLanguage;
    });
    
    // Reset to first page
    currentPage = 1;
    
    // Show/hide no results message
    const noResults = document.getElementById('no-results');
    const newsGrid = document.getElementById('news-grid');
    const paginationControls = document.getElementById('pagination-controls');
    
    if (filteredNewsData.length === 0) {
      noResults.classList.remove('hidden');
      newsGrid.classList.add('hidden');
      paginationControls.classList.add('hidden');
      // Update message based on whether filters are active
      const hasActiveFilters = searchTerm || categoryFilter !== 'all' || languageFilter !== 'all';
      const noResultsTitle = noResults.querySelector('h3');
      const noResultsText = noResults.querySelector('p');
      if (hasActiveFilters) {
        noResultsTitle.textContent = 'No Notices Found';
        noResultsText.textContent = 'No notices match your search criteria. Try adjusting your filters.';
      } else {
        noResultsTitle.textContent = 'No Notices Available';
        noResultsText.textContent = 'There are currently no notices available. Please check back later for updates.';
      }
    } else {
      noResults.classList.add('hidden');
      newsGrid.classList.remove('hidden');
      updatePagination();
    }
    
    // Update results count
    const resultsCount = document.getElementById('search-results-count');
    if (searchTerm || categoryFilter !== 'all' || languageFilter !== 'all') {
      resultsCount.textContent = \`Found \${filteredNewsData.length} notice\${filteredNewsData.length !== 1 ? 's' : ''}\`;
      resultsCount.classList.remove('hidden');
    } else {
      resultsCount.classList.add('hidden');
    }
    
    // Show/hide clear search button
    const clearBtn = document.getElementById('clear-search');
    if (searchTerm) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  
  function showNewsDetail(newsId) {
    const news = newsData.find(n => n.id === newsId);
    if (!news) return;
    
    const modal = document.getElementById('news-modal');
    const modalContent = document.getElementById('modal-content');
    
    const isSinhala = news.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD';
    const title = isSinhala ? news.titleSinhala : news.title;
    const content = isSinhala ? news.contentSinhala : news.content;
    
    modalContent.innerHTML = \`
      <div class="relative">
        <button id="close-modal" class="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-3 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              \${new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span class="px-3 py-1 bg-monk-100 text-monk-900 rounded-full text-xs font-semibold">
              \${news.category}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">\${title}</h2>
          <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              \${news.author}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              \${news.source}
            </span>
          </div>
        </div>
        
        <div class="prose prose-lg max-w-none mb-6">
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">\${content}</p>
        </div>
        
        <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mb-6">
          \${news.tags.map(tag => \`
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              #\${tag}
            </span>
          \`).join('')}
        </div>
        
        \${news.url ? \`
          <div class="bg-gradient-to-r from-monk-50 to-monk-100 border-2 border-monk-300 rounded-xl p-5">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <svg class="w-5 h-5 text-monk-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                  Read Full Article
                </h3>
                <p class="text-xs text-gray-600 break-all">\${news.url}</p>
              </div>
              <a 
                href="\${news.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-monk-900 hover:bg-monk-800 text-white font-semibold rounded-lg transition-all hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                <span>Visit Source</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        \` : ''}
      </div>
    \`;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Close modal event
    document.getElementById('close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  function closeModal() {
    const modal = document.getElementById('news-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
  
  // Initialize featured news carousel
  function initFeaturedCarousel() {
    const carousel = document.getElementById('featured-news-carousel');
    if (!carousel) return;
    
    const itemCount = carousel.children.length;
    if (itemCount <= 1) return;
    
    let scrollPosition = 0;
    let animationId;
    let isPaused = false;
    const speed = 0.5;
    
    function animate() {
      if (!isPaused && carousel) {
        scrollPosition += speed;
        const maxScroll = carousel.scrollWidth / 2;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        carousel.style.transform = \`translateX(-\${scrollPosition}px)\`;
      }
      animationId = requestAnimationFrame(animate);
    }
    
    carousel.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
      isPaused = false;
    });
    
    animate();
  }
  
  // Event listeners
  document.addEventListener('astro:page-load', () => {
    initFeaturedCarousel();
    
    // Initialize with all news
    filteredNewsData = [...newsData];
    updatePagination();
    
    document.getElementById('search-input').addEventListener('input', filterNews);
    document.getElementById('category-filter').addEventListener('change', filterNews);
    document.getElementById('language-filter').addEventListener('change', filterNews);
    
    document.getElementById('clear-search').addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      filterNews();
    });
    
    document.getElementById('clear-filters')?.addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      document.getElementById('category-filter').value = 'all';
      document.getElementById('language-filter').value = 'all';
      filterNews();
    });
    
    document.querySelectorAll('.read-more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const newsId = parseInt(btn.dataset.newsId);
        showNewsDetail(newsId);
      });
    });
    
    // Pagination button handlers
    document.getElementById('prev-page').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    document.getElementById('next-page').addEventListener('click', () => {
      const totalPages = Math.ceil(filteredNewsData.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    // Keyboard escape to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
    
    // Check for hash in URL and open corresponding news
    const hash = window.location.hash;
    if (hash.startsWith('#news-')) {
      const newsId = parseInt(hash.replace('#news-', ''));
      if (!isNaN(newsId)) {
        setTimeout(() => showNewsDetail(newsId), 100);
      }
    }
  });
})();<\/script> `], ["", ' <!-- Notice Detail Modal (outside Layout for proper z-index) --> <div id="news-modal" class="fixed inset-0 z-[10000] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm" data-astro-cid-5kj6t6lp> <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" data-astro-cid-5kj6t6lp> <div id="modal-content" class="p-6 md:p-8" data-astro-cid-5kj6t6lp> <!-- Modal content will be inserted here --> </div> </div> </div> <script>(function(){', `
  let currentLanguage = 'English';
  let currentPage = 1;
  const itemsPerPage = 6;
  let filteredNewsData = [];
  
  function updatePagination() {
    const totalPages = Math.ceil(filteredNewsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Show only current page items
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
      const newsId = parseInt(card.querySelector('.read-more-btn').dataset.newsId);
      const cardIndex = filteredNewsData.findIndex(n => n.id === newsId);
      
      if (cardIndex >= startIndex && cardIndex < endIndex) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
    
    // Update pagination info
    const paginationInfo = document.getElementById('pagination-info');
    if (filteredNewsData.length > 0) {
      paginationInfo.textContent = \\\`Page \\\${currentPage} of \\\${totalPages} (\\\${filteredNewsData.length} notices)\\\`;
    } else {
      paginationInfo.textContent = '';
    }
    
    // Update page numbers
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      pageBtn.className = \\\`px-3 py-1 rounded-lg font-medium transition-all \\\${
        i === currentPage 
          ? 'bg-monk-900 text-white' 
          : 'border-2 border-gray-300 text-gray-700 hover:border-monk-900 hover:bg-monk-50'
      }\\\`;
      pageBtn.addEventListener('click', () => {
        currentPage = i;
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pageNumbers.appendChild(pageBtn);
    }
    
    // Update prev/next buttons
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Show/hide pagination controls
    const paginationControls = document.getElementById('pagination-controls');
    if (totalPages <= 1) {
      paginationControls.classList.add('hidden');
    } else {
      paginationControls.classList.remove('hidden');
    }
  }
  
  function filterNews() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const languageFilter = document.getElementById('language-filter').value;
    
    // Filter data
    filteredNewsData = newsData.filter(news => {
      const title = (news.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD' ? news.titleSinhala : news.title).toLowerCase();
      const excerpt = (news.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD' ? news.excerptSinhala : news.excerpt).toLowerCase();
      const tags = news.tags.join(' ').toLowerCase();
      
      const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm) || tags.includes(searchTerm);
      const matchesCategory = categoryFilter === 'all' || news.category === categoryFilter;
      const matchesLanguage = languageFilter === 'all' || news.language === languageFilter;
      
      return matchesSearch && matchesCategory && matchesLanguage;
    });
    
    // Reset to first page
    currentPage = 1;
    
    // Show/hide no results message
    const noResults = document.getElementById('no-results');
    const newsGrid = document.getElementById('news-grid');
    const paginationControls = document.getElementById('pagination-controls');
    
    if (filteredNewsData.length === 0) {
      noResults.classList.remove('hidden');
      newsGrid.classList.add('hidden');
      paginationControls.classList.add('hidden');
      // Update message based on whether filters are active
      const hasActiveFilters = searchTerm || categoryFilter !== 'all' || languageFilter !== 'all';
      const noResultsTitle = noResults.querySelector('h3');
      const noResultsText = noResults.querySelector('p');
      if (hasActiveFilters) {
        noResultsTitle.textContent = 'No Notices Found';
        noResultsText.textContent = 'No notices match your search criteria. Try adjusting your filters.';
      } else {
        noResultsTitle.textContent = 'No Notices Available';
        noResultsText.textContent = 'There are currently no notices available. Please check back later for updates.';
      }
    } else {
      noResults.classList.add('hidden');
      newsGrid.classList.remove('hidden');
      updatePagination();
    }
    
    // Update results count
    const resultsCount = document.getElementById('search-results-count');
    if (searchTerm || categoryFilter !== 'all' || languageFilter !== 'all') {
      resultsCount.textContent = \\\`Found \\\${filteredNewsData.length} notice\\\${filteredNewsData.length !== 1 ? 's' : ''}\\\`;
      resultsCount.classList.remove('hidden');
    } else {
      resultsCount.classList.add('hidden');
    }
    
    // Show/hide clear search button
    const clearBtn = document.getElementById('clear-search');
    if (searchTerm) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  
  function showNewsDetail(newsId) {
    const news = newsData.find(n => n.id === newsId);
    if (!news) return;
    
    const modal = document.getElementById('news-modal');
    const modalContent = document.getElementById('modal-content');
    
    const isSinhala = news.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD';
    const title = isSinhala ? news.titleSinhala : news.title;
    const content = isSinhala ? news.contentSinhala : news.content;
    
    modalContent.innerHTML = \\\`
      <div class="relative">
        <button id="close-modal" class="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-3 text-sm text-gray-600">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              \\\${new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span class="px-3 py-1 bg-monk-100 text-monk-900 rounded-full text-xs font-semibold">
              \\\${news.category}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">\\\${title}</h2>
          <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              \\\${news.author}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              \\\${news.source}
            </span>
          </div>
        </div>
        
        <div class="prose prose-lg max-w-none mb-6">
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">\\\${content}</p>
        </div>
        
        <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mb-6">
          \\\${news.tags.map(tag => \\\`
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              #\\\${tag}
            </span>
          \\\`).join('')}
        </div>
        
        \\\${news.url ? \\\`
          <div class="bg-gradient-to-r from-monk-50 to-monk-100 border-2 border-monk-300 rounded-xl p-5">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <svg class="w-5 h-5 text-monk-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                  Read Full Article
                </h3>
                <p class="text-xs text-gray-600 break-all">\\\${news.url}</p>
              </div>
              <a 
                href="\\\${news.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 bg-monk-900 hover:bg-monk-800 text-white font-semibold rounded-lg transition-all hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
              >
                <span>Visit Source</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        \\\` : ''}
      </div>
    \\\`;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Close modal event
    document.getElementById('close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  function closeModal() {
    const modal = document.getElementById('news-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
  
  // Initialize featured news carousel
  function initFeaturedCarousel() {
    const carousel = document.getElementById('featured-news-carousel');
    if (!carousel) return;
    
    const itemCount = carousel.children.length;
    if (itemCount <= 1) return;
    
    let scrollPosition = 0;
    let animationId;
    let isPaused = false;
    const speed = 0.5;
    
    function animate() {
      if (!isPaused && carousel) {
        scrollPosition += speed;
        const maxScroll = carousel.scrollWidth / 2;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        carousel.style.transform = \\\`translateX(-\\\${scrollPosition}px)\\\`;
      }
      animationId = requestAnimationFrame(animate);
    }
    
    carousel.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
      isPaused = false;
    });
    
    animate();
  }
  
  // Event listeners
  document.addEventListener('astro:page-load', () => {
    initFeaturedCarousel();
    
    // Initialize with all news
    filteredNewsData = [...newsData];
    updatePagination();
    
    document.getElementById('search-input').addEventListener('input', filterNews);
    document.getElementById('category-filter').addEventListener('change', filterNews);
    document.getElementById('language-filter').addEventListener('change', filterNews);
    
    document.getElementById('clear-search').addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      filterNews();
    });
    
    document.getElementById('clear-filters')?.addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      document.getElementById('category-filter').value = 'all';
      document.getElementById('language-filter').value = 'all';
      filterNews();
    });
    
    document.querySelectorAll('.read-more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const newsId = parseInt(btn.dataset.newsId);
        showNewsDetail(newsId);
      });
    });
    
    // Pagination button handlers
    document.getElementById('prev-page').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    document.getElementById('next-page').addEventListener('click', () => {
      const totalPages = Math.ceil(filteredNewsData.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    // Keyboard escape to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
    
    // Check for hash in URL and open corresponding news
    const hash = window.location.hash;
    if (hash.startsWith('#news-')) {
      const newsId = parseInt(hash.replace('#news-', ''));
      if (!isNaN(newsId)) {
        setTimeout(() => showNewsDetail(newsId), 100);
      }
    }
  });
})();<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5kj6t6lp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-5kj6t6lp> <!-- Page Header --> <div class="mb-8 md:mb-12 pt-6 md:pt-8" data-astro-cid-5kj6t6lp> <div class="flex items-center gap-3 mb-3 md:mb-4" data-astro-cid-5kj6t6lp> <div class="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 via-monk-900 to-monk-700 rounded-2xl flex items-center justify-center shadow-xl" data-astro-cid-5kj6t6lp> <div class="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-2xl" data-astro-cid-5kj6t6lp></div> <svg class="w-7 h-7 md:w-9 md:h-9 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-astro-cid-5kj6t6lp></path> </svg> <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" data-astro-cid-5kj6t6lp></span> </div> <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900" data-astro-cid-5kj6t6lp>
Notices
</h1> </div> <p class="text-base sm:text-lg text-gray-600 mb-4" data-astro-cid-5kj6t6lp>
Stay updated with the latest notices
</p> <div id="active-filters" class="hidden flex flex-wrap gap-2 mt-4" data-astro-cid-5kj6t6lp> <!-- Active filters will appear here --> </div> </div> <!-- Search and Filter Bar --> <div class="mb-6 md:mb-8 space-y-3 md:space-y-4" data-astro-cid-5kj6t6lp> <div class="flex flex-col md:flex-row gap-3 md:gap-4" data-astro-cid-5kj6t6lp> <!-- Search Bar --> <div class="flex-1" data-astro-cid-5kj6t6lp> <div class="relative group" data-astro-cid-5kj6t6lp> <svg class="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-monk-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-5kj6t6lp></path> </svg> <input type="text" id="search-input" placeholder="Search notices..." class="w-full pl-10 md:pl-12 pr-10 md:pr-12 py-3 md:py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-monk-900 focus:ring-4 focus:ring-monk-100 transition-all shadow-sm hover:border-gray-400 text-sm md:text-base" data-astro-cid-5kj6t6lp> <button id="clear-search" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors hidden" aria-label="Clear search" data-astro-cid-5kj6t6lp> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5kj6t6lp></path> </svg> </button> </div> <div id="search-results-count" class="mt-2 text-sm text-gray-600 hidden" data-astro-cid-5kj6t6lp> <!-- Results count will appear here --> </div> </div> <!-- Filters --> <div class="flex gap-2" data-astro-cid-5kj6t6lp> <!-- Category Filter --> <div class="relative flex-1 md:flex-none" data-astro-cid-5kj6t6lp> <select id="category-filter" class="appearance-none w-full md:w-auto pl-3 md:pl-4 pr-8 md:pr-10 py-3 md:py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-monk-900 focus:ring-4 focus:ring-monk-100 bg-white cursor-pointer transition-all shadow-sm hover:border-gray-400 font-medium text-sm md:text-base" data-astro-cid-5kj6t6lp> <option value="all" data-astro-cid-5kj6t6lp>All Categories</option> <option value="Events" data-astro-cid-5kj6t6lp>Events</option> <option value="Education" data-astro-cid-5kj6t6lp>Education</option> <option value="Mindfulness" data-astro-cid-5kj6t6lp>Mindfulness</option> <option value="Technology" data-astro-cid-5kj6t6lp>Technology</option> <option value="Environment" data-astro-cid-5kj6t6lp>Environment</option> <option value="Science" data-astro-cid-5kj6t6lp>Science</option> <option value="Literature" data-astro-cid-5kj6t6lp>Literature</option> <option value="Meditation" data-astro-cid-5kj6t6lp>Meditation</option> </select> <svg class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5kj6t6lp></path> </svg> </div> <!-- Language Filter --> <div class="relative flex-1 md:flex-none" data-astro-cid-5kj6t6lp> <select id="language-filter" class="appearance-none w-full md:w-auto pl-3 md:pl-4 pr-8 md:pr-10 py-3 md:py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-monk-900 focus:ring-4 focus:ring-monk-100 bg-white cursor-pointer transition-all shadow-sm hover:border-gray-400 font-medium text-sm md:text-base" data-astro-cid-5kj6t6lp> <option value="all" data-astro-cid-5kj6t6lp>All Languages</option> <option value="English" data-astro-cid-5kj6t6lp>English</option> <option value="සිංහල" data-astro-cid-5kj6t6lp>සිංහල</option> </select> <svg class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5kj6t6lp></path> </svg> </div> </div> </div> </div> <!-- Featured Notices Section --> ${featuredNews.length > 0 && renderTemplate`<div class="mb-8 md:mb-12" data-astro-cid-5kj6t6lp> <h2 class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3" data-astro-cid-5kj6t6lp> <svg class="w-7 h-7 md:w-8 md:h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-5kj6t6lp> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-5kj6t6lp></path> </svg>
Featured Notices
</h2> <!-- Featured Notices Carousel --> <div class="relative overflow-hidden mb-6" data-astro-cid-5kj6t6lp> <div class="flex gap-4 md:gap-6" id="featured-news-carousel" data-astro-cid-5kj6t6lp> ${(featuredNews.length > 1 ? featuredNews.concat(featuredNews) : featuredNews).map((news) => renderTemplate`<article class="w-[calc(100vw-3rem)] min-w-[calc(100vw-3rem)] sm:min-w-[400px] md:min-w-[500px] flex-shrink-0 group bg-gradient-to-br from-white via-white to-amber-50/30 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-100 hover:border-amber-300 news-card relative"${addAttribute(news.category, "data-category")}${addAttribute(news.language, "data-language")}${addAttribute(news.tags.join(","), "data-tags")} data-astro-cid-5kj6t6lp> <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-monk-200/20 rounded-bl-full" data-astro-cid-5kj6t6lp></div> <div class="p-6 md:p-8 relative z-10" data-astro-cid-5kj6t6lp> <div class="flex items-center gap-2 mb-4" data-astro-cid-5kj6t6lp> <span class="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-monk-900 text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5" data-astro-cid-5kj6t6lp> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-5kj6t6lp> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-5kj6t6lp></path> </svg>
Featured
</span> </div> <div class="flex items-center gap-3 mb-4 text-sm text-gray-600" data-astro-cid-5kj6t6lp> <span class="flex items-center gap-1" data-astro-cid-5kj6t6lp> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-5kj6t6lp></path> </svg> ${new Date(news.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} </span> <span class="px-2 py-0.5 bg-monk-100 text-monk-900 rounded-md text-xs font-medium" data-astro-cid-5kj6t6lp> ${news.category} </span> </div> <h3 class="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-monk-900 transition-colors leading-tight" data-astro-cid-5kj6t6lp> ${news.language === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? news.titleSinhala : news.title} </h3> <p class="text-gray-700 mb-6 line-clamp-3 leading-relaxed" data-astro-cid-5kj6t6lp> ${news.language === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? news.excerptSinhala : news.excerpt} </p> <div class="flex items-center justify-between pt-4 border-t border-gray-200" data-astro-cid-5kj6t6lp> <span class="text-sm text-gray-500" data-astro-cid-5kj6t6lp> <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-5kj6t6lp></path> </svg> ${news.author} </span> <button class="read-more-btn px-5 py-2.5 bg-gradient-to-r from-monk-900 to-monk-700 text-white font-semibold rounded-xl hover:from-monk-800 hover:to-monk-600 flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 group"${addAttribute(news.id, "data-news-id")} data-astro-cid-5kj6t6lp>
Read Full Notice
<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-5kj6t6lp></path> </svg> </button> </div> </div> </article>`)} </div> </div> <div class="flex justify-center gap-2 mt-2" data-astro-cid-5kj6t6lp> <p class="text-xs sm:text-sm text-gray-500" data-astro-cid-5kj6t6lp>Hover to pause</p> </div> </div>`} <!-- All Notices Grid --> <div class="mb-8" data-astro-cid-5kj6t6lp> <div class="flex items-center justify-between mb-4 md:mb-6" data-astro-cid-5kj6t6lp> <h2 class="text-2xl md:text-3xl font-display font-bold text-gray-900" data-astro-cid-5kj6t6lp>
Latest Notices
</h2> <div id="pagination-info" class="text-sm text-gray-600" data-astro-cid-5kj6t6lp> <!-- Page info will appear here --> </div> </div> <div id="news-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6" data-astro-cid-5kj6t6lp> ${sortedNews.map((news) => renderTemplate`<article class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 news-card"${addAttribute(news.category, "data-category")}${addAttribute(news.language, "data-language")}${addAttribute(news.tags.join(","), "data-tags")} data-astro-cid-5kj6t6lp> <div class="p-5" data-astro-cid-5kj6t6lp> <div class="flex items-center gap-2 mb-2 text-xs text-gray-600" data-astro-cid-5kj6t6lp> <span class="flex items-center gap-1" data-astro-cid-5kj6t6lp> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-5kj6t6lp></path> </svg> ${new Date(news.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} </span> <span class="px-2 py-0.5 bg-monk-100 text-monk-900 rounded-md font-medium" data-astro-cid-5kj6t6lp> ${news.category} </span> </div> <h3 class="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-monk-900 transition-colors line-clamp-2" data-astro-cid-5kj6t6lp> ${news.language === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? news.titleSinhala : news.title} </h3> <p class="text-sm text-gray-600 mb-3 line-clamp-2" data-astro-cid-5kj6t6lp> ${news.language === "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD" ? news.excerptSinhala : news.excerpt} </p> <div class="flex items-center justify-between" data-astro-cid-5kj6t6lp> <span class="text-xs text-gray-500 truncate" data-astro-cid-5kj6t6lp> ${news.source} </span> <button class="read-more-btn text-monk-900 font-medium hover:text-monk-700 flex items-center gap-1 text-sm group"${addAttribute(news.id, "data-news-id")} data-astro-cid-5kj6t6lp>
Read
<svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-5kj6t6lp></path> </svg> </button> </div> </div> </article>`)} </div> <!-- Pagination Controls --> <div id="pagination-controls" class="flex justify-center items-center gap-2 mt-8" data-astro-cid-5kj6t6lp> <button id="prev-page" class="p-2 rounded-lg border-2 border-gray-300 hover:border-monk-900 hover:bg-monk-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled data-astro-cid-5kj6t6lp> <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-5kj6t6lp></path> </svg> </button> <div id="page-numbers" class="flex gap-1" data-astro-cid-5kj6t6lp> <!-- Page numbers will be inserted here --> </div> <button id="next-page" class="p-2 rounded-lg border-2 border-gray-300 hover:border-monk-900 hover:bg-monk-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-5kj6t6lp> <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-5kj6t6lp></path> </svg> </button> </div> <!-- No Results Message --> <div id="no-results" class="hidden text-center py-16 md:py-20" data-astro-cid-5kj6t6lp> <div class="max-w-md mx-auto" data-astro-cid-5kj6t6lp> <div class="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center" data-astro-cid-5kj6t6lp> <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5kj6t6lp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" data-astro-cid-5kj6t6lp></path> </svg> </div> <h3 class="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3" data-astro-cid-5kj6t6lp>No Notices Available</h3> <p class="text-gray-600 mb-6" data-astro-cid-5kj6t6lp>There are currently no notices available. Please check back later for updates.</p> <button id="clear-filters" class="px-6 py-3 bg-monk-900 text-white font-semibold rounded-xl hover:bg-monk-800 transition-all shadow-md hover:shadow-lg" data-astro-cid-5kj6t6lp>
Clear Filters
</button> </div> </div> </div> </div> ` }), defineScriptVars({ newsData: sortedNews }));
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/news.astro", void 0);

const $$file = "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/news.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$News,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
