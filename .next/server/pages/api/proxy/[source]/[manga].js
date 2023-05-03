"use strict";
(() => {
var exports = {};
exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1730:
/***/ ((module) => {

module.exports = require("entities");

/***/ }),

/***/ 4580:
/***/ ((module) => {

module.exports = require("paperback-extensions-common");

/***/ }),

/***/ 4699:
/***/ ((module) => {

module.exports = import("axios-cache-interceptor");;

/***/ }),

/***/ 295:
/***/ ((module) => {

module.exports = import("cheerio");;

/***/ }),

/***/ 1386:
/***/ ((module) => {

module.exports = import("entities");;

/***/ }),

/***/ 1571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5894);
/* harmony import */ var _src_sources_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sources__WEBPACK_IMPORTED_MODULE_0__]);
_sources__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    const query = req.query.source;
    console.log(query);
    const source = _sources__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[query];
    if (!source) return res.status(404).send("not found source");
    const data = await source.getMangaDetails(req.query.manga);
    return res.send((0,_src_sources_types__WEBPACK_IMPORTED_MODULE_1__/* .createZenManga */ .VZ)(source, data));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [894], () => (__webpack_exec__(1571)));
module.exports = __webpack_exports__;

})();