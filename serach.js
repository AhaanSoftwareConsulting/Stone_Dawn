document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.getElementById('searchToggle');

  if (searchToggle) {
    searchToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Find the elements exactly when the click happens
      const wrapper = this.closest('.search-wrapper');
      const input = wrapper.querySelector('.search-input');

      if (wrapper) {
        wrapper.classList.toggle('active');

        // Focus the input if it's opening
        if (wrapper.classList.contains('active') && input) {
          setTimeout(() => input.focus(), 100);
        }
      }
    });
  }

  // Close search if clicking anywhere else
  document.addEventListener('click', function (e) {
    const activeWrapper = document.querySelector('.search-wrapper.active');
    if (activeWrapper && !activeWrapper.contains(e.target)) {
      activeWrapper.classList.remove('active');
    }
  });
});