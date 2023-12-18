let foods = featured = []
let pos = headline = null

//## 
document.addEventListener('DOMContentLoaded', function(){

    // Entering main app from Splashcreen
    enterButton.addEventListener('click', function (e) {

        e.preventDefault()
        splashscreen.classList.remove('active')
        homepage.classList.add('active')
        return false

    }, false)

    resquestPosition()

})

//## 
function resquestPosition() {

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }

                callFooding(pos)

            }
        );
    } else {
        // Browser doesn't support Geolocation
        console.error('Browser doesn’t support Geolocation')
    }

}

//##
function callFooding(pos) {

    const urlAPI = `https://maps.googleapis.com/maps/api/place/search/json?location=${pos.lat},${pos.lng}&radius=5000&sensor=false&key=AIzaSyBx0oIHUf6rMkuA3QAF5o_vd9VhoT-YZF0&type=restaurant`

	fetch(urlAPI)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			foods = data.results

            foods.map(food => {
                food.food_pic = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${food.photos[0].photo_reference}&key=AIzaSyBx0oIHUf6rMkuA3QAF5o_vd9VhoT-YZF0`
            })

            headline = getRandomItem(foods, 1)
            featured = getRandomItem(foods, 6)

            initHomePage()

		})
		.catch(function(error) {
			console.error(error)
		})

}


function getRandomItem(items, num) {

    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);

}