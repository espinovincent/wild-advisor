/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const searchWrapper = document.querySelector('.searchWrapper');
const searchResultContain = searchWrapper.querySelector('#searchResult');
const btnCloseSearchWrapper = document.querySelector('.btn-close-search-wrapper');

btnCloseSearchWrapper.addEventListener('click', () => {
  searchWrapper.style.display = 'none';
});
function search(saisie) {
  let searchResult = [];
  if (saisie.length >= 1) {
    searchWrapper.style.display = 'block';
    searchResult = foods.filter((food) => {
      const isTypeMatch = food.types.some((type) => type.includes(saisie.toLowerCase()));
      const isNameMatch = food.name
        .toLowerCase()
        .includes(saisie.toLowerCase());
      return isNameMatch || isTypeMatch;
    });
    searchResultContain.innerHTML = '';
    // eslint-disable-next-line array-callback-return
    searchResult.map((result) => {
      searchResultContain.innerHTML += createCartSearch(result);
    });
  } else {
    searchWrapper.style.display = 'none';
  }
}
const inputSearch = document.querySelector('#search-input');
inputSearch.addEventListener('input', (event) => {
  saisie = event.target.value;
  search(saisie);
});

function createCartSearch(card) {
  return `
  <div class="card-result">
    <div class="left">
      <div>
        <img
        src='assets/images/template/featured-blank.webp'
    
          alt="${Math.trunc(card.food_pic)}"
          style="background-image: url(${card.food_pic})"/>
        <button class="btn-like">
        </button>
      </div>
      <div class="note-info">
        <div class="rating-score">
            <span><img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(
    card.rating,
  )}" title="${Math.trunc(card.rating)}"></span>
            <span>${card.rating}</span>
        </div>
        ${card.price_level ? `<div class="rating-price">${'$'.repeat(card.price_level)}</div>` : ''}
      </div>
    </div>

    <div class="right">
      <div class="card-result-info">
        <h2>${card.name}</h2>
        <p>${card.vicinity}</p>
        <div class="localisation">
        <p>${card.types.map((type) => type)}</p>
      </div>
      </div>

    </div>
  </div>`;
}
