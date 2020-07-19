module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/map/elevation-legend.tsx":
/*!*********************************************!*\
  !*** ./components/map/elevation-legend.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_elevation_indicators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/elevation-indicators */ \"./constants/elevation-indicators.tsx\");\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/elevation-legend.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ElevationLegend = () => {\n  const indicators = _constants_elevation_indicators__WEBPACK_IMPORTED_MODULE_1__[\"elevationIndicators\"].map((ele, i) => {\n    return __jsx(\"div\", {\n      className: \"legend-indicator\",\n      key: i,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: `indicator ${ele.text}-m`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }\n    }), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, ele.numerical, \"m+\"));\n  });\n  return __jsx(\"div\", {\n    className: \"elevation-legend\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }, indicators);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElevationLegend);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9lbGV2YXRpb24tbGVnZW5kLnRzeD8wYjIxIl0sIm5hbWVzIjpbIkVsZXZhdGlvbkxlZ2VuZCIsImluZGljYXRvcnMiLCJlbGV2YXRpb25JbmRpY2F0b3JzIiwibWFwIiwiZWxlIiwiaSIsInRleHQiLCJudW1lcmljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxVQUFVLEdBQUdDLG1GQUFtQixDQUFDQyxHQUFwQixDQUF3QixDQUFDQyxHQUFELEVBQU1DLENBQU4sS0FBWTtBQUNyRCxXQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFNBQUcsRUFBRUEsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFHLGFBQVlELEdBQUcsQ0FBQ0UsSUFBSyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlGLEdBQUcsQ0FBQ0csU0FBUixPQUZGLENBREY7QUFNRCxHQVBrQixDQUFuQjtBQVFBLFNBQU87QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ04sVUFBbkMsQ0FBUDtBQUNELENBVkQ7O0FBWWVELDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYXAvZWxldmF0aW9uLWxlZ2VuZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGV2YXRpb25JbmRpY2F0b3JzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2VsZXZhdGlvbi1pbmRpY2F0b3JzJztcblxuY29uc3QgRWxldmF0aW9uTGVnZW5kID0gKCkgPT4ge1xuICBjb25zdCBpbmRpY2F0b3JzID0gZWxldmF0aW9uSW5kaWNhdG9ycy5tYXAoKGVsZSwgaSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ2VuZC1pbmRpY2F0b3JcIiBrZXk9e2l9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGluZGljYXRvciAke2VsZS50ZXh0fS1tYH0+PC9kaXY+XG4gICAgICAgIDxwPntlbGUubnVtZXJpY2FsfW0rPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVsZXZhdGlvbi1sZWdlbmRcIj57aW5kaWNhdG9yc308L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGV2YXRpb25MZWdlbmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/map/elevation-legend.tsx\n");

/***/ }),

