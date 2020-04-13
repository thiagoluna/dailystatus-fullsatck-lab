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

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"fullstacklab-a4581\",\"private_key_id\":\"9a367b8bc9958c25031f8dac44ec730c5dbf7928\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6CUzPMxxIoPmx\\nDhqBPTioBSoT52Bk+5lyG6mIak9TbTIxxrOP1At/tQGhNskL/Qkf8Cs9Hooz4PDm\\nIR09IfBlJZVzSb9eau0tbd0/jhEUcRdlr/w4LKTyQDiU0BKoRMHF5SzXqhzq+qLv\\nFVxXIDsO7Esw78V8foxpBN1ps17Ngk+gXr5CjQnUJBcNhhLtRWXcYo0i4RuLkboj\\nk8TRPyb1kwb/j6tZg3T8PJFySgRE6wbiUHU8h22ZMYXeqU1uJCgZ8/mOpvG6MYYG\\ndwsiTAZkNc83S8nLyJxMUPXohbkNh6Ltkv+C3UUsRSjr6Dc/aqBfxQf9hoFXhDRB\\ngWMonU9BAgMBAAECggEAFO4H7LBjiGOdQ9ys1wkZZIR+4+dePRjgqL77ofkn5zW7\\n9cVU8qOuDtZBPS8fNlCSTrwOo/KEJOsJNIgu3xpVjo5IaUSM7vqY/XPvS3+tuemG\\nnYOg8ib1AGYrl3PDWEKytD4g1JCdw+1NGG3Zn4Rk8JGyseo/2Hjvo2m53p2grFPB\\ncJJW/QHUPycyMGs//RAzQaULh5gqPlGwy1m7F7ZrqQO6L+VSfVS5hZfCGEeJ3ufY\\nuERZ98zGvgDRRMwwyPiKol9+Q96bm/Hq8kjVyakfVPHQBa6EK3xkY9SNe6uya1KW\\nYBPBHjrrh/N39BJnpApDsyBPcBDG5Lzv9S3p3UwxEwKBgQDpE3mlJIzY3fQWJ7Ra\\nQrxGXOyKReJWBXL5hLp3BgmsH58oGE4iZR0bR7trP/T1PwYJLKH6JR/b/d7EfjLw\\nOf8bBYLuzHpqQpboK602TL2H8hFJeHs2UnXWcyJjWuV+DnwdQg7rqBthy4jwXs2P\\nyV5AmOALmwt7E/gi4RZKOLC6YwKBgQDMVW5IUbkn5/FJUhjiXEHsYJnyVlYptGSs\\n8bJlUCc5xw+6Fu1KKEg6ze1yjqe8CwCfzGLkVeeQfePI9wvrdChxu1O1wYNL4o88\\n5ACxa2Dw3ufHs/Ohrij00UX/eC4Dpq/Y7ge1LxAt/DDDeObWhtPRVAzgpDvVp5ar\\nDpwZG/iPCwKBgBWfeOmZOnfkH4DurgyxpEXi2Q767MSOPNxpM+NW7A7L4DgYCSen\\nucuOHBUXGeKmtiiju2M5jnsaUlBoZNFkkAYxvLPqxHCXPOjNJISlGfBCxNfMFaI0\\nhDog9E/DXwcS0PDl7/xs3B12hH3ITcnJJLVZeW+aMrZ4Y8zYlPjNyZeBAoGBAIlg\\nzrq0p0XbPXBMUAqweGoSMK6ruVZkwGM+RPC0yQqheUNl8revCZDvrrscik11IEBP\\nzBU0ZHHTEfilkFAHUsHUbl1+82Vrt1369TRTu2N2mmK77AtB6qteoC84f8dYpFW3\\nA1uffsNMEQT7HkgRcgwE9Ht8L/ZfrH7pXa3MDnstAoGAd0GsrUBwXMWslQeVR7Yt\\nXo7rZMIbseVAYCdHqxFqzWpAJi6PLFL3dRuPqauFNRK9RncxamKAUDicV8yWEjtX\\n9foyna+My9GQBGcRAwdvN+G21rnLbdHc9AupTIhV754i+HANKbFcUaxU2hUjBPmr\\nZh90Cgnx8KmeOpZ+JdpdamE=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-faq63@fullstacklab-a4581.iam.gserviceaccount.com\",\"client_id\":\"104885076129209793654\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-faq63%40fullstacklab-a4581.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SCOPE,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
var _jsxFileName = "C:\\Users\\Public\\Xampp\\htdocs\\fullstacklab\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  });
  if (!props.isAuth || props.forceCreate) return null;
  return __jsx("div", {
    className: "row ml-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "py-4 font-bold text-3xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Status de pessoas pr\xF3ximas a voc\xEA"), "A tabela abaixo apresenta a rela\xE7\xE3o de todas as pessoas que informaram", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 83
    }
  }), "como est\xE3o se sentindo hoje e que est\xE3o no raio de 1 km de dist\xE2ncia de voc\xEA.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 90
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 95
    }
  }), __jsx("table", {
    className: "table-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("th", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "ID"), __jsx("th", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Dist\xE2ncia de voc\xEA"), __jsx("th", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Coordenadas"))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, props.checkins.map(checkin => {
    return __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("td", {
      className: "border px-4 py-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 28
      }
    }, checkin.id === props.user.sub && 'Esse sou eu'), __jsx("td", {
      className: "border px-4 py-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 28
      }
    }, checkin.status === 'bem' && 'Está bem e sem sintomas', checkin.status === 'gripe' && 'Está com sintomas de gripe', checkin.status === 'covid' && 'Está com sintomas da covid-19'), __jsx("td", {
      className: "border px-4 py-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 28
      }
    }, checkin.distance, " km"), __jsx("td", {
      className: "border px-4 py-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 28
      }
    }, "Lat: ", JSON.stringify(checkin.coords.lat), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 73
      }
    }), "Long: ", JSON.stringify(checkin.coords.long)));
  }))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 26
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 31
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);
  console.log(session);

  if (session) {
    const today = new Date();
    const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').doc(session.user.sub).get();
    const todaysData = todaysCheckin.data();
    let forceCreate = true;

    if (todaysData) {
      //pode ver os outros checkins
      forceCreate = false;
      const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks').near({
        center: todaysData.coordinates,
        radius: 1000
      }).get();
      const checkinsList = [];
      checkins.docs.forEach(doc => {
        checkinsList.push({
          id: doc.id,
          status: doc.data().status,
          coords: {
            lat: doc.data().coordinates.latitude,
            long: doc.data().coordinates.longitude
          },
          distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_4__["distance"])(todaysData.coordinates.latitude, todaysData.coordinates.longitude, doc.data().coordinates.latitude, doc.data().coordinates.longitude).toFixed(2)
        });
      });
      return {
        props: {
          isAuth: true,
          user: session.user,
          forceCreate: false,
          checkins: checkinsList
        }
      };
    }

    return {
      props: {
        isAuth: true,
        user: session.user,
        forceCreate
      }
    };
  }

  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Public\Xampp\htdocs\fullstacklab\pages\app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map