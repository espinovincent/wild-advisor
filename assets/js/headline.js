// eslint-disable-next-line no-unused-vars
function createHeadline(headline) {
  const imageFeatured = document.querySelector('.imageFeatured');
  imageFeatured.src = headline.food_pic;

  const headlineTitle = document.querySelector('.titleFoods');
  headlineTitle.textContent = headline.name;

  const rate = document.querySelector('.rate');

  rate.innerHTML = `<div class="ratingHeadline">
                                <span class="headline-span">
                                      <img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(
    headline.rating,
  )}" title="${Math.trunc(headline.rating)}">
                                </span>
                          <span class="headline-span">${headline.rating}</span>
                          </div>`;

  /*if (headline.price_level) {
    const littleInfos = document.querySelector('.littleInfo');
    const divDollar = document.createElement('div');
    divDollar.classList.add('dollar');
    littleInfos.appendChild(divDollar);
    divDollar.innerHTML = `<div class="ratingHeadline">
                                  <span class="dollarImageContainer headline-span"></span>
                            </div>`;

    const containerDollar = document.querySelector('.dollarImageContainer');

    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    /*for (let index = 0; index < headline.price_level; index++) {
      const dollar = document.createElement('img');
      dollar.src = 'assets/images/template/dollar-symbol.png';
      containerDollar.appendChild(dollar);
    }
  }*/
}