/***/ "./components/map/index.tsx":
/*!**********************************!*\
  !*** ./components/map/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"react-map-gl\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-controls */ \"./components/map/map-controls.tsx\");\n/* harmony import */ var _elevation_legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elevation-legend */ \"./components/map/elevation-legend.tsx\");\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst Map = () => {\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    width: '100%',\n    height: '100%',\n    latitude: 37.7577,\n    longitude: -122.4376\n  });\n  const {\n    0: longitude,\n    1: setLongitude\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: latitiude,\n    1: setLatitude\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: pointElevation,\n    1: setPointElevation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(pointElevation);\n  }, [longitude, latitiude]);\n  return __jsx(\"div\", {\n    className: \"map-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, viewport, {\n    mapStyle: \"mapbox://styles/bert-bae92/ckct6qgpa2ilp1ilbzpxlx9i5\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\",\n    maxZoom: 15,\n    minZoom: 10,\n    onViewportChange: nextView => {\n      setViewport(nextView);\n    } // onClick={async (event) => {\n    //   setLongitude(event.lngLat[0]);\n    //   setLatitude(event.lngLat[1]);\n    //   setPointElevation(\n    //     await mapBoxClient.getTileQueryElevation(\n    //       event.lngLat[0],\n    //       event.lngLat[1]\n    //     )\n    //   );\n    // }}\n    ,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(_elevation_legend__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(_map_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map); // https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\n// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw/?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9pbmRleC50c3g/N2M5YyJdLCJuYW1lcyI6WyJNYXAiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlU3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwibGF0aXRpdWRlIiwic2V0TGF0aXR1ZGUiLCJwb2ludEVsZXZhdGlvbiIsInNldFBvaW50RWxldmF0aW9uIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJuZXh0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLE1BQU1BLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQztBQUN2Q0MsU0FBSyxFQUFFLE1BRGdDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFlBQVEsRUFBRSxPQUg2QjtBQUl2Q0MsYUFBUyxFQUFFLENBQUM7QUFKMkIsR0FBRCxDQUF4QztBQU9BLFFBQU07QUFBQSxPQUFDQSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkwsc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTJCUCxzREFBUSxDQUFDLElBQUQsQ0FBekM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ1Qsc0RBQVEsQ0FBQyxJQUFELENBQXBEO0FBRUFVLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosY0FBWjtBQUNELEdBRlEsRUFFTixDQUFDSixTQUFELEVBQVlFLFNBQVosQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELGVBQ01SLFFBRE47QUFFRSxZQUFRLEVBQUVlLHNEQUZaO0FBR0Usd0JBQW9CLEVBQUVBLCtGQUh4QjtBQUlFLFdBQU8sRUFBRSxFQUpYO0FBS0UsV0FBTyxFQUFFLEVBTFg7QUFNRSxvQkFBZ0IsRUFBR0MsUUFBRCxJQUFjO0FBQzlCZixpQkFBVyxDQUFDZSxRQUFELENBQVg7QUFDRCxLQVJILENBU0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW9CRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsRUFxQkUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLENBREYsQ0FERjtBQTJCRCxDQTNDRDs7QUE2Q2VqQixrRUFBZixFLENBRUE7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFwL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuXG5pbXBvcnQgTWFwQ29udHJvbHMgZnJvbSAnLi9tYXAtY29udHJvbHMnO1xuaW1wb3J0IEVsZXZhdGlvbkxlZ2VuZCBmcm9tICcuL2VsZXZhdGlvbi1sZWdlbmQnO1xuXG5pbXBvcnQgbWFwQm94Q2xpZW50IGZyb20gJy4uLy4uL2NsaWVudHMvbWFwYm94JztcblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGxhdGl0dWRlOiAzNy43NTc3LFxuICAgIGxvbmdpdHVkZTogLTEyMi40Mzc2LFxuICB9KTtcblxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsYXRpdGl1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcG9pbnRFbGV2YXRpb24sIHNldFBvaW50RWxldmF0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocG9pbnRFbGV2YXRpb24pO1xuICB9LCBbbG9uZ2l0dWRlLCBsYXRpdGl1ZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiPlxuICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICBtYXBTdHlsZT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX1NUWUxFfVxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTn1cbiAgICAgICAgbWF4Wm9vbT17MTV9XG4gICAgICAgIG1pblpvb209ezEwfVxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXcpID0+IHtcbiAgICAgICAgICBzZXRWaWV3cG9ydChuZXh0Vmlldyk7XG4gICAgICAgIH19XG4gICAgICAgIC8vIG9uQ2xpY2s9e2FzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAvLyAgIHNldExvbmdpdHVkZShldmVudC5sbmdMYXRbMF0pO1xuICAgICAgICAvLyAgIHNldExhdGl0dWRlKGV2ZW50LmxuZ0xhdFsxXSk7XG4gICAgICAgIC8vICAgc2V0UG9pbnRFbGV2YXRpb24oXG4gICAgICAgIC8vICAgICBhd2FpdCBtYXBCb3hDbGllbnQuZ2V0VGlsZVF1ZXJ5RWxldmF0aW9uKFxuICAgICAgICAvLyAgICAgICBldmVudC5sbmdMYXRbMF0sXG4gICAgICAgIC8vICAgICAgIGV2ZW50LmxuZ0xhdFsxXVxuICAgICAgICAvLyAgICAgKVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vIH19XG4gICAgICA+XG4gICAgICAgIDxFbGV2YXRpb25MZWdlbmQgLz5cbiAgICAgICAgPE1hcENvbnRyb2xzIC8+XG4gICAgICA8L1JlYWN0TWFwR0w+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG5cbi8vIGh0dHBzOi8vYXBpLm1hcGJveC5jb20vdjQvbWFwYm94LnRlcnJhaW4tcmdiLzEyLjE3MDEyNDM4NzQyNjI3LzQ5LjI1Mzk5ODE0NzQwMzYyLy0xMjIuOTAzNTQ3ODY3MjEzNjUucG5ncmF3P2FjY2Vzc190b2tlbj1way5leUoxSWpvaVltVnlkQzFpWVdVNU1pSXNJbUVpT2lKamFubHNjV04zZVhZd1lqTjFNMnh3TjNsc2JIVm1ZMjFxSW4wLklkc2F3a3U5RkdVaXJGRkhlYkNZbXdcblxuLy8gaHR0cHM6Ly9hcGkubWFwYm94LmNvbS92NC9tYXBib3gudGVycmFpbi1yZ2IvMTIuMTcwMTI0Mzg3NDI2MjcvNDkuMjUzOTk4MTQ3NDAzNjIvLTEyMi45MDM1NDc4NjcyMTM2NS5wbmdyYXcvP2FjY2Vzc190b2tlbj1way5leUoxSWpvaVltVnlkQzFpWVdVNU1pSXNJbUVpT2lKamFubHNjV04zZVhZd1lqTjFNMnh3TjNsc2JIVm1ZMjFxSW4wLklkc2F3a3U5RkdVaXJGRkhlYkNZbXdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/map/index.tsx\n");

