function showrate(foods, featured) {
    const rate = document.querySelector(".rate");
    let foods = featured = []
    return()
}
showrate();
/* mettre par selection d'element showrate */



function foodImage () {
    const food = document;querySelector (".foodTag")
    foods.map(food => {
        food.food_pic = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${food.photos[0].photo_reference}&key=${apiKey}`
    })
    console.log(foods)
}