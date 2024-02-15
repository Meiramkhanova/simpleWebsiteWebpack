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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  const navLinks = document.querySelectorAll(\".nav-links a\");\r\n\r\n  navLinks.forEach((link) => {\r\n    link.addEventListener(\"click\", function (event) {\r\n      event.preventDefault();\r\n      navigateTo(link.getAttribute(\"href\")); // Use href attribute for navigation\r\n      setActiveLink(link);\r\n    });\r\n  });\r\n\r\n  function navigateTo(page) {\r\n    // Example: Load content based on the clicked link's href\r\n    import(/* webpackIgnore: true */ `./${page}`)\r\n      .then((module) => {\r\n        document.getElementById(\"app\").innerHTML = module.default;\r\n      })\r\n      .catch((error) => console.error(\"Error fetching content:\", error));\r\n  }\r\n\r\n  function setActiveLink(clickedLink) {\r\n    navLinks.forEach((link) => {\r\n      link.classList.remove(\"active\");\r\n    });\r\n\r\n    clickedLink.classList.add(\"active\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://webpackintegrproj/./src/index.js?");

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