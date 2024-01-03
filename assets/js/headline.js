function createHeadline(headline) {
      console.log("headline",headline);
      const imageFeatured = document.querySelector('.imageFeatured');
      imageFeatured.src = headline.food_pic;

      const headlineTitle = document.querySelector('.titleFoods');
      headlineTitle.textContent = headline.name;

      const rate = document.querySelector('.rate');
      /* rate.textContent = headline.rating; */
      rate.innerHTML = `<div class="rating-score">
                                        <span><img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(feat.rating)}" title="${Math.trunc(feat.rating)}"></span>
                                        <span>${feat.rating}</span>
                                    </div>`

      const dollar = document.querySelector('.dollar');
      dollar.textContent = headline.price_level;
}
