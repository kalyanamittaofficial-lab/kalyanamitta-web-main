<!-- Improved Admin Management Page Template -->
<!-- This includes: Loading states, empty states, better error handling, smooth animations -->

<style>
  /* Smooth transitions for all admin pages */
  .fade-in {
    animation: fadeIn 0.3s ease-in;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .modal-fade {
    transition: opacity 0.2s ease-in-out;
  }
  
  .modal-scale {
    transition: transform 0.2s ease-in-out;
  }
  
  /* Loading spinner */
  .spinner {
    border: 3px solid #f3f4f6;
    border-top: 3px solid #d97706;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Card hover effects */
  .admin-card {
    transition: all 0.2s ease-in-out;
  }
  
  .admin-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
</style>

<!-- Loading State Component -->
<div id="loadingState" class="flex flex-col items-center justify-center py-16">
  <div class="spinner mb-4"></div>
  <p class="text-gray-600">Loading content...</p>
</div>

<!-- Empty State Component -->
<div id="emptyState" class="hidden text-center py-16">
  <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
    <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
    </svg>
  </div>
  <h3 class="text-xl font-semibold text-gray-900 mb-2">No Items Yet</h3>
  <p class="text-gray-600 mb-6">Get started by creating your first item.</p>
  <button onclick="document.getElementById('addNewBtn').click()" class="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
    </svg>
    Create First Item
  </button>
</div>

<!-- JavaScript Template for Admin Pages -->
<script>
  // Standard admin page initialization
  window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const form = document.getElementById('contentForm');
    const container = document.getElementById('contentContainer');
    const addBtn = document.getElementById('addNewBtn');
    const loadingState = document.getElementById('loadingState');
    const emptyState = document.getElementById('emptyState');
    
    let dataCache = [];
    let csrfToken = sessionStorage.getItem('csrfToken') || '';
    
    // Modal control functions
    function openModal() {
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.opacity = '1';
        const content = modal.querySelector('.modal-content');
        if (content) content.style.transform = 'scale(1)';
      }, 10);
    }
    
    function closeModal() {
      if (!modal) return;
      const content = modal.querySelector('.modal-content');
      if (content) content.style.transform = 'scale(0.95)';
      modal.style.opacity = '0';
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.add('hidden');
      }, 200);
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
    
    // Click outside to close
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
    
    // Show loading state
    function showLoading() {
      if (loadingState) loadingState.style.display = 'flex';
      if (emptyState) emptyState.style.display = 'none';
      if (container) container.style.display = 'none';
    }
    
    // Show empty state
    function showEmpty() {
      if (loadingState) loadingState.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      if (container) container.style.display = 'none';
    }
    
    // Show content
    function showContent() {
      if (loadingState) loadingState.style.display = 'none';
      if (emptyState) emptyState.style.display = 'none';
      if (container) container.style.display = 'grid';
    }
    
    // Show error
    function showError(message) {
      if (loadingState) loadingState.style.display = 'none';
      if (container) {
        container.style.display = 'block';
        container.innerHTML = `
          <div class="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
            <svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-xl font-semibold text-red-900 mb-2">Error Loading Content</h3>
            <p class="text-red-700 mb-6">${message}</p>
            <button onclick="location.reload()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition">
              Reload Page
            </button>
          </div>
        `;
      }
    }
    
    // Debounce function for search/filter
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
    
    // Load data immediately on page load
    loadData();
  });
</script>
