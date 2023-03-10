import './reset.css';
import './style.css';
// import image from './images/loading.svg';
import { displayForm, formEventHandler } from './form';
import {
  // addAttributeToElem,
  addTextToElem,
  loadElemToContainer,
} from './helpers';

// // Testing...loading svg
// loadElemToContainer('#content', 'img', 'loader');
// addAttributeToElem('#loader', 'src', image);

// Display Title
loadElemToContainer('#content', 'h1', 'main-title');
addTextToElem('#main-title', 'The Weather App');

displayForm();
formEventHandler();
// Pre loaded weather container
loadElemToContainer('#content', 'div', 'weather-container');

/**
 * fix loader
 *  see exactly how it is on github rn cause it works, but i modified this one
 * git push THEN gh-pages
 *  so the branches wont be out of sync
 *
 * notes:
 *  setup blank html, js, & css all linked up ✅
 *  write functions that take location and return weather data, clg for now ✅
 *  write functions that take full data and return only data needed ✅
 *  set up simple form, input location and fetch weather info, clg for now ✅
 *  display information, no more clg ✅
 *  add css ✅
 *  add loading screen while the api is fetching ✅
 *
 */
