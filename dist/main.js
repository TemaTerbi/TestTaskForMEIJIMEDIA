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

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/sum */ \"./source/js/module/sum.js\");\n/* harmony import */ var _module_sum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_sum__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_openModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/openModal */ \"./source/js/module/openModal.js\");\n/* harmony import */ var _module_openModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_module_openModal__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://testtask/./source/js/main.js?");

/***/ }),

/***/ "./source/js/module/openModal.js":
/*!***************************************!*\
  !*** ./source/js/module/openModal.js ***!
  \***************************************/
/***/ (() => {

eval("function openModal() {\r\n  document.getElementById('btn')\r\n  document.getElementById('modal').classList.toggle('vis')\r\n  document.getElementById('fade').classList.toggle('vis')\r\n}\r\n\r\nfunction closeModal() {\r\n  document.getElementById('close')\r\n  close()\r\n  function close() {\r\n    document.getElementById('fade').classList.toggle('vis')\r\n    document.getElementById('modal').classList.toggle('vis')\r\n  }\r\n}\r\n\r\nfunction openMenu() {\r\n  document.getElementById('menu').classList.toggle('color')\r\n  document.getElementById('menuopen').classList.toggle('menu-vis')\r\n  document.getElementById('info').classList.toggle('info-hide')\r\n}\n\n//# sourceURL=webpack://testtask/./source/js/module/openModal.js?");

/***/ }),

/***/ "./source/js/module/sum.js":
/*!*********************************!*\
  !*** ./source/js/module/sum.js ***!
  \*********************************/
/***/ (() => {

eval("const sum = (a,b) => a + b;\r\nconsole.log(sum(10, 10))\n\n//# sourceURL=webpack://testtask/./source/js/module/sum.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/main.js");
/******/ 	
/******/ })()
;