/***/ }),

/***/ "./components/map/map-controls.tsx":
/*!*****************************************!*\
  !*** ./components/map/map-controls.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"react-map-gl\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/map-controls.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst MapControls = () => {\n  return __jsx(\"div\", {\n    className: \"map-controls-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"GeolocateControl\"], {\n    positionOptions: {\n      enableHighAccuracy: true\n    },\n    trackUserLocation: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"NavigationControl\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapControls);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbHMudHN4PzE1ZDQiXSwibmFtZXMiOlsiTWFwQ29udHJvbHMiLCJlbmFibGVIaWdoQWNjdXJhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDeEIsU0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLG1CQUFlLEVBQUU7QUFBRUMsd0JBQWtCLEVBQUU7QUFBdEIsS0FEbkI7QUFFRSxxQkFBaUIsRUFBRSxJQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGO0FBU0QsQ0FWRDs7QUFZZUQsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VvbG9jYXRlQ29udHJvbCwgTmF2aWdhdGlvbkNvbnRyb2wgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuXG5jb25zdCBNYXBDb250cm9scyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1jb250cm9scy1jb250YWluZXJcIj5cbiAgICAgIDxHZW9sb2NhdGVDb250cm9sXG4gICAgICAgIHBvc2l0aW9uT3B0aW9ucz17eyBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUgfX1cbiAgICAgICAgdHJhY2tVc2VyTG9jYXRpb249e3RydWV9XG4gICAgICAvPlxuICAgICAgPE5hdmlnYXRpb25Db250cm9sIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9scztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/map/map-controls.tsx\n");

/***/ }),

/***/ "./constants/elevation-indicators.tsx":
/*!********************************************!*\
  !*** ./constants/elevation-indicators.tsx ***!
  \********************************************/
