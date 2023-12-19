//## What to do once the DOM is loaded
document.addEventListener('DOMContentLoaded', function(){

    // Entering main app from Splashcreen
    enterButton.addEventListener('click', function (e) {

        e.preventDefault()
        splashscreen.classList.remove('active')
        homepage.classList.add('active')
        return false

    }, false)

    // Ask user for position
    resquestPosition()

})

//## Use the HTML geolocation to get User's GPS Location
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

//## Call Google Maps Places API to get up to 20 results from a radius around the GPS position
function callFooding(pos) {

    const urlAPI = `https://maps.googleapis.com/maps/api/place/search/json?location=${pos.lat},${pos.lng}&radius=${radius}&sensor=false&key=${apiKey}&type=restaurant`

	fetch(urlAPI)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			foods = data.results

            foods.map(food => {
                food.food_pic = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${food.photos[0].photo_reference}&key=${apiKey}`
            })

            // Select randomly the headline
            // TODO LATER: Get it from recorded items from the BackEnd
            headline = getRandomItem(foods, 1)
            
            // Select randomly the featured
            // TODO LATER: Get them from recorded items from the BackEnd
            featured = getRandomItem(foods, 6)
            
            // Construct the Homepage with the gathered datas
            initHomePage()

		})
		.catch(function(error) {
			console.error(error)
		})

}

//## Pick random item(s) from a list of items
function getRandomItem(items, num) {

    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);

}