import './style.css';
import './reset.css';
import displayForm from './form';
import getWeatherData from './weather';

displayForm();
getWeatherData().then(console.log);

/**
 *
 *
 * notes:
 *  setup blank html, js, & css all linked up ✅
 *  write functions that take location and return weather data, clg for now ✅
 *  write functions that take full data and return only data needed ✅
 *    grab temperature, city, state, and country
 *    also icon name, weather details
 *  set up simple form, input location and fetch weather info, clg for now
 *  display information, no more clg
 *  add css.
 *    nicely improved css
 *    in js adjust it to night/day background
 *    addjust pics for temperature and conditions
 *      use giphy if needed
 *  add loading screen while the api is fetching
 *
 */
