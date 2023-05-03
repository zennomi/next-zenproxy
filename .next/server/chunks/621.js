"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MangaTileCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// @mui

// components


function MangaTileCard({ manga  }) {
    const { id , title , image , subtitleText , internalURL , externalURL  } = manga;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
                whileHover: "hover",
                variants: (0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varHover */ .U6)(0.95),
                transition: (0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varTranHover */ .BN)(),
                sx: {
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .BgOverlay */ .AU, {
                        sx: {
                            opacity: 0,
                            transition: (theme)=>theme.transitions.create("opacity", {
                                    easing: theme.transitions.easing.sharp,
                                    duration: theme.transitions.duration.short
                                })
                            ,
                            "&:hover": {
                                opacity: 1
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                width: 1,
                                zIndex: 9,
                                bottom: 24,
                                display: "flex",
                                position: "absolute",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                                direction: "row",
                                flexWrap: "wrap",
                                alignItems: "center",
                                children: [
                                    internalURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkButton, {
                                        path: `${internalURL}/newest`,
                                        icon: "eva:eye-outline"
                                    }),
                                    internalURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkButton, {
                                        path: internalURL,
                                        icon: "eva:list-outline"
                                    }),
                                    externalURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkButton, {
                                        path: externalURL,
                                        icon: "eva:external-link-outline",
                                        external: true
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                        variants: (0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varHover */ .U6)(1.15),
                        transition: (0,_animate__WEBPACK_IMPORTED_MODULE_5__/* .varTranHover */ .BN)(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee, {
                            src: image,
                            alt: id,
                            ratio: "3/4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h6",
                sx: {
                    mt: 2.5,
                    mb: 0.5,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .TextMaxLine */ .b3, {
                    line: 2,
                    persistent: true,
                    children: title.text
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "body3",
                sx: {
                    color: "text.disabled",
                    textAlign: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .TextMaxLine */ .b3, {
                    line: 1,
                    persistent: true,
                    children: subtitleText?.text
                })
            })
        ]
    });
};
function LinkButton({ path , icon , external  }) {
    return external ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
        href: path,
        target: "_blank",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            color: "inherit",
            sx: {
                color: (theme)=>theme.palette.primary.main
                ,
                "&:hover": {
                    bgcolor: (theme)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.4)
                }
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                icon: icon,
                sx: {
                    width: {
                        xs: 20,
                        md: 30
                    },
                    height: {
                        xs: 20,
                        md: 30
                    }
                }
            })
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: path,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                color: "inherit",
                sx: (theme)=>({
                        color: theme.palette.primary.main,
                        "&:hover": {
                            bgcolor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.4)
                        }
                    })
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                    icon: icon,
                    sx: {
                        width: {
                            xs: 20,
                            md: 30
                        },
                        height: {
                            xs: 20,
                            md: 30
                        }
                    }
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;