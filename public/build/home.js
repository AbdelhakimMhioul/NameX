(self["webpackChunkNameX"] = self["webpackChunkNameX"] || []).push([["home"],{

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
var errorMessages = {
  'INVALID_ARG_URL': "Impossible to shorten this link. It is not a valid url",
  'MISSING_ARG_URL': "Please provide a valid URL"
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch('/ajax/shorten', {
    method: 'POST',
    body: new FormData(e.target)
  }).then(function (response) {
    return response.json();
  }).then(handleData);
});

var handleData = function handleData(data) {
  // ERROR
  if (data.statusCode >= 400) {
    return handleError(data);
  }

  inputUrl.value = data.link;
  btnShortenUrl.innerText = "Copy";
  btnShortenUrl.addEventListener('click', function (e) {
    e.preventDefault();
    inputUrl.select();
    document.execCommand('copy');
    this.innerText = "Shorten URL";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmFtZVgvLi9hc3NldHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9OYW1lWC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaHRtbC5qcyIsIndlYnBhY2s6Ly9OYW1lWC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctaHRtbC1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vTmFtZVgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5saW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvcnRlbkZvcm0nKTtcbmNvbnN0IHNob3J0ZW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3J0ZW5DYXJkJyk7XG5jb25zdCBpbnB1dFVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cmwnKTtcbmNvbnN0IGJ0blNob3J0ZW5VcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2hvcnRlblVybCcpO1xuXG5jb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICAgICdJTlZBTElEX0FSR19VUkwnOiBcIkltcG9zc2libGUgdG8gc2hvcnRlbiB0aGlzIGxpbmsuIEl0IGlzIG5vdCBhIHZhbGlkIHVybFwiLFxuICAgICdNSVNTSU5HX0FSR19VUkwnOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgVVJMXCJcbn1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZmV0Y2goJy9hamF4L3Nob3J0ZW4nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEoZS50YXJnZXQpXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihoYW5kbGVEYXRhKTtcbn0pO1xuXG5jb25zdCBoYW5kbGVEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIC8vIEVSUk9SXG4gICAgaWYgKGRhdGEuc3RhdHVzQ29kZSA+PSA0MDApIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKGRhdGEpO1xuICAgIH1cblxuICAgIGlucHV0VXJsLnZhbHVlID0gZGF0YS5saW5rO1xuICAgIGJ0blNob3J0ZW5VcmwuaW5uZXJUZXh0ID0gXCJDb3B5XCI7XG5cbiAgICBidG5TaG9ydGVuVXJsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgIGlucHV0VXJsLnNlbGVjdCgpO1xuICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG5cbiAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiU2hvcnRlbiBVUkxcIjtcbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbmNvbnN0IGhhbmRsZUVycm9yID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJywgJ210LTInKTtcbiAgICBhbGVydC5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2VzW2RhdGEuc3RhdHVzVGV4dF07XG5cbiAgICBzaG9ydGVuQ2FyZC5hZnRlcihhbGVydCk7XG59IiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG5cbi8vIGBDcmVhdGVIVE1MYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlaHRtbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIHRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVIVE1MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1odG1sJyk7XG52YXIgZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctaHRtbC1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubGlua1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ0hUTUxNZXRob2QoJ2xpbmsnKSB9LCB7XG4gIGxpbms6IGZ1bmN0aW9uIGxpbmsodXJsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzaG9ydGVuQ2FyZCIsImlucHV0VXJsIiwiYnRuU2hvcnRlblVybCIsImVycm9yTWVzc2FnZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaGFuZGxlRGF0YSIsImRhdGEiLCJzdGF0dXNDb2RlIiwiaGFuZGxlRXJyb3IiLCJ2YWx1ZSIsImxpbmsiLCJpbm5lclRleHQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsIm9uY2UiLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdGF0dXNUZXh0IiwiYWZ0ZXIiXSwic291cmNlUm9vdCI6IiJ9