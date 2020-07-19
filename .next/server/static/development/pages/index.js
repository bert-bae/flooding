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

/***/ "./clients/mapbox.ts":
/*!***************************!*\
  !*** ./clients/mapbox.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/string-replace */ \"./utils/string-replace.ts\");\n\n\n\nconst endpoints = {\n  getTerrain: '/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw@2x',\n  getTileQueryElevation: 'mapbox.mapbox-terrain-v2/tilequery/{longitude},{latitude}.json?layers=contour&limit=50'\n};\nconst client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"https://api.mapbox.com/v4\",\n  timeout: 1000,\n  headers: {}\n});\n\nconst appendAccessToken = url => {\n  let result = url;\n  console.log(url);\n\n  if (url.match('\\\\?').length > 0) {\n    result += '&';\n  } else {\n    if (url.charAt(url.length - 1) !== '/') {\n      result += '/';\n    }\n\n    result += '?';\n  }\n\n  return `${result}access_token=${\"pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\"}`;\n};\n\nconst getTileQueryElevation = async (longitude, latitude) => {\n  let endpoint = appendAccessToken(endpoints.getTileQueryElevation);\n  endpoint = Object(_utils_string_replace__WEBPACK_IMPORTED_MODULE_2__[\"replaceString\"])(endpoint, String(longitude), /{longitude}/);\n  endpoint = Object(_utils_string_replace__WEBPACK_IMPORTED_MODULE_2__[\"replaceString\"])(endpoint, String(latitude), /{latitude}/);\n\n  try {\n    const data = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(await client.get(endpoint), 'data');\n    const elevations = [];\n    data.features.forEach(set => {\n      elevations.push(set.properties.ele);\n    });\n    return Math.max(...elevations);\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getTileQueryElevation\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnRzL21hcGJveC50cz8zZmU1Il0sIm5hbWVzIjpbImVuZHBvaW50cyIsImdldFRlcnJhaW4iLCJnZXRUaWxlUXVlcnlFbGV2YXRpb24iLCJjbGllbnQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJhcHBlbmRBY2Nlc3NUb2tlbiIsInVybCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImxlbmd0aCIsImNoYXJBdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiZW5kcG9pbnQiLCJyZXBsYWNlU3RyaW5nIiwiU3RyaW5nIiwiZGF0YSIsImdldCIsImVsZXZhdGlvbnMiLCJmZWF0dXJlcyIsImZvckVhY2giLCJzZXQiLCJwdXNoIiwicHJvcGVydGllcyIsImVsZSIsIk1hdGgiLCJtYXgiLCJlcnIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLFNBQVMsR0FBRztBQUNoQkMsWUFBVSxFQUFFLDJDQURJO0FBRWhCQyx1QkFBcUIsRUFDbkI7QUFIYyxDQUFsQjtBQU1BLE1BQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzFCQyxTQUFPLEVBQUVDLDJCQURpQjtBQUUxQkMsU0FBTyxFQUFFLElBRmlCO0FBRzFCQyxTQUFPLEVBQUU7QUFIaUIsQ0FBYixDQUFmOztBQU1BLE1BQU1DLGlCQUFpQixHQUFJQyxHQUFELElBQWlCO0FBQ3pDLE1BQUlDLE1BQU0sR0FBR0QsR0FBYjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjs7QUFDQSxNQUFJQSxHQUFHLENBQUNJLEtBQUosQ0FBVSxLQUFWLEVBQWlCQyxNQUFqQixHQUEwQixDQUE5QixFQUFpQztBQUMvQkosVUFBTSxJQUFJLEdBQVY7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFJRCxHQUFHLENBQUNNLE1BQUosQ0FBV04sR0FBRyxDQUFDSyxNQUFKLEdBQWEsQ0FBeEIsTUFBK0IsR0FBbkMsRUFBd0M7QUFDdENKLFlBQU0sSUFBSSxHQUFWO0FBQ0Q7O0FBQ0RBLFVBQU0sSUFBSSxHQUFWO0FBQ0Q7O0FBRUQsU0FBUSxHQUFFQSxNQUFPLGdCQUFlTCwrRkFBNEMsRUFBNUU7QUFDRCxDQWJEOztBQWVBLE1BQU1MLHFCQUFxQixHQUFHLE9BQU9nQixTQUFQLEVBQTBCQyxRQUExQixLQUErQztBQUMzRSxNQUFJQyxRQUFRLEdBQUdWLGlCQUFpQixDQUFDVixTQUFTLENBQUNFLHFCQUFYLENBQWhDO0FBRUFrQixVQUFRLEdBQUdDLDJFQUFhLENBQUNELFFBQUQsRUFBV0UsTUFBTSxDQUFDSixTQUFELENBQWpCLEVBQThCLGFBQTlCLENBQXhCO0FBQ0FFLFVBQVEsR0FBR0MsMkVBQWEsQ0FBQ0QsUUFBRCxFQUFXRSxNQUFNLENBQUNILFFBQUQsQ0FBakIsRUFBNkIsWUFBN0IsQ0FBeEI7O0FBRUEsTUFBSTtBQUNGLFVBQU1JLElBQUksR0FBR0Msa0RBQUcsQ0FBQyxNQUFNckIsTUFBTSxDQUFDcUIsR0FBUCxDQUFXSixRQUFYLENBQVAsRUFBNkIsTUFBN0IsQ0FBaEI7QUFDQSxVQUFNSyxVQUFVLEdBQUcsRUFBbkI7QUFFQUYsUUFBSSxDQUFDRyxRQUFMLENBQWNDLE9BQWQsQ0FBdUJDLEdBQUQsSUFBUztBQUM3QkgsZ0JBQVUsQ0FBQ0ksSUFBWCxDQUFnQkQsR0FBRyxDQUFDRSxVQUFKLENBQWVDLEdBQS9CO0FBQ0QsS0FGRDtBQUlBLFdBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQUdSLFVBQVosQ0FBUDtBQUNELEdBVEQsQ0FTRSxPQUFPUyxHQUFQLEVBQVk7QUFDWnJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsR0FBWjtBQUNEO0FBQ0YsQ0FsQkQ7O0FBb0JlO0FBQ2JoQztBQURhLENBQWYiLCJmaWxlIjoiLi9jbGllbnRzL21hcGJveC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcmVwbGFjZVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL3N0cmluZy1yZXBsYWNlJztcbmltcG9ydCB7IElDb29yZGluYXRlcyB9IGZyb20gJy4uL3R5cGVzL21hcGJveC10eXBlcyc7XG5cbmNvbnN0IGVuZHBvaW50cyA9IHtcbiAgZ2V0VGVycmFpbjogJy9tYXBib3gudGVycmFpbi1yZ2Ive3p9L3t4fS97eX0ucG5ncmF3QDJ4JyxcbiAgZ2V0VGlsZVF1ZXJ5RWxldmF0aW9uOlxuICAgICdtYXBib3gubWFwYm94LXRlcnJhaW4tdjIvdGlsZXF1ZXJ5L3tsb25naXR1ZGV9LHtsYXRpdHVkZX0uanNvbj9sYXllcnM9Y29udG91ciZsaW1pdD01MCcsXG59O1xuXG5jb25zdCBjbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQVBJX1VSTCxcbiAgdGltZW91dDogMTAwMCxcbiAgaGVhZGVyczoge30sXG59KTtcblxuY29uc3QgYXBwZW5kQWNjZXNzVG9rZW4gPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHVybDtcbiAgY29uc29sZS5sb2codXJsKTtcbiAgaWYgKHVybC5tYXRjaCgnXFxcXD8nKS5sZW5ndGggPiAwKSB7XG4gICAgcmVzdWx0ICs9ICcmJztcbiAgfSBlbHNlIHtcbiAgICBpZiAodXJsLmNoYXJBdCh1cmwubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgcmVzdWx0ICs9ICcvJztcbiAgICB9XG4gICAgcmVzdWx0ICs9ICc/JztcbiAgfVxuXG4gIHJldHVybiBgJHtyZXN1bHR9YWNjZXNzX3Rva2VuPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTn1gO1xufTtcblxuY29uc3QgZ2V0VGlsZVF1ZXJ5RWxldmF0aW9uID0gYXN5bmMgKGxvbmdpdHVkZTogbnVtYmVyLCBsYXRpdHVkZTogbnVtYmVyKSA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGFwcGVuZEFjY2Vzc1Rva2VuKGVuZHBvaW50cy5nZXRUaWxlUXVlcnlFbGV2YXRpb24pO1xuXG4gIGVuZHBvaW50ID0gcmVwbGFjZVN0cmluZyhlbmRwb2ludCwgU3RyaW5nKGxvbmdpdHVkZSksIC97bG9uZ2l0dWRlfS8pO1xuICBlbmRwb2ludCA9IHJlcGxhY2VTdHJpbmcoZW5kcG9pbnQsIFN0cmluZyhsYXRpdHVkZSksIC97bGF0aXR1ZGV9Lyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gZ2V0KGF3YWl0IGNsaWVudC5nZXQoZW5kcG9pbnQpLCAnZGF0YScpO1xuICAgIGNvbnN0IGVsZXZhdGlvbnMgPSBbXTtcblxuICAgIGRhdGEuZmVhdHVyZXMuZm9yRWFjaCgoc2V0KSA9PiB7XG4gICAgICBlbGV2YXRpb25zLnB1c2goc2V0LnByb3BlcnRpZXMuZWxlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBNYXRoLm1heCguLi5lbGV2YXRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRUaWxlUXVlcnlFbGV2YXRpb24sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./clients/mapbox.ts\n");

