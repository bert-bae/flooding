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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/string-replace */ \"./utils/string-replace.ts\");\n\n\n\nconst endpoints = {\n  getTerrain: '/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw@2x'\n};\nconst client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: \"https://api.mapbox.com/v4\",\n  timeout: 1000,\n  headers: {}\n});\n\nconst appendAccessToken = url => {\n  let result = url;\n\n  if (url.charAt(url.length - 1) !== '/') {\n    result += '/';\n  }\n\n  return `${result}?access_token=${\"pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\"}`;\n};\n\nconst getTerrainData = async coordinate => {\n  let endpoint = appendAccessToken(endpoints.getTerrain);\n\n  for (const key in coordinate) {\n    const regex = new RegExp(`\\{${key}\\}`, 'gi');\n    endpoint = Object(_utils_string_replace__WEBPACK_IMPORTED_MODULE_2__[\"replaceString\"])(endpoint, coordinate[key], regex);\n  }\n\n  try {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"get\"])(await client.get(endpoint), 'data');\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getTerrainData\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnRzL21hcGJveC50cz8zZmU1Il0sIm5hbWVzIjpbImVuZHBvaW50cyIsImdldFRlcnJhaW4iLCJjbGllbnQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJhcHBlbmRBY2Nlc3NUb2tlbiIsInVybCIsInJlc3VsdCIsImNoYXJBdCIsImxlbmd0aCIsImdldFRlcnJhaW5EYXRhIiwiY29vcmRpbmF0ZSIsImVuZHBvaW50Iiwia2V5IiwicmVnZXgiLCJSZWdFeHAiLCJyZXBsYWNlU3RyaW5nIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUEsTUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxZQUFVLEVBQUU7QUFESSxDQUFsQjtBQUlBLE1BQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzFCQyxTQUFPLEVBQUVDLDJCQURpQjtBQUUxQkMsU0FBTyxFQUFFLElBRmlCO0FBRzFCQyxTQUFPLEVBQUU7QUFIaUIsQ0FBYixDQUFmOztBQU1BLE1BQU1DLGlCQUFpQixHQUFJQyxHQUFELElBQVM7QUFDakMsTUFBSUMsTUFBTSxHQUFHRCxHQUFiOztBQUNBLE1BQUlBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXRixHQUFHLENBQUNHLE1BQUosR0FBYSxDQUF4QixNQUErQixHQUFuQyxFQUF3QztBQUN0Q0YsVUFBTSxJQUFJLEdBQVY7QUFDRDs7QUFDRCxTQUFRLEdBQUVBLE1BQU8saUJBQWdCTCwrRkFBNEMsRUFBN0U7QUFDRCxDQU5EOztBQVFBLE1BQU1RLGNBQWMsR0FBRyxNQUFPQyxVQUFQLElBQXNEO0FBQzNFLE1BQUlDLFFBQVEsR0FBR1AsaUJBQWlCLENBQUNULFNBQVMsQ0FBQ0MsVUFBWCxDQUFoQzs7QUFFQSxPQUFLLE1BQU1nQixHQUFYLElBQWtCRixVQUFsQixFQUE4QjtBQUM1QixVQUFNRyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFZLEtBQUlGLEdBQUksSUFBcEIsRUFBeUIsSUFBekIsQ0FBZDtBQUNBRCxZQUFRLEdBQUdJLDJFQUFhLENBQUNKLFFBQUQsRUFBV0QsVUFBVSxDQUFDRSxHQUFELENBQXJCLEVBQTRCQyxLQUE1QixDQUF4QjtBQUNEOztBQUVELE1BQUk7QUFDRixXQUFPRyxrREFBRyxDQUFDLE1BQU1uQixNQUFNLENBQUNtQixHQUFQLENBQVdMLFFBQVgsQ0FBUCxFQUE2QixNQUE3QixDQUFWO0FBQ0QsR0FGRCxDQUVFLE9BQU9NLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsQ0FiRDs7QUFlZTtBQUNiUjtBQURhLENBQWYiLCJmaWxlIjoiLi9jbGllbnRzL21hcGJveC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyByZXBsYWNlU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5nLXJlcGxhY2UnO1xuaW1wb3J0IHsgSUNvb3JkaW5hdGVzIH0gZnJvbSAnLi4vdHlwZXMvbWFwYm94LXR5cGVzJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdjb25zb2xlJztcblxuY29uc3QgZW5kcG9pbnRzID0ge1xuICBnZXRUZXJyYWluOiAnL21hcGJveC50ZXJyYWluLXJnYi97en0ve3h9L3t5fS5wbmdyYXdAMngnLFxufTtcblxuY29uc3QgY2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FQSV9VUkwsXG4gIHRpbWVvdXQ6IDEwMDAsXG4gIGhlYWRlcnM6IHt9LFxufSk7XG5cbmNvbnN0IGFwcGVuZEFjY2Vzc1Rva2VuID0gKHVybCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gdXJsO1xuICBpZiAodXJsLmNoYXJBdCh1cmwubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgIHJlc3VsdCArPSAnLyc7XG4gIH1cbiAgcmV0dXJuIGAke3Jlc3VsdH0/YWNjZXNzX3Rva2VuPSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTn1gO1xufTtcblxuY29uc3QgZ2V0VGVycmFpbkRhdGEgPSBhc3luYyAoY29vcmRpbmF0ZTogSUNvb3JkaW5hdGVzKTogUHJvbWlzZTx1bmtub3duPiA9PiB7XG4gIGxldCBlbmRwb2ludCA9IGFwcGVuZEFjY2Vzc1Rva2VuKGVuZHBvaW50cy5nZXRUZXJyYWluKTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBjb29yZGluYXRlKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBcXHske2tleX1cXH1gLCAnZ2knKTtcbiAgICBlbmRwb2ludCA9IHJlcGxhY2VTdHJpbmcoZW5kcG9pbnQsIGNvb3JkaW5hdGVba2V5XSwgcmVnZXgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0KGF3YWl0IGNsaWVudC5nZXQoZW5kcG9pbnQpLCAnZGF0YScpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRlcnJhaW5EYXRhLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./clients/mapbox.ts\n");

