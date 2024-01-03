const searchWrapper = document.querySelector(".searchWrapper");
const searchResultContain = searchWrapper.querySelector("#searchResult");

function search(saisie) {
  let searchResult = [];
  if (saisie.length >= 1) {
    searchWrapper.style.display = "block";
    searchResult = foods.filter((food) => {
      const isTypeMatch = food.types.some((type) =>
        type.includes(saisie.toLowerCase())
      );
      const isNameMatch = food.name
        .toLowerCase()
        .includes(saisie.toLowerCase());
      return isNameMatch || isTypeMatch;
    });
    searchResultContain.innerHTML = ``;
    searchResult.map((result) => {
      searchResultContain.innerHTML += createCartSearch(result);
    });
  } else {
    searchWrapper.style.display = "none";
  }
}
const inputSearch = document.querySelector("#search-input");
inputSearch.addEventListener("input", function (event) {
  saisie = event.target.value;
  search(saisie);
});

function createCartSearch(card) {
  return `
  <div class="card-result">
    <div class="left">
      <div>
        <img
          src="${card.food_pic}"
          alt="${Math.trunc(card.food_pic)}"/>
        <button class="btn-like">
        </button>
      </div>
      <div>
        <div class="rating-score">
            <span><img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(
              card.rating
            )}" title="${Math.trunc(card.rating)}"></span>
            <span>${card.rating}</span>
        </div>
        <div>$$$</div>
      </div>
    </div>

    <div class="right">
      <div class="card-result-info">
        <h2>${card.name}</h2>
        <p>${card.vicinity}</p>
      </div>
      <div class="localisation">
        <p>702m from your position</p>
        <button>maps</button>
      </div>
    </div>
  </div>`;
}
