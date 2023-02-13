// Input city, output weather object
async function getWeatherObj(location) {
  // fetching latitude and latitude
  const latLongResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=76c50057b46e3edc9ae3c2c9978ab3f3`
  );
  const latLongObj = await latLongResponse.json();

  // fetch weather
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latLongObj[0].lat}&lon=${latLongObj[0].lon}&appid=76c50057b46e3edc9ae3c2c9978ab3f3&units=imperial`
  );
  const weatherObj = await weatherResponse.json();

  return weatherObj;
}

// Input weather object, receive neccesary data
async function getWeatherData(location) {
  const weatherObject = await getWeatherObj(location);

  const weatherData = {
    temperature: weatherObject.main.temp,
    city: weatherObject.name,
    icon: weatherObject.weather[0].icon,
    description: weatherObject.weather[0].description,
  };

  return weatherData;
}

export default getWeatherData;
