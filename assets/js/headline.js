function createHeadline(headline) {
      console.log("headline",headline);
      const imageFeatured = document.querySelector('.imageFeatured');
      imageFeatured.src = headline.food_pic;

      const headlineTitle = document.querySelector('.titleFoods');
      headlineTitle.textContent = headline.name;

      const rate = document.querySelector('.rate');
      /* rate.textContent = headline.rating; */
      rate.innerHTML = `<div class="ratingHeadline">
                              <span>
                                    <img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(headline.rating)}" title="${Math.trunc(headline.rating)}">
                              </span>
                        <span>${headline.rating}</span>
                        </div>`
      const dollar = document.querySelector('.dollar');
      dollar.textContent = headline.price_level;
}
