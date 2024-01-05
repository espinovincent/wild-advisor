/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// ## Define Google Maps API Key and options
const apiKey = 'AIzaSyBx0oIHUf6rMkuA3QAF5o_vd9VhoT-YZF0';
const radius = 10000;

// ## Define most used elements in variables
const splashscreen = document.querySelector('#splashScreen');
const enterButton = splashscreen.querySelector('#enterButton');

const homepage = document.querySelector('#homePage');
const featuredHomeList = document.querySelector('#featuredHomeList');

// ## Items and details settled to variables
let foods = (featured = []);
let pos = (headline = null);
