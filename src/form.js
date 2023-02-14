import {
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
  clearDisplay,
} from './helpers';
import getWeatherData from './weather';
import {
  displayWeather,
  displayWeatherError,
  loadingScreen,
} from './weatherdisplay';

// Display full form
const displayForm = () => {
  // main for element
  loadElemToContainer('#content', 'form', 'main-form');

  // city(label & input in div)
  loadElemToContainer('#main-form', 'label', 'city-label');
  addTextToElem('#city-label', 'City');
  addAttributeToElem('#city-label', 'for', 'city');
  loadElemToContainer('#main-form', 'input', 'city');
  addAttributeToElem('#city', 'type', 'text');
  addAttributeToElem('#city', 'name', 'city');
  addAttributeToElem('#city', 'placeholder', 'Enter city');

  // submit
  loadElemToContainer('#main-form', 'input', 'submit');
  addAttributeToElem('#submit', 'type', 'submit');
  addAttributeToElem('#submit', 'value', 'Submit');
};

// form event handler
const formEventHandler = () => {
  const submit = document.querySelector('#submit');
  const city = document.querySelector('#city');
  submit.addEventListener('click', (event) => {
    event.preventDefault();

    // loading screen
    clearDisplay('#weather-container');
    loadingScreen();

    getWeatherData(city.value)
      .then((result) => {
        displayWeather(result);
        city.value = '';
      })
      .catch(() => {
        displayWeatherError();
      });
  });
};

export { displayForm, formEventHandler };
