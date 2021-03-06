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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_md_comment__ = __webpack_require__("react-icons/lib/md/comment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_icons_lib_md_comment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_md_comment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_timeline__ = __webpack_require__("react-icons/lib/md/timeline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_timeline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_timeline__);

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
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-810244045' + ' ' + 'hackernews',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h1',
            {
              className: 'jsx-810244045',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            'Latest News'
          ),
          this.props.stories.map(function (story) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-810244045',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h2',
                {
                  className: 'jsx-810244045',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'a',
                  { href: story.url, className: 'jsx-810244045',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    }
                  },
                  story.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-810244045',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                  { prefetch: true, href: '/story?id' + story.id, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    {
                      className: 'jsx-810244045' + ' ' + 'traits',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_icons_lib_md_comment___default.a, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      }
                    }),
                    ' ',
                    story.comments_count,
                    ' '
                  )
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-810244045' + ' ' + 'points',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    }
                  },
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_lib_md_timeline___default.a, { className: 'timeline', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    }
                  }),
                  ' ',
                  story.points
                )
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '3692192570',
            css: '.timeline.jsx-810244045{padding-right:2px;}.traits.jsx-810244045,.points.jsx-810244045{display:inline;}.points.jsx-810244045{font-weight:600;}div.hackernews.jsx-810244045{background-color:#eee;border-bottom:1px solid rgba(0,0,0,0.1);}.jsx-810244045,.traits.jsx-810244045{color:#FF4C00;font-weight:600;padding-right:15px;}.jsx-810244045,h1.jsx-810244045{font-family:system-ui;font-weight:300;font-size:18px;background-color:#F0F0F0;color:#555;}.jsx-810244045,h2.jsx-810244045{font-family:\'Roboto\',sans-serif;font-weight:200;font-size:16px;color:#181818;}a.jsx-810244045{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHK0IsQUFHSCxBQUdDLEFBR0UsQUFJUixBQUtRLEFBT1csQUFPWixjQWxCTCxDQVZkLENBR0EsRUFOQSxHQWdDSixDQXZCMEMsQUFTeEIsUUFKRyxFQVdILE1BTkQsVUFPQSxDQVhqQixJQUsyQixTQVYzQixDQWlCZ0IsY0FFaEIsQ0FSYSxXQUNiIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZHZhaXRoL2NvZGUvbGVhcm5pbmcvaGFja2VybmV3cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ29tbWVudCBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvY29tbWVudCdcbmltcG9ydCBUaW1lbGluZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvdGltZWxpbmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuaGFja2Vyd2ViYXBwLmNvbS9uZXdzYClcbiAgICBjb25zdCBzdG9yaWVzID1hd2FpdCByZXEuanNvbigpXG4gICAgcmV0dXJuIHsgc3RvcmllcyB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiTGF0ZXN0IE5ld3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFja2VybmV3c1wiPlxuICAgICAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPjxhIGhyZWY9eyBzdG9yeS51cmwgfT57IHN0b3J5LnRpdGxlIH08L2E+PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXsgYC9zdG9yeT9pZCR7c3RvcnkuaWR9YCB9PjxhIGNsYXNzTmFtZT1cInRyYWl0c1wiPlxuICAgICAgICAgICAgICAgIDxDb21tZW50Lz4geyBzdG9yeS5jb21tZW50c19jb3VudCB9IDwvYT48L0xpbms+IDxkaXYgY2xhc3NOYW1lPVwicG9pbnRzXCI+IDxUaW1lbGluZSBjbGFzc05hbWU9XCJ0aW1lbGluZVwiLz4geyBzdG9yeS5wb2ludHMgfTwvZGl2PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSB9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50aW1lbGluZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmFpdHMsIC5wb2ludHMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnRzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuaGFja2VybmV3cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICB9LFxuICAgICAgLnRyYWl0cyB7XG4gICAgICAgIGNvbG9yOiAjRkY0QzAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgfSxcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgfSxcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMxODE4MTg7XG5cbiAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '3323651966',
            css: 'body{background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFMkIsQUFHbUMsc0JBQ3hCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZHZhaXRoL2NvZGUvbGVhcm5pbmcvaGFja2VybmV3cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ29tbWVudCBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvY29tbWVudCdcbmltcG9ydCBUaW1lbGluZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvdGltZWxpbmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuaGFja2Vyd2ViYXBwLmNvbS9uZXdzYClcbiAgICBjb25zdCBzdG9yaWVzID1hd2FpdCByZXEuanNvbigpXG4gICAgcmV0dXJuIHsgc3RvcmllcyB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiTGF0ZXN0IE5ld3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFja2VybmV3c1wiPlxuICAgICAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPjxhIGhyZWY9eyBzdG9yeS51cmwgfT57IHN0b3J5LnRpdGxlIH08L2E+PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXsgYC9zdG9yeT9pZCR7c3RvcnkuaWR9YCB9PjxhIGNsYXNzTmFtZT1cInRyYWl0c1wiPlxuICAgICAgICAgICAgICAgIDxDb21tZW50Lz4geyBzdG9yeS5jb21tZW50c19jb3VudCB9IDwvYT48L0xpbms+IDxkaXYgY2xhc3NOYW1lPVwicG9pbnRzXCI+IDxUaW1lbGluZSBjbGFzc05hbWU9XCJ0aW1lbGluZVwiLz4geyBzdG9yeS5wb2ludHMgfTwvZGl2PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSB9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC50aW1lbGluZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmFpdHMsIC5wb2ludHMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnRzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYuaGFja2VybmV3cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICB9LFxuICAgICAgLnRyYWl0cyB7XG4gICAgICAgIGNvbG9yOiAjRkY0QzAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgfSxcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgfSxcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMxODE4MTg7XG5cbiAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
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

/***/ "react-icons/lib/md/comment":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/md/comment");

/***/ }),

/***/ "react-icons/lib/md/timeline":
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/md/timeline");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map