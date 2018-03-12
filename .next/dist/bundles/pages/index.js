module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/advaith/code/learning/hackernews/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_next_head___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                }
              },
              this.props.title
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#ff6600', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/static/icon.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'Hacker News', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            })
          )
        ),
        this.props.children
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.js");

var _jsxFileName = '/Users/advaith/code/learning/hackernews/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */],
        { title: 'Latest News', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-338819164' + ' ' + 'hackernews',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h1',
            {
              className: 'jsx-338819164',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            'Latest News'
          ),
          this.props.stories.map(function (story) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-338819164',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h2',
                {
                  className: 'jsx-338819164',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'a',
                  { href: story.url, className: 'jsx-338819164',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    }
                  },
                  story.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-338819164',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                  { prefetch: true, href: '/story?id' + story.id, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    {
                      className: 'jsx-338819164',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      }
                    },
                    story.comments_count,
                    ' comments'
                  )
                )
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '4252592331',
            css: 'div.hackernews.jsx-338819164{background-color:#eee;}h1.jsx-338819164{font-family:system-ui;font-weight:300;font-size:18px;background-color:#F0F0F0;color:#555;}.jsx-338819164,h2.jsx-338819164{font-family:\'Roboto\',sans-serif;font-weight:200;font-size:16px;color:#181818;}a.jsx-338819164{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCb0IsQUFHK0IsQUFHQSxBQU9XLEFBT1oscUJBQ3ZCLENBakJBLEFBR2tCLFVBT0EsTUFORCxVQU9BLEtBTlUsVUFPWCxjQUVoQixDQVJhLFdBQ2IiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkdmFpdGgvY29kZS9sZWFybmluZy9oYWNrZXJuZXdzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKVxuICAgIGNvbnN0IHN0b3JpZXMgPWF3YWl0IHJlcS5qc29uKClcbiAgICByZXR1cm4geyBzdG9yaWVzIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9XCJMYXRlc3QgTmV3c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWNrZXJuZXdzXCI+XG4gICAgICAgIDxoMT5MYXRlc3QgTmV3czwvaDE+XG5cbiAgICAgICAgeyB0aGlzLnByb3BzLnN0b3JpZXMubWFwKChzdG9yeSkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9eyBgL3N0b3J5P2lkJHtzdG9yeS5pZH1gIH0+PGE+XG4gICAgICAgICAgICAgICAgeyBzdG9yeS5jb21tZW50c19jb3VudCB9IGNvbW1lbnRzXG4gICAgICAgICAgICAgIDwvYT48L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpIH1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGRpdi5oYWNrZXJuZXdzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIH1cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgfSxcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMxODE4MTg7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRjM2M3O1xuICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '3323651966',
            css: 'body{background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEMkIsQUFHbUMsc0JBQ3hCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZHZhaXRoL2NvZGUvbGVhcm5pbmcvaGFja2VybmV3cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuaGFja2Vyd2ViYXBwLmNvbS9uZXdzYClcbiAgICBjb25zdCBzdG9yaWVzID1hd2FpdCByZXEuanNvbigpXG4gICAgcmV0dXJuIHsgc3RvcmllcyB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiTGF0ZXN0IE5ld3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFja2VybmV3c1wiPlxuICAgICAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPjxhIGhyZWY9eyBzdG9yeS51cmwgfT57IHN0b3J5LnRpdGxlIH08L2E+PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXsgYC9zdG9yeT9pZCR7c3RvcnkuaWR9YCB9PjxhPlxuICAgICAgICAgICAgICAgIHsgc3RvcnkuY29tbWVudHNfY291bnQgfSBjb21tZW50c1xuICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSB9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkaXYuaGFja2VybmV3cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICB9XG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH0sXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMTgxODE4O1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYzNjNztcbiAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
          })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var req, stories;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.hackerwebapp.com/news');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                stories = _context.sent;
                return _context.abrupt('return', { stories: stories });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map