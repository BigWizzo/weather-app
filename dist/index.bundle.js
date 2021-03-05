/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './styles.css';\n\nfunction getWeather(city){\n  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5b18a07839188e5de8e8db9b8a49386`, {mode: 'cors'})\n    .then(function(response) {\n      return response.json();\n    })\n    .then(function(response) {\n      temperature = response.main.temp\n      const temp = document.querySelector('#temp');\n      temp.textContent = temperature;\n    });\n}\n\ndocument.querySelector('#city-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const cityName = document.querySelector('#city-name').value;\n  console.log(cityName);\n  if (cityName === '') {\n    return alert('Please fill in all the fields', 'danger');\n  } else {\n      getWeather(cityName);\n  }\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;