/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/chats-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images sync \\.(png|jpe?g|svg)$":
/*!*****************************************************!*\
  !*** ./images sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./kek.jpeg\": \"./images/kek.jpeg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images sync \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack:///./images_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images/kek.jpeg":
/*!*************************!*\
  !*** ./images/kek.jpeg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/kek.jpeg\");\n\n//# sourceURL=webpack:///./images/kek.jpeg?");

/***/ }),

/***/ "./scripts/chats-list.js":
/*!*******************************!*\
  !*** ./scripts/chats-list.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_chats_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/chats-list.css */ \"./styles/chats-list.css\");\n/* harmony import */ var _styles_chats_list_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_chats_list_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/general.css */ \"./styles/general.css\");\n/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_general_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_chat_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/chat-header.css */ \"./styles/chat-header.css\");\n/* harmony import */ var _styles_chat_header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_header_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_avatar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/avatar.css */ \"./styles/avatar.css\");\n/* harmony import */ var _styles_avatar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_avatar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/button.css */ \"./styles/button.css\");\n/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_button_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction importAll(r) {\n  return r.keys().map(r);\n}\nvar images = importAll(__webpack_require__(\"./images sync \\\\.(png|jpe?g|svg)$\"));\nvar chat = document.querySelector(\".chat-with-person\");\nchat.addEventListener('click', goToMessagesPage.bind(undefined));\nfunction goToMessagesPage() {\n  // chat.preventDefault();\n  window.location.href = './messages-page.html';\n}\n\n//# sourceURL=webpack:///./scripts/chats-list.js?");

/***/ }),

/***/ "./styles/avatar.css":
/*!***************************!*\
  !*** ./styles/avatar.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/avatar.css?");

/***/ }),

/***/ "./styles/button.css":
/*!***************************!*\
  !*** ./styles/button.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/button.css?");

/***/ }),

/***/ "./styles/chat-header.css":
/*!********************************!*\
  !*** ./styles/chat-header.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chat-header.css?");

/***/ }),

/***/ "./styles/chats-list.css":
/*!*******************************!*\
  !*** ./styles/chats-list.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chats-list.css?");

/***/ }),

/***/ "./styles/general.css":
/*!****************************!*\
  !*** ./styles/general.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/general.css?");

/***/ })

/******/ });