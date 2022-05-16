"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["list"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsU0FBUyxHQUFHLElBQUlELDRDQUFKLENBQVUsWUFBVixFQUF1QjtBQUNyQ0UsRUFBQUEsUUFBUSxFQUFFLElBRDJCO0FBRXJDQyxFQUFBQSxLQUFLLEVBQUU7QUFGOEIsQ0FBdkIsQ0FBbEI7QUFNQSxJQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXZCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFFQSxJQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1FLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0EsSUFBTUcsU0FBUyxHQUFHTixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFFQSxJQUFNSSxVQUFVLEdBQUcsY0FBbkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsYUFBdkI7QUFFQSxJQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBWCxjQUFjLENBQUNZLE9BQWYsQ0FBdUIsVUFBQUMsSUFBSSxFQUFJO0FBQzVCQSxFQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDdkMsUUFBSUosWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3ZCQSxNQUFBQSxZQUFZLEdBQUcsSUFBZjtBQUNBQyxNQUFBQSxJQUFJLEdBQUcsSUFBUDtBQUNBLFdBQUtJLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNBQyxNQUFBQSx3QkFBd0IsQ0FBQyxJQUFELENBQXhCO0FBQ0E7QUFDSDs7QUFFRGpCLElBQUFBLGNBQWMsQ0FBQ1ksT0FBZixDQUF1QixVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDRSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEIsQ0FBSjtBQUFBLEtBQTNCO0FBRUFOLElBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0FDLElBQUFBLElBQUksR0FBR0QsWUFBWSxDQUFDUSxPQUFiLENBQXFCUCxJQUE1QjtBQUNBRCxJQUFBQSxZQUFZLENBQUNLLFNBQWIsQ0FBdUJJLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0FGLElBQUFBLHdCQUF3QjtBQUMzQixHQWZEO0FBZ0JGLENBakJEO0FBbUJBWixPQUFPLENBQUNTLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDekMsTUFBTU0sSUFBSSxHQUFHbkIsUUFBUSxDQUFDRyxhQUFULG1CQUFrQ08sSUFBbEMsRUFBYjtBQUNBVSxFQUFBQSxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCSCxJQUFJLENBQUNJLElBQW5DLEVBQXlDQyxJQUF6QyxDQUE4QyxZQUFNO0FBQ2hENUIsSUFBQUEsU0FBUyxDQUFDNkIsSUFBVjtBQUNILEdBRkQ7QUFHSCxDQUxEO0FBT0FwQixRQUFRLENBQUNRLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVc7QUFDMUMsTUFBSUgsSUFBSixFQUFVO0FBQ05nQixJQUFBQSxNQUFNLENBQUNDLElBQVAsV0FBZW5CLGNBQWYsY0FBaUNFLElBQWpDO0FBQ0g7QUFDSixDQUpEO0FBTUFKLFNBQVMsQ0FBQ08sZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBVztBQUMzQ2UsRUFBQUEsS0FBSyxXQUFJckIsVUFBSixjQUFrQkcsSUFBbEIsRUFBTCxDQUNLYyxJQURMLENBQ1UsVUFBQUssUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEbEIsRUFFS04sSUFGTCxDQUVVTyxVQUZWO0FBR0gsQ0FKRDs7QUFNQSxJQUFNZix3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQTZCO0FBQUEsTUFBcEJnQixVQUFvQix1RUFBUCxLQUFPO0FBQzFEQyxFQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV2hDLE9BQU8sQ0FBQ2lDLFFBQW5CLEVBQTZCeEIsT0FBN0IsQ0FBcUMsVUFBQXlCLE1BQU0sRUFBSTtBQUMzQ0EsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCTCxVQUFsQjtBQUNILEdBRkQ7QUFHSCxDQUpEOztBQU1BLElBQU1ELFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNPLElBQVQsRUFBZTtBQUM5QixVQUFRQSxJQUFJLENBQUNDLFVBQWI7QUFDSSxTQUFLLG1CQUFMO0FBQ0k5QixNQUFBQSxZQUFZLENBQUNNLE1BQWI7QUFDSjtBQUhKO0FBS0gsQ0FORCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0IH0gZnJvbSBcImJvb3RzdHJhcFwiO1xyXG5cclxuY29uc3QgY29weVRvYXN0ID0gbmV3IFRvYXN0KCcjY29weVRvYXN0Jyx7XHJcbiAgICBhdXRvaGlkZTogdHJ1ZSxcclxuICAgIGRlbGF5OiAyMDAwXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IGxpc3RHcm91cEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtZ3JvdXAtaXRlbScpO1xyXG5jb25zdCBhY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGlvbnMnKTtcclxuXHJcbmNvbnN0IGJ0bkNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuQ29weScpO1xyXG5jb25zdCBidG5TdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5TdGF0cycpO1xyXG5jb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuRGVsZXRlJyk7XHJcblxyXG5jb25zdCBVUkxfREVMRVRFID0gJy9hamF4L2RlbGV0ZSc7XHJcbmNvbnN0IFVSTF9TVEFUSVNUSUNTID0gJy9zdGF0aXN0aWNzJ1xyXG5cclxubGV0IHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbmxldCBoYXNoID0gbnVsbDtcclxuXHJcbmxpc3RHcm91cEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgICAgICAgICBoYXNoID0gbnVsbDtcclxuICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgIHRvZ2dsZUJ1dHRvbnNJbnRlcmFjdGlvbih0cnVlKTtcclxuICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgbGlzdEdyb3VwSXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgICAgIHNlbGVjdGVkSXRlbSA9IHRoaXM7XHJcbiAgICAgICBoYXNoID0gc2VsZWN0ZWRJdGVtLmRhdGFzZXQuaGFzaDtcclxuICAgICAgIHNlbGVjdGVkSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgIHRvZ2dsZUJ1dHRvbnNJbnRlcmFjdGlvbigpO1xyXG4gICB9KVxyXG59KTtcclxuXHJcbmJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYW5jaG9yXyR7aGFzaH1gKTtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGxpbmsuaHJlZikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29weVRvYXN0LnNob3coKTtcclxuICAgIH0pO1xyXG59KVxyXG5cclxuYnRuU3RhdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChoYXNoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oYCR7VVJMX1NUQVRJU1RJQ1N9LyR7aGFzaH1gKTtcclxuICAgIH1cclxufSlcclxuXHJcbmJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgZmV0Y2goYCR7VVJMX0RFTEVURX0vJHtoYXNofWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGhhbmRsZURhdGEpO1xyXG59KVxyXG5cclxuY29uc3QgdG9nZ2xlQnV0dG9uc0ludGVyYWN0aW9uID0gZnVuY3Rpb24oaXNEaXNhYmxlZCA9IGZhbHNlKSB7XHJcbiAgICBBcnJheS5mcm9tKGFjdGlvbnMuY2hpbGRyZW4pLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHN3aXRjaCAoZGF0YS5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgY2FzZSAnREVMRVRFX1NVQ0NFU1NGVUwnOlxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiVG9hc3QiLCJjb3B5VG9hc3QiLCJhdXRvaGlkZSIsImRlbGF5IiwibGlzdEdyb3VwSXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb25zIiwicXVlcnlTZWxlY3RvciIsImJ0bkNvcHkiLCJidG5TdGF0cyIsImJ0bkRlbGV0ZSIsIlVSTF9ERUxFVEUiLCJVUkxfU1RBVElTVElDUyIsInNlbGVjdGVkSXRlbSIsImhhc2giLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGVCdXR0b25zSW50ZXJhY3Rpb24iLCJkYXRhc2V0IiwiYWRkIiwibGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImhyZWYiLCJ0aGVuIiwic2hvdyIsIndpbmRvdyIsIm9wZW4iLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImhhbmRsZURhdGEiLCJpc0Rpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJidXR0b24iLCJkaXNhYmxlZCIsImRhdGEiLCJzdGF0dXNDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==