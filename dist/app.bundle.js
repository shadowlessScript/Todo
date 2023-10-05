/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/assets/style.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/assets/style.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/components/assets/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: roboto;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "roboto";
}

body{
    width: 100%;
    height: 100%;
}

.main-container{
    height: 100vh;
}
.main-page-container{
    display: grid;
    height: 100%;
    grid-template-columns: 0.3fr 1fr 0.5fr;
    grid-template-rows: 1fr;
}

.project-list{
    
    border: 1px solid black;
    
    border-radius: 5px;
    padding: 15px;
}

.project-link{
    /* width: 100px;
    height: 100px; */
    background-color: bisque;
    text-align: center;
    border-radius: 0.7rem;
    /* padding: 4%; */
    transition: 0.4s;
    margin: 12px
    /* transition: color 0.4s; */

}

.project-link:hover{
    cursor: pointer;
    background-color: rgba(21, 20, 20, 0.8);
    color: white;
    transition: 0.4s;
    /* transition: color 0.4s; */
}

.add-new-project-form{
    background-color: aliceblue;
    width: 40%;
    height: 20%;
}

.form-container{
    background-color: rgba(26, 25, 25, 0.7);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-project-btn,.close-form-btn{
    /* position: absolute;
    left: 2%;
    top: 5%; */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: 
        transform, box-shadow, 0.4s;
}
.close-form-btn{
    z-index: 12;
}
.add-project-btn:hover{
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 
        transform, box-shadow, 0.4s;
    
}

.close-form-btn:hover{
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 
        transform, box-shadow, 0.4s;
    
}

.todolist-form{
    display: flex;
    flex-direction: column;
    border: 2px solid brown;
    justify-content: center;
    align-items: center;
    padding: 10px;
/* background-image: linear-gradient(to right top, #fcf8ff, #e5cbf9, #ce9ef1, #b670e7, #9d3cdc);*/
}

.todo-container{
    border: 2px dashed saddlebrown;
    /* width: 50%; */
    /* height: 100vh; */
}

.todolist-form > input, textarea{
    /* border: none; */
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    margin-top: 10px;
    margin-bottom: 10px;
}
/* .todolist-form > label{
    color: white;
} */
.todolist-form > input{
    /* padding: 10px; */
    height: 35px;   
    border-radius: 5px;
}

.submit-btn{
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: #008F7A;
    color: white;
}

.add-task-img{
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
}

.section-title{
    margin-bottom: 10px;

}

.title-container{
    text-align:center;
}

.user-task{
    display: flex;
    height: 50px;
    background-color: #ddd6fe;
    margin: 10px;
    border-radius: 5px; 
}

.user-task:hover{
    cursor: pointer
}`, "",{"version":3,"sources":["webpack://./src/components/assets/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,uBAAuB;AAC3B;;AAEA;;IAEI,uBAAuB;;IAEvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI;oBACgB;IAChB,wBAAwB;IACxB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,4BAA4B;;AAEhC;;AAEA;IACI,eAAe;IACf,uCAAuC;IACvC,YAAY;IACZ,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;IAC3B,UAAU;IACV,WAAW;AACf;;AAEA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,MAAM;IACN,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;;cAEU;IACV,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB;mCAC+B;AACnC;AACA;IACI,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C;mCAC+B;;AAEnC;;AAEA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C;mCAC+B;;AAEnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB,iGAAiG;AACjG;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iDAAiD;IACjD,gBAAgB;IAChB,mBAAmB;AACvB;AACA;;GAEG;AACH;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI;AACJ","sourcesContent":["@font-face {\r\n    font-family: roboto;\r\n    src: url(\"./Roboto-Regular.ttf\");\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"roboto\";\r\n}\r\n\r\nbody{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.main-container{\r\n    height: 100vh;\r\n}\r\n.main-page-container{\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 0.3fr 1fr 0.5fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n\r\n.project-list{\r\n    \r\n    border: 1px solid black;\r\n    \r\n    border-radius: 5px;\r\n    padding: 15px;\r\n}\r\n\r\n.project-link{\r\n    /* width: 100px;\r\n    height: 100px; */\r\n    background-color: bisque;\r\n    text-align: center;\r\n    border-radius: 0.7rem;\r\n    /* padding: 4%; */\r\n    transition: 0.4s;\r\n    margin: 12px\r\n    /* transition: color 0.4s; */\r\n\r\n}\r\n\r\n.project-link:hover{\r\n    cursor: pointer;\r\n    background-color: rgba(21, 20, 20, 0.8);\r\n    color: white;\r\n    transition: 0.4s;\r\n    /* transition: color 0.4s; */\r\n}\r\n\r\n.add-new-project-form{\r\n    background-color: aliceblue;\r\n    width: 40%;\r\n    height: 20%;\r\n}\r\n\r\n.form-container{\r\n    background-color: rgba(26, 25, 25, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.add-project-btn,.close-form-btn{\r\n    /* position: absolute;\r\n    left: 2%;\r\n    top: 5%; */\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n}\r\n.close-form-btn{\r\n    z-index: 12;\r\n}\r\n.add-project-btn:hover{\r\n    transform: scale(1.1);\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n    \r\n}\r\n\r\n.close-form-btn:hover{\r\n    transform: scale(1.1);\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n    \r\n}\r\n\r\n.todolist-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid brown;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 10px;\r\n/* background-image: linear-gradient(to right top, #fcf8ff, #e5cbf9, #ce9ef1, #b670e7, #9d3cdc);*/\r\n}\r\n\r\n.todo-container{\r\n    border: 2px dashed saddlebrown;\r\n    /* width: 50%; */\r\n    /* height: 100vh; */\r\n}\r\n\r\n.todolist-form > input, textarea{\r\n    /* border: none; */\r\n    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n/* .todolist-form > label{\r\n    color: white;\r\n} */\r\n.todolist-form > input{\r\n    /* padding: 10px; */\r\n    height: 35px;   \r\n    border-radius: 5px;\r\n}\r\n\r\n.submit-btn{\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #008F7A;\r\n    color: white;\r\n}\r\n\r\n.add-task-img{\r\n    width: 48px;\r\n    height: 48px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.section-title{\r\n    margin-bottom: 10px;\r\n\r\n}\r\n\r\n.title-container{\r\n    text-align:center;\r\n}\r\n\r\n.user-task{\r\n    display: flex;\r\n    height: 50px;\r\n    background-color: #ddd6fe;\r\n    margin: 10px;\r\n    border-radius: 5px; \r\n}\r\n\r\n.user-task:hover{\r\n    cursor: pointer\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/assets/style.css":
/*!*****************************************!*\
  !*** ./src/components/assets/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _components_assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/assets/style.css */ "./src/components/assets/style.css");
/* harmony import */ var _components_landingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landingPage */ "./src/components/landingPage.js");
/* harmony import */ var _components_mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mainPage */ "./src/components/mainPage.js");



// import project from "./components/project.js";

const main = document.createElement("main")
main.classList.add("main-container")

function start() {

    main.appendChild((0,_components_mainPage__WEBPACK_IMPORTED_MODULE_2__["default"])())

    document.body.append(main);

}
start()



/***/ }),

/***/ "./src/components/formHandlers.js":
/*!****************************************!*\
  !*** ./src/components/formHandlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProjectForm: () => (/* binding */ addNewProjectForm)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/components/project.js");
/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingPage.js */ "./src/components/landingPage.js");
/* harmony import */ var _assets_close_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/close.png */ "./src/components/assets/close.png");




function addNewProjectForm() {
    // MAKES THE FORM FOR MAKING A NEW PROJECT

    const formContainer = document.createElement("div")
    formContainer.classList.add("form-container")

    const form = document.createElement("form")
    form.classList.add("add-new-project-form")
    const projectNameInput = document.createElement("input")
    projectNameInput.setAttribute("type", "text")
    projectNameInput.setAttribute("placeholder", "Project Name")

    const addProject = document.createElement("button")
    addProject.textContent = "Add Project"
    form.append(projectNameInput, addProject)

    addProject.addEventListener("click", () => { 
        createProject(form, projectNameInput.value);
        document.body.removeChild(formContainer); // remove the form container from the body
    });

  

    const closeIcon = document.createElement("img");
    closeIcon.src = _assets_close_png__WEBPACK_IMPORTED_MODULE_2__;
    closeIcon.alt = "Closes the form page";
    closeIcon.classList.add("close-form-btn")

    closeIcon.addEventListener("click", () => {
        document.body.removeChild(formContainer); // remove the form container from the body    
    });

    formContainer.append(form, closeIcon)
    document.body.append(formContainer)
}


function createProject(form, nameSubmitted) {

    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(nameSubmitted)) // creates and adds a project to the projectListContainer at the `Project` module
    ;(0,_landingPage_js__WEBPACK_IMPORTED_MODULE_1__.reloadProjects)(nameSubmitted) // shows the change real-time.
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault();
    })
}



/***/ }),

/***/ "./src/components/generateFields.js":
/*!******************************************!*\
  !*** ./src/components/generateFields.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFields: () => (/* binding */ generateFields),
/* harmony export */   populateFields: () => (/* binding */ populateFields)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPage */ "./src/components/mainPage.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _todoListForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoListForm */ "./src/components/todoListForm.js");







function generateFields(form, elements, isUpdate=false) {
    // seems over complicated
    
    elements.map(
        (ele) => {
            const label = document.createElement("label");
            label.setAttribute("for", `${ele.label}-field`);
            label.textContent = (0,_todoListForm__WEBPACK_IMPORTED_MODULE_5__.titleCase)(`${ele["label"]}: `);
            if (ele.type === "text")
            {
                let v = document.createElement(`input`);
                v.setAttribute("type", ele.type);
                v.classList.add(`${ele.label}-field`);
                v.setAttribute("id", `${ele.label}-field`);
                form.append(label, v);

            } else if (ele.type === "TEXTAREA")
            {
                let v = document.createElement(`${ele.type}`);
                v.rows = 10;
                v.cols = 50;
                v.classList.add(`${ele.label}-field`);
                v.setAttribute("id", `${ele.label}-field`);
                form.append(label, v);

            } else if (ele.type === "date")
            {
                let v = document.createElement("input");
                v.setAttribute("type", ele.type);
                v.classList.add(`${ele.label}-field`);
                v.setAttribute("id", `${ele.label}-field`);
                form.append(label, v);

            }


        }
    );

    const submitBtn = document.createElement("button");
    if (isUpdate)
    {
        submitBtn.textContent = "Update task";
    } else
    {
        submitBtn.textContent = "Add task";

    }
    submitBtn.classList.add("submit-btn");

    submitBtn.addEventListener("click", (e) => {
        const title = document.querySelector(".title-field").value;
        const dueDate = document.querySelector(".DueDate-field").value;
        const description = document.querySelector(".description-field").value;
        const priority = document.querySelector(".priority-field").value;

        if (isValid(title, description, priority, dueDate))
        {
            _mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject.project.addTask(new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, priority, dueDate));
            console.log(title, description, dueDate, priority, _mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject, _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer);
            (0,_loadPage__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.Container)(_mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject.project));
        }
        
        form.addEventListener("submit", (e) => {

            e.preventDefault();
        });
    });

    form.append(submitBtn);

}

function isValid(title, description, priority, dueDate) {
    if (title !== "" && description !== "" && priority !== "")
    {
       return true
    }
    return false
}

function populateFields(data, e) {
    document.querySelector(".title-field").value = data.title;
    document.querySelector(".description-field").value = data.description;
    document.querySelector(".DueDate-field").value = data.dueDate;
    document.querySelector(".priority-field").value = data.priority;
}



/***/ }),

/***/ "./src/components/landingPage.js":
/*!***************************************!*\
  !*** ./src/components/landingPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   reloadProjects: () => (/* binding */ reloadProjects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _formHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formHandlers */ "./src/components/formHandlers.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/add.png */ "./src/components/assets/add.png");
/* harmony import */ var _menuInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuInterface */ "./src/components/menuInterface.js");
// TODO: Rename this module







// let formCounter = 0;


function loadProjects(projectListDisplay) {
    // load existing projects to the the projectListDisplay div
    for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.length; i++)
    {
        const projectLink = document.createElement("div")
        projectLink.classList.add("project-link");
        projectLink.textContent = _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer[i].projectName
        projectLink.setAttribute("id", i);

        projectLink.addEventListener("click", () => { 
            (0,_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_3__.Container)(_project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer[i]))
        });

        projectListDisplay.append(projectLink)
    }
}

function reloadProjects(name) { // TODO: May be it can the placed in a different module.
    // used to add new project to the project-list-display div

    for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.length; i++)
    {
        if (_project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer[i].projectName === name)
        {
            const projectLink = document.createElement("div")
            projectLink.classList.add("project-link");
            projectLink.textContent = _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer[i].projectName
            projectLink.setAttribute("id", i);

            projectLink.addEventListener("click", () => { 
                (0,_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_3__["default"])(_project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer[i]))
            });

            _menuInterface__WEBPACK_IMPORTED_MODULE_5__.projectsHolder.append(projectLink)
        }
        
    }
    
}



/***/ }),

/***/ "./src/components/loadPage.js":
/*!************************************!*\
  !*** ./src/components/loadPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadProjectPage)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");



function loadProjectPage(page) { //TODO: Make sure it is dynamic, 
    _todoLandingPage__WEBPACK_IMPORTED_MODULE_1__.todoContainer.removeChild(_todoLandingPage__WEBPACK_IMPORTED_MODULE_1__.todoContainer.childNodes[0])

    _todoLandingPage__WEBPACK_IMPORTED_MODULE_1__.todoContainer.append(page)

}

/***/ }),

/***/ "./src/components/mainPage.js":
/*!************************************!*\
  !*** ./src/components/mainPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   "default": () => (/* binding */ mainPage)
/* harmony export */ });
/* harmony import */ var _menuInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuInterface */ "./src/components/menuInterface.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _todoListForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoListForm */ "./src/components/todoListForm.js");






let currentProject = {
    project: _project__WEBPACK_IMPORTED_MODULE_2__.projectsContainer[0]
} // Will the used when creating a todo list, because it has to be contained in a spefic project

function mainPage() {
    const mainPageContainer = document.createElement("div");
    mainPageContainer.classList.add("main-page-container");

    mainPageContainer.append(
        (0,_menuInterface__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        (0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_1__["default"])(_project__WEBPACK_IMPORTED_MODULE_2__.projectsContainer[0]),
        (0,_todoListForm__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    )

    return mainPageContainer
}



/***/ }),

/***/ "./src/components/menuInterface.js":
/*!*****************************************!*\
  !*** ./src/components/menuInterface.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuInterface),
/* harmony export */   projectsHolder: () => (/* binding */ projectsHolder)
/* harmony export */ });
/* harmony import */ var _landingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingPage */ "./src/components/landingPage.js");
/* harmony import */ var _formHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formHandlers */ "./src/components/formHandlers.js");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/add.png */ "./src/components/assets/add.png");




// make the main div
const projectListDisplay = document.createElement("div")
projectListDisplay.classList.add("project-list");
const projectsHolder = document.createElement("div")
projectsHolder.classList.add("project-holder")

function menuInterface() {    
    // TODO: Put the add project btn in a different div 

    const addProjectBtn = document.createElement("img")
    addProjectBtn.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_2__
    addProjectBtn.alt = "Click this to add a project"
    addProjectBtn.classList.add("add-project-btn")

    addProjectBtn.addEventListener("click", () => {
        
            ;(0,_formHandlers__WEBPACK_IMPORTED_MODULE_1__.addNewProjectForm)();          
        
    });
    

    (0,_landingPage__WEBPACK_IMPORTED_MODULE_0__.loadProjects)(projectsHolder)
    projectListDisplay.append(projectsHolder,addProjectBtn)

    return projectListDisplay
}




/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   projectsContainer: () => (/* binding */ projectsContainer)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");


class Project{
    todoList = [];

    constructor(projectName) {
        this.projectName = projectName        
    }

    set projectName(value) {
        this._projectName = value
    }

    get projectName() {
        return this._projectName
    }

    addTask(todo) {
        this.todoList.push(todo)
    }

    get todoList() {
        return this.todoList
    }

    // addProject
}



let projectsContainer = [] // will hold all the projects of user

function addProject(project) {
    projectsContainer.push(project)
}

if (projectsContainer.length === 0)
{
    addProject(new Project("Default"))
}

(
    function () {
        let proj = new Project("Construction");
        proj.addTask(new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]("Go to work", "...", 2, "2021-3-12"))
        proj.addTask(new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]("Go to work!", "...", 2, "2021-3-12"));
        addProject(proj);
        console.dir(projectsContainer)
    }
)();


// exports

// console.log(projectsContainer)

/***/ }),

/***/ "./src/components/todoLandingPage.js":
/*!*******************************************!*\
  !*** ./src/components/todoLandingPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   "default": () => (/* binding */ userProject),
/* harmony export */   todoContainer: () => (/* binding */ todoContainer)
/* harmony export */ });
/* harmony import */ var _generateFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateFields */ "./src/components/generateFields.js");
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage */ "./src/components/mainPage.js");
// deals with showing the todo list of the project selected



// TODO: - If todoList isEmpty then show "No task added"
//      - if they exist, show the task.
//      - Include a form for adding new tasks.
const todoContainer = document.createElement("div")
todoContainer.classList.add("todo-container")

function userProject(project) { 
    //project, is an object in the form:
    // {
    //  todoList:[
    // {"title", "description","dueDate", "priority"} --> TodoList object
    //],
    //  projectName: "<some name>"
    //}

    
    todoContainer.append(Container(project))
    
    
    return todoContainer
}

function createTodoItems(container, project) {
    // makes todo divs for each todo item and appends it to the container
    if (project.todoList.length > 0)
    {
        for (let i = 0; i < project.todoList.length; i++) 
        {
            let projectTodoList = project.todoList[i]
            const todo = document.createElement("div")
            todo.classList.add("user-task")
            const todoTitle = document.createElement("h4")
            todoTitle.textContent = projectTodoList.title
            const todoDescription = document.createElement("p");
            todoDescription.textContent = projectTodoList.description;
            const todoPriority = document.createElement("h5")
            todoPriority.textContent = projectTodoList.priority
            const todoDueDate = document.createElement("p")
            todoDueDate.textContent = projectTodoList.dueDate
            
            
            todo.append(
                todoTitle,
                // todoDescription,
                // todoPriority,
                todoDueDate
            )
            container.append(todo)

            todo.addEventListener("click", (e) => {
                let ind = Array.prototype.indexOf.call(container.children, todo) - 1;// minus 1 because it is been offset by the title-container child 
                let form = document.querySelector(".todolist-form")
                form.replaceChildren();
                (0,_generateFields__WEBPACK_IMPORTED_MODULE_0__.generateFields)(form, [
                        { type: "text", label: "title" },
                        { type: "TEXTAREA", label: "description" },
                        { type: "date", label: "DueDate" },
                        { type: "text", label: "priority" },                        
                ],
                    true
                )
                ;(0,_generateFields__WEBPACK_IMPORTED_MODULE_0__.populateFields)(_mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind]);
                console.log(ind, _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind], form)
            });
        }
         
    } else
    {
        container.append(
            document.createElement("p").textContent=`${project.projectName} project is Empty`
        )
    }
}


function Container(project) {
    const projectNameContainer = document.createElement("div") //--> append to todoContainer
    projectNameContainer.classList.add("title-container");
    const container = document.createElement("div")
    container.classList.add("container")

    const title = document.createElement("h3"); // + to projectNameContainer
    title.textContent = project.projectName
    projectNameContainer.appendChild(title);
    container.append(projectNameContainer);    

    createTodoItems(container, project)

    _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project = project
    return container
}



/***/ }),

/***/ "./src/components/todoListForm.js":
/*!****************************************!*\
  !*** ./src/components/todoListForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListForm),
/* harmony export */   titleCase: () => (/* binding */ titleCase)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _assets_add_task_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/add_task.png */ "./src/components/assets/add_task.png");
/* harmony import */ var _generateFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateFields */ "./src/components/generateFields.js");




function todoListForm() {
    const form = document.createElement("form");
    form.classList.add("todolist-form")

    const sectionTitle = document.createElement("h3")
    sectionTitle.classList.add("section-title")
    sectionTitle.textContent = "Add new Task"
    const addTaskImage = document.createElement("img")
    addTaskImage.src = _assets_add_task_png__WEBPACK_IMPORTED_MODULE_1__
    addTaskImage.classList.add("add-task-img")
    form.append(addTaskImage,sectionTitle)
    // const title = document.createElement()
    ;(0,_generateFields__WEBPACK_IMPORTED_MODULE_2__.generateFields)(form,
        [
            { type:"text", label:"title" },
            { type:"TEXTAREA", label:"description" },
            { type:"date", label:"DueDate" },
            { type: "text", label: "priority" },
        ]
    );// just expermenting
    return form
}

function titleCase(str) {
    // title case your sentences
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
class TodoList{
    constructor(
        title, 
        description,
        priority,
        dueDate
    ) {
        this.title = title
        this.description = description
        this.priority = priority
        this.dueDate = dueDate
    }
}

/***/ }),

/***/ "./src/components/assets/Roboto-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/components/assets/Roboto-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/components/assets/add.png":
/*!***************************************!*\
  !*** ./src/components/assets/add.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2287512b2fb76fdf8be.png";

/***/ }),

/***/ "./src/components/assets/add_task.png":
/*!********************************************!*\
  !*** ./src/components/assets/add_task.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b3345d5d1a7b68ccef0.png";

/***/ }),

/***/ "./src/components/assets/close.png":
/*!*****************************************!*\
  !*** ./src/components/assets/close.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c78aa04319ba89a32743.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLHVJQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa0dBQWtHLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sUUFBUSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sUUFBUSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9B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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL3N0eWxlLmNzcz81NDMxIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2Zvcm1IYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhdGVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2xhbmRpbmdQYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL21lbnVJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL3RvZG9MYW5kaW5nUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvdG9kb0xpc3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcclxufVxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5tYWluLXBhZ2UtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMWZyIDAuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3R7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5re1xyXG4gICAgLyogd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcclxuICAgIC8qIHBhZGRpbmc6IDQlOyAqL1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIG1hcmdpbjogMTJweFxyXG4gICAgLyogdHJhbnNpdGlvbjogY29sb3IgMC40czsgKi9cclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbms6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyMCwgMjAsIDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgLyogdHJhbnNpdGlvbjogY29sb3IgMC40czsgKi9cclxufVxyXG5cclxuLmFkZC1uZXctcHJvamVjdC1mb3Jte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNSwgMjUsIDAuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1idG4sLmNsb3NlLWZvcm0tYnRue1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICB0b3A6IDUlOyAqL1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICB0cmFuc2Zvcm0sIGJveC1zaGFkb3csIDAuNHM7XHJcbn1cclxuLmNsb3NlLWZvcm0tYnRue1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICB0cmFuc2Zvcm0sIGJveC1zaGFkb3csIDAuNHM7XHJcbiAgICBcclxufVxyXG5cclxuLmNsb3NlLWZvcm0tYnRuOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgIHRyYW5zZm9ybSwgYm94LXNoYWRvdywgMC40cztcclxuICAgIFxyXG59XHJcblxyXG4udG9kb2xpc3QtZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYnJvd247XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4vKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZmNmOGZmLCAjZTVjYmY5LCAjY2U5ZWYxLCAjYjY3MGU3LCAjOWQzY2RjKTsqL1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXJ7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgc2FkZGxlYnJvd247XHJcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xyXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cclxufVxyXG5cclxuLnRvZG9saXN0LWZvcm0gPiBpbnB1dCwgdGV4dGFyZWF7XHJcbiAgICAvKiBib3JkZXI6IG5vbmU7ICovXHJcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLyogLnRvZG9saXN0LWZvcm0gPiBsYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4udG9kb2xpc3QtZm9ybSA+IGlucHV0e1xyXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cclxuICAgIGhlaWdodDogMzVweDsgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG57XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhGN0E7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hZGQtdGFzay1pbWd7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItdGFza3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkNmZlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxufVxyXG5cclxuLnVzZXItdGFzazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtvQkFDZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTs7Y0FFVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO21DQUMrQjtBQUNuQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDO21DQUMrQjs7QUFFbkM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDO21DQUMrQjs7QUFFbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakIsaUdBQWlHO0FBQ2pHOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCI7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnIgMC41ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0e1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmt7XFxyXFxuICAgIC8qIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXHJcXG4gICAgLyogcGFkZGluZzogNCU7ICovXFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIG1hcmdpbjogMTJweFxcclxcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjRzOyAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIwLCAyMCwgMC44KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjRzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW5ldy1wcm9qZWN0LWZvcm17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjUsIDI1LCAwLjcpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG4sLmNsb3NlLWZvcm0tYnRue1xcclxcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDIlO1xcclxcbiAgICB0b3A6IDUlOyAqL1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbn1cXHJcXG4uY2xvc2UtZm9ybS1idG57XFxyXFxuICAgIHotaW5kZXg6IDEyO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtYnRuOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWZvcm0tYnRuOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9saXN0LWZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJyb3duO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4vKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZmNmOGZmLCAjZTVjYmY5LCAjY2U5ZWYxLCAjYjY3MGU3LCAjOWQzY2RjKTsqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBzYWRkbGVicm93bjtcXHJcXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cXHJcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9saXN0LWZvcm0gPiBpbnB1dCwgdGV4dGFyZWF7XFxyXFxuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cXHJcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDsgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLyogLnRvZG9saXN0LWZvcm0gPiBsYWJlbHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn0gKi9cXHJcXG4udG9kb2xpc3QtZm9ybSA+IGlucHV0e1xcclxcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7ICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOEY3QTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2staW1ne1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lcntcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VyLXRhc2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDZmZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4udXNlci10YXNrOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvYXNzZXRzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbGFuZGluZ1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9sYW5kaW5nUGFnZVwiO1xyXG5pbXBvcnQgbWFpblBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluUGFnZVwiO1xyXG4vLyBpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QuanNcIjtcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxyXG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKVxyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluUGFnZSgpKVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xyXG5cclxufVxyXG5zdGFydCgpXHJcblxyXG5leHBvcnQge1xyXG4gICAgbWFpblxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCwgYWRkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IHsgcmVsb2FkUHJvamVjdHMgfSBmcm9tIFwiLi9sYW5kaW5nUGFnZS5qc1wiO1xyXG5pbXBvcnQgY2xvc2VJbWFnZSBmcm9tIFwiLi9hc3NldHMvY2xvc2UucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0Rm9ybSgpIHtcclxuICAgIC8vIE1BS0VTIFRIRSBGT1JNIEZPUiBNQUtJTkcgQSBORVcgUFJPSkVDVFxyXG5cclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkLW5ldy1wcm9qZWN0LWZvcm1cIilcclxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIilcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIlxyXG4gICAgZm9ybS5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCwgYWRkUHJvamVjdClcclxuXHJcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QoZm9ybSwgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTsgLy8gcmVtb3ZlIHRoZSBmb3JtIGNvbnRhaW5lciBmcm9tIHRoZSBib2R5XHJcbiAgICB9KTtcclxuXHJcbiAgXHJcblxyXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNsb3NlSWNvbi5zcmMgPSBjbG9zZUltYWdlO1xyXG4gICAgY2xvc2VJY29uLmFsdCA9IFwiQ2xvc2VzIHRoZSBmb3JtIHBhZ2VcIjtcclxuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1idG5cIilcclxuXHJcbiAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpOyAvLyByZW1vdmUgdGhlIGZvcm0gY29udGFpbmVyIGZyb20gdGhlIGJvZHkgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZChmb3JtLCBjbG9zZUljb24pXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb3JtQ29udGFpbmVyKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChmb3JtLCBuYW1lU3VibWl0dGVkKSB7XHJcblxyXG4gICAgYWRkUHJvamVjdChuZXcgUHJvamVjdChuYW1lU3VibWl0dGVkKSkgLy8gY3JlYXRlcyBhbmQgYWRkcyBhIHByb2plY3QgdG8gdGhlIHByb2plY3RMaXN0Q29udGFpbmVyIGF0IHRoZSBgUHJvamVjdGAgbW9kdWxlXHJcbiAgICByZWxvYWRQcm9qZWN0cyhuYW1lU3VibWl0dGVkKSAvLyBzaG93cyB0aGUgY2hhbmdlIHJlYWwtdGltZS5cclxuICAgIFxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge2FkZE5ld1Byb2plY3RGb3JtfSIsImltcG9ydCB7IHByb2plY3RzQ29udGFpbmVyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb3NcIjtcclxuaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9tYWluUGFnZVwiO1xyXG5pbXBvcnQgbG9hZFByb2plY3RQYWdlIGZyb20gXCIuL2xvYWRQYWdlXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3RvZG9MYW5kaW5nUGFnZVwiO1xyXG5pbXBvcnQgeyB0aXRsZUNhc2UgfSBmcm9tIFwiLi90b2RvTGlzdEZvcm1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUZpZWxkcyhmb3JtLCBlbGVtZW50cywgaXNVcGRhdGU9ZmFsc2UpIHtcclxuICAgIC8vIHNlZW1zIG92ZXIgY29tcGxpY2F0ZWRcclxuICAgIFxyXG4gICAgZWxlbWVudHMubWFwKFxyXG4gICAgICAgIChlbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHtlbGUubGFiZWx9LWZpZWxkYCk7XHJcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGl0bGVDYXNlKGAke2VsZVtcImxhYmVsXCJdfTogYCk7XHJcbiAgICAgICAgICAgIGlmIChlbGUudHlwZSA9PT0gXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaW5wdXRgKTtcclxuICAgICAgICAgICAgICAgIHYuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBlbGUudHlwZSk7XHJcbiAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoYCR7ZWxlLmxhYmVsfS1maWVsZGApO1xyXG4gICAgICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtlbGUubGFiZWx9LWZpZWxkYCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS50eXBlID09PSBcIlRFWFRBUkVBXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGUudHlwZX1gKTtcclxuICAgICAgICAgICAgICAgIHYucm93cyA9IDEwO1xyXG4gICAgICAgICAgICAgICAgdi5jb2xzID0gNTA7XHJcbiAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoYCR7ZWxlLmxhYmVsfS1maWVsZGApO1xyXG4gICAgICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtlbGUubGFiZWx9LWZpZWxkYCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS50eXBlID09PSBcImRhdGVcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICB2LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgZWxlLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdi5jbGFzc0xpc3QuYWRkKGAke2VsZS5sYWJlbH0tZmllbGRgKTtcclxuICAgICAgICAgICAgICAgIHYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZWxlLmxhYmVsfS1maWVsZGApO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQobGFiZWwsIHYpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaWYgKGlzVXBkYXRlKVxyXG4gICAge1xyXG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiVXBkYXRlIHRhc2tcIjtcclxuICAgIH0gZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcclxuXHJcbiAgICB9XHJcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XHJcblxyXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1maWVsZFwiKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EdWVEYXRlLWZpZWxkXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1maWVsZFwiKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktZmllbGRcIikudmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QucHJvamVjdC5hZGRUYXNrKG5ldyBUb2RvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0c0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0UGFnZShDb250YWluZXIoY3VycmVudFByb2plY3QucHJvamVjdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIGlmICh0aXRsZSAhPT0gXCJcIiAmJiBkZXNjcmlwdGlvbiAhPT0gXCJcIiAmJiBwcmlvcml0eSAhPT0gXCJcIilcclxuICAgIHtcclxuICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVGaWVsZHMoZGF0YSwgZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1maWVsZFwiKS52YWx1ZSA9IGRhdGEudGl0bGU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLWZpZWxkXCIpLnZhbHVlID0gZGF0YS5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRHVlRGF0ZS1maWVsZFwiKS52YWx1ZSA9IGRhdGEuZHVlRGF0ZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktZmllbGRcIikudmFsdWUgPSBkYXRhLnByaW9yaXR5O1xyXG59XHJcblxyXG5leHBvcnQgeyBwb3B1bGF0ZUZpZWxkcyB9IiwiLy8gVE9ETzogUmVuYW1lIHRoaXMgbW9kdWxlXHJcbmltcG9ydCB7IHByb2plY3RzQ29udGFpbmVyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm1IYW5kbGVyc1wiO1xyXG5pbXBvcnQgbG9hZFByb2plY3RQYWdlIGZyb20gXCIuL2xvYWRQYWdlXCI7XHJcbmltcG9ydCB1c2VyUHJvamVjdCBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vdG9kb0xhbmRpbmdQYWdlXCI7XHJcbmltcG9ydCBhZGRJbWFnZSBmcm9tIFwiLi9hc3NldHMvYWRkLnBuZ1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0c0hvbGRlciB9IGZyb20gXCIuL21lbnVJbnRlcmZhY2VcIjtcclxuLy8gbGV0IGZvcm1Db3VudGVyID0gMDtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdExpc3REaXNwbGF5KSB7XHJcbiAgICAvLyBsb2FkIGV4aXN0aW5nIHByb2plY3RzIHRvIHRoZSB0aGUgcHJvamVjdExpc3REaXNwbGF5IGRpdlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0NvbnRhaW5lci5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saW5rXCIpO1xyXG4gICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdHNDb250YWluZXJbaV0ucHJvamVjdE5hbWVcclxuICAgICAgICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpKTtcclxuXHJcbiAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXHJcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0UGFnZShDb250YWluZXIocHJvamVjdHNDb250YWluZXJbaV0pKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwcm9qZWN0TGlzdERpc3BsYXkuYXBwZW5kKHByb2plY3RMaW5rKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWxvYWRQcm9qZWN0cyhuYW1lKSB7IC8vIFRPRE86IE1heSBiZSBpdCBjYW4gdGhlIHBsYWNlZCBpbiBhIGRpZmZlcmVudCBtb2R1bGUuXHJcbiAgICAvLyB1c2VkIHRvIGFkZCBuZXcgcHJvamVjdCB0byB0aGUgcHJvamVjdC1saXN0LWRpc3BsYXkgZGl2XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0NvbnRhaW5lci5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvamVjdHNDb250YWluZXJbaV0ucHJvamVjdE5hbWUgPT09IG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlua1wiKTtcclxuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0c0NvbnRhaW5lcltpXS5wcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpKTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgbG9hZFByb2plY3RQYWdlKHVzZXJQcm9qZWN0KHByb2plY3RzQ29udGFpbmVyW2ldKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0c0hvbGRlci5hcHBlbmQocHJvamVjdExpbmspXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IHtcclxuICAgIGxvYWRQcm9qZWN0cyxcclxuICAgIHJlbG9hZFByb2plY3RzXHJcbn1cclxuIiwiaW1wb3J0IHsgbWFpbiB9IGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IHsgdG9kb0NvbnRhaW5lciB9IGZyb20gXCIuL3RvZG9MYW5kaW5nUGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RQYWdlKHBhZ2UpIHsgLy9UT0RPOiBNYWtlIHN1cmUgaXQgaXMgZHluYW1pYywgXHJcbiAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIuY2hpbGROb2Rlc1swXSlcclxuXHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChwYWdlKVxyXG5cclxufSIsImltcG9ydCBtZW51SW50ZXJmYWNlIGZyb20gXCIuL21lbnVJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHVzZXJQcm9qZWN0IGZyb20gXCIuL3RvZG9MYW5kaW5nUGFnZVwiO1xyXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHRvZG9MaXN0Rm9ybSBmcm9tIFwiLi90b2RvTGlzdEZvcm1cIjtcclxuXHJcblxyXG5sZXQgY3VycmVudFByb2plY3QgPSB7XHJcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0NvbnRhaW5lclswXVxyXG59IC8vIFdpbGwgdGhlIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRvZG8gbGlzdCwgYmVjYXVzZSBpdCBoYXMgdG8gYmUgY29udGFpbmVkIGluIGEgc3BlZmljIHByb2plY3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5QYWdlKCkge1xyXG4gICAgY29uc3QgbWFpblBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpblBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcGFnZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgbWFpblBhZ2VDb250YWluZXIuYXBwZW5kKFxyXG4gICAgICAgIG1lbnVJbnRlcmZhY2UoKSxcclxuICAgICAgICB1c2VyUHJvamVjdChwcm9qZWN0c0NvbnRhaW5lclswXSksXHJcbiAgICAgICAgdG9kb0xpc3RGb3JtKCksXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIG1haW5QYWdlQ29udGFpbmVyXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjdXJyZW50UHJvamVjdCBcclxufSIsImltcG9ydCB7IGxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL2xhbmRpbmdQYWdlXCI7XHJcbmltcG9ydCB7IGFkZE5ld1Byb2plY3RGb3JtIH0gZnJvbSBcIi4vZm9ybUhhbmRsZXJzXCI7XHJcbmltcG9ydCBhZGRJbWFnZSBmcm9tIFwiLi9hc3NldHMvYWRkLnBuZ1wiO1xyXG5cclxuLy8gbWFrZSB0aGUgbWFpbiBkaXZcclxuY29uc3QgcHJvamVjdExpc3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wcm9qZWN0TGlzdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdFwiKTtcclxuY29uc3QgcHJvamVjdHNIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnByb2plY3RzSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhvbGRlclwiKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUludGVyZmFjZSgpIHsgICAgXHJcbiAgICAvLyBUT0RPOiBQdXQgdGhlIGFkZCBwcm9qZWN0IGJ0biBpbiBhIGRpZmZlcmVudCBkaXYgXHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGFkZFByb2plY3RCdG4uc3JjID0gYWRkSW1hZ2VcclxuICAgIGFkZFByb2plY3RCdG4uYWx0ID0gXCJDbGljayB0aGlzIHRvIGFkZCBhIHByb2plY3RcIlxyXG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpXHJcblxyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBhZGROZXdQcm9qZWN0Rm9ybSgpOyAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgbG9hZFByb2plY3RzKHByb2plY3RzSG9sZGVyKVxyXG4gICAgcHJvamVjdExpc3REaXNwbGF5LmFwcGVuZChwcm9qZWN0c0hvbGRlcixhZGRQcm9qZWN0QnRuKVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0TGlzdERpc3BsYXlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHByb2plY3RzSG9sZGVyXHJcbn1cclxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9zXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgdG9kb0xpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3ROYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9kb0xpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0xpc3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRQcm9qZWN0XHJcbn1cclxuXHJcblxyXG5cclxubGV0IHByb2plY3RzQ29udGFpbmVyID0gW10gLy8gd2lsbCBob2xkIGFsbCB0aGUgcHJvamVjdHMgb2YgdXNlclxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5wdXNoKHByb2plY3QpXHJcbn1cclxuXHJcbmlmIChwcm9qZWN0c0NvbnRhaW5lci5sZW5ndGggPT09IDApXHJcbntcclxuICAgIGFkZFByb2plY3QobmV3IFByb2plY3QoXCJEZWZhdWx0XCIpKVxyXG59XHJcblxyXG4oXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChcIkNvbnN0cnVjdGlvblwiKTtcclxuICAgICAgICBwcm9qLmFkZFRhc2sobmV3IFRvZG9MaXN0KFwiR28gdG8gd29ya1wiLCBcIi4uLlwiLCAyLCBcIjIwMjEtMy0xMlwiKSlcclxuICAgICAgICBwcm9qLmFkZFRhc2sobmV3IFRvZG9MaXN0KFwiR28gdG8gd29yayFcIiwgXCIuLi5cIiwgMiwgXCIyMDIxLTMtMTJcIikpO1xyXG4gICAgICAgIGFkZFByb2plY3QocHJvaik7XHJcbiAgICAgICAgY29uc29sZS5kaXIocHJvamVjdHNDb250YWluZXIpXHJcbiAgICB9XHJcbikoKTtcclxuXHJcblxyXG4vLyBleHBvcnRzXHJcbmV4cG9ydCB7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lcixcclxuICAgIFByb2plY3QsXHJcbiAgICBhZGRQcm9qZWN0XHJcbn1cclxuLy8gY29uc29sZS5sb2cocHJvamVjdHNDb250YWluZXIpIiwiLy8gZGVhbHMgd2l0aCBzaG93aW5nIHRoZSB0b2RvIGxpc3Qgb2YgdGhlIHByb2plY3Qgc2VsZWN0ZWRcclxuaW1wb3J0IHsgZ2VuZXJhdGVGaWVsZHMsIHBvcHVsYXRlRmllbGRzIH0gZnJvbSBcIi4vZ2VuZXJhdGVGaWVsZHNcIlxyXG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL21haW5QYWdlXCJcclxuXHJcbi8vIFRPRE86IC0gSWYgdG9kb0xpc3QgaXNFbXB0eSB0aGVuIHNob3cgXCJObyB0YXNrIGFkZGVkXCJcclxuLy8gICAgICAtIGlmIHRoZXkgZXhpc3QsIHNob3cgdGhlIHRhc2suXHJcbi8vICAgICAgLSBJbmNsdWRlIGEgZm9ybSBmb3IgYWRkaW5nIG5ldyB0YXNrcy5cclxuY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxudG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJQcm9qZWN0KHByb2plY3QpIHsgXHJcbiAgICAvL3Byb2plY3QsIGlzIGFuIG9iamVjdCBpbiB0aGUgZm9ybTpcclxuICAgIC8vIHtcclxuICAgIC8vICB0b2RvTGlzdDpbXHJcbiAgICAvLyB7XCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCIsXCJkdWVEYXRlXCIsIFwicHJpb3JpdHlcIn0gLS0+IFRvZG9MaXN0IG9iamVjdFxyXG4gICAgLy9dLFxyXG4gICAgLy8gIHByb2plY3ROYW1lOiBcIjxzb21lIG5hbWU+XCJcclxuICAgIC8vfVxyXG5cclxuICAgIFxyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoQ29udGFpbmVyKHByb2plY3QpKVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiB0b2RvQ29udGFpbmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtcyhjb250YWluZXIsIHByb2plY3QpIHtcclxuICAgIC8vIG1ha2VzIHRvZG8gZGl2cyBmb3IgZWFjaCB0b2RvIGl0ZW0gYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgaWYgKHByb2plY3QudG9kb0xpc3QubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb0xpc3QubGVuZ3RoOyBpKyspIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUb2RvTGlzdCA9IHByb2plY3QudG9kb0xpc3RbaV1cclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidXNlci10YXNrXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxyXG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VG9kb0xpc3QudGl0bGVcclxuICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RUb2RvTGlzdC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXHJcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RUb2RvTGlzdC5wcmlvcml0eVxyXG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9MaXN0LmR1ZURhdGVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0b2RvLmFwcGVuZChcclxuICAgICAgICAgICAgICAgIHRvZG9UaXRsZSxcclxuICAgICAgICAgICAgICAgIC8vIHRvZG9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIC8vIHRvZG9Qcmlvcml0eSxcclxuICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0b2RvKVxyXG5cclxuICAgICAgICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmQgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgdG9kbykgLSAxOy8vIG1pbnVzIDEgYmVjYXVzZSBpdCBpcyBiZWVuIG9mZnNldCBieSB0aGUgdGl0bGUtY29udGFpbmVyIGNoaWxkIFxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9saXN0LWZvcm1cIilcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUZpZWxkcyhmb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcInRpdGxlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBcIlRFWFRBUkVBXCIsIGxhYmVsOiBcImRlc2NyaXB0aW9uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBcImRhdGVcIiwgbGFiZWw6IFwiRHVlRGF0ZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcInByaW9yaXR5XCIgfSwgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVGaWVsZHMoY3VycmVudFByb2plY3QucHJvamVjdC50b2RvTGlzdFtpbmRdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZCwgY3VycmVudFByb2plY3QucHJvamVjdC50b2RvTGlzdFtpbmRdLCBmb3JtKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgfSBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikudGV4dENvbnRlbnQ9YCR7cHJvamVjdC5wcm9qZWN0TmFtZX0gcHJvamVjdCBpcyBFbXB0eWBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWluZXIocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIC8vLS0+IGFwcGVuZCB0byB0b2RvQ29udGFpbmVyXHJcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTsgLy8gKyB0byBwcm9qZWN0TmFtZUNvbnRhaW5lclxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lXHJcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgICAgXHJcblxyXG4gICAgY3JlYXRlVG9kb0l0ZW1zKGNvbnRhaW5lciwgcHJvamVjdClcclxuXHJcbiAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgdG9kb0NvbnRhaW5lcixcclxuICAgIENvbnRhaW5lcixcclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBhZGRUYXNrSW1nIGZyb20gXCIuL2Fzc2V0cy9hZGRfdGFzay5wbmdcIlxyXG5pbXBvcnQgeyBnZW5lcmF0ZUZpZWxkcyB9IGZyb20gXCIuL2dlbmVyYXRlRmllbGRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvTGlzdEZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvbGlzdC1mb3JtXCIpXHJcblxyXG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGl0bGVcIilcclxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBUYXNrXCJcclxuICAgIGNvbnN0IGFkZFRhc2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGFkZFRhc2tJbWFnZS5zcmMgPSBhZGRUYXNrSW1nXHJcbiAgICBhZGRUYXNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWltZ1wiKVxyXG4gICAgZm9ybS5hcHBlbmQoYWRkVGFza0ltYWdlLHNlY3Rpb25UaXRsZSlcclxuICAgIC8vIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXHJcbiAgICBnZW5lcmF0ZUZpZWxkcyhmb3JtLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgeyB0eXBlOlwidGV4dFwiLCBsYWJlbDpcInRpdGxlXCIgfSxcclxuICAgICAgICAgICAgeyB0eXBlOlwiVEVYVEFSRUFcIiwgbGFiZWw6XCJkZXNjcmlwdGlvblwiIH0sXHJcbiAgICAgICAgICAgIHsgdHlwZTpcImRhdGVcIiwgbGFiZWw6XCJEdWVEYXRlXCIgfSxcclxuICAgICAgICAgICAgeyB0eXBlOiBcInRleHRcIiwgbGFiZWw6IFwicHJpb3JpdHlcIiB9LFxyXG4gICAgICAgIF1cclxuICAgICk7Ly8ganVzdCBleHBlcm1lbnRpbmdcclxuICAgIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aXRsZUNhc2Uoc3RyKSB7XHJcbiAgICAvLyB0aXRsZSBjYXNlIHlvdXIgc2VudGVuY2VzXHJcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcclxuICAgICAgICByZXR1cm4gKHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKTtcclxuICAgIH0pLmpvaW4oJyAnKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0e1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9