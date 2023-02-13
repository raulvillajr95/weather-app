import {
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
  clearDisplay,
} from './helpers';
import getWeatherData from './weather';

// Display full form
const displayForm = () => {
  // main for element
  loadElemToContainer('#content', 'form', 'main-form');

  // city
  loadElemToContainer('#main-form', 'label', 'city-label');
  addTextToElem('#city-label', 'City');
  addAttributeToElem('#city-label', 'for', 'city');
  loadElemToContainer('#main-form', 'input', 'city');
  addAttributeToElem('#city', 'type', 'text');
  addAttributeToElem('#city', 'name', 'city');

  // submit
  loadElemToContainer('#main-form', 'input', 'submit');
  addAttributeToElem('#submit', 'type', 'submit');
  addAttributeToElem('#submit', 'value', 'Submit');
};
displayForm();

// form event handler
const submit = document.querySelector('#submit');
const city = document.querySelector('#city');
submit.addEventListener('click', (event) => {
  event.preventDefault();

  getWeatherData(city.value).then(console.log);
});

export default displayForm;
