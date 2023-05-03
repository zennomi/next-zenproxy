"use strict";
exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "If": () => (/* binding */ getSection),
/* harmony export */   "Uo": () => (/* binding */ getChapters),
/* harmony export */   "bR": () => (/* binding */ getChapter),
/* harmony export */   "uf": () => (/* binding */ getManga)
/* harmony export */ });
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6743);

const getManga = async (sourceId, mangaId)=>{
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/proxy/${sourceId}/${mangaId}`);
    return data;
};
const getSection = async (sourceId, sectionId, page)=>{
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/proxy/${sourceId}/sections/${sectionId}?page=${page}`);
    return data;
};
const getChapters = async (sourceId, mangaId)=>{
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/proxy/${sourceId}/${mangaId}/chapters`);
    return data;
};
const getChapter = async (sourceId, mangaId, chapterId)=>{
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/proxy/${sourceId}/${mangaId}/${chapterId}`);
    return data;
};


/***/ }),

/***/ 3296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HV": () => (/* binding */ useChapters),
/* harmony export */   "W$": () => (/* binding */ useChapter),
/* harmony export */   "XH": () => (/* binding */ useManga),
/* harmony export */   "fp": () => (/* binding */ useSection)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(256);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useSection = (sourceId, sectionId, page)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "section",
        {
            sourceId,
            sectionId,
            page
        }
    ], ()=>_api_proxy__WEBPACK_IMPORTED_MODULE_1__/* .getSection */ .If(sourceId, sectionId, page)
    )
;
const useManga = (sourceId, mangaId)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "manga",
        {
            sourceId,
            mangaId
        }
    ], ()=>_api_proxy__WEBPACK_IMPORTED_MODULE_1__/* .getManga */ .uf(sourceId, mangaId)
    )
;
const useChapters = (sourceId, mangaId)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "chapters",
        {
            sourceId,
            mangaId
        }
    ], ()=>_api_proxy__WEBPACK_IMPORTED_MODULE_1__/* .getChapters */ .Uo(sourceId, mangaId)
    )
;
const useChapter = (sourceId, mangaId, chapterId)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "chapter",
        {
            sourceId,
            mangaId,
            chapterId
        }
    ], ()=>_api_proxy__WEBPACK_IMPORTED_MODULE_1__/* .getChapter */ .bR(sourceId, mangaId, chapterId)
    )
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;