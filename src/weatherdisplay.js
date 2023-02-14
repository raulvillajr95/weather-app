import {
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
} from './helpers';

// input weather object, output weather display
const displayWeather = (weatherObj) => {
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
    `http://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`
  );

  // description
  loadElemToContainer('#weather-container', 'p', 'description');
  addTextToElem('#description', `${weatherObj.description}`);
};

const displayWeatherError = () => {
  loadElemToContainer('#weather-container', 'h2', 'error');
  addTextToElem('#error', 'Please enter a valid city');
};

export { displayWeather, displayWeatherError };
