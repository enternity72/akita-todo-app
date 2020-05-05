function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" class=\"padding\">\n\n\t<app-todos-container></app-todos-container>\n  <div style=\"margin-top: 100px\"></div>\n  <app-todos-container></app-todos-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos-page/todos-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos-page/todos-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodosTodosPageTodosPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"todo-container\">\n\n\n  <div class=\"input-field\">\n    <i class=\"material-icons prefix\">add_alarm</i>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Add Todo...\" #input (keydown.enter)=\"add(input)\">\n  </div>\n\n  <app-todos-filters (update)=\"changeFilter($event)\" [filters]=\"filters\" [active]=\"activeFilter$ | async\">\n  </app-todos-filters>\n\n  <app-todos [todos]=\"todos$ | async\" (delete)=\"delete($event)\" (complete)=\"complete($event)\"></app-todos>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'my-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _todos_todos_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todos/todos.module */
    "./src/app/todos/todos.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _todos_todos_module__WEBPACK_IMPORTED_MODULE_4__["TodosModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/todos/filter/filter.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/todos/filter/filter.model.ts ***!
    \**********************************************/

  /*! exports provided: VISIBILITY_FILTER, initialFilters */

  /***/
  function srcAppTodosFilterFilterModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VISIBILITY_FILTER", function () {
      return VISIBILITY_FILTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialFilters", function () {
      return initialFilters;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VISIBILITY_FILTER;

    (function (VISIBILITY_FILTER) {
      VISIBILITY_FILTER["SHOW_COMPLETED"] = "SHOW_COMPLETED";
      VISIBILITY_FILTER["SHOW_ACTIVE"] = "SHOW_ACTIVE";
      VISIBILITY_FILTER["SHOW_ALL"] = "SHOW_ALL";
    })(VISIBILITY_FILTER || (VISIBILITY_FILTER = {}));

    var initialFilters = [{
      label: 'All',
      value: VISIBILITY_FILTER.SHOW_ALL
    }, {
      label: 'Completed',
      value: VISIBILITY_FILTER.SHOW_COMPLETED
    }, {
      label: 'Active',
      value: VISIBILITY_FILTER.SHOW_ACTIVE
    }];
    /***/
  },

  /***/
  "./src/app/todos/filter/filters.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todos/filter/filters.component.ts ***!
    \***************************************************/

  /*! exports provided: TodosFiltersComponent */

  /***/
  function srcAppTodosFilterFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosFiltersComponent", function () {
      return TodosFiltersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TodosFiltersComponent = /*#__PURE__*/function () {
      function TodosFiltersComponent() {
        _classCallCheck(this, TodosFiltersComponent);

        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TodosFiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.active);
          this.control.valueChanges.subscribe(function (c) {
            _this.update.emit(c);
          });
        }
      }]);

      return TodosFiltersComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodosFiltersComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodosFiltersComponent.prototype, "filters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodosFiltersComponent.prototype, "update", void 0);
    TodosFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todos-filters',
      template: "\n    <div class=\"input-field col s12\">\n      <select [formControl]=\"control\" class=\"browser-default\">\n        <option *ngFor=\"let filter of filters;\" [ngValue]=\"filter.value\">{{filter.label}}\n        </option>\n      </select>\n    </div>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], TodosFiltersComponent);
    /***/
  },

  /***/
  "./src/app/todos/state/todo.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/todos/state/todo.model.ts ***!
    \*******************************************/

  /*! exports provided: createTodo */

  /***/
  function srcAppTodosStateTodoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTodo", function () {
      return createTodo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/fesm2015/datorama-akita.js");

    function createTodo(title) {
      return {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["guid"])(),
        title: title,
        completed: false
      };
    }
    /***/

  },

  /***/
  "./src/app/todos/state/todos.query.ts":
  /*!********************************************!*\
    !*** ./src/app/todos/state/todos.query.ts ***!
    \********************************************/

  /*! exports provided: TodosQuery */

  /***/
  function srcAppTodosStateTodosQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosQuery", function () {
      return TodosQuery;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _todos_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todos.store */
    "./src/app/todos/state/todos.store.ts");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/fesm2015/datorama-akita.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _filter_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../filter/filter.model */
    "./src/app/todos/filter/filter.model.ts");

    var TodosQuery = /*#__PURE__*/function (_datorama_akita__WEBP) {
      _inherits(TodosQuery, _datorama_akita__WEBP);

      var _super = _createSuper(TodosQuery);

      function TodosQuery(store) {
        var _this2;

        _classCallCheck(this, TodosQuery);

        _this2 = _super.call(this, store);
        _this2.store = store;
        _this2.selectVisibilityFilter$ = _this2.select(function (state) {
          return state.ui.filter;
        });
        _this2.selectVisibleTodos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(_this2.selectVisibilityFilter$, _this2.selectAll(), _this2.getVisibleTodos);
        return _this2;
      }

      _createClass(TodosQuery, [{
        key: "getVisibleTodos",
        value: function getVisibleTodos(filter, todos) {
          switch (filter) {
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_5__["VISIBILITY_FILTER"].SHOW_COMPLETED:
              return todos.filter(function (t) {
                return t.completed;
              });

            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_5__["VISIBILITY_FILTER"].SHOW_ACTIVE:
              return todos.filter(function (t) {
                return !t.completed;
              });

            default:
              return todos;
          }
        }
      }]);

      return TodosQuery;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["QueryEntity"]);

    TodosQuery.ctorParameters = function () {
      return [{
        type: _todos_store__WEBPACK_IMPORTED_MODULE_2__["TodosStore"]
      }];
    };

    TodosQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TodosQuery);
    /***/
  },

  /***/
  "./src/app/todos/state/todos.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/todos/state/todos.service.ts ***!
    \**********************************************/

  /*! exports provided: TodosService */

  /***/
  function srcAppTodosStateTodosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosService", function () {
      return TodosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _todos_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./todos.store */
    "./src/app/todos/state/todos.store.ts");
    /* harmony import */


    var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo.model */
    "./src/app/todos/state/todo.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TodosService = /*#__PURE__*/function () {
      function TodosService(todosStore) {
        _classCallCheck(this, TodosService);

        this.todosStore = todosStore;
      }

      _createClass(TodosService, [{
        key: "updateFilter",
        value: function updateFilter(filter) {
          this.todosStore.update({
            ui: {
              filter: filter
            }
          });
        }
      }, {
        key: "complete",
        value: function complete(_ref) {
          var id = _ref.id,
              completed = _ref.completed;
          this.todosStore.update(id, {
            completed: completed
          });
        }
      }, {
        key: "add",
        value: function add(title) {
          var todo = Object(_todo_model__WEBPACK_IMPORTED_MODULE_2__["createTodo"])(title);
          this.todosStore.add(todo);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.todosStore.remove(id);
        }
      }]);

      return TodosService;
    }();

    TodosService.ctorParameters = function () {
      return [{
        type: _todos_store__WEBPACK_IMPORTED_MODULE_1__["TodosStore"]
      }];
    };

    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], TodosService);
    /***/
  },

  /***/
  "./src/app/todos/state/todos.store.ts":
  /*!********************************************!*\
    !*** ./src/app/todos/state/todos.store.ts ***!
    \********************************************/

  /*! exports provided: TodosStore */

  /***/
  function srcAppTodosStateTodosStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosStore", function () {
      return TodosStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @datorama/akita */
    "./node_modules/@datorama/akita/fesm2015/datorama-akita.js");
    /* harmony import */


    var _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../filter/filter.model */
    "./src/app/todos/filter/filter.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var initialState = {
      ui: {
        filter: _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__["VISIBILITY_FILTER"].SHOW_ALL
      }
    };

    var TodosStore = /*#__PURE__*/function (_datorama_akita__WEBP2) {
      _inherits(TodosStore, _datorama_akita__WEBP2);

      var _super2 = _createSuper(TodosStore);

      function TodosStore() {
        _classCallCheck(this, TodosStore);

        return _super2.call(this, initialState);
      }

      return TodosStore;
    }(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"]);

    TodosStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({
      name: 'todos'
    })], TodosStore);
    /***/
  },

  /***/
  "./src/app/todos/todo.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/todos/todo.component.ts ***!
    \*****************************************/

  /*! exports provided: TodoComponent */

  /***/
  function srcAppTodosTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
      return TodoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TodoComponent = /*#__PURE__*/function () {
      function TodoComponent() {
        _classCallCheck(this, TodoComponent);

        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.completed);
          this.control.valueChanges.subscribe(function (completed) {
            _this3.complete.emit(Object.assign({}, _this3.todo, {
              completed: completed
            }));
          });
        }
      }]);

      return TodoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodoComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodoComponent.prototype, "complete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodoComponent.prototype, "delete", void 0);
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo',
      template: "\n    <div class=\"flex align-center sb\">\n     <div class=\"flex\">\n      <label>\n        <input type=\"checkbox\" [formControl]=\"control\"/>\n        <span></span>\n      </label>\n      {{todo.title}}\n    </div>\n    <a class=\"btn waves-effect waves-light red btn-small btn-floating\">\n      <i class=\"material-icons\" (click)=\"delete.emit(todo.id)\">delete_forever</i>\n    </a>\n   </div>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], TodoComponent);
    /***/
  },

  /***/
  "./src/app/todos/todos-page/todos-container.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/todos/todos-page/todos-container.component.ts ***!
    \***************************************************************/

  /*! exports provided: TodosContainerComponent */

  /***/
  function srcAppTodosTodosPageTodosContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosContainerComponent", function () {
      return TodosContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _state_todos_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state/todos.query */
    "./src/app/todos/state/todos.query.ts");
    /* harmony import */


    var _state_todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state/todos.service */
    "./src/app/todos/state/todos.service.ts");
    /* harmony import */


    var _state_todos_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state/todos.store */
    "./src/app/todos/state/todos.store.ts");

    var TodosContainerComponent = function TodosContainerComponent() {
      _classCallCheck(this, TodosContainerComponent);
    };

    TodosContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todos-container',
      template: '<app-todos-page></app-todos-page>',
      providers: [_state_todos_store__WEBPACK_IMPORTED_MODULE_4__["TodosStore"], _state_todos_query__WEBPACK_IMPORTED_MODULE_2__["TodosQuery"], _state_todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"]]
    })], TodosContainerComponent);
    /***/
  },

  /***/
  "./src/app/todos/todos-page/todos-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/todos/todos-page/todos-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: TodosPageComponent */

  /***/
  function srcAppTodosTodosPageTodosPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosPageComponent", function () {
      return TodosPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../filter/filter.model */
    "./src/app/todos/filter/filter.model.ts");
    /* harmony import */


    var _state_todos_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state/todos.query */
    "./src/app/todos/state/todos.query.ts");
    /* harmony import */


    var _state_todos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state/todos.service */
    "./src/app/todos/state/todos.service.ts");
    /* harmony import */


    var _state_todos_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../state/todos.store */
    "./src/app/todos/state/todos.store.ts");

    var TodosPageComponent = /*#__PURE__*/function () {
      function TodosPageComponent(todosQuery, todosService) {
        _classCallCheck(this, TodosPageComponent);

        this.todosQuery = todosQuery;
        this.todosService = todosService;
        this.filters = _filter_filter_model__WEBPACK_IMPORTED_MODULE_2__["initialFilters"];
      }

      _createClass(TodosPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.todos$ = this.todosQuery.selectVisibleTodos$;
          this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
        }
      }, {
        key: "add",
        value: function add(input) {
          this.todosService.add(input.value);
          input.value = '';
        }
      }, {
        key: "complete",
        value: function complete(todo) {
          this.todosService.complete(todo);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.todosService["delete"](id);
        }
      }, {
        key: "changeFilter",
        value: function changeFilter(filter) {
          this.todosService.updateFilter(filter);
        }
      }]);

      return TodosPageComponent;
    }();

    TodosPageComponent.ctorParameters = function () {
      return [{
        type: _state_todos_query__WEBPACK_IMPORTED_MODULE_3__["TodosQuery"]
      }, {
        type: _state_todos_service__WEBPACK_IMPORTED_MODULE_4__["TodosService"]
      }];
    };

    TodosPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todos-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todos-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todos/todos-page/todos-page.component.html"))["default"],
      providers: [_state_todos_store__WEBPACK_IMPORTED_MODULE_5__["TodosStore"]]
    })], TodosPageComponent);
    /***/
  },

  /***/
  "./src/app/todos/todos.component.ts":
  /*!******************************************!*\
    !*** ./src/app/todos/todos.component.ts ***!
    \******************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TodosComponent = /*#__PURE__*/function () {
      function TodosComponent() {
        _classCallCheck(this, TodosComponent);

        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TodosComponent, [{
        key: "trackByFn",
        value: function trackByFn(index, todo) {
          return todo.id;
        }
      }]);

      return TodosComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodosComponent.prototype, "todos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodosComponent.prototype, "complete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodosComponent.prototype, "delete", void 0);
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todos',
      template: "\n    <div class=\"collection with-header\">\n      <h4 class=\"collection-header\">Todos:</h4>\n      <app-todo *ngFor=\"let todo of todos; trackBy: trackByFn\"\n                class=\"collection-item\"\n                (delete)=\"delete.emit($event)\"\n                (complete)=\"complete.emit($event)\"\n                [todo]=\"todo\"></app-todo>\n    </div>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], TodosComponent);
    /***/
  },

  /***/
  "./src/app/todos/todos.module.ts":
  /*!***************************************!*\
    !*** ./src/app/todos/todos.module.ts ***!
    \***************************************/

  /*! exports provided: TodosModule */

  /***/
  function srcAppTodosTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosModule", function () {
      return TodosModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _state_todos_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./state/todos.store */
    "./src/app/todos/state/todos.store.ts");
    /* harmony import */


    var _todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todo.component */
    "./src/app/todos/todo.component.ts");
    /* harmony import */


    var _todos_page_todos_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todos-page/todos-container.component */
    "./src/app/todos/todos-page/todos-container.component.ts");
    /* harmony import */


    var _todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todos.component */
    "./src/app/todos/todos.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _filter_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./filter/filters.component */
    "./src/app/todos/filter/filters.component.ts");
    /* harmony import */


    var _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./todos-page/todos-page.component */
    "./src/app/todos/todos-page/todos-page.component.ts");

    var TodosModule = function TodosModule() {
      _classCallCheck(this, TodosModule);
    };

    TodosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      exports: [_todos_component__WEBPACK_IMPORTED_MODULE_6__["TodosComponent"], _filter_filters_component__WEBPACK_IMPORTED_MODULE_8__["TodosFiltersComponent"], _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_9__["TodosPageComponent"], _todos_page_todos_container_component__WEBPACK_IMPORTED_MODULE_5__["TodosContainerComponent"]],
      declarations: [_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"], _todos_component__WEBPACK_IMPORTED_MODULE_6__["TodosComponent"], _filter_filters_component__WEBPACK_IMPORTED_MODULE_8__["TodosFiltersComponent"], _todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_9__["TodosPageComponent"], _todos_page_todos_container_component__WEBPACK_IMPORTED_MODULE_5__["TodosContainerComponent"]],
      entryComponents: [_todos_page_todos_page_component__WEBPACK_IMPORTED_MODULE_9__["TodosPageComponent"]],
      providers: [_state_todos_store__WEBPACK_IMPORTED_MODULE_3__["TodosStore"]]
    })], TodosModule);
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Dev\Sandbox\akita-todo-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map