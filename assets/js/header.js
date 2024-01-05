
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const showSearchBtn = document.getElementById('show-search-btn');
  const logoContainer = document.getElementById('logo-container');
  const searchInput = document.getElementById('search-input');
  const searchContainer = document.getElementById('search-container');
  const splashScreen = document.getElementById('splashScreen');
  const homePage = document.getElementById('homePage');

  document
    .getElementById("show-search-btn")
    .addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the click from propagating to the document
      searchForm.style.display = "block";
      showSearchBtn.style.display = "none";
      logoContainer.style.display = "none";
    });

  searchContainer.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
  });

  // Hide show-search-btn and display search-form when clicking outside the search container
  document.addEventListener("click", () => {
    if (searchForm.style.display === "block" && !searchInput.value.trim()) {
      searchForm.style.display = "none";
      showSearchBtn.style.display = "block";
      logoContainer.style.display = "block";
    }
  });

  document
    .getElementById("search-input-form")
    .addEventListener("submit", (event) => {
      // Prevent the form from submitting (you can add your form submission logic here)
      event.preventDefault();
      // Your search logic here
      // eslint-disable-next-line no-console
      console.log("Search submitted: ", searchInput.value.trim());
    });

  const logoBlack = document.getElementById('logoBlack');
  if (logoBlack) {
    logoBlack.addEventListener('click', () => {
      // Hide the splash screen
      splashScreen.classList.remove('active');

      // Show the home page
      homePage.classList.add('active');

      // Navigate to index.html
      window.location.href = 'index.html';
    });
  }

  // Add click event listener to Home button for navigating to index.html
  const homeButton = document.querySelector('.bottom-bar button:nth-child(1)');
  if (homeButton) {
    homeButton.addEventListener('click', () => {
      // Hide the splash screen
      splashScreen.classList.remove('active');

      // Show the home page
      homePage.classList.add('active');

      // Navigate to index.html
      window.location.href = 'index.html';
    });
  }
});
