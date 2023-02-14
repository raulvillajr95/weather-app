import './style.css';
import './reset.css';
import { displayForm, formEventHandler } from './form';
import { loadElemToContainer } from './helpers';

displayForm();
formEventHandler();
// Pre loaded weather container
loadElemToContainer('#content', 'div', 'weather-container');

/**
 *
 *
 * notes:
 *  setup blank html, js, & css all linked up ✅
 *  write functions that take location and return weather data, clg for now ✅
 *  write functions that take full data and return only data needed ✅
 *  set up simple form, input location and fetch weather info, clg for now ✅
 *  display information, no more clg ✅
 *    create function that displays the data
 *      add that function inside .then() taking in the obj result
 *    create function that clears current weather displayed
 *    handle errors
 *      something simple like "please enter a valid city"
 *  add css.
 *    nicely improved css
 *    in js adjust it to night/day background
 *    addjust pics for temperature and conditions
 *      use giphy if needed
 *    css for error page too
 *  add loading screen while the api is fetching
 *
 */
