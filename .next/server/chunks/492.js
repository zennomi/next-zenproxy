"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageNotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7836);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9176);
/* harmony import */ var _src_components_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _src_components__WEBPACK_IMPORTED_MODULE_6__, _src_components_animate__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _src_components__WEBPACK_IMPORTED_MODULE_6__, _src_components_animate__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// next

// @mui


// layouts

// components


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: theme.spacing(15, 2.5),
        [theme.breakpoints.up("sm")]: {
            height: "100vh"
        }
    })
);
// ----------------------------------------------------------------------
function PageNotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_animate__WEBPACK_IMPORTED_MODULE_7__/* .MotionContainer */ .NM, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_6__/* .Page */ .T3, {
            title: "404 Page Not Found",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    alignItems: "center",
                    sx: {
                        maxWidth: 480
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                            variants: (0,_src_components_animate__WEBPACK_IMPORTED_MODULE_7__/* .varBounce */ .Wp)().in,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                variant: "h3",
                                paragraph: true,
                                children: "Page Not Found!"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            sx: {
                                color: "text.secondary"
                            },
                            children: "Sorry, we couldn\u2019t find the page you\u2019re looking for. Perhaps you\u2019ve mistyped the URL? Be sure to check your spelling."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                            variants: (0,_src_components_animate__WEBPACK_IMPORTED_MODULE_7__/* .varBounce */ .Wp)().in,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_6__/* .Image */ .Ee, {
                                alt: "404",
                                src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_404.svg",
                                sx: {
                                    maxWidth: 320,
                                    my: {
                                        xs: 6,
                                        sm: 8
                                    }
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                size: "large",
                                variant: "contained",
                                children: "Go to Home"
                            })
                        })
                    ]
                })
            })
        })
    });
};
// ----------------------------------------------------------------------
PageNotFound.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        simpleHeader: true,
        disabledFooter: true,
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;