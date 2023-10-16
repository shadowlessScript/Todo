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
    grid-template-columns: repeat( auto-fit, minmax(500px, 1fr ) );
    grid-template-rows: 1fr;
}

.project-list{
    
    border: 1px solid black;
    /* width: 200px; */
    border-radius: 5px;
    padding: 15px;
}

.project-link{
    /* width: 100px; */
    height: 30px;
    background-color: bisque;
    text-align: center;
    border-radius: 0.2rem;
    padding: 4px;
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
    width: 70%;
    height: 20%;
}

.form-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.open-form-btn, .close-form-btn{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: 
        transform, box-shadow, 0.4s;
}
.close-form-btn{
    width: 30px;
    height: 30px;
    margin-bottom: -10px;
    margin-left: 15px;
}
.open-form-btn:hover{
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
.add-project-btn{
    border: none;
    padding: 10px;
    margin-left: 5px;
    background-color: #a3e635;
    color: black;
    font-weight: 600;
}

.add-project-btn:hover{
    cursor: pointer;
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
}

.cancle-btn{
    margin: 10px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: #ef4444;
    color: white;
}

.project-name-input{
    padding: 5px;
    border-radius: .5rem;
}

.project-name-input:focus{
    outline-color: #fb923c;
}

.project-link-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.delete-project:hover{
    cursor: pointer;    
}

.msg-container{
    position: absolute;
    top: 30%;
    left: 35%;
    width: 30%;
    height: 30%;
    background-color: antiquewhite;
    text-align: center;
}

.notify{
    position: absolute;
    top: 1%;
    right: 40%;
    width: 300px;
    height: 30px;
    background-color: #a3e635;
    animation:notification 1.5s both;
    transition: ease-in-out 0.2s;

}

.complete-task-div{
    padding: 15px;
}

.task-completed{
    margin-left: 30px;
    width:fit-content;
    padding:2px;
    border-radius: 3px;
}

.task-completed:hover{
    background-color: rgb(216, 212, 212);
}

.complete-items{
    margin-bottom: 10px;
}

@keyframes notification {
    from{
        height:0px;
        font-size: 0;
    }
    to{height: 30px; font-size: inherit;}
}`, "",{"version":3,"sources":["webpack://./src/components/assets/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4CAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,YAAY;IACZ,8DAA8D;IAC9D,uBAAuB;AAC3B;;AAEA;;IAEI,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,4BAA4B;;AAEhC;;AAEA;IACI,eAAe;IACf,uCAAuC;IACvC,YAAY;IACZ,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB;mCAC+B;AACnC;AACA;IACI,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;AACrB;AACA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C;mCAC+B;;AAEnC;;AAEA;IACI,qBAAqB;IACrB,2CAA2C;IAC3C;mCAC+B;;AAEnC;AACA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB,iGAAiG;AACjG;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iDAAiD;IACjD,gBAAgB;IAChB,mBAAmB;AACvB;AACA;;GAEG;AACH;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,gCAAgC;IAChC,4BAA4B;;AAEhC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;QACI,UAAU;QACV,YAAY;IAChB;IACA,GAAG,YAAY,EAAE,kBAAkB,CAAC;AACxC","sourcesContent":["@font-face {\r\n    font-family: roboto;\r\n    src: url(\"./Roboto-Regular.ttf\");\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"roboto\";\r\n}\r\n\r\nbody{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.main-container{\r\n    height: 100vh;\r\n}\r\n.main-page-container{\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: repeat( auto-fit, minmax(500px, 1fr ) );\r\n    grid-template-rows: 1fr;\r\n}\r\n\r\n.project-list{\r\n    \r\n    border: 1px solid black;\r\n    /* width: 200px; */\r\n    border-radius: 5px;\r\n    padding: 15px;\r\n}\r\n\r\n.project-link{\r\n    /* width: 100px; */\r\n    height: 30px;\r\n    background-color: bisque;\r\n    text-align: center;\r\n    border-radius: 0.2rem;\r\n    padding: 4px;\r\n    transition: 0.4s;\r\n    margin: 12px\r\n    /* transition: color 0.4s; */\r\n\r\n}\r\n\r\n.project-link:hover{\r\n    cursor: pointer;\r\n    background-color: rgba(21, 20, 20, 0.8);\r\n    color: white;\r\n    transition: 0.4s;\r\n    /* transition: color 0.4s; */\r\n}\r\n\r\n.add-new-project-form{\r\n    width: 70%;\r\n    height: 20%;\r\n}\r\n\r\n.form-container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.open-form-btn, .close-form-btn{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n}\r\n.close-form-btn{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-bottom: -10px;\r\n    margin-left: 15px;\r\n}\r\n.open-form-btn:hover{\r\n    transform: scale(1.1);\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n    \r\n}\r\n\r\n.close-form-btn:hover{\r\n    transform: scale(1.1);\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: \r\n        transform, box-shadow, 0.4s;\r\n    \r\n}\r\n.add-project-btn{\r\n    border: none;\r\n    padding: 10px;\r\n    margin-left: 5px;\r\n    background-color: #a3e635;\r\n    color: black;\r\n    font-weight: 600;\r\n}\r\n\r\n.add-project-btn:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.todolist-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid brown;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 10px;\r\n/* background-image: linear-gradient(to right top, #fcf8ff, #e5cbf9, #ce9ef1, #b670e7, #9d3cdc);*/\r\n}\r\n\r\n.todo-container{\r\n    border: 2px dashed saddlebrown;\r\n    /* width: 50%; */\r\n    /* height: 100vh; */\r\n}\r\n\r\n.todolist-form > input, textarea{\r\n    /* border: none; */\r\n    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n/* .todolist-form > label{\r\n    color: white;\r\n} */\r\n.todolist-form > input{\r\n    /* padding: 10px; */\r\n    height: 35px;   \r\n    border-radius: 5px;\r\n}\r\n\r\n.submit-btn{\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #008F7A;\r\n    color: white;\r\n}\r\n\r\n.add-task-img{\r\n    width: 48px;\r\n    height: 48px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.section-title{\r\n    margin-bottom: 10px;\r\n\r\n}\r\n\r\n.title-container{\r\n    text-align:center;\r\n}\r\n\r\n.user-task{\r\n    display: flex;\r\n    height: 50px;\r\n    background-color: #ddd6fe;\r\n    margin: 10px;\r\n    border-radius: 5px; \r\n}\r\n\r\n.user-task:hover{\r\n    cursor: pointer\r\n}\r\n\r\n.cancle-btn{\r\n    margin: 10px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: #ef4444;\r\n    color: white;\r\n}\r\n\r\n.project-name-input{\r\n    padding: 5px;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.project-name-input:focus{\r\n    outline-color: #fb923c;\r\n}\r\n\r\n.project-link-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.delete-project:hover{\r\n    cursor: pointer;    \r\n}\r\n\r\n.msg-container{\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 35%;\r\n    width: 30%;\r\n    height: 30%;\r\n    background-color: antiquewhite;\r\n    text-align: center;\r\n}\r\n\r\n.notify{\r\n    position: absolute;\r\n    top: 1%;\r\n    right: 40%;\r\n    width: 300px;\r\n    height: 30px;\r\n    background-color: #a3e635;\r\n    animation:notification 1.5s both;\r\n    transition: ease-in-out 0.2s;\r\n\r\n}\r\n\r\n.complete-task-div{\r\n    padding: 15px;\r\n}\r\n\r\n.task-completed{\r\n    margin-left: 30px;\r\n    width:fit-content;\r\n    padding:2px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.task-completed:hover{\r\n    background-color: rgb(216, 212, 212);\r\n}\r\n\r\n.complete-items{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@keyframes notification {\r\n    from{\r\n        height:0px;\r\n        font-size: 0;\r\n    }\r\n    to{height: 30px; font-size: inherit;}\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _components_menuHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menuHelpers */ "./src/components/menuHelpers.js");
/* harmony import */ var _components_mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mainPage */ "./src/components/mainPage.js");



// import project from "./components/project.js";

const main = document.createElement("main")
main.classList.add("main-container")

function start() {

    main.appendChild((0,_components_mainPage__WEBPACK_IMPORTED_MODULE_2__["default"])())

    document.body.append(main);
    // if (storageAvailable("localStorage")) {
    //     console.log("It possible")
    // } else {
    //     console.log("Not possible")
    // }
}
start()

// console.log(localStorage.getItem("projects"))




/***/ }),

/***/ "./src/components/createTodoItems.js":
/*!*******************************************!*\
  !*** ./src/components/createTodoItems.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoItems: () => (/* binding */ createTodoItems)
/* harmony export */ });
/* harmony import */ var _generateFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateFields */ "./src/components/generateFields.js");
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage */ "./src/components/mainPage.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./src/components/elements.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _menuHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuHelpers */ "./src/components/menuHelpers.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorageHandler */ "./src/components/localStorageHandler.js");








function createTodoItems(container, project) {
    // makes todo divs for each todo item and appends it to the container
    if (project.todoList.length > 0)
    {
        for (let i = 0; i < project.todoList.length; i++)
        {
            let projectTodoList = project.todoList[i];
            const taskContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__["default"])("div", "task-container");
            const todo = document.createElement("div");
            todo.classList.add("user-task");
            const todoTitle = document.createElement("h4");
            todoTitle.textContent = projectTodoList.title;
            const todoDescription = document.createElement("p");
            todoDescription.textContent = projectTodoList.description;
            const todoPriority = document.createElement("h5");
            todoPriority.textContent = projectTodoList.priority;
            const todoDueDate = document.createElement("p");
            todoDueDate.textContent = projectTodoList.dueDate;
            const deleteTask = (0,_elements__WEBPACK_IMPORTED_MODULE_2__["default"])("button", "delete-task", "X");
            const taskComplete = (0,_elements__WEBPACK_IMPORTED_MODULE_2__["default"])("button", "task-complete", "Done");

            todo.append(
                todoTitle,
                // todoDescription,
                // todoPriority,
                todoDueDate
            );
            taskContainer.append(todo, taskComplete, deleteTask);

            container.append(taskContainer);
            
            todo.addEventListener("click", (e) => {
                let ind = Array.prototype.indexOf.call(container.children, taskContainer) - 1; // minus 1 because it is been offset by the title-container child 
                let form = document.querySelector(".todolist-form");
                form.replaceChildren();
                (0,_generateFields__WEBPACK_IMPORTED_MODULE_0__.generateFields)(form, [
                    { type: "text", label: "title" },
                    { type: "TEXTAREA", label: "description" },
                    { type: "date", label: "DueDate" },
                    { type: "text", label: "priority" },
                ],
                    true
                );
                (0,_generateFields__WEBPACK_IMPORTED_MODULE_0__.populateFields)(_mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind]);
                _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.taskSelected = _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind];
                console.log(ind, _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind], form);
            });

            taskComplete.addEventListener("click", () => {
                let ind = Array.prototype.indexOf.call(container.children, taskContainer) - 1; // minus 1 because it is been offset by the title-container child 

                let tasks = [];
                tasks.push(_mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind]);
                if (_project__WEBPACK_IMPORTED_MODULE_3__.completedTasks[`${project._projectName}`])
                {
                    _project__WEBPACK_IMPORTED_MODULE_3__.completedTasks[`${project._projectName}`].push(_mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind]);
                }
                else
                {
                    _project__WEBPACK_IMPORTED_MODULE_3__.completedTasks[`${project._projectName}`] = tasks;
                }
                _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList = (0,_menuHelpers__WEBPACK_IMPORTED_MODULE_5__.arrayRemove)(_mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList, _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind]);
                (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_6__.updateCompletedTasksStorage)();
                console.log(_project__WEBPACK_IMPORTED_MODULE_3__.completedTasks);
                (0,_menuHelpers__WEBPACK_IMPORTED_MODULE_5__.renderCompletedTasks)();
                (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_6__.updateStorage)();
                container.removeChild(taskContainer);
            });

            deleteTask.addEventListener("click", () => { 
                let ind = Array.prototype.indexOf.call(container.children, taskContainer) - 1; // minus 1 because it is been offset by the title-container child 
                _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList = (0,_menuHelpers__WEBPACK_IMPORTED_MODULE_5__.arrayRemove)(_mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList, _mainPage__WEBPACK_IMPORTED_MODULE_1__.currentProject.project.todoList[ind]);
                (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_6__.updateStorage)();
                container.removeChild(taskContainer);
            });
        }



    }
    else
    {
        container.append(
            document.createElement("p").textContent = `${project._projectName} project is Empty`
        );
    }
}


/***/ }),

/***/ "./src/components/elements.js":
/*!************************************!*\
  !*** ./src/components/elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createComponent)
/* harmony export */ });

function createComponent(element, eleClassName, text) {
    const ele = document.createElement(`${element}`);
    ele.classList.add(`${eleClassName}`)
    if (text)
    {
        ele.textContent = `${text}` 

    }

    return ele
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
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorageHandler */ "./src/components/localStorageHandler.js");








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
        const cancleBtn = document.createElement("button")
        cancleBtn.classList.add("cancle-btn");
        cancleBtn.textContent = "Cancle"

        submitBtn.addEventListener("click", () => { 
            // calls a function that will update a task
            updateTask();
        });

        cancleBtn.addEventListener("click", (e) => {
            let c = e.view.document.querySelector(".main-page-container");

            const form = document.querySelector(".todolist-form");

            form.addEventListener("submit", (e) => {

                e.preventDefault();
            });
            c.removeChild(form)
            c.append((0,_todoListForm__WEBPACK_IMPORTED_MODULE_5__["default"])())
            // generateFields(form, [{ type: "text", label: "title" },
            // { type: "TEXTAREA", label: "description" },
            // { type: "date", label: "DueDate" },
            //     { type: "text", label: "priority" },]);
            
        });
        form.append(cancleBtn)

    } else
    {
        submitBtn.textContent = "Add task";
        submitBtn.addEventListener("click", (e) => {
            submitTask();
    });
    }
    submitBtn.classList.add("submit-btn");
    

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


function submitTask() {
    const title = document.querySelector(".title-field").value;
    const dueDate = document.querySelector(".DueDate-field").value;
    const description = document.querySelector(".description-field").value;
    const priority = document.querySelector(".priority-field").value;
    const form = document.querySelector(".todolist-form");

    if (isValid(title, description, priority, dueDate))
    {
        _mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject.project.addTask(new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, priority, dueDate));
        (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_6__.updateStorage)()
        console.log(title, description, dueDate, priority, _mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject.project, _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer);
        (0,_loadPage__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.Container)(_mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject.project));
        
    }
    
    form.addEventListener("submit", (e) => {

        e.preventDefault();
    });
}

function updateTask() {
    // console.log(taskSelected)
    const form = document.querySelector(".todolist-form");
    _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.taskSelected.title = document.querySelector(".title-field").value;
    _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.taskSelected.dueDate = document.querySelector(".DueDate-field").value;
    _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.taskSelected.description = document.querySelector(".description-field").value;
    _todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.taskSelected.priority = document.querySelector(".priority-field").value;

    (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_6__.updateStorage)()

    ;(0,_loadPage__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.Container)(_mainPage__WEBPACK_IMPORTED_MODULE_2__.currentProject.project));
    console.log(_todoLandingPage__WEBPACK_IMPORTED_MODULE_4__.taskSelected)
    form.addEventListener("submit", (e) => {

        e.preventDefault();
    });
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

/***/ "./src/components/localStorageHandler.js":
/*!***********************************************!*\
  !*** ./src/components/localStorageHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageAvailable),
/* harmony export */   getCompletedTask: () => (/* binding */ getCompletedTask),
/* harmony export */   getInfo: () => (/* binding */ getInfo),
/* harmony export */   info: () => (/* binding */ info),
/* harmony export */   updateCompletedTasksStorage: () => (/* binding */ updateCompletedTasksStorage),
/* harmony export */   updateStorage: () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/components/message.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
// Check whether local storage is possible in a browser



let info;
let completedActivities;

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// if (storageAvailable("localStorage"))
// {    
//   if (!localStorage.getItem("projects"))
//   {
//       updateStorage()
//   }
// } else
// {
//   info = JSON.parse(localStorage.getItem("projects"));
//   // Too bad, no localStorage for us
// }

 function updateStorage() {
  localStorage.setItem("projects", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_1__.projectsContainer));  
  info = JSON.parse(localStorage.getItem("projects"));
  (0,_message__WEBPACK_IMPORTED_MODULE_0__["default"])("Updated!", "create");

}

function updateCompletedTasksStorage() {
  localStorage.setItem("completedTasks", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_1__.completedTasks));
}

function getInfo() {
    info = JSON.parse(localStorage.getItem("projects"))
    return info
}

function getCompletedTask() {
  completedActivities = JSON.parse(localStorage.getItem("completedTasks"))
  return completedActivities;
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
    project: _project__WEBPACK_IMPORTED_MODULE_2__.projectsContainer[0],
    index: 0,
} // Will be used when creating a todo list, because it has to be contained in a spefic project

function mainPage() {
    const mainPageContainer = document.createElement("div");
    mainPageContainer.classList.add("main-page-container");

    mainPageContainer.append(
        (0,_menuInterface__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        (0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_1__["default"])(_project__WEBPACK_IMPORTED_MODULE_2__.projectsContainer[0], currentProject.index),
        (0,_todoListForm__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    )
    return mainPageContainer
}




/***/ }),

/***/ "./src/components/menuFormHandlers.js":
/*!********************************************!*\
  !*** ./src/components/menuFormHandlers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProjectForm: () => (/* binding */ addNewProjectForm)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/components/project.js");
/* harmony import */ var _menuHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuHelpers.js */ "./src/components/menuHelpers.js");
/* harmony import */ var _assets_close_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/close.png */ "./src/components/assets/close.png");
/* harmony import */ var _localStorageHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageHandler.js */ "./src/components/localStorageHandler.js");
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.js */ "./src/components/message.js");






let isActive = false; // to avoid the form being appended multiple times.

function addNewProjectForm() {
    // MAKES THE FORM FOR MAKING A NEW PROJECT

    const formContainer = document.createElement("div")
    formContainer.classList.add("form-container")

    const form = document.createElement("form")
    form.classList.add("add-new-project-form")
    const projectNameInput = document.createElement("input")
    projectNameInput.classList.add("project-name-input")
    projectNameInput.setAttribute("type", "text")
    projectNameInput.setAttribute("placeholder", "Project Name")

    const addProjectBtn = document.createElement("button")
    addProjectBtn.classList.add("add-project-btn")
    addProjectBtn.textContent = "Add Project"
    form.append(projectNameInput, addProjectBtn)

    addProjectBtn.addEventListener("click", () => { 
        createProject(form, projectNameInput.value);
        const projectList = document.querySelector(".add-project-form-holder")
        projectList.removeChild(formContainer); // remove the form container from the div.project-list
        isActive = false;
    });

  

    const closeIcon = document.createElement("img");
    closeIcon.src = _assets_close_png__WEBPACK_IMPORTED_MODULE_2__;
    closeIcon.alt = "Closes the form page";
    closeIcon.classList.add("close-form-btn")

    closeIcon.addEventListener("click", () => {
        // document.body.removeChild(formContainer); // remove the form container from the body 
        document.querySelector(".add-project-form-holder").removeChild(formContainer)
        isActive = false;
    });
    form.append(closeIcon)
    formContainer.append(form)

    if (!isActive)
    {
        document.querySelector(".add-project-form-holder").append(formContainer)
        isActive = true;
    }
}


function createProject(form, nameSubmitted) {

    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(nameSubmitted)) // creates and adds a project to the projectListContainer at the `Project` module
    ;(0,_localStorageHandler_js__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(); // localStorage is updated
    (0,_menuHelpers_js__WEBPACK_IMPORTED_MODULE_1__.reloadProjects)(nameSubmitted) // shows the newly added project on the div.project-holder.
    
    form.addEventListener("submit", (e) => {
    
        e.preventDefault(); // prevent it from sending post/get request
    });

    (0,_message_js__WEBPACK_IMPORTED_MODULE_4__["default"])(`${nameSubmitted} project has been created!`, "create");
}



/***/ }),

/***/ "./src/components/menuHelpers.js":
/*!***************************************!*\
  !*** ./src/components/menuHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayRemove: () => (/* binding */ arrayRemove),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   reloadProjects: () => (/* binding */ reloadProjects),
/* harmony export */   renderCompletedTasks: () => (/* binding */ renderCompletedTasks),
/* harmony export */   updatetasksAccomplished: () => (/* binding */ updatetasksAccomplished)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _todoLandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoLandingPage */ "./src/components/todoLandingPage.js");
/* harmony import */ var _menuInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuInterface */ "./src/components/menuInterface.js");
/* harmony import */ var _assets_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/deleteIcon.svg */ "./src/components/assets/deleteIcon.svg");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements */ "./src/components/elements.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorageHandler */ "./src/components/localStorageHandler.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./src/components/message.js");
// TODO: Rename this module








// let formCounter = 0;


function loadProjects() {
    // load existing projects to the the projectsHolder div

    _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.map((project) => {
         _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectsHolder.append(createProjectLabel(project))
        }       
    );   
}

function reloadProjects(name) { 
    // used to add new project to the project-list-display div
    _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.map((project) => {
         if (project._projectName === name)
        {
            

            _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectsHolder.append(createProjectLabel(project))
            
        }
    }       
    );   
    
    
}

function createProjectLabel (project) {
    let ind = _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.indexOf(project) // index of project object in the project Container.
    const projectLinkContainer = document.createElement("div")
    projectLinkContainer.classList.add("project-link-container");
    const projectLink = document.createElement("div")
    projectLink.classList.add("project-link");
    projectLink.textContent = project._projectName
    projectLink.setAttribute("id", ind);

    const deleteProject = document.createElement("img");
    deleteProject.classList.add("delete-project");
    deleteProject.src = _assets_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_4__;
    projectLink.append(deleteProject);


    deleteProject.addEventListener("click", () => {
        deleteProjectDialog(project)
    });

    projectLink.addEventListener("click", () => {
        (0,_loadPage__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_todoLandingPage__WEBPACK_IMPORTED_MODULE_2__.Container)(project, ind))
    });
    projectLinkContainer.append(projectLink, deleteProject)
    return projectLinkContainer
}

function deleteProjectDialog(project) {
    let bodyChildren = document.querySelector("body")

    //  children existing in body tag before add the dialog:-
    //      0: text <--- is not seen the dom is rendered, saw it throught the browser's debugger.
    //      1: div.main-container
    //  therefore, when the delete porject dialog is added it will be childNode 2

    if (!bodyChildren.childNodes[2])
    {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("msg-container");
        messageContainer.innerHTML = `<h1>
            Are you sure you want to delete, '${project._projectName}'
        </h1>`
        const cancleDialog = (0,_elements__WEBPACK_IMPORTED_MODULE_5__["default"])("button", "cancle-dialog", "cancle");
        const confirmDialog = (0,_elements__WEBPACK_IMPORTED_MODULE_5__["default"])("button", "confirm-dialog", "Yes");
        messageContainer.append(confirmDialog, cancleDialog);

        cancleDialog.addEventListener("click", () => {
            bodyChildren.removeChild(bodyChildren.childNodes[2])
        });

        confirmDialog.addEventListener("click", () => { 
            let childIndex = _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.indexOf(project)
            _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectsHolder.removeChild(_menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectsHolder.childNodes[childIndex])
            let temp_arr = arrayRemove(_project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer, project)
            _project__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.newList(temp_arr);
            (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_6__.updateStorage)();
            bodyChildren.removeChild(bodyChildren.childNodes[2])
            ;(0,_message__WEBPACK_IMPORTED_MODULE_7__["default"])(`${project._projectName} has been deleted`, "delete");
        });
        document.body.append(messageContainer)
    } else
    {
        bodyChildren.removeChild(bodyChildren.childNodes[2])
        deleteProjectDialog(project)
    }
    
}


function arrayRemove(arr, value) {
 
    return arr.filter(function (projects) {
        return projects != value;
    });

}

function updatetasksAccomplished() {
    let completedTasksDiv = document.querySelector(".complete-task-div")
    if (completedTasksDiv.children)
    {
        completedTasksDiv.replaceChildren();
    }
    for (const project in _project__WEBPACK_IMPORTED_MODULE_0__.completedTasks)
    {
       
        const relatedProject = (0,_elements__WEBPACK_IMPORTED_MODULE_5__["default"])("ul", "complete-items", `${project}`);
        _project__WEBPACK_IMPORTED_MODULE_0__.completedTasks[project].map(function (item) { // item is a todo List object
            const taskCompleted = (0,_elements__WEBPACK_IMPORTED_MODULE_5__["default"])("li", "task-completed", `${item.title}`);
            relatedProject.append(taskCompleted);
        });
        completedTasksDiv.append(relatedProject)
    }
    document.querySelector(".project-list").append(completedTasksDiv);
}

function renderCompletedTasks() {
    const completedTasksDiv = document.createElement("div");
    completedTasksDiv.classList.add("complete-task-div");
    
    completedTasksDiv.innerHTML = "<h2> Completed Tasks</h2>";
    for (const project in _project__WEBPACK_IMPORTED_MODULE_0__.completedTasks)
    {
       
        const relatedProject = (0,_elements__WEBPACK_IMPORTED_MODULE_5__["default"])("ul", "complete-items", `${project}`);
        _project__WEBPACK_IMPORTED_MODULE_0__.completedTasks[project].map(function (item) { // item is a todo List object
            const taskCompleted = (0,_elements__WEBPACK_IMPORTED_MODULE_5__["default"])("li", "task-completed", `${item.title}`);
            relatedProject.append(taskCompleted);
        });
        completedTasksDiv.append(relatedProject)
    }
    let title = _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectListDisplay.lastChild.childNodes[0].innerHTML
    if (title === completedTasksDiv.childNodes[0].innerHTML)
    {
        _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectListDisplay.replaceChild(completedTasksDiv, _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectListDisplay.lastChild)
    } else
    {
        _menuInterface__WEBPACK_IMPORTED_MODULE_3__.projectListDisplay.append(completedTasksDiv);
    }
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
/* harmony export */   projectListDisplay: () => (/* binding */ projectListDisplay),
/* harmony export */   projectsHolder: () => (/* binding */ projectsHolder)
/* harmony export */ });
/* harmony import */ var _menuHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuHelpers */ "./src/components/menuHelpers.js");
/* harmony import */ var _menuFormHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuFormHandlers */ "./src/components/menuFormHandlers.js");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/add.png */ "./src/components/assets/add.png");




// make the main div
const projectListDisplay = document.createElement("div")
projectListDisplay.classList.add("project-list");
const projectsHolder = document.createElement("div")
projectsHolder.classList.add("project-holder")
projectsHolder.textContent = "Projects"

function menuInterface() {    
    // TODO: Put the add project btn in a different div 

    const openFormBtn = document.createElement("img")
    openFormBtn.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_2__
    openFormBtn.alt = "Click this to add a project"
    openFormBtn.classList.add("open-form-btn")
    const formHolder = document.createElement("div")
    formHolder.classList.add("add-project-form-holder");
    openFormBtn.addEventListener("click", () => {
        
            (0,_menuFormHandlers__WEBPACK_IMPORTED_MODULE_1__.addNewProjectForm)();          
        
    });
    
    formHolder.append(openFormBtn)
    ;(0,_menuHelpers__WEBPACK_IMPORTED_MODULE_0__.loadProjects)() // add project names and create links to each project to div.project-holder
    projectListDisplay.append(projectsHolder,formHolder)
    ;(0,_menuHelpers__WEBPACK_IMPORTED_MODULE_0__.renderCompletedTasks)() // display existing completed tasks
    return projectListDisplay
}







/***/ }),

/***/ "./src/components/message.js":
/*!***********************************!*\
  !*** ./src/components/message.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ message)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/components/elements.js");
// This will respond for showing a message when a task is complete.


/**
     * Used to show a pop up message, when different action are completed, such as:
     *  - creating a project/task.
     *  - deleting a project/task.
     *  - completing a task.
     * 
     * The function has two parameters:
     *  @param {String} msg  write a specific message, depending on the action.
     *  @param {String} type , write either "delete" or "create", this will give different backgroundColor for each instance. 
     */
function message(msg, type) {
    
    const msgContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "notify", msg);
    if (type.toLowerCase() === "delete")
    {
        msgContainer.style.backgroundColor = "#f87171";
    } else if(type.toLowerCase() === "create")
    {
        msgContainer.style.backgroundColor = "#a3e635";
    }
   
    document.body.append(msgContainer);
    destroyMessage(msgContainer);
}

function destroyMessage(msgContainer) {
    setTimeout(() => { 
        document.body.removeChild(msgContainer)
     }, 2000);
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
/* harmony export */   completedTasks: () => (/* binding */ completedTasks),
/* harmony export */   projectsContainer: () => (/* binding */ projectsContainer)
/* harmony export */ });
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageHandler */ "./src/components/localStorageHandler.js");
// import { updateStorage } from "./localStorageHandler";

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
let completedTasks = {} // will hold all the completed tasks i.e { projectName: [task1, task2] }
Array.prototype.newList = function (newLIst) {
    projectsContainer = newLIst;
};
 
function addProject(project) {
    projectsContainer.push(project)
}

if (projectsContainer.length === 0)
{
    addProject(new Project("Default"))
}

(
    function () {
       
        if (!localStorage.getItem("projects"))
        {
            (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_0__.updateStorage)() // the default project is added to the localStorage
        } else
        {
            let temp_projectsContainer = (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_0__.getInfo)()
            let temp_list = []
            for (let i = 0; i < temp_projectsContainer.length; i++)
            {
                // Once the projectContainer is saved in the localStorage as JSON,
                // the classes methods are removed, thus, this 'for loop' is used
                // to create new project objects, and todolist object and add them to the projectsContainer variable,
                // using the existing save data.

                let p = new Project(temp_projectsContainer[i]._projectName) // create a project object, using the existing project name in the `info` variable
                if (temp_projectsContainer[i].todoList.length !== 0) // if the json parse project object has a todolist array 
                {
                    
                    temp_projectsContainer[i].todoList.map((task) => {
                        p.addTask(task)
                    });
                }
                
                
                temp_list.push(p)
            }

            projectsContainer = temp_list
        }

        if (!localStorage.getItem("completedTasks"))
        {
            (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_0__.updateCompletedTasksStorage)();
        } else
        {
            completedTasks = (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_0__.getCompletedTask)();
        }
    }

    

)();





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
/* harmony export */   taskSelected: () => (/* binding */ taskSelected),
/* harmony export */   todoContainer: () => (/* binding */ todoContainer)
/* harmony export */ });
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ "./src/components/mainPage.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/components/elements.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageHandler */ "./src/components/localStorageHandler.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/components/project.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/components/message.js");
/* harmony import */ var _createTodoItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTodoItems */ "./src/components/createTodoItems.js");
// deals with showing the todo list of the project selected







const todoContainer = document.createElement("div")
todoContainer.classList.add("todo-container")
let taskSelected;
function userProject(project, ind) { 
    //project, is an object in the form:
    // {
    //  todoList:[
    // {"title", "description","dueDate", "priority"} --> TodoList object
    //],
    //  projectName: "<some name>"
    //}

    
    todoContainer.append(Container(project, ind))
    
    
    return todoContainer
}

function Container(project, projIndex) {
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.currentProject.project = project 
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.currentProject.index = projIndex
    const projectNameContainer = document.createElement("div") //--> append to todoContainer
    projectNameContainer.classList.add("title-container");
    const container = document.createElement("div")
    container.classList.add("container")

    const title = document.createElement("h3"); // + to projectNameContainer
    title.classList.add("project-title")
    title.textContent = project._projectName
    projectNameContainer.appendChild(title);
    container.append(projectNameContainer);    
    let isrenameActive = false; // prevent recursion of the rename input field
    let cancleActived = false;  // prevent recursion of the rename input field
    projectNameContainer.addEventListener("click", () => {

        // TODO: Put this in the renameProject function
        if (!isrenameActive)
        {            
            // without the if statement, the process becomes infinitely recursive whenever the cancle, rename or input field is clicked
            // i think, the above mentioned fields inherit the event listener for projectNameContainer.

            const renameProjectInputField = document.createElement("input")
            renameProjectInputField.value = project._projectName
            const cancleRename = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "cancle-rename", "cancle")
            
            cancleRename.addEventListener("click", () => {
                projectNameContainer.replaceChildren()
                projectNameContainer.append(title)
                cancleActived = true;
                console.log(renameProjectInputField.value)

            });
            const approveRename = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])("button", "approve-rename", "rename")
            approveRename.addEventListener("click", () => {
                let ind = _project__WEBPACK_IMPORTED_MODULE_3__.projectsContainer.indexOf(project) + 1; // plus one because of the `#text` childNode -> Projects.
                project._projectName = renameProjectInputField.value;
                const v = document.querySelector(".project-holder")
                v.childNodes[ind].childNodes[0].textContent = renameProjectInputField.value;
                //      ^^^^
                //      ||||
                //<div projectHolder>
                // #text childNode, which is  "Projects"
                //<div>
                    //div.project-link[childNodes[0]] && delete Icon[childNodes[1]]
                //</div > < --- this corresponds to the index of the project
                //</div >
                title.textContent = renameProjectInputField.value;
                (0,_localStorageHandler__WEBPACK_IMPORTED_MODULE_2__.updateStorage)();
                projectNameContainer.replaceChildren()
                projectNameContainer.append(title)
                cancleActived = true;
                (0,_message__WEBPACK_IMPORTED_MODULE_4__["default"])(`Rename successful`, "create");
                let containerChildren = document.querySelector(".container").childNodes
                // console.log(containerChildren[1])
                if (containerChildren[1].nodeName === "#text")
                {
                    /**
                     * When the project has no task, the div.container contains:
                     *  - div.title-container
                     *  - text, saying "<project name> is empty" 
                     * The text when rendered has a nodeName -> '#text', 
                     * This is what is used to determine whether the interface loaded, is showing any tasks or not.
                     * The tasks will be in div.user-task (this can be multiple). 
                     * ->This if statement allows for the project name to change in containerChildren[1] (text), after rename without need for refreshing the page.             
                     */
                    container.childNodes[1].textContent = `${renameProjectInputField.value} project is empty`
                }
            });
            projectNameContainer.removeChild(title)
            projectNameContainer.append(renameProjectInputField, cancleRename, approveRename)
            isrenameActive = true;
        } else if (isrenameActive && cancleActived)
        {
            isrenameActive = false;
            cancleActived = false;        
        }
    });
    
    (0,_createTodoItems__WEBPACK_IMPORTED_MODULE_5__.createTodoItems)(container, project)

    
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

