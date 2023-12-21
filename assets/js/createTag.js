import { tags } from "./tags.js";

function createTags() {
  const cards = document.querySelector(".cards-tag");
  tags.forEach((tag) => {
    cards.innerHTML += `
        <div class="card-tag">
            <div>
                <img src="${tag.img}" alt="${tag.name}" />
            </div>
            <span>${tag.name}</span>
        </div>
    `;
  });
}

createTags();
