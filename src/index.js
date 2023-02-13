import './style.css';
import './reset.css';

async function getWeather(location) {
  const weatherObj = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=76c50057b46e3edc9ae3c2c9978ab3f3`
  );

  const axis = weatherObj
    .json()
    .then((result) => [result[0].lat, result[0].lon])
    .then((result2) => {
      const [latitude, longitude] = [result2[0], result2[1]];
      // latitude = result2[0];
      // longitude = result2[1];
      console.log(latitude, longitude, 'result2');
    });
}

getWeather('Los angeles');

/**
 * create weather function
 *  input location city name
 *  output weather data
 */
