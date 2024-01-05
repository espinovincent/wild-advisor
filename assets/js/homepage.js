/* eslint-disable indent */
// ## What to do while the user us busy with the SplashScreen
//   Getting the whole app ready for him to say 'Wow', without waiting a split second
// eslint-disable-next-line no-unused-vars
function initHomePage() {
  createHeadline(headline[0]);

  // eslint-disable-next-line no-undef, array-callback-return
  featured.map((feat) => {
    // eslint-disable-next-line max-len
    // TODO LATER: Add a button around the whole element, leading to the restaurant's page with details

    // Create figcaption containing the rate and the star
    const featRating = document.createElement("figcaption");
    featRating.classList.add("rating");
    featRating.innerHTML = `<div class="rating-score">
                                        <span><img src="assets/images/template/star.svg" class="star" alt="${Math.trunc(
                                          feat.rating,
                                        )}" title="${Math.trunc(
                                          feat.rating,
                                        )}"></span>
                                        <span>${feat.rating}</span>
                                    </div>`;

    // Create the image and its ajdointed background
    const featImage = document.createElement("img");
    featImage.classList.add("cover");
    featImage.setAttribute("src", "assets/images/template/featured-blank.webp");
    featImage.setAttribute("alt", feat.name);
    featImage.setAttribute("title", feat.name);
    featImage.setAttribute("style", `background-image: url(${feat.food_pic})`);

    // Put the image and rate in the figcaption
    const featFigure = document.createElement("figure");
    featFigure.appendChild(featImage);
    featFigure.appendChild(featRating);

    // Create the name title
    const featName = document.createElement("h3");
    featName.textContent = feat.name;

    // Create the article and put the name and cover in it
    const featArticle = document.createElement("article");
    featArticle.appendChild(featFigure);
    featArticle.appendChild(featName);

    // Put everything together
    const featItm = document.createElement("li");
    featItm.classList.add("featured");
    featItm.appendChild(featArticle);

    // eslint-disable-next-line no-undef
    featuredHomeList.appendChild(featItm);
  });
}
