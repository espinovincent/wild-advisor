
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

      const dollar = document.querySelector('.dollar');
      dollar.textContent = headline.price_level;

      /* regarder la console pour extraire */
      const foodTag = document.querySelector('foodTag');
      foodTag.textContent = headline.types.Array;
        
    } 
    createHeadline()

    function createtag() {
        
    }
    
      /* titleFoods.addEventListener('mouseover', function() {
        titleFoods.style.cursor = "pointer"
    }); */
    /* imageFeatured.addEventListener("mouseenter", function() {
        imageFeatured.style.cursor = "crosshair"
      }) */