/* eslint-disable no-use-before-define */
// ## What to do once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Entering main app from Splashcreen
  // eslint-disable-next-line no-undef
  enterButton.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-undef
      splashscreen.classList.remove('active');
      // eslint-disable-next-line no-undef
      homepage.classList.add('active');
      return false;
    },
    false,
  );

  // Ask user for position
  // eslint-disable-next-line no-use-before-define
  resquestPosition();
});

// ## Use the HTML geolocation to get User's GPS Location
function resquestPosition() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // eslint-disable-next-line no-undef
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // eslint-disable-next-line no-use-before-define, no-undef
      callFooding(pos);
    });
  } else {
    // Browser doesn't support Geolocation
    // eslint-disable-next-line no-console
    console.error('Browser doesn’t support Geolocation');
  }
}

// ## Call Google Maps Places API to get up to 20 results from a radius around the GPS position
function callFooding(pos) {
  // eslint-disable-next-line no-undef
  const urlAPI = `https://maps.googleapis.com/maps/api/place/search/json?location=${pos.lat},${pos.lng}&radius=${radius}&sensor=false&key=${apiKey}&type=restaurant`;

  fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-undef
      foods = data.results;

      // eslint-disable-next-line no-undef, array-callback-return
      foods.map((food) => {
        // eslint-disable-next-line no-param-reassign, no-undef
        food.food_pic = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${food.photos[0].photo_reference}&key=${apiKey}`;
      });

      // Select randomly the headline
      // TODO LATER: Get it from recorded items from the BackEnd
      // eslint-disable-next-line no-undef
      headline = getRandomItem(foods, 1);

      // Select randomly the featured
      // TODO LATER: Get them from recorded items from the BackEnd
      // eslint-disable-next-line no-undef
      featured = getRandomItem(foods, 6);

      // Construct the Homepage with the gathered datas
      // eslint-disable-next-line no-undef
      initHomePage();
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}

// ## Pick random item(s) from a list of items
function getRandomItem(items, num) {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
