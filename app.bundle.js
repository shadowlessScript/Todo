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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100%;
    height: 100%;
}

.project-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self:center;
    margin-top: 10px;
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
    padding: 4%;
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
    position: absolute;
    left: 2%;
    top: 5%;
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

`, "",{"version":3,"sources":["webpack://./src/components/assets/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;;IAEvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI;oBACgB;IAChB,wBAAwB;IACxB,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,4BAA4B;;AAEhC;;AAEA;IACI,eAAe;IACf,uCAAuC;IACvC,YAAY;IACZ,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;IAC3B,UAAU;IACV,WAAW;AACf;;AAEA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,MAAM;IACN,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB;mCAC+B;AACnC;AACA;IACI,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C;mCAC+B;;AAEnC;;AAEA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C;mCAC+B;;AAEnC","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.project-list{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-self:center;\r\n    margin-top: 10px;\r\n    border: 1px solid black;\r\n    \r\n    border-radius: 5px;\r\n    padding: 15px;\r\n}\r\n\r\n.project-link{\r\n    /* width: 100px;\r\n    height: 100px; */\r\n    background-color: bisque;\r\n    text-align: center;\r\n    border-radius: 0.7rem;\r\n    padding: 4%;\r\n    transition: 0.4s;\r\n    margin: 12px\r\n    /* transition: color 0.4s; */\r\n\r\n}\r\n\r\n.project-link:hover{\r\n    cursor: pointer;\r\n    background-color: rgba(21, 20, 20, 0.8);\r\n    color: white;\r\n    transition: 0.4s;\r\n    /* transition: color 0.4s; */\r\n}\r\n\r\n.add-new-project-form{\r\n    background-color: aliceblue;\r\n    width: 40%;\r\n    height: 20%;\r\n}\r\n\r\n.form-container{\r\n    background-color: rgba(26, 25, 25, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.add-project-btn,.close-form-btn{\r\n    position: absolute;\r\n    left: 2%;\r\n    top: 5%;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n}\r\n.close-form-btn{\r\n    z-index: 12;\r\n}\r\n.add-project-btn:hover{\r\n    transform: scale(1.1);\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n    \r\n}\r\n\r\n.close-form-btn:hover{\r\n    transform: scale(1.1);\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n    \r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/landingPage.js":
/*!***************************************!*\
  !*** ./src/components/landingPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ landingPage),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   reloadProjects: () => (/* binding */ reloadProjects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _formHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formHandlers */ "./src/components/formHandlers.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/add.png */ "./src/components/assets/add.png");
/* harmony import */ var _menuInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuInterface */ "./src/components/menuInterface.js");







// let formCounter = 0;

// make the main div
const projectListDisplay = document.createElement("div")
projectListDisplay.classList.add("project-list");

function landingPage() {    
    // TODO: Put the add project btn in a different div 
    const addProjectBtn = document.createElement("img")
    addProjectBtn.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_4__
    addProjectBtn.alt = "Click this to add a project"
    addProjectBtn.classList.add("add-project-btn")

    addProjectBtn.addEventListener("click", () => {
        
            ;(0,_formHandlers__WEBPACK_IMPORTED_MODULE_1__.addNewProjectForm)();          
        
    });

    loadProjects(projectListDisplay)
    projectListDisplay.append(addProjectBtn)

    return projectListDisplay
}

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
/* harmony export */   "default": () => (/* binding */ mainPage)
/* harmony export */ });
/* harmony import */ var _menuInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuInterface */ "./src/components/menuInterface.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _todoListForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoListForm */ "./src/components/todoListForm.js");





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
        proj.addTask(new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]("Go to work", "...", 2, "12-3-2021"))
        proj.addTask(new _todos__WEBPACK_IMPORTED_MODULE_0__["default"]("Go to work!", "...", 2, "12-3-2021"));
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
                todoDescription,
                todoPriority,
                todoDueDate
            )
            container.append(todo)
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
/* harmony export */   "default": () => (/* binding */ todoListForm)
/* harmony export */ });
function todoListForm() {
    const form = document.createElement("form");
    form.classList.add("todolist-form")

    return form
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

/***/ "./src/components/assets/add.png":
/*!***************************************!*\
  !*** ./src/components/assets/add.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2287512b2fb76fdf8be.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL3N0eWxlLmNzcz81NDMxIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2Zvcm1IYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvbWVudUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvdG9kb0xhbmRpbmdQYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy90b2RvTGlzdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnByb2plY3QtbGlua3tcclxuICAgIC8qIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW46IDEycHhcclxuICAgIC8qIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7ICovXHJcblxyXG59XHJcblxyXG4ucHJvamVjdC1saW5rOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjAsIDIwLCAwLjgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIC8qIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7ICovXHJcbn1cclxuXHJcbi5hZGQtbmV3LXByb2plY3QtZm9ybXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjUsIDI1LCAwLjcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLXByb2plY3QtYnRuLC5jbG9zZS1mb3JtLWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xyXG59XHJcbi5jbG9zZS1mb3JtLWJ0bntcclxuICAgIHotaW5kZXg6IDEyO1xyXG59XHJcbi5hZGQtcHJvamVjdC1idG46aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jbG9zZS1mb3JtLWJ0bjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICB0cmFuc2Zvcm0sIGJveC1zaGFkb3csIDAuNHM7XHJcbiAgICBcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO29CQUNnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCw0QkFBNEI7O0FBRWhDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCO21DQUMrQjtBQUNuQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDO21DQUMrQjs7QUFFbkM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkNBQTJDO0lBQzNDO21DQUMrQjs7QUFFbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmt7XFxyXFxuICAgIC8qIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXHJcXG4gICAgcGFkZGluZzogNCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgIG1hcmdpbjogMTJweFxcclxcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjRzOyAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIwLCAyMCwgMC44KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjRzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLW5ldy1wcm9qZWN0LWZvcm17XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjUsIDI1LCAwLjcpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG4sLmNsb3NlLWZvcm0tYnRue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDIlO1xcclxcbiAgICB0b3A6IDUlO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbn1cXHJcXG4uY2xvc2UtZm9ybS1idG57XFxyXFxuICAgIHotaW5kZXg6IDEyO1xcclxcbn1cXHJcXG4uYWRkLXByb2plY3QtYnRuOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWZvcm0tYnRuOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9hc3NldHMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBsYW5kaW5nUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2xhbmRpbmdQYWdlXCI7XHJcbmltcG9ydCBtYWluUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL21haW5QYWdlXCI7XHJcbi8vIGltcG9ydCBwcm9qZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdC5qc1wiO1xyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXHJcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpXHJcblxyXG5mdW5jdGlvbiBzdGFydCgpIHtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5QYWdlKCkpXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobWFpbik7XHJcblxyXG59XHJcbnN0YXJ0KClcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBtYWluXHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyByZWxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL2xhbmRpbmdQYWdlLmpzXCI7XHJcbmltcG9ydCBjbG9zZUltYWdlIGZyb20gXCIuL2Fzc2V0cy9jbG9zZS5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RGb3JtKCkge1xyXG4gICAgLy8gTUFLRVMgVEhFIEZPUk0gRk9SIE1BS0lORyBBIE5FVyBQUk9KRUNUXHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGQtbmV3LXByb2plY3QtZm9ybVwiKVxyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3QgTmFtZVwiKVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBhZGRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICBmb3JtLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0LCBhZGRQcm9qZWN0KVxyXG5cclxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdChmb3JtLCBwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpOyAvLyByZW1vdmUgdGhlIGZvcm0gY29udGFpbmVyIGZyb20gdGhlIGJvZHlcclxuICAgIH0pO1xyXG5cclxuICBcclxuXHJcbiAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2xvc2VJY29uLnNyYyA9IGNsb3NlSW1hZ2U7XHJcbiAgICBjbG9zZUljb24uYWx0ID0gXCJDbG9zZXMgdGhlIGZvcm0gcGFnZVwiO1xyXG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLWJ0blwiKVxyXG5cclxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7IC8vIHJlbW92ZSB0aGUgZm9ybSBjb250YWluZXIgZnJvbSB0aGUgYm9keSAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kKGZvcm0sIGNsb3NlSWNvbilcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvcm1Db250YWluZXIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGZvcm0sIG5hbWVTdWJtaXR0ZWQpIHtcclxuXHJcbiAgICBhZGRQcm9qZWN0KG5ldyBQcm9qZWN0KG5hbWVTdWJtaXR0ZWQpKSAvLyBjcmVhdGVzIGFuZCBhZGRzIGEgcHJvamVjdCB0byB0aGUgcHJvamVjdExpc3RDb250YWluZXIgYXQgdGhlIGBQcm9qZWN0YCBtb2R1bGVcclxuICAgIHJlbG9hZFByb2plY3RzKG5hbWVTdWJtaXR0ZWQpIC8vIHNob3dzIHRoZSBjaGFuZ2UgcmVhbC10aW1lLlxyXG4gICAgXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkTmV3UHJvamVjdEZvcm19IiwiaW1wb3J0IHsgcHJvamVjdHNDb250YWluZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGFkZE5ld1Byb2plY3RGb3JtIH0gZnJvbSBcIi4vZm9ybUhhbmRsZXJzXCI7XHJcbmltcG9ydCBsb2FkUHJvamVjdFBhZ2UgZnJvbSBcIi4vbG9hZFBhZ2VcIjtcclxuaW1wb3J0IHVzZXJQcm9qZWN0IGZyb20gXCIuL3RvZG9MYW5kaW5nUGFnZVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuaW1wb3J0IGFkZEltYWdlIGZyb20gXCIuL2Fzc2V0cy9hZGQucG5nXCI7XHJcbmltcG9ydCB7IHByb2plY3RzSG9sZGVyIH0gZnJvbSBcIi4vbWVudUludGVyZmFjZVwiO1xyXG4vLyBsZXQgZm9ybUNvdW50ZXIgPSAwO1xyXG5cclxuLy8gbWFrZSB0aGUgbWFpbiBkaXZcclxuY29uc3QgcHJvamVjdExpc3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wcm9qZWN0TGlzdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhbmRpbmdQYWdlKCkgeyAgICBcclxuICAgIC8vIFRPRE86IFB1dCB0aGUgYWRkIHByb2plY3QgYnRuIGluIGEgZGlmZmVyZW50IGRpdiBcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBhZGRQcm9qZWN0QnRuLnNyYyA9IGFkZEltYWdlXHJcbiAgICBhZGRQcm9qZWN0QnRuLmFsdCA9IFwiQ2xpY2sgdGhpcyB0byBhZGQgYSBwcm9qZWN0XCJcclxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0blwiKVxyXG5cclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYWRkTmV3UHJvamVjdEZvcm0oKTsgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2FkUHJvamVjdHMocHJvamVjdExpc3REaXNwbGF5KVxyXG4gICAgcHJvamVjdExpc3REaXNwbGF5LmFwcGVuZChhZGRQcm9qZWN0QnRuKVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0TGlzdERpc3BsYXlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzKHByb2plY3RMaXN0RGlzcGxheSkge1xyXG4gICAgLy8gbG9hZCBleGlzdGluZyBwcm9qZWN0cyB0byB0aGUgdGhlIHByb2plY3RMaXN0RGlzcGxheSBkaXZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNDb250YWluZXIubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlua1wiKTtcclxuICAgICAgICBwcm9qZWN0TGluay50ZXh0Q29udGVudCA9IHByb2plY3RzQ29udGFpbmVyW2ldLnByb2plY3ROYW1lXHJcbiAgICAgICAgcHJvamVjdExpbmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XHJcblxyXG4gICAgICAgIHByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxyXG4gICAgICAgICAgICBsb2FkUHJvamVjdFBhZ2UoQ29udGFpbmVyKHByb2plY3RzQ29udGFpbmVyW2ldKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvamVjdExpc3REaXNwbGF5LmFwcGVuZChwcm9qZWN0TGluaylcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVsb2FkUHJvamVjdHMobmFtZSkgeyAvLyBUT0RPOiBNYXkgYmUgaXQgY2FuIHRoZSBwbGFjZWQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlLlxyXG4gICAgLy8gdXNlZCB0byBhZGQgbmV3IHByb2plY3QgdG8gdGhlIHByb2plY3QtbGlzdC1kaXNwbGF5IGRpdlxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNDb250YWluZXIubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHByb2plY3RzQ29udGFpbmVyW2ldLnByb2plY3ROYW1lID09PSBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpbmtcIik7XHJcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdHNDb250YWluZXJbaV0ucHJvamVjdE5hbWVcclxuICAgICAgICAgICAgcHJvamVjdExpbmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSk7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0UGFnZSh1c2VyUHJvamVjdChwcm9qZWN0c0NvbnRhaW5lcltpXSkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdHNIb2xkZXIuYXBwZW5kKHByb2plY3RMaW5rKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCB7XHJcbiAgICBsb2FkUHJvamVjdHMsXHJcbiAgICByZWxvYWRQcm9qZWN0c1xyXG59XHJcbiIsImltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCB7IHRvZG9Db250YWluZXIgfSBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0UGFnZShwYWdlKSB7IC8vVE9ETzogTWFrZSBzdXJlIGl0IGlzIGR5bmFtaWMsIFxyXG4gICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0pXHJcblxyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQocGFnZSlcclxuXHJcbn0iLCJpbXBvcnQgbWVudUludGVyZmFjZSBmcm9tIFwiLi9tZW51SW50ZXJmYWNlXCI7XHJcbmltcG9ydCB1c2VyUHJvamVjdCBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuaW1wb3J0IHsgcHJvamVjdHNDb250YWluZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB0b2RvTGlzdEZvcm0gZnJvbSBcIi4vdG9kb0xpc3RGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluUGFnZSgpIHtcclxuICAgIGNvbnN0IG1haW5QYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5QYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXBhZ2UtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZChcclxuICAgICAgICBtZW51SW50ZXJmYWNlKCksXHJcbiAgICAgICAgdXNlclByb2plY3QocHJvamVjdHNDb250YWluZXJbMF0pLFxyXG4gICAgICAgIHRvZG9MaXN0Rm9ybSgpLFxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBtYWluUGFnZUNvbnRhaW5lclxyXG59IiwiaW1wb3J0IHsgbG9hZFByb2plY3RzIH0gZnJvbSBcIi4vbGFuZGluZ1BhZ2VcIjtcclxuaW1wb3J0IHsgYWRkTmV3UHJvamVjdEZvcm0gfSBmcm9tIFwiLi9mb3JtSGFuZGxlcnNcIjtcclxuaW1wb3J0IGFkZEltYWdlIGZyb20gXCIuL2Fzc2V0cy9hZGQucG5nXCI7XHJcblxyXG4vLyBtYWtlIHRoZSBtYWluIGRpdlxyXG5jb25zdCBwcm9qZWN0TGlzdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnByb2plY3RMaXN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpO1xyXG5jb25zdCBwcm9qZWN0c0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxucHJvamVjdHNIb2xkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaG9sZGVyXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJbnRlcmZhY2UoKSB7ICAgIFxyXG4gICAgLy8gVE9ETzogUHV0IHRoZSBhZGQgcHJvamVjdCBidG4gaW4gYSBkaWZmZXJlbnQgZGl2IFxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBhZGRQcm9qZWN0QnRuLnNyYyA9IGFkZEltYWdlXHJcbiAgICBhZGRQcm9qZWN0QnRuLmFsdCA9IFwiQ2xpY2sgdGhpcyB0byBhZGQgYSBwcm9qZWN0XCJcclxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0blwiKVxyXG5cclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYWRkTmV3UHJvamVjdEZvcm0oKTsgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIGxvYWRQcm9qZWN0cyhwcm9qZWN0c0hvbGRlcilcclxuICAgIHByb2plY3RMaXN0RGlzcGxheS5hcHBlbmQocHJvamVjdHNIb2xkZXIsYWRkUHJvamVjdEJ0bilcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdExpc3REaXNwbGF5XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBwcm9qZWN0c0hvbGRlclxyXG59XHJcbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2Rvc1wiO1xyXG5cclxuY2xhc3MgUHJvamVjdHtcclxuICAgIHRvZG9MaXN0ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWUgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBwcm9qZWN0TmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3ROYW1lID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvamVjdE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG8pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvZG9MaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9MaXN0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkUHJvamVjdFxyXG59XHJcblxyXG5cclxuXHJcbmxldCBwcm9qZWN0c0NvbnRhaW5lciA9IFtdIC8vIHdpbGwgaG9sZCBhbGwgdGhlIHByb2plY3RzIG9mIHVzZXJcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIucHVzaChwcm9qZWN0KVxyXG59XHJcblxyXG5pZiAocHJvamVjdHNDb250YWluZXIubGVuZ3RoID09PSAwKVxyXG57XHJcbiAgICBhZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKSlcclxufVxyXG5cclxuKFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwcm9qID0gbmV3IFByb2plY3QoXCJDb25zdHJ1Y3Rpb25cIik7XHJcbiAgICAgICAgcHJvai5hZGRUYXNrKG5ldyBUb2RvTGlzdChcIkdvIHRvIHdvcmtcIiwgXCIuLi5cIiwgMiwgXCIxMi0zLTIwMjFcIikpXHJcbiAgICAgICAgcHJvai5hZGRUYXNrKG5ldyBUb2RvTGlzdChcIkdvIHRvIHdvcmshXCIsIFwiLi4uXCIsIDIsIFwiMTItMy0yMDIxXCIpKTtcclxuICAgICAgICBhZGRQcm9qZWN0KHByb2opO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKHByb2plY3RzQ29udGFpbmVyKVxyXG4gICAgfVxyXG4pKCk7XHJcblxyXG5cclxuLy8gZXhwb3J0c1xyXG5leHBvcnQge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIsXHJcbiAgICBQcm9qZWN0LFxyXG4gICAgYWRkUHJvamVjdFxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzQ29udGFpbmVyKSIsIi8vIGRlYWxzIHdpdGggc2hvd2luZyB0aGUgdG9kbyBsaXN0IG9mIHRoZSBwcm9qZWN0IHNlbGVjdGVkXHJcbi8vIFRPRE86IC0gSWYgdG9kb0xpc3QgaXNFbXB0eSB0aGVuIHNob3cgXCJObyB0YXNrIGFkZGVkXCJcclxuLy8gICAgICAtIGlmIHRoZXkgZXhpc3QsIHNob3cgdGhlIHRhc2suXHJcbi8vICAgICAgLSBJbmNsdWRlIGEgZm9ybSBmb3IgYWRkaW5nIG5ldyB0YXNrcy5cclxuY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxudG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJQcm9qZWN0KHByb2plY3QpIHsgXHJcbiAgICAvL3Byb2plY3QsIGlzIGFuIG9iamVjdCBpbiB0aGUgZm9ybTpcclxuICAgIC8vIHtcclxuICAgIC8vICB0b2RvTGlzdDpbXHJcbiAgICAvLyB7XCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCIsXCJkdWVEYXRlXCIsIFwicHJpb3JpdHlcIn0gLS0+IFRvZG9MaXN0IG9iamVjdFxyXG4gICAgLy9dLFxyXG4gICAgLy8gIHByb2plY3ROYW1lOiBcIjxzb21lIG5hbWU+XCJcclxuICAgIC8vfVxyXG5cclxuICAgIFxyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoQ29udGFpbmVyKHByb2plY3QpKVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiB0b2RvQ29udGFpbmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtcyhjb250YWluZXIsIHByb2plY3QpIHtcclxuICAgIC8vIG1ha2VzIHRvZG8gZGl2cyBmb3IgZWFjaCB0b2RvIGl0ZW0gYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgaWYgKHByb2plY3QudG9kb0xpc3QubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb0xpc3QubGVuZ3RoOyBpKyspIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUb2RvTGlzdCA9IHByb2plY3QudG9kb0xpc3RbaV1cclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXHJcbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUb2RvTGlzdC50aXRsZVxyXG4gICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9MaXN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcclxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9MaXN0LnByaW9yaXR5XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VG9kb0xpc3QuZHVlRGF0ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLFxyXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHRvZG8pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChcclxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikudGV4dENvbnRlbnQ9YCR7cHJvamVjdC5wcm9qZWN0TmFtZX0gcHJvamVjdCBpcyBFbXB0eWBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBDb250YWluZXIocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIC8vLS0+IGFwcGVuZCB0byB0b2RvQ29udGFpbmVyXHJcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTsgLy8gKyB0byBwcm9qZWN0TmFtZUNvbnRhaW5lclxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lXHJcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgICAgXHJcblxyXG4gICAgY3JlYXRlVG9kb0l0ZW1zKGNvbnRhaW5lciwgcHJvamVjdClcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICB0b2RvQ29udGFpbmVyLFxyXG4gICAgQ29udGFpbmVyLFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0xpc3RGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidG9kb2xpc3QtZm9ybVwiKVxyXG5cclxuICAgIHJldHVybiBmb3JtXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRpdGxlLCBcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkdWVEYXRlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==