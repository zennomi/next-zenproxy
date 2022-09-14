"use strict";
(() => {
var exports = {};
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 295:
/***/ ((module) => {

module.exports = import("cheerio");;

/***/ }),

/***/ 7343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _ordersources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2661);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ordersources__WEBPACK_IMPORTED_MODULE_0__]);
_ordersources__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    const { source: sourceId , section: sectionId  } = req.query;
    const page = req.query.page ? Number(req.query.page) : 1;
    const source = _ordersources__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[sourceId];
    try {
        const data = await source.getSection?.(sectionId, page);
        return res.send(data);
    } catch (error) {
        console.log(error);
        return res.status(404).send(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Melonbooks)
});

;// CONCATENATED MODULE: ./src/@types/ordersource.ts
class OrderSource {
    constructor(cheerio){
        this.cheerio = cheerio;
    }
}

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/ordersources/Melonbooks/Melonbooks.ts


class Melonbooks extends OrderSource {
    id = "melonbooks";
    icon = "Melonbooks.png";
    sections = [
        {
            id: "special_novel",
            title: "Light Novel b\u1EA3n \u0111\u1EB7c bi\u1EC7t"
        }
    ];
    name = "Melonbooks";
    websiteBaseURL = "https://www.melonbooks.co.jp";
    getSection = async (id, page)=>{
        let data;
        const results = [];
        switch(id){
            case "special_novel":
                data = (await external_axios_default().get(`${this.websiteBaseURL}/tags/index.php?tag=${encodeURIComponent("\u30E1\u30ED\u30F3\u9650\u5B9A\u7248")}%28${encodeURIComponent("\u30CE\u30D9\u30EB")}%29`)).data;
                break;
        }
        const $ = this.cheerio.load(data);
        for (const productEle of $(".product").toArray()){
            let id = $(".thumb a", productEle).attr("href")?.slice(30) || "";
            let imgEle = $(".thumb img", productEle);
            let imageURL = imgEle.attr("data-src") || "";
            if (!imageURL?.startsWith("https:")) imageURL = "https:" + imageURL;
            imageURL = imageURL.replace("214", "900").replace("151", "650");
            const title = imgEle.attr("alt") || "";
            let price = $(".price em", productEle).text();
            if (price?.startsWith("\xa5")) price = price.slice(1);
            price = price.replace(",", "");
            results.push({
                id,
                titles: [
                    title
                ],
                originalPrice: Number(price),
                images: [
                    imageURL
                ]
            });
        }
        return results;
    };
}


/***/ }),

/***/ 2661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(295);
/* harmony import */ var _Melonbooks_Melonbooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cheerio__WEBPACK_IMPORTED_MODULE_0__]);
cheerio__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const melonbooks = new _Melonbooks_Melonbooks__WEBPACK_IMPORTED_MODULE_1__/* .Melonbooks */ .h(cheerio__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    melonbooks
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7343));
module.exports = __webpack_exports__;

})();