const popLegales = document.querySelector("#legales");
const btnLegales = document.querySelector("#openLegales");
const closePopin = document.querySelector(".closePopin");

btnLegales.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    popLegales.classList.add("show");
    return false;
  },
  false,
);

closePopin.addEventListener("click", (e) => {
  e.preventDefault();
  popLegales.classList.remove("show");
  return false;
});
