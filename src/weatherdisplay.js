import {
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
  clearDisplay,
} from './helpers';

// input weather object, output weather display
const displayWeather = (weatherObj) => {
  clearDisplay('#weather-container');

  // city
  loadElemToContainer('#weather-container', 'h2', 'city-title');
  addTextToElem('#city-title', `${weatherObj.city}`);

  // temperature
  loadElemToContainer('#weather-container', 'h1', 'temperature');
  addTextToElem('#temperature', `${Math.round(weatherObj.temperature)}°`);

  // icon
  loadElemToContainer('#weather-container', 'img', 'weather-icon');
  addAttributeToElem(
    '#weather-icon',
    'src',
    `https://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`
  );

  // description
  loadElemToContainer('#weather-container', 'p', 'description');
  addTextToElem('#description', `${weatherObj.description}`);
};

const displayWeatherError = () => {
  clearDisplay('#weather-container');

  loadElemToContainer('#weather-container', 'h2', 'error');
  addTextToElem('#error', 'Please enter a valid city');
};

const loadingScreen = () => {
  loadElemToContainer('#weather-container', 'img', 'load-img');

  addAttributeToElem('#load-img', 'src', '../src/loading.svg');
};

export { displayWeather, displayWeatherError, loadingScreen };
