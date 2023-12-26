//## What to do while the user us busy with the SplashScreen
//   Getting the whole app ready for him to say 'Wow', without waiting a split second
function initHomePage() {

    featured.map(feat => {

        // TODO LATER: Add a button around the whole element, leading to the restaurant's page with details

        // Create figcaption containing the rate and the star
        let featRating = document.createElement('figcaption')
            featRating.classList.add('rating')
            featRating.innerHTML = `<div class="rating-score">
                                        <span><img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(feat.rating)}" title="${Math.trunc(feat.rating)}"></span>
                                        <span>${feat.rating}</span>
                                    </div>`

        // Create the image and its ajdointed background
        let featImage = document.createElement('img')
            featImage.classList.add('cover')
            featImage.setAttribute('src', 'assets/images/template/featured-blank.webp')
            featImage.setAttribute('alt', feat.name)
            featImage.setAttribute('title', feat.name)
            featImage.setAttribute('style', `background-image: url(${feat.food_pic})`)

        // Put the image and rate in the figcaption
        let featFigure = document.createElement('figure')
            featFigure.appendChild(featImage)
            featFigure.appendChild(featRating)

        // Create the name title
        let featName = document.createElement('h3')
            featName.textContent = feat.name

        // Create the article and put the name and cover in it
        let featArticle = document.createElement('article')
            featArticle.appendChild(featFigure)
            featArticle.appendChild(featName)

        // Put everything together
        let featItm = document.createElement('li')
            featItm.classList.add('featured')
            featItm.appendChild(featArticle)

        featuredHomeList.appendChild(featItm)

    })

}
document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('search-form');
    var showSearchBtn = document.getElementById('show-search-btn');
    var logoContainer = document.getElementById('logo-container');
    var searchInput = document.getElementById('search-input');
    var searchContainer = document.getElementById('search-container');

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