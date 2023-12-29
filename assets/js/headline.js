/* const titleFoods = document.createElement("h1")
    titleFoods.innerHTML = foods.name;
    globalInfos.classList.add("titleFood")
    globalInfos.appendChild(globalInfos)
   /*  let foods = featured = [] */ 
   
/* mettre par selection d'element showrate */
/* function changeTitleFoods() {
    const headlineFoods = document.getElementsByClassName('titleFoods');
    for (let i = 0; i< foods.length; i++){
        titleFoods[i].innerText = foods.name[0];
    }
    
}
changeTitleFoods()
console.log(changeTitleFoods) */

/* function foodImage () {
    const food = document.querySelector (".foodTag")
    foods.map(food => {
        food.food_pic = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${food.photos[0].photo_reference}&key=${apiKey}`
    })
    console.log(foods)
} */



/* const headlineTitle = document.querySelector('.titleFoods');
const headlineTitle = document.createElement('h1')
      headlineTitle.textContent = headlineTitle.name */
    
      function createHeadline(headline) {

      const imageFeatured = document.querySelector('.imageFeatured');
      imageFeatured.src = headline.food_pic;

      const headlineTitle = document.querySelector ('.titleFoods');
      headlineTitle.textContent = headline.name;

      const rate = document.querySelector ('.rate');
      rate.textContent = headline.rating;

      const dollar = document;querySelector('.dollar');
      /* regarder la console pour extraire */
    } 
    createHeadline()
    
      /* titleFoods.addEventListener('mouseover', function() {
        titleFoods.style.cursor = "pointer"
    }); */
    /* imageFeatured.addEventListener("mouseenter", function() {
        imageFeatured.style.cursor = "crosshair"
      }) */