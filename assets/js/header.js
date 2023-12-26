document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const showSearchBtn = document.getElementById('show-search-btn');
    const logoContainer = document.getElementById('logo-container');
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.getElementById('search-container');

    document.getElementById('show-search-btn').addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        searchForm.style.display = 'block';
        showSearchBtn.style.display = 'none';
        logoContainer.style.display = 'none';
    });

    searchContainer.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
    });

    // Hide show-search-btn and display search-form when clicking outside the search container
    document.addEventListener('click', function() {
        if (searchForm.style.display === 'block' && (!searchInput.value.trim())) {
            searchForm.style.display = 'none';
            showSearchBtn.style.display = 'block';
            logoContainer.style.display = 'block';
        }
    });

    document.getElementById('search-input-form').addEventListener('submit', function(event) {
        // Prevent the form from submitting (you can add your form submission logic here)
        event.preventDefault();
        // Your search logic here
        console.log('Search submitted: ', searchInput.value.trim());
    });
});