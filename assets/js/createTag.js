// eslint-disable-next-line import/extensions
import { tags } from './tags.js';

function createTags() {
  const cards = document.querySelector('.cards-tag');
  tags.forEach((tag) => {
    cards.innerHTML += `
        <button type="button" class="btn-card-tag" data-type="${tag.name}">
            <figure>
                <img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/${tag.slug}-71.png" alt="${tag.name}" />
            </figure>
            <figcaption>${tag.name}</figcaption>
        </button>
    `;
  });
}

createTags();

/* const cards = document.querySelector(".cards-tag");
cards.addEventListener("click", (e) => {
    const type = e.target.closest(".btn-card-tag").getAttribute("data-type");
    //const type = e.target.closest(".card-tag").dataset.type;
    console.log(type);
}); */

const btnCardTags = document.querySelectorAll('.btn-card-tag');
btnCardTags.forEach((btnTag) => {
  btnTag.addEventListener('click', (e) => {
    // eslint-disable-next-line prefer-destructuring
    const type = e.target.closest('.btn-card-tag').dataset.type;
    // eslint-disable-next-line no-undef
    search(type);
  });
});
