"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 7836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout),
/* harmony export */   "i": () => (/* binding */ RootStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(929);

// next



//
const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "../src/layouts/index.tsx -> " + "./header/Header"
        ]
    },
    ssr: false
});
const HeaderSimple = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "../src/layouts/index.tsx -> " + "./header/HeaderSimple"
        ]
    },
    ssr: false
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "../src/layouts/index.tsx -> " + "./footer/Footer"
        ]
    },
    ssr: false
});
const FooterSimple = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "../src/layouts/index.tsx -> " + "./footer/FooterSimple"
        ]
    },
    ssr: false
});
// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        paddingTop: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_MOBILE_HEIGHT */ .w_,
        [theme.breakpoints.up("md")]: {
            paddingTop: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_DESKTOP_HEIGHT */ .zj
        }
    })
);
function Layout({ children , transparentHeader , disabledHeader , disabledFooter , simpleHeader , simpleFooter  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            disabledHeader ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: simpleHeader ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderSimple, {
                    transparent: transparentHeader
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                    transparent: transparentHeader
                })
            }),
            children,
            disabledFooter ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: simpleFooter ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterSimple, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            })
        ]
    });
};


/***/ })

};
;