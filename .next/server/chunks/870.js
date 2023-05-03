"use strict";
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getTitles),
/* harmony export */   "Y": () => (/* binding */ getTitle)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(929);


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _config__WEBPACK_IMPORTED_MODULE_1__/* .ROMCOM_API */ .j2
});
const getTitles = async (queryString)=>{
    const { data  } = await axiosInstance({
        url: `/v1/titles?${queryString}`
    });
    return data;
};
const getTitle = async (id)=>{
    const { data  } = await axiosInstance({
        url: `/v1/titles/${id}`
    });
    return data;
};


/***/ }),

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const MARGIN = {
    marginTop: 24,
    marginBottom: 16
};
const RootStyle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        "& a": {
            color: theme.palette.primary.main
        },
        // Heading
        "& h1": {
            ...MARGIN,
            ...theme.typography.h1
        },
        "& h2": {
            ...MARGIN,
            ...theme.typography.h2
        },
        "& h3": {
            ...MARGIN,
            ...theme.typography.h3
        },
        "& h4": {
            ...MARGIN,
            ...theme.typography.h4
        },
        "& h5": {
            ...MARGIN,
            ...theme.typography.h5
        },
        "& h6": {
            ...MARGIN,
            ...theme.typography.h6
        },
        "& p": {
            marginBottom: theme.spacing(2)
        },
        // Code
        "& code": {
            color: theme.palette.secondary.main
        },
        "& pre": {
            margin: theme.spacing(5, 0),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 900 : 800],
            "& > pre": {
                overflow: "auto",
                padding: theme.spacing(3, 3, 0, 3)
            }
        },
        // List
        "& ul, & ol": {
            marginBottom: theme.spacing(2),
            "& li": {
                lineHeight: 2
            }
        }
    })
);
function CustomStyle({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: children
    });
};


/***/ }),

/***/ 4497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTitle),
/* harmony export */   "r": () => (/* binding */ useTitles)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_romcom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useTitles = (queryString, enabled)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "romcom-titles",
        queryString
    ], ()=>(0,_api_romcom__WEBPACK_IMPORTED_MODULE_1__/* .getTitles */ .V)(queryString)
    , {
        keepPreviousData: true,
        staleTime: 5 * 60 * 1000,
        enabled
    })
;
const useTitle = (id)=>(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "romcom-title",
        id
    ], ()=>(0,_api_romcom__WEBPACK_IMPORTED_MODULE_1__/* .getTitle */ .Y)(id)
    )
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;