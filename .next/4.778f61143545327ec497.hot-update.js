webpackHotUpdate(4,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/advaith/code/learning/hackernews/components/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
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
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        ),
        this.props.children
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/advaith/code/learning/hackernews/components/Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");

var _jsxFileName = '/Users/advaith/code/learning/hackernews/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
        { title: 'Latest News', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2863108490' + ' ' + 'hackernews',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'h1',
            {
              className: 'jsx-2863108490',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            'Latest News'
          ),
          this.props.stories.map(function (story) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-2863108490',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                { href: story.url, className: 'jsx-2863108490',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  }
                },
                story.title
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '3111415933',
            css: 'div.hackernews.jsx-2863108490{background-color:#eee;}h1.jsx-2863108490{font-family:system-ui;font-weight:300;font-size:18px;background-color:#F0F0F0;color:#555;}.jsx-2863108490,h2.jsx-2863108490{font-family:\'Roboto\',sans-serif;font-weight:200;font-size:16px;color:#181818;border-bottom:1px solid #bdc3c7;}a.jsx-2863108490{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IsQUFHK0IsQUFHQSxBQU9XLEFBT1oscUJBQ3ZCLENBakJBLEFBR2tCLFVBT0EsTUFORCxVQU9BLEtBTlUsVUFPWCxjQUNrQixDQVByQixXQUNiLG9CQU9BIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZHZhaXRoL2NvZGUvbGVhcm5pbmcvaGFja2VybmV3cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuaGFja2Vyd2ViYXBwLmNvbS9uZXdzYClcbiAgICBjb25zdCBzdG9yaWVzID1hd2FpdCByZXEuanNvbigpXG4gICAgcmV0dXJuIHsgc3RvcmllcyB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiTGF0ZXN0IE5ld3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFja2VybmV3c1wiPlxuICAgICAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcbiAgICAgICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxuICAgICAgICApKSB9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkaXYuaGFja2VybmV3cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICB9XG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH0sXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMTgxODE4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYzNjNztcbiAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
            styleId: '3323651966',
            css: 'body{background-color:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDMkIsQUFHbUMsc0JBQ3hCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZHZhaXRoL2NvZGUvbGVhcm5pbmcvaGFja2VybmV3cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuaGFja2Vyd2ViYXBwLmNvbS9uZXdzYClcbiAgICBjb25zdCBzdG9yaWVzID1hd2FpdCByZXEuanNvbigpXG4gICAgcmV0dXJuIHsgc3RvcmllcyB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiTGF0ZXN0IE5ld3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFja2VybmV3c1wiPlxuICAgICAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnkpID0+IChcbiAgICAgICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxuICAgICAgICApKSB9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkaXYuaGFja2VybmV3cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICB9XG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH0sXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMTgxODE4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYzNjNztcbiAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/advaith/code/learning/hackernews/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.778f61143545327ec497.hot-update.js.map