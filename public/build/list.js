"use strict";
(self["webpackChunkNameX"] = self["webpackChunkNameX"] || []).push([["list"],{

/***/ "./assets/list.js":
/*!************************!*\
  !*** ./assets/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");







var copyToast = new bootstrap__WEBPACK_IMPORTED_MODULE_6__.Toast('#copyToast', {
  autohide: true,
  delay: 2000
});
var listGroupItems = document.querySelectorAll('.list-group-item');
var actions = document.querySelector('#actions');
var btnCopy = document.querySelector('#btnCopy');
var btnStats = document.querySelector('#btnStats');
var btnDelete = document.querySelector('#btnDelete');
var URL_DELETE = '/ajax/delete';
var URL_STATISTICS = '/statistics';
var selectedItem = null;
var hash = null;
listGroupItems.forEach(function (item) {
  item.addEventListener('click', function () {
    if (selectedItem === this) {
      selectedItem = null;
      hash = null;
      this.classList.remove('active');
      toggleButtonsInteraction(true);
      return;
    }

    listGroupItems.forEach(function (item) {
      return item.classList.remove('active');
    });
    selectedItem = this;
    hash = selectedItem.dataset.hash;
    selectedItem.classList.add('active');
    toggleButtonsInteraction();
  });
});
btnCopy.addEventListener('click', function () {
  var link = document.querySelector("#anchor_".concat(hash));
  navigator.clipboard.writeText(link.href).then(function () {
    copyToast.show();
  });
});
btnStats.addEventListener('click', function () {
  if (hash) {
    window.open("".concat(URL_STATISTICS, "/").concat(hash));
  }
});
btnDelete.addEventListener('click', function () {
  fetch("".concat(URL_DELETE, "/").concat(hash)).then(function (response) {
    return response.json();
  }).then(handleData);
});

var toggleButtonsInteraction = function toggleButtonsInteraction() {
  var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  Array.from(actions.children).forEach(function (button) {
    button.disabled = isDisabled;
  });
};

var handleData = function handleData(data) {
  switch (data.statusCode) {
    case 'DELETE_SUCCESSFUL':
      selectedItem.remove();
      break;
  }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-7be9a5","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--d86934","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-e7a6be"], () => (__webpack_exec__("./assets/list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV2hDLE9BQU8sQ0FBQ2lDLFFBQW5CLEVBQTZCeEIsT0FBN0IsQ0FBcUMsVUFBQXlCLE1BQU0sRUFBSTtBQUMzQ0EsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCTCxVQUFsQjtBQUNILEdBRkQ7QUFHSCxDQUpEOztBQU1BLElBQU1ELFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNPLElBQVQsRUFBZTtBQUM5QixVQUFRQSxJQUFJLENBQUNDLFVBQWI7QUFDSSxTQUFLLG1CQUFMO0FBQ0k5QixNQUFBQSxZQUFZLENBQUNNLE1BQWI7QUFDSjtBQUhKO0FBS0gsQ0FORCIsInNvdXJjZXMiOlsid2VicGFjazovL05hbWVYLy4vYXNzZXRzL2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiYm9vdHN0cmFwXCI7XG5cbmNvbnN0IGNvcHlUb2FzdCA9IG5ldyBUb2FzdCgnI2NvcHlUb2FzdCcse1xuICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgIGRlbGF5OiAyMDAwXG59KTtcblxuXG5jb25zdCBsaXN0R3JvdXBJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWdyb3VwLWl0ZW0nKTtcbmNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aW9ucycpO1xuXG5jb25zdCBidG5Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNvcHknKTtcbmNvbnN0IGJ0blN0YXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blN0YXRzJyk7XG5jb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuRGVsZXRlJyk7XG5cbmNvbnN0IFVSTF9ERUxFVEUgPSAnL2FqYXgvZGVsZXRlJztcbmNvbnN0IFVSTF9TVEFUSVNUSUNTID0gJy9zdGF0aXN0aWNzJ1xuXG5sZXQgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbmxldCBoYXNoID0gbnVsbDtcblxubGlzdEdyb3VwSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gdGhpcykge1xuICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICBoYXNoID0gbnVsbDtcbiAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgdG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uKHRydWUpO1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgfVxuXG4gICAgICAgbGlzdEdyb3VwSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgICAgc2VsZWN0ZWRJdGVtID0gdGhpcztcbiAgICAgICBoYXNoID0gc2VsZWN0ZWRJdGVtLmRhdGFzZXQuaGFzaDtcbiAgICAgICBzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgdG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uKCk7XG4gICB9KVxufSk7XG5cbmJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FuY2hvcl8ke2hhc2h9YCk7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluay5ocmVmKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29weVRvYXN0LnNob3coKTtcbiAgICB9KTtcbn0pXG5cbmJ0blN0YXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oYCR7VVJMX1NUQVRJU1RJQ1N9LyR7aGFzaH1gKTtcbiAgICB9XG59KVxuXG5idG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBmZXRjaChgJHtVUkxfREVMRVRFfS8ke2hhc2h9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihoYW5kbGVEYXRhKTtcbn0pXG5cbmNvbnN0IHRvZ2dsZUJ1dHRvbnNJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uKGlzRGlzYWJsZWQgPSBmYWxzZSkge1xuICAgIEFycmF5LmZyb20oYWN0aW9ucy5jaGlsZHJlbikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIH0pXG59XG5cbmNvbnN0IGhhbmRsZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgc3dpdGNoIChkYXRhLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgY2FzZSAnREVMRVRFX1NVQ0NFU1NGVUwnOlxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnJlbW92ZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG59Il0sIm5hbWVzIjpbIlRvYXN0IiwiY29weVRvYXN0IiwiYXV0b2hpZGUiLCJkZWxheSIsImxpc3RHcm91cEl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3IiLCJidG5Db3B5IiwiYnRuU3RhdHMiLCJidG5EZWxldGUiLCJVUkxfREVMRVRFIiwiVVJMX1NUQVRJU1RJQ1MiLCJzZWxlY3RlZEl0ZW0iLCJoYXNoIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uIiwiZGF0YXNldCIsImFkZCIsImxpbmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJocmVmIiwidGhlbiIsInNob3ciLCJ3aW5kb3ciLCJvcGVuIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJoYW5kbGVEYXRhIiwiaXNEaXNhYmxlZCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJkYXRhIiwic3RhdHVzQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=