/***/ }),

/***/ "./components/map/elevation-legend.tsx":
/*!*********************************************!*\
  !*** ./components/map/elevation-legend.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_elevation_indicators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/elevation-indicators */ \"./constants/elevation-indicators.tsx\");\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/elevation-legend.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ElevationLegend = () => {\n  const indicators = _constants_elevation_indicators__WEBPACK_IMPORTED_MODULE_1__[\"elevationIndicators\"].map(i => {\n    return __jsx(\"div\", {\n      className: \"legend-indicator\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      className: `indicator ${i.text}-m`,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }\n    }), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, i.numerical, \"m+\"));\n  });\n  return __jsx(\"div\", {\n    className: \"elevation-legend\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }, indicators);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElevationLegend);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9lbGV2YXRpb24tbGVnZW5kLnRzeD8wYjIxIl0sIm5hbWVzIjpbIkVsZXZhdGlvbkxlZ2VuZCIsImluZGljYXRvcnMiLCJlbGV2YXRpb25JbmRpY2F0b3JzIiwibWFwIiwiaSIsInRleHQiLCJudW1lcmljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsTUFBTTtBQUM1QixRQUFNQyxVQUFVLEdBQUdDLG1GQUFtQixDQUFDQyxHQUFwQixDQUF5QkMsQ0FBRCxJQUFPO0FBQ2hELFdBQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFHLGFBQVlBLENBQUMsQ0FBQ0MsSUFBSyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELENBQUMsQ0FBQ0UsU0FBTixPQUZGLENBREY7QUFNRCxHQVBrQixDQUFuQjtBQVFBLFNBQU87QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ0wsVUFBbkMsQ0FBUDtBQUNELENBVkQ7O0FBWWVELDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYXAvZWxldmF0aW9uLWxlZ2VuZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGV2YXRpb25JbmRpY2F0b3JzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2VsZXZhdGlvbi1pbmRpY2F0b3JzJztcblxuY29uc3QgRWxldmF0aW9uTGVnZW5kID0gKCkgPT4ge1xuICBjb25zdCBpbmRpY2F0b3JzID0gZWxldmF0aW9uSW5kaWNhdG9ycy5tYXAoKGkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmQtaW5kaWNhdG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5kaWNhdG9yICR7aS50ZXh0fS1tYH0+PC9kaXY+XG4gICAgICAgIDxwPntpLm51bWVyaWNhbH1tKzwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlbGV2YXRpb24tbGVnZW5kXCI+e2luZGljYXRvcnN9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxldmF0aW9uTGVnZW5kO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/map/elevation-legend.tsx\n");

