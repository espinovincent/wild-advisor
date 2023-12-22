import { tags } from "./tags.js";

function createTags() {
  const cards = document.querySelector(".cards-tag");
  tags.forEach((tag) => {
    cards.innerHTML += `
        <button type="button" class="card-tag" data-type="${tag.name}">
            <figure>
                <img src="${tag.img}" alt="${tag.name}" />
            </figure>
            <figcaption>${tag.name}</figcaption>
        </button>
    `;
  });
}

createTags();

const cards = document.querySelector(".cards-tag");
cards.addEventListener("click", (e) => {
    const type = e.target.closest(".card-tag").getAttribute("data-type");
    //const type = e.target.closest(".card-tag").dataset.type;
    console.log(type);
});
