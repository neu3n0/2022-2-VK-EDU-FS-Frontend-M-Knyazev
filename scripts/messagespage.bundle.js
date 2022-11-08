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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/messages-page.js");
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

/***/ "./scripts/messages-page.js":
/*!**********************************!*\
  !*** ./scripts/messages-page.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_messages_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/messages-page.css */ \"./styles/messages-page.css\");\n/* harmony import */ var _styles_messages_page_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_messages_page_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/general.css */ \"./styles/general.css\");\n/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_general_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_chat_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/chat-header.css */ \"./styles/chat-header.css\");\n/* harmony import */ var _styles_chat_header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_header_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_avatar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/avatar.css */ \"./styles/avatar.css\");\n/* harmony import */ var _styles_avatar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_avatar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/button.css */ \"./styles/button.css\");\n/* harmony import */ var _styles_button_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_button_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nfunction importAll(r) {\n  return r.keys().map(r);\n}\nvar images = importAll(__webpack_require__(\"./images sync \\\\.(png|jpe?g|svg)$\"));\nvar back = document.querySelector(\".button-back\");\nback.addEventListener('click', goToChatPage.bind(undefined));\nfunction goToChatPage() {\n  window.location.href = './chats-list.html';\n}\nvar form = document.querySelector('.form-message');\nvar input = document.querySelector('.form-input');\nvar message_container = document.querySelector('.message-container');\nvar sendButton = document.querySelector(\".button-send\");\nvar myName = 'Scary Kitty';\n// localStorage.clear();\ncheckLocalStorage();\ngetMessageFromLS();\nvar objDiv = document.querySelector(\".content-chat\");\nobjDiv.scrollTop = objDiv.scrollHeight;\nform.addEventListener('submit', handleSubmit.bind());\nform.addEventListener('keypress', handleKeyPress.bind());\nform.addEventListener('click', handleSendButton.bind());\nsendButton.addEventListener('click', handleSendButton.bind(undefined));\nfunction handleSubmit(event) {\n  event.preventDefault();\n  sendMessage();\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    form.dispatchEvent(new Event('submit'));\n  }\n}\nfunction handleSendButton(event) {\n  form.dispatchEvent(new Event('submit'));\n}\nfunction showMessage(message) {\n  var new_message = document.createElement('div');\n  new_message.className = 'message';\n  if (message.name != myName) new_message.style.justifyContent = 'start';\n  var new_message_wrap = document.createElement('div');\n  new_message_wrap.className = 'message-wrap';\n  var user_message_text = document.createElement('span');\n  user_message_text.className = 'message-text';\n  user_message_text.innerHTML = message.text;\n  var nowTime = new Date();\n  var user_message_time = document.createElement('span');\n  user_message_time.className = 'message-time';\n  user_message_time.innerHTML = message.time;\n  new_message_wrap.append(user_message_text);\n  new_message_wrap.append(user_message_time);\n  new_message.append(new_message_wrap);\n  message_container.append(new_message);\n  input.value = '';\n}\nfunction sendMessage() {\n  if (input.value === '') return;\n  var name = myName;\n  var text = input.value;\n  if (text == '/clear') {\n    localStorage.clear();\n    input.value = '';\n    location.reload();\n    return;\n  }\n  if (text[0] == '/') {\n    name = 'Kek';\n    text = text.slice(1);\n  }\n  var nowTime = new Date();\n  var message = {\n    'name': name,\n    'text': text,\n    'time': String(nowTime.getHours()) + \":\" + (nowTime.getMinutes() < 10 ? '0' + String(nowTime.getMinutes()) : String(nowTime.getMinutes()))\n  };\n  saveMessageToLS(message);\n  showMessage(message);\n  var objDiv = document.querySelector(\".content-chat\");\n  objDiv.scrollTop = objDiv.scrollHeight;\n}\nfunction checkLocalStorage() {\n  if (!localStorage.getItem('messages-container')) {\n    localStorage.setItem('messages-container', JSON.stringify({\n      'messages': []\n    }));\n  }\n}\nfunction saveMessageToLS(message) {\n  var messages_container = localStorage.getItem('messages-container');\n  var messages = JSON.parse(messages_container);\n  messages.messages.push(message);\n  localStorage.setItem('messages-container', JSON.stringify(messages));\n}\nfunction getMessageFromLS() {\n  var messages_container = localStorage.getItem('messages-container');\n  if (!message_container) return;\n  var messages = JSON.parse(messages_container);\n  var _iterator = _createForOfIteratorHelper(messages.messages),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      showMessage(message);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./scripts/messages-page.js?");

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

/***/ "./styles/general.css":
/*!****************************!*\
  !*** ./styles/general.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/general.css?");

/***/ }),

/***/ "./styles/messages-page.css":
/*!**********************************!*\
  !*** ./styles/messages-page.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/messages-page.css?");

/***/ })

/******/ });