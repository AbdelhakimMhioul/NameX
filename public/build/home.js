(self["webpackChunk"] = self["webpackChunk"] || []).push([["home"],{

/***/ "./assets/home.js":
/*!************************!*\
  !*** ./assets/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");

var form = document.querySelector('#shortenForm');
var shortenCard = document.querySelector('#shortenCard');
var inputUrl = document.querySelector('#url');
var btnShortenUrl = document.querySelector('#btnShortenUrl');
var URL_SHORTEN = '/ajax/shorten';
var errorMessages = {
  'INVALID_ARG_URL': "Impossible de raccourcir ce lien. Ce n'est pas une URL valide",
  'MISSING_ARG_URL': "Veuillez fournir une URL valide"
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(URL_SHORTEN, {
    method: 'POST',
    body: new FormData(e.target)
  }).then(function (response) {
    return response.json();
  }).then(handleData);
});

var handleData = function handleData(data) {
  if (data.statusCode >= 400) {
    return handleError(data);
  }

  inputUrl.value = data.link;
  btnShortenUrl.innerText = "Copier";
  btnShortenUrl.addEventListener('click', function (e) {
    e.preventDefault();
    inputUrl.select();
    document.execCommand('copy');
    this.innerText = "Réduire l'URL";
  }, {
    once: true
  });
};

var handleError = function handleError(data) {
  var alert = document.createElement('div');
  alert.classList.add('alert', 'alert-danger', 'mt-2');
  alert.innerText = errorMessages[data.statusText];
  shortenCard.after(alert);
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-7be9a5","vendors-node_modules_core-js_modules_es_promise_js"], () => (__webpack_exec__("./assets/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLElBQUksdUVBQXVFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5saW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvcnRlbkZvcm0nKTtcclxuY29uc3Qgc2hvcnRlbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvcnRlbkNhcmQnKTtcclxuY29uc3QgaW5wdXRVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXJsJyk7XHJcbmNvbnN0IGJ0blNob3J0ZW5VcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2hvcnRlblVybCcpO1xyXG5cclxuY29uc3QgVVJMX1NIT1JURU4gPSAnL2FqYXgvc2hvcnRlbic7XHJcblxyXG5jb25zdCBlcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgJ0lOVkFMSURfQVJHX1VSTCc6IFwiSW1wb3NzaWJsZSBkZSByYWNjb3VyY2lyIGNlIGxpZW4uIENlIG4nZXN0IHBhcyB1bmUgVVJMIHZhbGlkZVwiLFxyXG4gICAgJ01JU1NJTkdfQVJHX1VSTCc6IFwiVmV1aWxsZXogZm91cm5pciB1bmUgVVJMIHZhbGlkZVwiXHJcbn1cclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGZldGNoKFVSTF9TSE9SVEVOLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogbmV3IEZvcm1EYXRhKGUudGFyZ2V0KVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oaGFuZGxlRGF0YSk7XHJcbn0pO1xyXG5cclxuY29uc3QgaGFuZGxlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGlmIChkYXRhLnN0YXR1c0NvZGUgPj0gNDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0VXJsLnZhbHVlID0gZGF0YS5saW5rO1xyXG4gICAgYnRuU2hvcnRlblVybC5pbm5lclRleHQgPSBcIkNvcGllclwiO1xyXG5cclxuICAgIGJ0blNob3J0ZW5VcmwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgaW5wdXRVcmwuc2VsZWN0KCk7XHJcbiAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG5cclxuICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gXCJSw6lkdWlyZSBsJ1VSTFwiO1xyXG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdhbGVydCcsICdhbGVydC1kYW5nZXInLCAnbXQtMicpO1xyXG4gICAgYWxlcnQuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlc1tkYXRhLnN0YXR1c1RleHRdO1xyXG5cclxuICAgIHNob3J0ZW5DYXJkLmFmdGVyKGFsZXJ0KTtcclxufSIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xuXG52YXIgcXVvdCA9IC9cIi9nO1xuXG4vLyBgQ3JlYXRlSFRNTGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWh0bWxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyB0b1N0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gY2hlY2sgdGhlIGV4aXN0ZW5jZSBvZiBhIG1ldGhvZCwgbG93ZXJjYXNlXG4vLyBvZiBhIHRhZyBhbmQgZXNjYXBpbmcgcXVvdGVzIGluIGFyZ3VtZW50c1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW01FVEhPRF9OQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmxpbmtgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2hvcnRlbkNhcmQiLCJpbnB1dFVybCIsImJ0blNob3J0ZW5VcmwiLCJVUkxfU0hPUlRFTiIsImVycm9yTWVzc2FnZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaGFuZGxlRGF0YSIsImRhdGEiLCJzdGF0dXNDb2RlIiwiaGFuZGxlRXJyb3IiLCJ2YWx1ZSIsImxpbmsiLCJpbm5lclRleHQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsIm9uY2UiLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdGF0dXNUZXh0IiwiYWZ0ZXIiXSwic291cmNlUm9vdCI6IiJ9