/***/ }),

/***/ "./components/map/index.tsx":
/*!**********************************!*\
  !*** ./components/map/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"react-map-gl\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-controls */ \"./components/map/map-controls.tsx\");\n/* harmony import */ var _elevation_legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elevation-legend */ \"./components/map/elevation-legend.tsx\");\n/* harmony import */ var _clients_mapbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clients/mapbox */ \"./clients/mapbox.ts\");\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst Map = () => {\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    width: '100%',\n    height: '100%',\n    latitude: 37.7577,\n    longitude: -122.4376\n  });\n  const {\n    0: longitude,\n    1: setLongitude\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: latitiude,\n    1: setLatitude\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: pointElevation,\n    1: setPointElevation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(pointElevation);\n  }, [longitude, latitiude]);\n  return __jsx(\"div\", {\n    className: \"container map-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, viewport, {\n    mapStyle: \"mapbox://styles/bert-bae92/ckct6qgpa2ilp1ilbzpxlx9i5\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\",\n    maxZoom: 15,\n    minZoom: 10,\n    onViewportChange: nextView => {\n      setViewport(nextView);\n    },\n    onClick: async event => {\n      setLongitude(event.lngLat[0]);\n      setLatitude(event.lngLat[1]);\n      setPointElevation(await _clients_mapbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getTileQueryElevation(event.lngLat[0], event.lngLat[1]));\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(_elevation_legend__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(_map_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map); // https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\n// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw/?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9pbmRleC50c3g/N2M5YyJdLCJuYW1lcyI6WyJNYXAiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlU3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwibGF0aXRpdWRlIiwic2V0TGF0aXR1ZGUiLCJwb2ludEVsZXZhdGlvbiIsInNldFBvaW50RWxldmF0aW9uIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJuZXh0VmlldyIsImV2ZW50IiwibG5nTGF0IiwibWFwQm94Q2xpZW50IiwiZ2V0VGlsZVF1ZXJ5RWxldmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQ3ZDQyxTQUFLLEVBQUUsTUFEZ0M7QUFFdkNDLFVBQU0sRUFBRSxNQUYrQjtBQUd2Q0MsWUFBUSxFQUFFLE9BSDZCO0FBSXZDQyxhQUFTLEVBQUUsQ0FBQztBQUoyQixHQUFELENBQXhDO0FBT0EsUUFBTTtBQUFBLE9BQUNBLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTCxzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ00sU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBMkJQLHNEQUFRLENBQUMsSUFBRCxDQUF6QztBQUNBLFFBQU07QUFBQSxPQUFDUSxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDVCxzREFBUSxDQUFDLElBQUQsQ0FBcEQ7QUFFQVUseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixjQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNKLFNBQUQsRUFBWUUsU0FBWixDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELGVBQ01SLFFBRE47QUFFRSxZQUFRLEVBQUVlLHNEQUZaO0FBR0Usd0JBQW9CLEVBQUVBLCtGQUh4QjtBQUlFLFdBQU8sRUFBRSxFQUpYO0FBS0UsV0FBTyxFQUFFLEVBTFg7QUFNRSxvQkFBZ0IsRUFBR0MsUUFBRCxJQUFjO0FBQzlCZixpQkFBVyxDQUFDZSxRQUFELENBQVg7QUFDRCxLQVJIO0FBU0UsV0FBTyxFQUFFLE1BQU9DLEtBQVAsSUFBaUI7QUFDeEJWLGtCQUFZLENBQUNVLEtBQUssQ0FBQ0MsTUFBTixDQUFhLENBQWIsQ0FBRCxDQUFaO0FBQ0FULGlCQUFXLENBQUNRLEtBQUssQ0FBQ0MsTUFBTixDQUFhLENBQWIsQ0FBRCxDQUFYO0FBQ0FQLHVCQUFpQixDQUNmLE1BQU1RLHVEQUFZLENBQUNDLHFCQUFiLENBQ0pILEtBQUssQ0FBQ0MsTUFBTixDQUFhLENBQWIsQ0FESSxFQUVKRCxLQUFLLENBQUNDLE1BQU4sQ0FBYSxDQUFiLENBRkksQ0FEUyxDQUFqQjtBQU1ELEtBbEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFvQkUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLEVBcUJFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixDQURGLENBREY7QUEyQkQsQ0EzQ0Q7O0FBNkNlbkIsa0VBQWYsRSxDQUVBO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hcC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcblxuaW1wb3J0IE1hcENvbnRyb2xzIGZyb20gJy4vbWFwLWNvbnRyb2xzJztcbmltcG9ydCBFbGV2YXRpb25MZWdlbmQgZnJvbSAnLi9lbGV2YXRpb24tbGVnZW5kJztcblxuaW1wb3J0IG1hcEJveENsaWVudCBmcm9tICcuLi8uLi9jbGllbnRzL21hcGJveCc7XG5cbmNvbnN0IE1hcCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBsYXRpdHVkZTogMzcuNzU3NyxcbiAgICBsb25naXR1ZGU6IC0xMjIuNDM3NixcbiAgfSk7XG5cbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbGF0aXRpdWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BvaW50RWxldmF0aW9uLCBzZXRQb2ludEVsZXZhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvaW50RWxldmF0aW9uKTtcbiAgfSwgW2xvbmdpdHVkZSwgbGF0aXRpdWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYXAtY29udGFpbmVyXCI+XG4gICAgICA8UmVhY3RNYXBHTFxuICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgIG1hcFN0eWxlPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfU1RZTEV9XG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOfVxuICAgICAgICBtYXhab29tPXsxNX1cbiAgICAgICAgbWluWm9vbT17MTB9XG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0VmlldykgPT4ge1xuICAgICAgICAgIHNldFZpZXdwb3J0KG5leHRWaWV3KTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17YXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0TG9uZ2l0dWRlKGV2ZW50LmxuZ0xhdFswXSk7XG4gICAgICAgICAgc2V0TGF0aXR1ZGUoZXZlbnQubG5nTGF0WzFdKTtcbiAgICAgICAgICBzZXRQb2ludEVsZXZhdGlvbihcbiAgICAgICAgICAgIGF3YWl0IG1hcEJveENsaWVudC5nZXRUaWxlUXVlcnlFbGV2YXRpb24oXG4gICAgICAgICAgICAgIGV2ZW50LmxuZ0xhdFswXSxcbiAgICAgICAgICAgICAgZXZlbnQubG5nTGF0WzFdXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEVsZXZhdGlvbkxlZ2VuZCAvPlxuICAgICAgICA8TWFwQ29udHJvbHMgLz5cbiAgICAgIDwvUmVhY3RNYXBHTD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcblxuLy8gaHR0cHM6Ly9hcGkubWFwYm94LmNvbS92NC9tYXBib3gudGVycmFpbi1yZ2IvMTIuMTcwMTI0Mzg3NDI2MjcvNDkuMjUzOTk4MTQ3NDAzNjIvLTEyMi45MDM1NDc4NjcyMTM2NS5wbmdyYXc/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pWW1WeWRDMWlZV1U1TWlJc0ltRWlPaUpqYW5sc2NXTjNlWFl3WWpOMU0yeHdOM2xzYkhWbVkyMXFJbjAuSWRzYXdrdTlGR1VpckZGSGViQ1ltd1xuXG4vLyBodHRwczovL2FwaS5tYXBib3guY29tL3Y0L21hcGJveC50ZXJyYWluLXJnYi8xMi4xNzAxMjQzODc0MjYyNy80OS4yNTM5OTgxNDc0MDM2Mi8tMTIyLjkwMzU0Nzg2NzIxMzY1LnBuZ3Jhdy8/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pWW1WeWRDMWlZV1U1TWlJc0ltRWlPaUpqYW5sc2NXTjNlWFl3WWpOMU0yeHdOM2xzYkhWbVkyMXFJbjAuSWRzYXdrdTlGR1VpckZGSGViQ1ltd1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/map/index.tsx\n");

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