/***/ }),

/***/ "./src/components/assets/deleteIcon.svg":
/*!**********************************************!*\
  !*** ./src/components/assets/deleteIcon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "642da2f9203fed7e99a0.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLHVJQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGNBQWM7QUFDckIsQ0FBQyxPQUFPLGtHQUFrRyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxV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c3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvYXNzZXRzL3N0eWxlLmNzcz81NDMxIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVRvZG9JdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2dlbmVyYXRlRmllbGRzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL21lbnVGb3JtSGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL21lbnVIZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9tZW51SW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy90b2RvTGFuZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubWFpbi1wYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyICkgKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0e1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmt7XHJcbiAgICAvKiB3aWR0aDogMTAwcHg7ICovXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luOiAxMnB4XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjRzOyAqL1xyXG5cclxufVxyXG5cclxuLnByb2plY3QtbGluazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIwLCAyMCwgMC44KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciAwLjRzOyAqL1xyXG59XHJcblxyXG4uYWRkLW5ldy1wcm9qZWN0LWZvcm17XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcGVuLWZvcm0tYnRuLCAuY2xvc2UtZm9ybS1idG57XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IFxyXG4gICAgICAgIHRyYW5zZm9ybSwgYm94LXNoYWRvdywgMC40cztcclxufVxyXG4uY2xvc2UtZm9ybS1idG57XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLm9wZW4tZm9ybS1idG46aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogXHJcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jbG9zZS1mb3JtLWJ0bjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBcclxuICAgICAgICB0cmFuc2Zvcm0sIGJveC1zaGFkb3csIDAuNHM7XHJcbiAgICBcclxufVxyXG4uYWRkLXByb2plY3QtYnRue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvZG9saXN0LWZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJyb3duO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2ZjZjhmZiwgI2U1Y2JmOSwgI2NlOWVmMSwgI2I2NzBlNywgIzlkM2NkYyk7Ki9cclxufVxyXG5cclxuLnRvZG8tY29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHNhZGRsZWJyb3duO1xyXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cclxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXHJcbn1cclxuXHJcbi50b2RvbGlzdC1mb3JtID4gaW5wdXQsIHRleHRhcmVhe1xyXG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi8qIC50b2RvbGlzdC1mb3JtID4gbGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuLnRvZG9saXN0LWZvcm0gPiBpbnB1dHtcclxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXHJcbiAgICBoZWlnaHQ6IDM1cHg7ICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4RjdBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkLXRhc2staW1ne1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLXRhc2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDZmZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbn1cclxuXHJcbi51c2VyLXRhc2s6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmNhbmNsZS1idG57XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUtaW5wdXR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZS1pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmUtY29sb3I6ICNmYjkyM2M7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmstY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcclxufVxyXG5cclxuLm1zZy1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGlmeXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMSU7XHJcbiAgICByaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcclxuICAgIGFuaW1hdGlvbjpub3RpZmljYXRpb24gMS41cyBib3RoO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcclxuXHJcbn1cclxuXHJcbi5jb21wbGV0ZS10YXNrLWRpdntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi50YXNrLWNvbXBsZXRlZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnRhc2stY29tcGxldGVkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG4uY29tcGxldGUtaXRlbXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbiB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgfVxyXG4gICAgdG97aGVpZ2h0OiAzMHB4OyBmb250LXNpemU6IGluaGVyaXQ7fVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7bUNBQytCO0FBQ25DO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0M7bUNBQytCOztBQUVuQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0M7bUNBQytCOztBQUVuQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCLGlHQUFpRztBQUNqRzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlEQUFpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBLEdBQUcsWUFBWSxFQUFFLGtCQUFrQixDQUFDO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInJvYm90b1xcXCI7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZS1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoNTAwcHgsIDFmciApICk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0e1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5re1xcclxcbiAgICAvKiB3aWR0aDogMTAwcHg7ICovXFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICBtYXJnaW46IDEycHhcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogY29sb3IgMC40czsgKi9cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluazpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyMCwgMjAsIDAuOCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogY29sb3IgMC40czsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1uZXctcHJvamVjdC1mb3Jte1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4tZm9ybS1idG4sIC5jbG9zZS1mb3JtLWJ0bntcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBcXHJcXG4gICAgICAgIHRyYW5zZm9ybSwgYm94LXNoYWRvdywgMC40cztcXHJcXG59XFxyXFxuLmNsb3NlLWZvcm0tYnRue1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcbi5vcGVuLWZvcm0tYnRuOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWZvcm0tYnRuOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IFxcclxcbiAgICAgICAgdHJhbnNmb3JtLCBib3gtc2hhZG93LCAwLjRzO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LWJ0bntcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG46aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9saXN0LWZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJyb3duO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4vKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZmNmOGZmLCAjZTVjYmY5LCAjY2U5ZWYxLCAjYjY3MGU3LCAjOWQzY2RjKTsqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBzYWRkbGVicm93bjtcXHJcXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cXHJcXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9saXN0LWZvcm0gPiBpbnB1dCwgdGV4dGFyZWF7XFxyXFxuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cXHJcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDsgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLyogLnRvZG9saXN0LWZvcm0gPiBsYWJlbHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn0gKi9cXHJcXG4udG9kb2xpc3QtZm9ybSA+IGlucHV0e1xcclxcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7ICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG57XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOEY3QTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2staW1ne1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lcntcXHJcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51c2VyLXRhc2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDZmZTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4udXNlci10YXNrOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNsZS1idG57XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUtaW5wdXR7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUtaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmUtY29sb3I6ICNmYjkyM2M7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmstY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubXNnLWNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgbGVmdDogMzUlO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDMwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZnl7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxJTtcXHJcXG4gICAgcmlnaHQ6IDQwJTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxyXFxuICAgIGFuaW1hdGlvbjpub3RpZmljYXRpb24gMS41cyBib3RoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtdGFzay1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbXBsZXRlZHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOjJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb21wbGV0ZWQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxMiwgMjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWl0ZW1ze1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbiB7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBoZWlnaHQ6MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRve2hlaWdodDogMzBweDsgZm9udC1zaXplOiBpbmhlcml0O31cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvYXNzZXRzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbGFuZGluZ1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51SGVscGVyc1wiO1xyXG5pbXBvcnQgbWFpblBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluUGFnZVwiO1xyXG4vLyBpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QuanNcIjtcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxyXG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKVxyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluUGFnZSgpKVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xyXG4gICAgLy8gaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkl0IHBvc3NpYmxlXCIpXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTm90IHBvc3NpYmxlXCIpXHJcbiAgICAvLyB9XHJcbn1cclxuc3RhcnQoKVxyXG5cclxuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgbWFpblxyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVGaWVsZHMsIHBvcHVsYXRlRmllbGRzIH0gZnJvbSBcIi4vZ2VuZXJhdGVGaWVsZHNcIjtcclxuaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9tYWluUGFnZVwiO1xyXG5pbXBvcnQgY3JlYXRlQ29tcG9uZW50IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbmltcG9ydCB7IGNvbXBsZXRlZFRhc2tzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyB0YXNrU2VsZWN0ZWQgfSBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuaW1wb3J0IHsgYXJyYXlSZW1vdmUsIHJlbmRlckNvbXBsZXRlZFRhc2tzLCB1cGRhdGV0YXNrc0FjY29tcGxpc2hlZCB9IGZyb20gXCIuL21lbnVIZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUNvbXBsZXRlZFRhc2tzU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbXMoY29udGFpbmVyLCBwcm9qZWN0KSB7XHJcbiAgICAvLyBtYWtlcyB0b2RvIGRpdnMgZm9yIGVhY2ggdG9kbyBpdGVtIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjb250YWluZXJcclxuICAgIGlmIChwcm9qZWN0LnRvZG9MaXN0Lmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9MaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUb2RvTGlzdCA9IHByb2plY3QudG9kb0xpc3RbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXCJkaXZcIiwgXCJ0YXNrLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInVzZXItdGFza1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VG9kb0xpc3QudGl0bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VG9kb0xpc3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcclxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9MaXN0LnByaW9yaXR5O1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RUb2RvTGlzdC5kdWVEYXRlO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gY3JlYXRlQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlLXRhc2tcIiwgXCJYXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBjcmVhdGVDb21wb25lbnQoXCJidXR0b25cIiwgXCJ0YXNrLWNvbXBsZXRlXCIsIFwiRG9uZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLFxyXG4gICAgICAgICAgICAgICAgLy8gdG9kb0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgLy8gdG9kb1ByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQodG9kbywgdGFza0NvbXBsZXRlLCBkZWxldGVUYXNrKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuLCB0YXNrQ29udGFpbmVyKSAtIDE7IC8vIG1pbnVzIDEgYmVjYXVzZSBpdCBpcyBiZWVuIG9mZnNldCBieSB0aGUgdGl0bGUtY29udGFpbmVyIGNoaWxkIFxyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9saXN0LWZvcm1cIik7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVGaWVsZHMoZm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcInRpdGxlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IFwiVEVYVEFSRUFcIiwgbGFiZWw6IFwiZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJkYXRlXCIsIGxhYmVsOiBcIkR1ZURhdGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcInByaW9yaXR5XCIgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHBvcHVsYXRlRmllbGRzKGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG9kb0xpc3RbaW5kXSk7XHJcbiAgICAgICAgICAgICAgICB0YXNrU2VsZWN0ZWQgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRvZG9MaXN0W2luZF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmQsIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG9kb0xpc3RbaW5kXSwgZm9ybSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGFza0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChjb250YWluZXIuY2hpbGRyZW4sIHRhc2tDb250YWluZXIpIC0gMTsgLy8gbWludXMgMSBiZWNhdXNlIGl0IGlzIGJlZW4gb2Zmc2V0IGJ5IHRoZSB0aXRsZS1jb250YWluZXIgY2hpbGQgXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tzID0gW107XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG9kb0xpc3RbaW5kXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkVGFza3NbYCR7cHJvamVjdC5fcHJvamVjdE5hbWV9YF0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkVGFza3NbYCR7cHJvamVjdC5fcHJvamVjdE5hbWV9YF0ucHVzaChjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRvZG9MaXN0W2luZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tzW2Ake3Byb2plY3QuX3Byb2plY3ROYW1lfWBdID0gdGFza3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0LnRvZG9MaXN0ID0gYXJyYXlSZW1vdmUoY3VycmVudFByb2plY3QucHJvamVjdC50b2RvTGlzdCwgY3VycmVudFByb2plY3QucHJvamVjdC50b2RvTGlzdFtpbmRdKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbXBsZXRlZFRhc2tzU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcGxldGVkVGFza3MpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcGxldGVkVGFza3MoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgbGV0IGluZCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuLCB0YXNrQ29udGFpbmVyKSAtIDE7IC8vIG1pbnVzIDEgYmVjYXVzZSBpdCBpcyBiZWVuIG9mZnNldCBieSB0aGUgdGl0bGUtY29udGFpbmVyIGNoaWxkIFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QucHJvamVjdC50b2RvTGlzdCA9IGFycmF5UmVtb3ZlKGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG9kb0xpc3QsIGN1cnJlbnRQcm9qZWN0LnByb2plY3QudG9kb0xpc3RbaW5kXSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuX3Byb2plY3ROYW1lfSBwcm9qZWN0IGlzIEVtcHR5YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChlbGVtZW50LCBlbGVDbGFzc05hbWUsIHRleHQpIHtcclxuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcclxuICAgIGVsZS5jbGFzc0xpc3QuYWRkKGAke2VsZUNsYXNzTmFtZX1gKVxyXG4gICAgaWYgKHRleHQpXHJcbiAgICB7XHJcbiAgICAgICAgZWxlLnRleHRDb250ZW50ID0gYCR7dGV4dH1gIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlXHJcbn0iLCJpbXBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9zXCI7XHJcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vbWFpblBhZ2VcIjtcclxuaW1wb3J0IGxvYWRQcm9qZWN0UGFnZSBmcm9tIFwiLi9sb2FkUGFnZVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIHRhc2tTZWxlY3RlZCB9IGZyb20gXCIuL3RvZG9MYW5kaW5nUGFnZVwiO1xyXG5pbXBvcnQgdG9kb0xpc3RGb3JtLCB7IHRpdGxlQ2FzZSB9IGZyb20gXCIuL3RvZG9MaXN0Rm9ybVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmllbGRzKGZvcm0sIGVsZW1lbnRzLCBpc1VwZGF0ZT1mYWxzZSkge1xyXG4gICAgLy8gc2VlbXMgb3ZlciBjb21wbGljYXRlZFxyXG4gICAgXHJcbiAgICBlbGVtZW50cy5tYXAoXHJcbiAgICAgICAgKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke2VsZS5sYWJlbH0tZmllbGRgKTtcclxuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZUNhc2UoYCR7ZWxlW1wibGFiZWxcIl19OiBgKTtcclxuICAgICAgICAgICAgaWYgKGVsZS50eXBlID09PSBcInRleHRcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpbnB1dGApO1xyXG4gICAgICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZS50eXBlKTtcclxuICAgICAgICAgICAgICAgIHYuY2xhc3NMaXN0LmFkZChgJHtlbGUubGFiZWx9LWZpZWxkYCk7XHJcbiAgICAgICAgICAgICAgICB2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2VsZS5sYWJlbH0tZmllbGRgKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGxhYmVsLCB2KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLnR5cGUgPT09IFwiVEVYVEFSRUFcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZS50eXBlfWApO1xyXG4gICAgICAgICAgICAgICAgdi5yb3dzID0gMTA7XHJcbiAgICAgICAgICAgICAgICB2LmNvbHMgPSA1MDtcclxuICAgICAgICAgICAgICAgIHYuY2xhc3NMaXN0LmFkZChgJHtlbGUubGFiZWx9LWZpZWxkYCk7XHJcbiAgICAgICAgICAgICAgICB2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2VsZS5sYWJlbH0tZmllbGRgKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGxhYmVsLCB2KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlLnR5cGUgPT09IFwiZGF0ZVwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIHYuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBlbGUudHlwZSk7XHJcbiAgICAgICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoYCR7ZWxlLmxhYmVsfS1maWVsZGApO1xyXG4gICAgICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtlbGUubGFiZWx9LWZpZWxkYCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChsYWJlbCwgdik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpZiAoaXNVcGRhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJVcGRhdGUgdGFza1wiO1xyXG4gICAgICAgIGNvbnN0IGNhbmNsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBjYW5jbGVCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNsZS1idG5cIik7XHJcbiAgICAgICAgY2FuY2xlQnRuLnRleHRDb250ZW50ID0gXCJDYW5jbGVcIlxyXG5cclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXHJcbiAgICAgICAgICAgIC8vIGNhbGxzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHVwZGF0ZSBhIHRhc2tcclxuICAgICAgICAgICAgdXBkYXRlVGFzaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYW5jbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjID0gZS52aWV3LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1wYWdlLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9saXN0LWZvcm1cIik7XHJcblxyXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjLnJlbW92ZUNoaWxkKGZvcm0pXHJcbiAgICAgICAgICAgIGMuYXBwZW5kKHRvZG9MaXN0Rm9ybSgpKVxyXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZUZpZWxkcyhmb3JtLCBbeyB0eXBlOiBcInRleHRcIiwgbGFiZWw6IFwidGl0bGVcIiB9LFxyXG4gICAgICAgICAgICAvLyB7IHR5cGU6IFwiVEVYVEFSRUFcIiwgbGFiZWw6IFwiZGVzY3JpcHRpb25cIiB9LFxyXG4gICAgICAgICAgICAvLyB7IHR5cGU6IFwiZGF0ZVwiLCBsYWJlbDogXCJEdWVEYXRlXCIgfSxcclxuICAgICAgICAgICAgLy8gICAgIHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcInByaW9yaXR5XCIgfSxdKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmQoY2FuY2xlQnRuKVxyXG5cclxuICAgIH0gZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHN1Ym1pdFRhc2soKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xyXG4gICAgXHJcblxyXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgaWYgKHRpdGxlICE9PSBcIlwiICYmIGRlc2NyaXB0aW9uICE9PSBcIlwiICYmIHByaW9yaXR5ICE9PSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUZpZWxkcyhkYXRhLCBlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWZpZWxkXCIpLnZhbHVlID0gZGF0YS50aXRsZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tZmllbGRcIikudmFsdWUgPSBkYXRhLmRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EdWVEYXRlLWZpZWxkXCIpLnZhbHVlID0gZGF0YS5kdWVEYXRlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1maWVsZFwiKS52YWx1ZSA9IGRhdGEucHJpb3JpdHk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWZpZWxkXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRHVlRGF0ZS1maWVsZFwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1maWVsZFwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1maWVsZFwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9saXN0LWZvcm1cIik7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkpXHJcbiAgICB7XHJcbiAgICAgICAgY3VycmVudFByb2plY3QucHJvamVjdC5hZGRUYXNrKG5ldyBUb2RvTGlzdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSk7XHJcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2codGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY3VycmVudFByb2plY3QucHJvamVjdCwgcHJvamVjdHNDb250YWluZXIpO1xyXG4gICAgICAgIGxvYWRQcm9qZWN0UGFnZShDb250YWluZXIoY3VycmVudFByb2plY3QucHJvamVjdCkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2soKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrU2VsZWN0ZWQpXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvbGlzdC1mb3JtXCIpO1xyXG4gICAgdGFza1NlbGVjdGVkLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1maWVsZFwiKS52YWx1ZTtcclxuICAgIHRhc2tTZWxlY3RlZC5kdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5EdWVEYXRlLWZpZWxkXCIpLnZhbHVlO1xyXG4gICAgdGFza1NlbGVjdGVkLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi1maWVsZFwiKS52YWx1ZTtcclxuICAgIHRhc2tTZWxlY3RlZC5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktZmllbGRcIikudmFsdWU7XHJcblxyXG4gICAgdXBkYXRlU3RvcmFnZSgpXHJcblxyXG4gICAgbG9hZFByb2plY3RQYWdlKENvbnRhaW5lcihjdXJyZW50UHJvamVjdC5wcm9qZWN0KSk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrU2VsZWN0ZWQpXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBvcHVsYXRlRmllbGRzIH1cclxuXHJcbiIsImltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi4vYXBwXCI7XHJcbmltcG9ydCB7IHRvZG9Db250YWluZXIgfSBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0UGFnZShwYWdlKSB7IC8vVE9ETzogTWFrZSBzdXJlIGl0IGlzIGR5bmFtaWMsIFxyXG4gICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0pXHJcblxyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmQocGFnZSlcclxuXHJcbn0iLCIvLyBDaGVjayB3aGV0aGVyIGxvY2FsIHN0b3JhZ2UgaXMgcG9zc2libGUgaW4gYSBicm93c2VyXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgY29tcGxldGVkVGFza3MsIHByb2plY3RzQ29udGFpbmVyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxubGV0IGluZm87XHJcbmxldCBjb21wbGV0ZWRBY3Rpdml0aWVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XHJcbiAgbGV0IHN0b3JhZ2U7XHJcbiAgdHJ5IHtcclxuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XHJcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XHJcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXHJcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcclxuICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XHJcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxyXG4gICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcclxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuICAgICAgc3RvcmFnZSAmJlxyXG4gICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKVxyXG4vLyB7ICAgIFxyXG4vLyAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcclxuLy8gICB7XHJcbi8vICAgICAgIHVwZGF0ZVN0b3JhZ2UoKVxyXG4vLyAgIH1cclxuLy8gfSBlbHNlXHJcbi8vIHtcclxuLy8gICBpbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuLy8gICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXHJcbi8vIH1cclxuXHJcbiBmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250YWluZXIpKTsgIFxyXG4gIGluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gIG1lc3NhZ2UoXCJVcGRhdGVkIVwiLCBcImNyZWF0ZVwiKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlZFRhc2tzU3RvcmFnZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbXBsZXRlZFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFRhc2tzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluZm8oKSB7XHJcbiAgICBpbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgcmV0dXJuIGluZm9cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcGxldGVkVGFzaygpIHtcclxuICBjb21wbGV0ZWRBY3Rpdml0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZFRhc2tzXCIpKVxyXG4gIHJldHVybiBjb21wbGV0ZWRBY3Rpdml0aWVzO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHVwZGF0ZVN0b3JhZ2UsXHJcbiAgaW5mbyxcclxuICBnZXRJbmZvLFxyXG4gIHVwZGF0ZUNvbXBsZXRlZFRhc2tzU3RvcmFnZSxcclxuICBnZXRDb21wbGV0ZWRUYXNrLFxyXG59IiwiaW1wb3J0IG1lbnVJbnRlcmZhY2UgZnJvbSBcIi4vbWVudUludGVyZmFjZVwiO1xyXG5pbXBvcnQgdXNlclByb2plY3QgZnJvbSBcIi4vdG9kb0xhbmRpbmdQYWdlXCI7XHJcbmltcG9ydCB7IHByb2plY3RzQ29udGFpbmVyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgdG9kb0xpc3RGb3JtIGZyb20gXCIuL3RvZG9MaXN0Rm9ybVwiO1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0ge1xyXG4gICAgcHJvamVjdDogcHJvamVjdHNDb250YWluZXJbMF0sXHJcbiAgICBpbmRleDogMCxcclxufSAvLyBXaWxsIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRvZG8gbGlzdCwgYmVjYXVzZSBpdCBoYXMgdG8gYmUgY29udGFpbmVkIGluIGEgc3BlZmljIHByb2plY3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5QYWdlKCkge1xyXG4gICAgY29uc3QgbWFpblBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpblBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcGFnZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgbWFpblBhZ2VDb250YWluZXIuYXBwZW5kKFxyXG4gICAgICAgIG1lbnVJbnRlcmZhY2UoKSxcclxuICAgICAgICB1c2VyUHJvamVjdChwcm9qZWN0c0NvbnRhaW5lclswXSwgY3VycmVudFByb2plY3QuaW5kZXgpLFxyXG4gICAgICAgIHRvZG9MaXN0Rm9ybSgpLFxyXG4gICAgKVxyXG4gICAgcmV0dXJuIG1haW5QYWdlQ29udGFpbmVyXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgY3VycmVudFByb2plY3QgXHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgeyByZWxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL21lbnVIZWxwZXJzLmpzXCI7XHJcbmltcG9ydCBjbG9zZUltYWdlIGZyb20gXCIuL2Fzc2V0cy9jbG9zZS5wbmdcIjtcclxuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXIuanNcIjtcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZS5qc1wiO1xyXG5cclxubGV0IGlzQWN0aXZlID0gZmFsc2U7IC8vIHRvIGF2b2lkIHRoZSBmb3JtIGJlaW5nIGFwcGVuZGVkIG11bHRpcGxlIHRpbWVzLlxyXG5cclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEZvcm0oKSB7XHJcbiAgICAvLyBNQUtFUyBUSEUgRk9STSBGT1IgTUFLSU5HIEEgTkVXIFBST0pFQ1RcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIilcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZC1uZXctcHJvamVjdC1mb3JtXCIpXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtaW5wdXRcIilcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IE5hbWVcIilcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpXHJcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICBmb3JtLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0LCBhZGRQcm9qZWN0QnRuKVxyXG5cclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdChmb3JtLCBwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtZm9ybS1ob2xkZXJcIilcclxuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTsgLy8gcmVtb3ZlIHRoZSBmb3JtIGNvbnRhaW5lciBmcm9tIHRoZSBkaXYucHJvamVjdC1saXN0XHJcbiAgICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICBcclxuXHJcbiAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2xvc2VJY29uLnNyYyA9IGNsb3NlSW1hZ2U7XHJcbiAgICBjbG9zZUljb24uYWx0ID0gXCJDbG9zZXMgdGhlIGZvcm0gcGFnZVwiO1xyXG4gICAgY2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLWJ0blwiKVxyXG5cclxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7IC8vIHJlbW92ZSB0aGUgZm9ybSBjb250YWluZXIgZnJvbSB0aGUgYm9keSBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWZvcm0taG9sZGVyXCIpLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpXHJcbiAgICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZm9ybS5hcHBlbmQoY2xvc2VJY29uKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmQoZm9ybSlcclxuXHJcbiAgICBpZiAoIWlzQWN0aXZlKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtZm9ybS1ob2xkZXJcIikuYXBwZW5kKGZvcm1Db250YWluZXIpXHJcbiAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChmb3JtLCBuYW1lU3VibWl0dGVkKSB7XHJcblxyXG4gICAgYWRkUHJvamVjdChuZXcgUHJvamVjdChuYW1lU3VibWl0dGVkKSkgLy8gY3JlYXRlcyBhbmQgYWRkcyBhIHByb2plY3QgdG8gdGhlIHByb2plY3RMaXN0Q29udGFpbmVyIGF0IHRoZSBgUHJvamVjdGAgbW9kdWxlXHJcbiAgICB1cGRhdGVTdG9yYWdlKCk7IC8vIGxvY2FsU3RvcmFnZSBpcyB1cGRhdGVkXHJcbiAgICByZWxvYWRQcm9qZWN0cyhuYW1lU3VibWl0dGVkKSAvLyBzaG93cyB0aGUgbmV3bHkgYWRkZWQgcHJvamVjdCBvbiB0aGUgZGl2LnByb2plY3QtaG9sZGVyLlxyXG4gICAgXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBpdCBmcm9tIHNlbmRpbmcgcG9zdC9nZXQgcmVxdWVzdFxyXG4gICAgfSk7XHJcblxyXG4gICAgbWVzc2FnZShgJHtuYW1lU3VibWl0dGVkfSBwcm9qZWN0IGhhcyBiZWVuIGNyZWF0ZWQhYCwgXCJjcmVhdGVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkTmV3UHJvamVjdEZvcm19IiwiLy8gVE9ETzogUmVuYW1lIHRoaXMgbW9kdWxlXHJcbmltcG9ydCB7IGNvbXBsZXRlZFRhc2tzLCBwcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGxvYWRQcm9qZWN0UGFnZSBmcm9tIFwiLi9sb2FkUGFnZVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi90b2RvTGFuZGluZ1BhZ2VcIjtcclxuaW1wb3J0IHsgcHJvamVjdExpc3REaXNwbGF5LCBwcm9qZWN0c0hvbGRlciB9IGZyb20gXCIuL21lbnVJbnRlcmZhY2VcIjtcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vYXNzZXRzL2RlbGV0ZUljb24uc3ZnXCI7XHJcbmltcG9ydCBjcmVhdGVDb21wb25lbnQgZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG4vLyBsZXQgZm9ybUNvdW50ZXIgPSAwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIC8vIGxvYWQgZXhpc3RpbmcgcHJvamVjdHMgdG8gdGhlIHRoZSBwcm9qZWN0c0hvbGRlciBkaXZcclxuXHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgICAgcHJvamVjdHNIb2xkZXIuYXBwZW5kKGNyZWF0ZVByb2plY3RMYWJlbChwcm9qZWN0KSlcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgKTsgICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsb2FkUHJvamVjdHMobmFtZSkgeyBcclxuICAgIC8vIHVzZWQgdG8gYWRkIG5ldyBwcm9qZWN0IHRvIHRoZSBwcm9qZWN0LWxpc3QtZGlzcGxheSBkaXZcclxuICAgIHByb2plY3RzQ29udGFpbmVyLm1hcCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICBpZiAocHJvamVjdC5fcHJvamVjdE5hbWUgPT09IG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RzSG9sZGVyLmFwcGVuZChjcmVhdGVQcm9qZWN0TGFiZWwocHJvamVjdCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgICAgXHJcbiAgICApOyAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdExhYmVsIChwcm9qZWN0KSB7XHJcbiAgICBsZXQgaW5kID0gcHJvamVjdHNDb250YWluZXIuaW5kZXhPZihwcm9qZWN0KSAvLyBpbmRleCBvZiBwcm9qZWN0IG9iamVjdCBpbiB0aGUgcHJvamVjdCBDb250YWluZXIuXHJcbiAgICBjb25zdCBwcm9qZWN0TGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpbmstY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saW5rXCIpO1xyXG4gICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0Ll9wcm9qZWN0TmFtZVxyXG4gICAgcHJvamVjdExpbmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5kKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xyXG4gICAgZGVsZXRlUHJvamVjdC5zcmMgPSBkZWxldGVJY29uO1xyXG4gICAgcHJvamVjdExpbmsuYXBwZW5kKGRlbGV0ZVByb2plY3QpO1xyXG5cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdERpYWxvZyhwcm9qZWN0KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2FkUHJvamVjdFBhZ2UoQ29udGFpbmVyKHByb2plY3QsIGluZCkpXHJcbiAgICB9KTtcclxuICAgIHByb2plY3RMaW5rQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TGluaywgZGVsZXRlUHJvamVjdClcclxuICAgIHJldHVybiBwcm9qZWN0TGlua0NvbnRhaW5lclxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RGlhbG9nKHByb2plY3QpIHtcclxuICAgIGxldCBib2R5Q2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG5cclxuICAgIC8vICBjaGlsZHJlbiBleGlzdGluZyBpbiBib2R5IHRhZyBiZWZvcmUgYWRkIHRoZSBkaWFsb2c6LVxyXG4gICAgLy8gICAgICAwOiB0ZXh0IDwtLS0gaXMgbm90IHNlZW4gdGhlIGRvbSBpcyByZW5kZXJlZCwgc2F3IGl0IHRocm91Z2h0IHRoZSBicm93c2VyJ3MgZGVidWdnZXIuXHJcbiAgICAvLyAgICAgIDE6IGRpdi5tYWluLWNvbnRhaW5lclxyXG4gICAgLy8gIHRoZXJlZm9yZSwgd2hlbiB0aGUgZGVsZXRlIHBvcmplY3QgZGlhbG9nIGlzIGFkZGVkIGl0IHdpbGwgYmUgY2hpbGROb2RlIDJcclxuXHJcbiAgICBpZiAoIWJvZHlDaGlsZHJlbi5jaGlsZE5vZGVzWzJdKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1zZy1jb250YWluZXJcIik7XHJcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGgxPlxyXG4gICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlLCAnJHtwcm9qZWN0Ll9wcm9qZWN0TmFtZX0nXHJcbiAgICAgICAgPC9oMT5gXHJcbiAgICAgICAgY29uc3QgY2FuY2xlRGlhbG9nID0gY3JlYXRlQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwiY2FuY2xlLWRpYWxvZ1wiLCBcImNhbmNsZVwiKTtcclxuICAgICAgICBjb25zdCBjb25maXJtRGlhbG9nID0gY3JlYXRlQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwiY29uZmlybS1kaWFsb2dcIiwgXCJZZXNcIik7XHJcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmQoY29uZmlybURpYWxvZywgY2FuY2xlRGlhbG9nKTtcclxuXHJcbiAgICAgICAgY2FuY2xlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHlDaGlsZHJlbi5yZW1vdmVDaGlsZChib2R5Q2hpbGRyZW4uY2hpbGROb2Rlc1syXSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uZmlybURpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgbGV0IGNoaWxkSW5kZXggPSBwcm9qZWN0c0NvbnRhaW5lci5pbmRleE9mKHByb2plY3QpXHJcbiAgICAgICAgICAgIHByb2plY3RzSG9sZGVyLnJlbW92ZUNoaWxkKHByb2plY3RzSG9sZGVyLmNoaWxkTm9kZXNbY2hpbGRJbmRleF0pXHJcbiAgICAgICAgICAgIGxldCB0ZW1wX2FyciA9IGFycmF5UmVtb3ZlKHByb2plY3RzQ29udGFpbmVyLCBwcm9qZWN0KVxyXG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5uZXdMaXN0KHRlbXBfYXJyKTtcclxuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBib2R5Q2hpbGRyZW4ucmVtb3ZlQ2hpbGQoYm9keUNoaWxkcmVuLmNoaWxkTm9kZXNbMl0pXHJcbiAgICAgICAgICAgIG1lc3NhZ2UoYCR7cHJvamVjdC5fcHJvamVjdE5hbWV9IGhhcyBiZWVuIGRlbGV0ZWRgLCBcImRlbGV0ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtZXNzYWdlQ29udGFpbmVyKVxyXG4gICAgfSBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgYm9keUNoaWxkcmVuLnJlbW92ZUNoaWxkKGJvZHlDaGlsZHJlbi5jaGlsZE5vZGVzWzJdKVxyXG4gICAgICAgIGRlbGV0ZVByb2plY3REaWFsb2cocHJvamVjdClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYXJyYXlSZW1vdmUoYXJyLCB2YWx1ZSkge1xyXG4gXHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAocHJvamVjdHMpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHMgIT0gdmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZXRhc2tzQWNjb21wbGlzaGVkKCkge1xyXG4gICAgbGV0IGNvbXBsZXRlZFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZS10YXNrLWRpdlwiKVxyXG4gICAgaWYgKGNvbXBsZXRlZFRhc2tzRGl2LmNoaWxkcmVuKVxyXG4gICAge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzRGl2LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIGNvbXBsZXRlZFRhc2tzKVxyXG4gICAge1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVsYXRlZFByb2plY3QgPSBjcmVhdGVDb21wb25lbnQoXCJ1bFwiLCBcImNvbXBsZXRlLWl0ZW1zXCIsIGAke3Byb2plY3R9YCk7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3NbcHJvamVjdF0ubWFwKGZ1bmN0aW9uIChpdGVtKSB7IC8vIGl0ZW0gaXMgYSB0b2RvIExpc3Qgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZWQgPSBjcmVhdGVDb21wb25lbnQoXCJsaVwiLCBcInRhc2stY29tcGxldGVkXCIsIGAke2l0ZW0udGl0bGV9YCk7XHJcbiAgICAgICAgICAgIHJlbGF0ZWRQcm9qZWN0LmFwcGVuZCh0YXNrQ29tcGxldGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrc0Rpdi5hcHBlbmQocmVsYXRlZFByb2plY3QpXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKS5hcHBlbmQoY29tcGxldGVkVGFza3NEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbXBsZXRlZFRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS10YXNrLWRpdlwiKTtcclxuICAgIFxyXG4gICAgY29tcGxldGVkVGFza3NEaXYuaW5uZXJIVE1MID0gXCI8aDI+IENvbXBsZXRlZCBUYXNrczwvaDI+XCI7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gY29tcGxldGVkVGFza3MpXHJcbiAgICB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCByZWxhdGVkUHJvamVjdCA9IGNyZWF0ZUNvbXBvbmVudChcInVsXCIsIFwiY29tcGxldGUtaXRlbXNcIiwgYCR7cHJvamVjdH1gKTtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrc1twcm9qZWN0XS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgLy8gaXRlbSBpcyBhIHRvZG8gTGlzdCBvYmplY3RcclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlZCA9IGNyZWF0ZUNvbXBvbmVudChcImxpXCIsIFwidGFzay1jb21wbGV0ZWRcIiwgYCR7aXRlbS50aXRsZX1gKTtcclxuICAgICAgICAgICAgcmVsYXRlZFByb2plY3QuYXBwZW5kKHRhc2tDb21wbGV0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzRGl2LmFwcGVuZChyZWxhdGVkUHJvamVjdClcclxuICAgIH1cclxuICAgIGxldCB0aXRsZSA9IHByb2plY3RMaXN0RGlzcGxheS5sYXN0Q2hpbGQuY2hpbGROb2Rlc1swXS5pbm5lckhUTUxcclxuICAgIGlmICh0aXRsZSA9PT0gY29tcGxldGVkVGFza3NEaXYuY2hpbGROb2Rlc1swXS5pbm5lckhUTUwpXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdExpc3REaXNwbGF5LnJlcGxhY2VDaGlsZChjb21wbGV0ZWRUYXNrc0RpdiwgcHJvamVjdExpc3REaXNwbGF5Lmxhc3RDaGlsZClcclxuICAgIH0gZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RMaXN0RGlzcGxheS5hcHBlbmQoY29tcGxldGVkVGFza3NEaXYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgbG9hZFByb2plY3RzLFxyXG4gICAgcmVsb2FkUHJvamVjdHMsXHJcbiAgICB1cGRhdGV0YXNrc0FjY29tcGxpc2hlZCxcclxuICAgIGFycmF5UmVtb3ZlLFxyXG4gICAgcmVuZGVyQ29tcGxldGVkVGFza3MsXHJcbn1cclxuIiwiaW1wb3J0IHsgbG9hZFByb2plY3RzLCByZW5kZXJDb21wbGV0ZWRUYXNrcyB9IGZyb20gXCIuL21lbnVIZWxwZXJzXCI7XHJcbmltcG9ydCB7IGFkZE5ld1Byb2plY3RGb3JtIH0gZnJvbSBcIi4vbWVudUZvcm1IYW5kbGVyc1wiO1xyXG5pbXBvcnQgYWRkSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL2FkZC5wbmdcIjtcclxuXHJcbi8vIG1ha2UgdGhlIG1haW4gZGl2XHJcbmNvbnN0IHByb2plY3RMaXN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxucHJvamVjdExpc3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3RcIik7XHJcbmNvbnN0IHByb2plY3RzSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG5wcm9qZWN0c0hvbGRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1ob2xkZXJcIilcclxucHJvamVjdHNIb2xkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJbnRlcmZhY2UoKSB7ICAgIFxyXG4gICAgLy8gVE9ETzogUHV0IHRoZSBhZGQgcHJvamVjdCBidG4gaW4gYSBkaWZmZXJlbnQgZGl2IFxyXG5cclxuICAgIGNvbnN0IG9wZW5Gb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgb3BlbkZvcm1CdG4uc3JjID0gYWRkSW1hZ2VcclxuICAgIG9wZW5Gb3JtQnRuLmFsdCA9IFwiQ2xpY2sgdGhpcyB0byBhZGQgYSBwcm9qZWN0XCJcclxuICAgIG9wZW5Gb3JtQnRuLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWZvcm0tYnRuXCIpXHJcbiAgICBjb25zdCBmb3JtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZm9ybUhvbGRlci5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtZm9ybS1ob2xkZXJcIik7XHJcbiAgICBvcGVuRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBhZGROZXdQcm9qZWN0Rm9ybSgpOyAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmb3JtSG9sZGVyLmFwcGVuZChvcGVuRm9ybUJ0bilcclxuICAgIGxvYWRQcm9qZWN0cygpIC8vIGFkZCBwcm9qZWN0IG5hbWVzIGFuZCBjcmVhdGUgbGlua3MgdG8gZWFjaCBwcm9qZWN0IHRvIGRpdi5wcm9qZWN0LWhvbGRlclxyXG4gICAgcHJvamVjdExpc3REaXNwbGF5LmFwcGVuZChwcm9qZWN0c0hvbGRlcixmb3JtSG9sZGVyKVxyXG4gICAgcmVuZGVyQ29tcGxldGVkVGFza3MoKSAvLyBkaXNwbGF5IGV4aXN0aW5nIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0RGlzcGxheVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcHJvamVjdHNIb2xkZXIsXHJcbiAgICBwcm9qZWN0TGlzdERpc3BsYXlcclxufVxyXG4iLCIvLyBUaGlzIHdpbGwgcmVzcG9uZCBmb3Igc2hvd2luZyBhIG1lc3NhZ2Ugd2hlbiBhIHRhc2sgaXMgY29tcGxldGUuXHJcblxyXG5pbXBvcnQgY3JlYXRlQ29tcG9uZW50IGZyb20gXCIuL2VsZW1lbnRzXCI7XHJcbi8qKlxyXG4gICAgICogVXNlZCB0byBzaG93IGEgcG9wIHVwIG1lc3NhZ2UsIHdoZW4gZGlmZmVyZW50IGFjdGlvbiBhcmUgY29tcGxldGVkLCBzdWNoIGFzOlxyXG4gICAgICogIC0gY3JlYXRpbmcgYSBwcm9qZWN0L3Rhc2suXHJcbiAgICAgKiAgLSBkZWxldGluZyBhIHByb2plY3QvdGFzay5cclxuICAgICAqICAtIGNvbXBsZXRpbmcgYSB0YXNrLlxyXG4gICAgICogXHJcbiAgICAgKiBUaGUgZnVuY3Rpb24gaGFzIHR3byBwYXJhbWV0ZXJzOlxyXG4gICAgICogIEBwYXJhbSB7U3RyaW5nfSBtc2cgIHdyaXRlIGEgc3BlY2lmaWMgbWVzc2FnZSwgZGVwZW5kaW5nIG9uIHRoZSBhY3Rpb24uXHJcbiAgICAgKiAgQHBhcmFtIHtTdHJpbmd9IHR5cGUgLCB3cml0ZSBlaXRoZXIgXCJkZWxldGVcIiBvciBcImNyZWF0ZVwiLCB0aGlzIHdpbGwgZ2l2ZSBkaWZmZXJlbnQgYmFja2dyb3VuZENvbG9yIGZvciBlYWNoIGluc3RhbmNlLiBcclxuICAgICAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXNzYWdlKG1zZywgdHlwZSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBtc2dDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXCJkaXZcIiwgXCJub3RpZnlcIiwgbXNnKTtcclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwiZGVsZXRlXCIpXHJcbiAgICB7XHJcbiAgICAgICAgbXNnQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Y4NzE3MVwiO1xyXG4gICAgfSBlbHNlIGlmKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJjcmVhdGVcIilcclxuICAgIHtcclxuICAgICAgICBtc2dDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYTNlNjM1XCI7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobXNnQ29udGFpbmVyKTtcclxuICAgIGRlc3Ryb3lNZXNzYWdlKG1zZ0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lNZXNzYWdlKG1zZ0NvbnRhaW5lcikge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobXNnQ29udGFpbmVyKVxyXG4gICAgIH0sIDIwMDApO1xyXG59IiwiLy8gaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSAsIGdldEluZm8sIHVwZGF0ZUNvbXBsZXRlZFRhc2tzU3RvcmFnZSwgZ2V0Q29tcGxldGVkVGFza30gZnJvbSBcIi4vbG9jYWxTdG9yYWdlSGFuZGxlclwiO1xyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgdG9kb0xpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb2plY3ROYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWVcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbylcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9kb0xpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0xpc3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRQcm9qZWN0XHJcbn1cclxuXHJcblxyXG5cclxubGV0IHByb2plY3RzQ29udGFpbmVyID0gW10gLy8gd2lsbCBob2xkIGFsbCB0aGUgcHJvamVjdHMgb2YgdXNlclxyXG5sZXQgY29tcGxldGVkVGFza3MgPSB7fSAvLyB3aWxsIGhvbGQgYWxsIHRoZSBjb21wbGV0ZWQgdGFza3MgaS5lIHsgcHJvamVjdE5hbWU6IFt0YXNrMSwgdGFzazJdIH1cclxuQXJyYXkucHJvdG90eXBlLm5ld0xpc3QgPSBmdW5jdGlvbiAobmV3TElzdCkge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIgPSBuZXdMSXN0O1xyXG59O1xyXG4gXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIucHVzaChwcm9qZWN0KVxyXG59XHJcblxyXG5pZiAocHJvamVjdHNDb250YWluZXIubGVuZ3RoID09PSAwKVxyXG57XHJcbiAgICBhZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKSlcclxufVxyXG5cclxuKFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpIC8vIHRoZSBkZWZhdWx0IHByb2plY3QgaXMgYWRkZWQgdG8gdGhlIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBfcHJvamVjdHNDb250YWluZXIgPSBnZXRJbmZvKClcclxuICAgICAgICAgICAgbGV0IHRlbXBfbGlzdCA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcF9wcm9qZWN0c0NvbnRhaW5lci5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gT25jZSB0aGUgcHJvamVjdENvbnRhaW5lciBpcyBzYXZlZCBpbiB0aGUgbG9jYWxTdG9yYWdlIGFzIEpTT04sXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgY2xhc3NlcyBtZXRob2RzIGFyZSByZW1vdmVkLCB0aHVzLCB0aGlzICdmb3IgbG9vcCcgaXMgdXNlZFxyXG4gICAgICAgICAgICAgICAgLy8gdG8gY3JlYXRlIG5ldyBwcm9qZWN0IG9iamVjdHMsIGFuZCB0b2RvbGlzdCBvYmplY3QgYW5kIGFkZCB0aGVtIHRvIHRoZSBwcm9qZWN0c0NvbnRhaW5lciB2YXJpYWJsZSxcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBleGlzdGluZyBzYXZlIGRhdGEuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBuZXcgUHJvamVjdCh0ZW1wX3Byb2plY3RzQ29udGFpbmVyW2ldLl9wcm9qZWN0TmFtZSkgLy8gY3JlYXRlIGEgcHJvamVjdCBvYmplY3QsIHVzaW5nIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWUgaW4gdGhlIGBpbmZvYCB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBfcHJvamVjdHNDb250YWluZXJbaV0udG9kb0xpc3QubGVuZ3RoICE9PSAwKSAvLyBpZiB0aGUganNvbiBwYXJzZSBwcm9qZWN0IG9iamVjdCBoYXMgYSB0b2RvbGlzdCBhcnJheSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wX3Byb2plY3RzQ29udGFpbmVyW2ldLnRvZG9MaXN0Lm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmFkZFRhc2sodGFzaylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZW1wX2xpc3QucHVzaChwKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lciA9IHRlbXBfbGlzdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZFRhc2tzXCIpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXBkYXRlQ29tcGxldGVkVGFza3NTdG9yYWdlKCk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRUYXNrcyA9IGdldENvbXBsZXRlZFRhc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4pKCk7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLFxyXG4gICAgUHJvamVjdCxcclxuICAgIGFkZFByb2plY3QsXHJcbiAgICBjb21wbGV0ZWRUYXNrc1xyXG59XHJcbiIsIi8vIGRlYWxzIHdpdGggc2hvd2luZyB0aGUgdG9kbyBsaXN0IG9mIHRoZSBwcm9qZWN0IHNlbGVjdGVkXHJcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vbWFpblBhZ2VcIlxyXG5pbXBvcnQgY3JlYXRlQ29tcG9uZW50IGZyb20gXCIuL2VsZW1lbnRzXCJcclxuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXJcIlxyXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gXCIuL3Byb2plY3RcIlxyXG5pbXBvcnQgbWVzc2FnZSBmcm9tIFwiLi9tZXNzYWdlXCJcclxuaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW1zIH0gZnJvbSBcIi4vY3JlYXRlVG9kb0l0ZW1zXCJcclxuXHJcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbnRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpXHJcbmxldCB0YXNrU2VsZWN0ZWQ7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJQcm9qZWN0KHByb2plY3QsIGluZCkgeyBcclxuICAgIC8vcHJvamVjdCwgaXMgYW4gb2JqZWN0IGluIHRoZSBmb3JtOlxyXG4gICAgLy8ge1xyXG4gICAgLy8gIHRvZG9MaXN0OltcclxuICAgIC8vIHtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIixcImR1ZURhdGVcIiwgXCJwcmlvcml0eVwifSAtLT4gVG9kb0xpc3Qgb2JqZWN0XHJcbiAgICAvL10sXHJcbiAgICAvLyAgcHJvamVjdE5hbWU6IFwiPHNvbWUgbmFtZT5cIlxyXG4gICAgLy99XHJcblxyXG4gICAgXHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChDb250YWluZXIocHJvamVjdCwgaW5kKSlcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lclxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWluZXIocHJvamVjdCwgcHJvakluZGV4KSB7XHJcbiAgICBjdXJyZW50UHJvamVjdC5wcm9qZWN0ID0gcHJvamVjdCBcclxuICAgIGN1cnJlbnRQcm9qZWN0LmluZGV4ID0gcHJvakluZGV4XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgLy8tLT4gYXBwZW5kIHRvIHRvZG9Db250YWluZXJcclxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpOyAvLyArIHRvIHByb2plY3ROYW1lQ29udGFpbmVyXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKVxyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Ll9wcm9qZWN0TmFtZVxyXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7ICAgIFxyXG4gICAgbGV0IGlzcmVuYW1lQWN0aXZlID0gZmFsc2U7IC8vIHByZXZlbnQgcmVjdXJzaW9uIG9mIHRoZSByZW5hbWUgaW5wdXQgZmllbGRcclxuICAgIGxldCBjYW5jbGVBY3RpdmVkID0gZmFsc2U7ICAvLyBwcmV2ZW50IHJlY3Vyc2lvbiBvZiB0aGUgcmVuYW1lIGlucHV0IGZpZWxkXHJcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBQdXQgdGhpcyBpbiB0aGUgcmVuYW1lUHJvamVjdCBmdW5jdGlvblxyXG4gICAgICAgIGlmICghaXNyZW5hbWVBY3RpdmUpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB3aXRob3V0IHRoZSBpZiBzdGF0ZW1lbnQsIHRoZSBwcm9jZXNzIGJlY29tZXMgaW5maW5pdGVseSByZWN1cnNpdmUgd2hlbmV2ZXIgdGhlIGNhbmNsZSwgcmVuYW1lIG9yIGlucHV0IGZpZWxkIGlzIGNsaWNrZWRcclxuICAgICAgICAgICAgLy8gaSB0aGluaywgdGhlIGFib3ZlIG1lbnRpb25lZCBmaWVsZHMgaW5oZXJpdCB0aGUgZXZlbnQgbGlzdGVuZXIgZm9yIHByb2plY3ROYW1lQ29udGFpbmVyLlxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuYW1lUHJvamVjdElucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgcmVuYW1lUHJvamVjdElucHV0RmllbGQudmFsdWUgPSBwcm9qZWN0Ll9wcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICBjb25zdCBjYW5jbGVSZW5hbWUgPSBjcmVhdGVDb21wb25lbnQoXCJidXR0b25cIiwgXCJjYW5jbGUtcmVuYW1lXCIsIFwiY2FuY2xlXCIpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYW5jbGVSZW5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQodGl0bGUpXHJcbiAgICAgICAgICAgICAgICBjYW5jbGVBY3RpdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbmFtZVByb2plY3RJbnB1dEZpZWxkLnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcHJvdmVSZW5hbWUgPSBjcmVhdGVDb21wb25lbnQoXCJidXR0b25cIiwgXCJhcHByb3ZlLXJlbmFtZVwiLCBcInJlbmFtZVwiKVxyXG4gICAgICAgICAgICBhcHByb3ZlUmVuYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gcHJvamVjdHNDb250YWluZXIuaW5kZXhPZihwcm9qZWN0KSArIDE7IC8vIHBsdXMgb25lIGJlY2F1c2Ugb2YgdGhlIGAjdGV4dGAgY2hpbGROb2RlIC0+IFByb2plY3RzLlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5fcHJvamVjdE5hbWUgPSByZW5hbWVQcm9qZWN0SW5wdXRGaWVsZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaG9sZGVyXCIpXHJcbiAgICAgICAgICAgICAgICB2LmNoaWxkTm9kZXNbaW5kXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gcmVuYW1lUHJvamVjdElucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIF5eXl5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgfHx8fFxyXG4gICAgICAgICAgICAgICAgLy88ZGl2IHByb2plY3RIb2xkZXI+XHJcbiAgICAgICAgICAgICAgICAvLyAjdGV4dCBjaGlsZE5vZGUsIHdoaWNoIGlzICBcIlByb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIC8vPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAvL2Rpdi5wcm9qZWN0LWxpbmtbY2hpbGROb2Rlc1swXV0gJiYgZGVsZXRlIEljb25bY2hpbGROb2Rlc1sxXV1cclxuICAgICAgICAgICAgICAgIC8vPC9kaXYgPiA8IC0tLSB0aGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgLy88L2RpdiA+XHJcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHJlbmFtZVByb2plY3RJbnB1dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZCh0aXRsZSlcclxuICAgICAgICAgICAgICAgIGNhbmNsZUFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZShgUmVuYW1lIHN1Y2Nlc3NmdWxgLCBcImNyZWF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmNoaWxkTm9kZXNcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhaW5lckNoaWxkcmVuWzFdKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lckNoaWxkcmVuWzFdLm5vZGVOYW1lID09PSBcIiN0ZXh0XCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hlbiB0aGUgcHJvamVjdCBoYXMgbm8gdGFzaywgdGhlIGRpdi5jb250YWluZXIgY29udGFpbnM6XHJcbiAgICAgICAgICAgICAgICAgICAgICogIC0gZGl2LnRpdGxlLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAqICAtIHRleHQsIHNheWluZyBcIjxwcm9qZWN0IG5hbWU+IGlzIGVtcHR5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICogVGhlIHRleHQgd2hlbiByZW5kZXJlZCBoYXMgYSBub2RlTmFtZSAtPiAnI3RleHQnLCBcclxuICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIHdoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaW50ZXJmYWNlIGxvYWRlZCwgaXMgc2hvd2luZyBhbnkgdGFza3Mgb3Igbm90LlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFRoZSB0YXNrcyB3aWxsIGJlIGluIGRpdi51c2VyLXRhc2sgKHRoaXMgY2FuIGJlIG11bHRpcGxlKS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICogLT5UaGlzIGlmIHN0YXRlbWVudCBhbGxvd3MgZm9yIHRoZSBwcm9qZWN0IG5hbWUgdG8gY2hhbmdlIGluIGNvbnRhaW5lckNoaWxkcmVuWzFdICh0ZXh0KSwgYWZ0ZXIgcmVuYW1lIHdpdGhvdXQgbmVlZCBmb3IgcmVmcmVzaGluZyB0aGUgcGFnZS4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBgJHtyZW5hbWVQcm9qZWN0SW5wdXRGaWVsZC52YWx1ZX0gcHJvamVjdCBpcyBlbXB0eWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRpdGxlKVxyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocmVuYW1lUHJvamVjdElucHV0RmllbGQsIGNhbmNsZVJlbmFtZSwgYXBwcm92ZVJlbmFtZSlcclxuICAgICAgICAgICAgaXNyZW5hbWVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNyZW5hbWVBY3RpdmUgJiYgY2FuY2xlQWN0aXZlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzcmVuYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbmNsZUFjdGl2ZWQgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjcmVhdGVUb2RvSXRlbXMoY29udGFpbmVyLCBwcm9qZWN0KVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICB0b2RvQ29udGFpbmVyLFxyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgdGFza1NlbGVjdGVkLFxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGFkZFRhc2tJbWcgZnJvbSBcIi4vYXNzZXRzL2FkZF90YXNrLnBuZ1wiXHJcbmltcG9ydCB7IGdlbmVyYXRlRmllbGRzIH0gZnJvbSBcIi4vZ2VuZXJhdGVGaWVsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9MaXN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvZG9saXN0LWZvcm1cIilcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi10aXRsZVwiKVxyXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IFRhc2tcIlxyXG4gICAgY29uc3QgYWRkVGFza0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgYWRkVGFza0ltYWdlLnNyYyA9IGFkZFRhc2tJbWdcclxuICAgIGFkZFRhc2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2staW1nXCIpXHJcbiAgICBmb3JtLmFwcGVuZChhZGRUYXNrSW1hZ2Usc2VjdGlvblRpdGxlKVxyXG4gICAgLy8gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KClcclxuICAgIGdlbmVyYXRlRmllbGRzKGZvcm0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7IHR5cGU6XCJ0ZXh0XCIsIGxhYmVsOlwidGl0bGVcIiB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6XCJURVhUQVJFQVwiLCBsYWJlbDpcImRlc2NyaXB0aW9uXCIgfSxcclxuICAgICAgICAgICAgeyB0eXBlOlwiZGF0ZVwiLCBsYWJlbDpcIkR1ZURhdGVcIiB9LFxyXG4gICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiLCBsYWJlbDogXCJwcmlvcml0eVwiIH0sXHJcbiAgICAgICAgXVxyXG4gICAgKTsvLyBqdXN0IGV4cGVybWVudGluZ1xyXG4gICAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpdGxlQ2FzZShzdHIpIHtcclxuICAgIC8vIHRpdGxlIGNhc2UgeW91ciBzZW50ZW5jZXNcclxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAod29yZCkge1xyXG4gICAgICAgIHJldHVybiAod29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpO1xyXG4gICAgfSkuam9pbignICcpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3R7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0aXRsZSwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZHVlRGF0ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=