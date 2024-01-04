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

const btnCardTags = document.querySelectorAll('.btn-card-tag');
btnCardTags.forEach((btnTag) => {
  btnTag.addEventListener('click', (e) => {
    const { type } = e.target.closest('.btn-card-tag').dataset;
    // eslint-disable-next-line no-undef
    search(type);
  });
});