/*! exports provided: elevationIndicators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elevationIndicators\", function() { return elevationIndicators; });\nconst elevationIndicators = [{\n  numerical: 10,\n  text: 'ten'\n}, {\n  numerical: 20,\n  text: 'twenty'\n}, {\n  numerical: 30,\n  text: 'thirty'\n}, {\n  numerical: 40,\n  text: 'forty'\n}, {\n  numerical: 50,\n  text: 'fifty'\n}, {\n  numerical: 60,\n  text: 'sixty'\n}, {\n  numerical: 70,\n  text: 'seventy'\n}, {\n  numerical: 80,\n  text: 'eighty'\n}, {\n  numerical: 90,\n  text: 'ninty'\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvZWxldmF0aW9uLWluZGljYXRvcnMudHN4PzYwMGYiXSwibmFtZXMiOlsiZWxldmF0aW9uSW5kaWNhdG9ycyIsIm51bWVyaWNhbCIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxtQkFBbUIsR0FBRyxDQUNqQztBQUNFQyxXQUFTLEVBQUUsRUFEYjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURpQyxFQUtqQztBQUNFRCxXQUFTLEVBQUUsRUFEYjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxpQyxFQVNqQztBQUNFRCxXQUFTLEVBQUUsRUFEYjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRpQyxFQWFqQztBQUNFRCxXQUFTLEVBQUUsRUFEYjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWJpQyxFQWlCakM7QUFDRUQsV0FBUyxFQUFFLEVBRGI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FqQmlDLEVBcUJqQztBQUNFRCxXQUFTLEVBQUUsRUFEYjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQXJCaUMsRUF5QmpDO0FBQ0VELFdBQVMsRUFBRSxFQURiO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBekJpQyxFQTZCakM7QUFDRUQsV0FBUyxFQUFFLEVBRGI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0E3QmlDLEVBaUNqQztBQUNFRCxXQUFTLEVBQUUsRUFEYjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWpDaUMsQ0FBNUIiLCJmaWxlIjoiLi9jb25zdGFudHMvZWxldmF0aW9uLWluZGljYXRvcnMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVsZXZhdGlvbkluZGljYXRvcnMgPSBbXG4gIHtcbiAgICBudW1lcmljYWw6IDEwLFxuICAgIHRleHQ6ICd0ZW4nLFxuICB9LFxuICB7XG4gICAgbnVtZXJpY2FsOiAyMCxcbiAgICB0ZXh0OiAndHdlbnR5JyxcbiAgfSxcbiAge1xuICAgIG51bWVyaWNhbDogMzAsXG4gICAgdGV4dDogJ3RoaXJ0eScsXG4gIH0sXG4gIHtcbiAgICBudW1lcmljYWw6IDQwLFxuICAgIHRleHQ6ICdmb3J0eScsXG4gIH0sXG4gIHtcbiAgICBudW1lcmljYWw6IDUwLFxuICAgIHRleHQ6ICdmaWZ0eScsXG4gIH0sXG4gIHtcbiAgICBudW1lcmljYWw6IDYwLFxuICAgIHRleHQ6ICdzaXh0eScsXG4gIH0sXG4gIHtcbiAgICBudW1lcmljYWw6IDcwLFxuICAgIHRleHQ6ICdzZXZlbnR5JyxcbiAgfSxcbiAge1xuICAgIG51bWVyaWNhbDogODAsXG4gICAgdGV4dDogJ2VpZ2h0eScsXG4gIH0sXG4gIHtcbiAgICBudW1lcmljYWw6IDkwLFxuICAgIHRleHQ6ICduaW50eScsXG4gIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/elevation-indicators.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/map */ \"./components/map/index.tsx\");\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst HomePage = () => {\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  })), __jsx(_components_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHFDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFRRCxDQVREOztBQVdlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvbWFwJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1hcCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bert-bae/Documents/projects/flooding/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-map-gl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2xcIj81YWIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LW1hcC1nbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcC1nbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-map-gl\n");

/***/ })

/******/ });