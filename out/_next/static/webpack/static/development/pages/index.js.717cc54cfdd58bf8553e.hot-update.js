webpackHotUpdate("static/development/pages/index.js",{

/***/ "./clients/mapbox.ts":
false,

/***/ "./components/map/index.tsx":
/*!**********************************!*\
  !*** ./components/map/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var _map_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-controls */ \"./components/map/map-controls.tsx\");\n/* harmony import */ var _elevation_legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elevation-legend */ \"./components/map/elevation-legend.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Map = function Map() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    width: '100%',\n    height: '100%',\n    latitude: 37.7577,\n    longitude: -122.4376\n  }),\n      viewport = _useState[0],\n      setViewport = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      longitude = _useState2[0],\n      setLongitude = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      latitiude = _useState3[0],\n      setLatitude = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      pointElevation = _useState4[0],\n      setPointElevation = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(pointElevation);\n  }, [longitude, latitiude]);\n  return __jsx(\"div\", {\n    className: \"container map-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, viewport, {\n    mapStyle: \"mapbox://styles/bert-bae92/ckct6qgpa2ilp1ilbzpxlx9i5\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\",\n    maxZoom: 15,\n    minZoom: 10,\n    onViewportChange: function onViewportChange(nextView) {\n      setViewport(nextView);\n    } // onClick={async (event) => {\n    //   setLongitude(event.lngLat[0]);\n    //   setLatitude(event.lngLat[1]);\n    //   setPointElevation(\n    //     await mapBoxClient.getTileQueryElevation(\n    //       event.lngLat[0],\n    //       event.lngLat[1]\n    //     )\n    //   );\n    // }}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(_elevation_legend__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(_map_controls__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Map, \"uAPCbXlIhALF///KqROClMvgbM4=\");\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map); // https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\n// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw/?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9pbmRleC50c3g/N2M5YyJdLCJuYW1lcyI6WyJNYXAiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0Iiwic2V0TG9uZ2l0dWRlIiwibGF0aXRpdWRlIiwic2V0TGF0aXR1ZGUiLCJwb2ludEVsZXZhdGlvbiIsInNldFBvaW50RWxldmF0aW9uIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJuZXh0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQztBQUN2Q0MsU0FBSyxFQUFFLE1BRGdDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFlBQVEsRUFBRSxPQUg2QjtBQUl2Q0MsYUFBUyxFQUFFLENBQUM7QUFKMkIsR0FBRCxDQUR4QjtBQUFBLE1BQ1RDLFFBRFM7QUFBQSxNQUNDQyxXQUREOztBQUFBLG1CQVFrQk4sc0RBQVEsQ0FBQyxJQUFELENBUjFCO0FBQUEsTUFRVEksU0FSUztBQUFBLE1BUUVHLFlBUkY7O0FBQUEsbUJBU2lCUCxzREFBUSxDQUFDLElBQUQsQ0FUekI7QUFBQSxNQVNUUSxTQVRTO0FBQUEsTUFTRUMsV0FURjs7QUFBQSxtQkFVNEJULHNEQUFRLENBQUMsSUFBRCxDQVZwQztBQUFBLE1BVVRVLGNBVlM7QUFBQSxNQVVPQyxpQkFWUDs7QUFZaEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosY0FBWjtBQUNELEdBRlEsRUFFTixDQUFDTixTQUFELEVBQVlJLFNBQVosQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCx5RkFDTUgsUUFETjtBQUVFLFlBQVEsRUFBRVUsc0RBRlo7QUFHRSx3QkFBb0IsRUFBRUEsK0ZBSHhCO0FBSUUsV0FBTyxFQUFFLEVBSlg7QUFLRSxXQUFPLEVBQUUsRUFMWDtBQU1FLG9CQUFnQixFQUFFLDBCQUFDQyxRQUFELEVBQWM7QUFDOUJWLGlCQUFXLENBQUNVLFFBQUQsQ0FBWDtBQUNELEtBUkgsQ0FTRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1Bb0JFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixFQXFCRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsQ0FERixDQURGO0FBMkJELENBM0NEOztHQUFNakIsRzs7S0FBQUEsRztBQTZDU0Esa0VBQWYsRSxDQUVBO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hcC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcblxuaW1wb3J0IE1hcENvbnRyb2xzIGZyb20gJy4vbWFwLWNvbnRyb2xzJztcbmltcG9ydCBFbGV2YXRpb25MZWdlbmQgZnJvbSAnLi9lbGV2YXRpb24tbGVnZW5kJztcblxuaW1wb3J0IG1hcEJveENsaWVudCBmcm9tICcuLi8uLi9jbGllbnRzL21hcGJveCc7XG5cbmNvbnN0IE1hcCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBsYXRpdHVkZTogMzcuNzU3NyxcbiAgICBsb25naXR1ZGU6IC0xMjIuNDM3NixcbiAgfSk7XG5cbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbGF0aXRpdWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BvaW50RWxldmF0aW9uLCBzZXRQb2ludEVsZXZhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvaW50RWxldmF0aW9uKTtcbiAgfSwgW2xvbmdpdHVkZSwgbGF0aXRpdWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXAtY29udGFpbmVyXCI+XG4gICAgICA8UmVhY3RNYXBHTFxuICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgIG1hcFN0eWxlPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfU1RZTEV9XG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOfVxuICAgICAgICBtYXhab29tPXsxNX1cbiAgICAgICAgbWluWm9vbT17MTB9XG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0VmlldykgPT4ge1xuICAgICAgICAgIHNldFZpZXdwb3J0KG5leHRWaWV3KTtcbiAgICAgICAgfX1cbiAgICAgICAgLy8gb25DbGljaz17YXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgc2V0TG9uZ2l0dWRlKGV2ZW50LmxuZ0xhdFswXSk7XG4gICAgICAgIC8vICAgc2V0TGF0aXR1ZGUoZXZlbnQubG5nTGF0WzFdKTtcbiAgICAgICAgLy8gICBzZXRQb2ludEVsZXZhdGlvbihcbiAgICAgICAgLy8gICAgIGF3YWl0IG1hcEJveENsaWVudC5nZXRUaWxlUXVlcnlFbGV2YXRpb24oXG4gICAgICAgIC8vICAgICAgIGV2ZW50LmxuZ0xhdFswXSxcbiAgICAgICAgLy8gICAgICAgZXZlbnQubG5nTGF0WzFdXG4gICAgICAgIC8vICAgICApXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy8gfX1cbiAgICAgID5cbiAgICAgICAgPEVsZXZhdGlvbkxlZ2VuZCAvPlxuICAgICAgICA8TWFwQ29udHJvbHMgLz5cbiAgICAgIDwvUmVhY3RNYXBHTD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcblxuLy8gaHR0cHM6Ly9hcGkubWFwYm94LmNvbS92NC9tYXBib3gudGVycmFpbi1yZ2IvMTIuMTcwMTI0Mzg3NDI2MjcvNDkuMjUzOTk4MTQ3NDAzNjIvLTEyMi45MDM1NDc4NjcyMTM2NS5wbmdyYXc/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pWW1WeWRDMWlZV1U1TWlJc0ltRWlPaUpqYW5sc2NXTjNlWFl3WWpOMU0yeHdOM2xzYkhWbVkyMXFJbjAuSWRzYXdrdTlGR1VpckZGSGViQ1ltd1xuXG4vLyBodHRwczovL2FwaS5tYXBib3guY29tL3Y0L21hcGJveC50ZXJyYWluLXJnYi8xMi4xNzAxMjQzODc0MjYyNy80OS4yNTM5OTgxNDc0MDM2Mi8tMTIyLjkwMzU0Nzg2NzIxMzY1LnBuZ3Jhdy8/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pWW1WeWRDMWlZV1U1TWlJc0ltRWlPaUpqYW5sc2NXTjNlWFl3WWpOMU0yeHdOM2xzYkhWbVkyMXFJbjAuSWRzYXdrdTlGR1VpckZGSGViQ1ltd1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/map/index.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./utils/string-replace.ts":
false

})