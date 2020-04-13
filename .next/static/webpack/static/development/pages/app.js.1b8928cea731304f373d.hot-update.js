webpackHotUpdate("static\\development\\pages\\app.js",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Public\\Xampp\\htdocs\\fullstacklab\\pages\\app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/create-status');
    }
  });
  if (!props.isAuth || props.forceCreate) return null;
  return __jsx("div", {
    className: "row ml-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "py-4 font-bold text-3xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Status de pessoas pr\xF3ximas a voc\xEA"), "A tabela abaixo apresenta a rela\xE7\xE3o de todas as pessoas que informaram", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 83
    }
  }), "como est\xE3o se sentindo hoje e que est\xE3o no raio de 1 km de dist\xE2ncia de voc\xEA.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 90
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 95
    }
  }), __jsx("table", {
    className: "table-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "ID"), __jsx("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Dist\xE2ncia de voc\xEA"), __jsx("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Coordenadas"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, props.checkins.map(function (checkin) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 28
      }
    }, checkin.id === props.user.sub && 'Esse sou eu'), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 28
      }
    }, checkin.status === 'bem' && 'Está bem e sem sintomas', checkin.status === 'gripe' && 'Está com sintomas de gripe', checkin.status === 'covid' && 'Está com sintomas da covid-19'), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 28
      }
    }, checkin.distance, " km"), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 28
      }
    }, JSON.stringify(checkin.coords.latitude)));
  }))));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=app.js.1b8928cea731304f373d.hot-update.js.map