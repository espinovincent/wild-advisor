import { tags } from "./tags.js";

function createTags() {
  const cards = document.querySelector(".cards-tag");
  tags.forEach((tag) => {
    cards.innerHTML += `
        <div class="card-tag" data-type="${tag.name}">
            <div>
                <img src="${tag.img}" alt="${tag.name}" />
            </div>
            <span>${tag.name}</span>
        </div>
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