/***/ "./utils/string-replace.ts":
/*!*********************************!*\
  !*** ./utils/string-replace.ts ***!
  \*********************************/
/*! exports provided: replaceString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceString\", function() { return replaceString; });\nconst replaceString = (originalStr, replacement, regex) => {\n  return originalStr.replace(regex, replacement);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9zdHJpbmctcmVwbGFjZS50cz80OTQ0Il0sIm5hbWVzIjpbInJlcGxhY2VTdHJpbmciLCJvcmlnaW5hbFN0ciIsInJlcGxhY2VtZW50IiwicmVnZXgiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsYUFBYSxHQUFHLENBQzNCQyxXQUQyQixFQUUzQkMsV0FGMkIsRUFHM0JDLEtBSDJCLEtBSXhCO0FBQ0gsU0FBT0YsV0FBVyxDQUFDRyxPQUFaLENBQW9CRCxLQUFwQixFQUEyQkQsV0FBM0IsQ0FBUDtBQUNELENBTk0iLCJmaWxlIjoiLi91dGlscy9zdHJpbmctcmVwbGFjZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZXBsYWNlU3RyaW5nID0gKFxuICBvcmlnaW5hbFN0cjogc3RyaW5nLFxuICByZXBsYWNlbWVudDogc3RyaW5nLFxuICByZWdleDogUmVnRXhwXG4pID0+IHtcbiAgcmV0dXJuIG9yaWdpbmFsU3RyLnJlcGxhY2UocmVnZXgsIHJlcGxhY2VtZW50KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/string-replace.ts\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bert-bae/Documents/projects/flooding/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIj85N2RlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash\n");

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