/***/ }),

/***/ "./components/map/index.tsx":
/*!**********************************!*\
  !*** ./components/map/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"react-map-gl\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _map_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-controls */ \"./components/map/map-controls.tsx\");\n/* harmony import */ var _clients_mapbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clients/mapbox */ \"./clients/mapbox.ts\");\nvar _jsxFileName = \"/home/bert-bae/Documents/projects/flooding/components/map/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst Map = () => {\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    width: '100%',\n    height: '100%',\n    latitude: 37.7577,\n    longitude: -122.4376,\n    zoom: 8\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    (async () => {\n      return _clients_mapbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTerrainData({\n        x: viewport.latitude,\n        y: viewport.longitude,\n        z: viewport.zoom\n      });\n    })();\n  }, [viewport]);\n  return __jsx(\"div\", {\n    className: \"container map-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, viewport, {\n    mapStyle: \"mapbox://styles/mapbox/dark-v10\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\",\n    onViewportChange: nextView => {\n      console.log(nextView);\n      setViewport(nextView);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(_map_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map); // https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw\n// https://api.mapbox.com/v4/mapbox.terrain-rgb/12.17012438742627/49.25399814740362/-122.90354786721365.pngraw/?access_token=pk.eyJ1IjoiYmVydC1iYWU5MiIsImEiOiJjanlscWN3eXYwYjN1M2xwN3lsbHVmY21qIn0.Idsawku9FGUirFFHebCYmw//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcC9pbmRleC50c3g/N2M5YyJdLCJuYW1lcyI6WyJNYXAiLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlU3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiem9vbSIsInVzZUVmZmVjdCIsIm1hcEJveENsaWVudCIsImdldFRlcnJhaW5EYXRhIiwieCIsInkiLCJ6IiwicHJvY2VzcyIsIm5leHRWaWV3IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQztBQUN2Q0MsU0FBSyxFQUFFLE1BRGdDO0FBRXZDQyxVQUFNLEVBQUUsTUFGK0I7QUFHdkNDLFlBQVEsRUFBRSxPQUg2QjtBQUl2Q0MsYUFBUyxFQUFFLENBQUMsUUFKMkI7QUFLdkNDLFFBQUksRUFBRTtBQUxpQyxHQUFELENBQXhDO0FBUUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLGFBQU9DLHVEQUFZLENBQUNDLGNBQWIsQ0FBNEI7QUFDakNDLFNBQUMsRUFBRVgsUUFBUSxDQUFDSyxRQURxQjtBQUVqQ08sU0FBQyxFQUFFWixRQUFRLENBQUNNLFNBRnFCO0FBR2pDTyxTQUFDLEVBQUViLFFBQVEsQ0FBQ087QUFIcUIsT0FBNUIsQ0FBUDtBQUtELEtBTkQ7QUFPRCxHQVJRLEVBUU4sQ0FBQ1AsUUFBRCxDQVJNLENBQVQ7QUFVQSxTQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELGVBQ01BLFFBRE47QUFFRSxZQUFRLEVBQUMsaUNBRlg7QUFHRSx3QkFBb0IsRUFBRWMsK0ZBSHhCO0FBSUUsb0JBQWdCLEVBQUdDLFFBQUQsSUFBYztBQUM5QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQWQsaUJBQVcsQ0FBQ2MsUUFBRCxDQUFYO0FBQ0QsS0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGO0FBZUQsQ0FsQ0Q7O0FBb0NlaEIsa0VBQWYsRSxDQUVBO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL21hcC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcblxuaW1wb3J0IE1hcENvbnRyb2xzIGZyb20gJy4vbWFwLWNvbnRyb2xzJztcblxuaW1wb3J0IG1hcEJveENsaWVudCBmcm9tICcuLi8uLi9jbGllbnRzL21hcGJveCc7XG5cbmNvbnN0IE1hcCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBsYXRpdHVkZTogMzcuNzU3NyxcbiAgICBsb25naXR1ZGU6IC0xMjIuNDM3NixcbiAgICB6b29tOiA4LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gbWFwQm94Q2xpZW50LmdldFRlcnJhaW5EYXRhKHtcbiAgICAgICAgeDogdmlld3BvcnQubGF0aXR1ZGUsXG4gICAgICAgIHk6IHZpZXdwb3J0LmxvbmdpdHVkZSxcbiAgICAgICAgejogdmlld3BvcnQuem9vbSxcbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0sIFt2aWV3cG9ydF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWFwLWNvbnRhaW5lclwiPlxuICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvZGFyay12MTBcIlxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTn1cbiAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KG5leHRWaWV3KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobmV4dFZpZXcpO1xuICAgICAgICAgIHNldFZpZXdwb3J0KG5leHRWaWV3KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1hcENvbnRyb2xzIC8+XG4gICAgICA8L1JlYWN0TWFwR0w+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG5cbi8vIGh0dHBzOi8vYXBpLm1hcGJveC5jb20vdjQvbWFwYm94LnRlcnJhaW4tcmdiLzEyLjE3MDEyNDM4NzQyNjI3LzQ5LjI1Mzk5ODE0NzQwMzYyLy0xMjIuOTAzNTQ3ODY3MjEzNjUucG5ncmF3P2FjY2Vzc190b2tlbj1way5leUoxSWpvaVltVnlkQzFpWVdVNU1pSXNJbUVpT2lKamFubHNjV04zZVhZd1lqTjFNMnh3TjNsc2JIVm1ZMjFxSW4wLklkc2F3a3U5RkdVaXJGRkhlYkNZbXdcblxuLy8gaHR0cHM6Ly9hcGkubWFwYm94LmNvbS92NC9tYXBib3gudGVycmFpbi1yZ2IvMTIuMTcwMTI0Mzg3NDI2MjcvNDkuMjUzOTk4MTQ3NDAzNjIvLTEyMi45MDM1NDc4NjcyMTM2NS5wbmdyYXcvP2FjY2Vzc190b2tlbj1way5leUoxSWpvaVltVnlkQzFpWVdVNU1pSXNJbUVpT2lKamFubHNjV04zZVhZd1lqTjFNMnh3TjNsc2JIVm1ZMjFxSW4wLklkc2F3a3U5RkdVaXJGRkhlYkNZbXdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/map/index.tsx\n");

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