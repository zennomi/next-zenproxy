"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 9878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);

// @mui


// ----------------------------------------------------------------------
const ButtonStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "inherit",
        ...props
    })
)(({ theme  })=>({
        flexShrink: 0,
        color: theme.palette.common.white,
        padding: "5px 12px",
        border: `solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.black, 0.24)}`,
        background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
        "& .MuiButton-startIcon": {
            marginLeft: 0
        }
    })
);
// ----------------------------------------------------------------------
function AppStoreButton({ ...other }) {
    return /*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        spacing: 2,
        ...other,
        children: [
            /*#__PURE__*/ _jsx(ButtonStyle, {
                startIcon: /*#__PURE__*/ _jsx(Box, {
                    component: "img",
                    src: "https://zone-assets-api.vercel.app/assets/icons/app-store/ic_app_store.svg",
                    sx: {
                        width: 28,
                        height: 28
                    }
                }),
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "caption",
                            sx: {
                                opacity: 0.72
                            },
                            children: "Download on the"
                        }),
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "h6",
                            sx: {
                                mt: -0.5
                            },
                            children: "Apple Store"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(ButtonStyle, {
                color: "inherit",
                startIcon: /*#__PURE__*/ _jsx(Box, {
                    component: "img",
                    src: "https://zone-assets-api.vercel.app/assets/icons/app-store/ic_google_play.svg",
                    sx: {
                        width: 28,
                        height: 28
                    }
                }),
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "caption",
                            sx: {
                                opacity: 0.72
                            },
                            children: "Download from"
                        }),
                        /*#__PURE__*/ _jsx(Typography, {
                            variant: "h6",
                            sx: {
                                mt: -0.5
                            },
                            children: "Google Play"
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 5455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BgOverlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5617);

// @mui


// utils

const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    shouldForwardProp: (prop)=>prop !== "direction" && prop !== "startColor" && prop !== "endColor"
})(({ direction , startColor , endColor , theme  })=>({
        top: 0,
        left: 0,
        zIndex: 8,
        width: "100%",
        height: "100%",
        position: "absolute",
        ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(theme).bgGradient({
            direction,
            startColor,
            endColor
        })
    })
);
// ----------------------------------------------------------------------
function BgOverlay({ direction , startColor , endColor , ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.NoSsr, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
            direction: direction,
            startColor: startColor,
            endColor: endColor,
            ...other
        })
    });
};


/***/ }),

/***/ 6866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icons

// next

// @mui

//

function Breadcrumbs({ links , activeLast =false , onDark =false , ...other }) {
    const currentLink = links[links.length - 1].name;
    const listDefault = links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
            link: link,
            onDark: onDark
        }, link.name)
    );
    const listActiveLast = links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: link.name !== currentLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                link: link,
                onDark: onDark
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                noWrap: true,
                variant: "body3",
                sx: {
                    color: "text.disabled",
                    ...onDark && {
                        opacity: 0.48,
                        color: "common.white"
                    }
                },
                children: currentLink || ""
            })
        }, link.name)
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs, {
        separator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            icon: (_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_1___default()),
            sx: {
                width: 16,
                height: 16,
                ...onDark && {
                    opacity: 0.48,
                    color: "common.white"
                }
            }
        }),
        ...other,
        children: activeLast ? listDefault : listActiveLast
    });
};
function LinkItem({ link , onDark  }) {
    const { href ="" , name , icon  } = link;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
            variant: "body3",
            sx: {
                display: "flex",
                alignItems: "center",
                color: "text.primary",
                "& > div": {
                    display: "inherit"
                },
                ...onDark && {
                    color: "common.white"
                }
            },
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        mr: 1,
                        "& svg": {
                            width: 20,
                            height: 20
                        }
                    },
                    children: icon
                }),
                name
            ]
        })
    }, name);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

function CountUpNumber({ threshold =1 , sx , ...other }) {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true
    });
    return /*#__PURE__*/ _jsx(Box, {
        component: "span",
        ref: ref,
        sx: sx,
        children: inView && /*#__PURE__*/ _jsx(CountUp, {
            duration: 1,
            ...other
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2691:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3793);
/* harmony import */ var _iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5562);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_6__]);
_Iconify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icon

// next

// @mui


//


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(()=>({
        width: "100%",
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    })
);
function ErrorScreen({ title , description , ...other }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleReload = ()=>{
        router.reload();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
            spacing: 5,
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    alt: "500",
                    src: "https://zone-assets-api.vercel.app/assets/illustrations/illustration_500.svg",
                    sx: {
                        maxWidth: 240
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            variant: "h3",
                            children: [
                                " ",
                                title || "Failed To Load "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            sx: {
                                color: "text.secondary"
                            },
                            children: description || "Unable to download data please try again"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    variant: "outlined",
                    size: "large",
                    color: "inherit",
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        icon: (_iconify_icons_carbon_rotate_360__WEBPACK_IMPORTED_MODULE_1___default()),
                        sx: {
                            width: 20,
                            height: 20
                        }
                    }),
                    onClick: handleReload,
                    children: "Reload"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FavoriteButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var _iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1779);
/* harmony import */ var _iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icons


// @mui

//

// ----------------------------------------------------------------------
function FavoriteButton({ ...other }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
        color: "error",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            icon: (_iconify_icons_carbon_favorite__WEBPACK_IMPORTED_MODULE_1___default()),
            sx: {
                width: 20,
                height: 20
            }
        }),
        checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            icon: (_iconify_icons_carbon_favorite_filled__WEBPACK_IMPORTED_MODULE_2___default()),
            sx: {
                width: 20,
                height: 20
            }
        }),
        ...other
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function Image({ ratio , disabledEffect =false , effect ="blur" , sx , ...other }) {
    if (ratio) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "span",
            sx: {
                width: 1,
                lineHeight: 0,
                display: "block",
                overflow: "hidden",
                position: "relative",
                pt: getRatio(ratio),
                "& .wrapper": {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    lineHeight: 0,
                    position: "absolute",
                    backgroundSize: "cover !important"
                },
                ...sx
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage,
                wrapperClassName: "wrapper",
                effect: disabledEffect ? undefined : effect,
                placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
                sx: {
                    width: 1,
                    height: 1,
                    objectFit: "cover"
                },
                ...other
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: "span",
        sx: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            "& .wrapper": {
                width: 1,
                height: 1,
                backgroundSize: "cover !important"
            },
            ...sx
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage,
            wrapperClassName: "wrapper",
            effect: disabledEffect ? undefined : effect,
            placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
            sx: {
                width: 1,
                height: 1,
                objectFit: "cover"
            },
            ...other
        })
    });
};
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}


/***/ }),

/***/ 2680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);

// @mui

const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("span")(({ theme , ownerState  })=>{
    const isLight = theme.palette.mode === "light";
    const { color: color1 , variant  } = ownerState;
    const styleFilled = (color)=>({
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].main
        })
    ;
    const styleOutlined = (color)=>({
            color: theme.palette[color].main,
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette[color].main}`
        })
    ;
    const styleGhost = (color)=>({
            color: theme.palette[color][isLight ? "dark" : "light"],
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette[color].main, 0.16)
        })
    ;
    return {
        height: 22,
        minWidth: 22,
        lineHeight: 0,
        borderRadius: 6,
        cursor: "default",
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        color: theme.palette.grey[800],
        fontSize: theme.typography.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.grey[300],
        fontWeight: theme.typography.fontWeightBold,
        ...color1 !== "default" ? {
            ...variant === "filled" && {
                ...styleFilled(color1)
            },
            ...variant === "outlined" && {
                ...styleOutlined(color1)
            },
            ...variant === "ghost" && {
                ...styleGhost(color1)
            }
        } : {
            ...variant === "outlined" && {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[500_32]}`
            },
            ...variant === "ghost" && {
                color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
                backgroundColor: theme.palette.grey[500_16]
            }
        }
    };
});
function Label({ color ="default" , variant ="ghost" , children , sx  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        ownerState: {
            color,
            variant
        },
        sx: sx,
        theme: theme,
        children: children
    });
};


/***/ }),

/***/ 7607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4990);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);



// @mui


// ----------------------------------------------------------------------
function LightboxModalStyles() {
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";
    const ICON_SIZE = 32;
    const ICON_COLOR = theme.palette.primary.main.replace("#", "");
    const getIcon = (icon)=>`url(https://api.iconify.design/carbon/${icon}.svg?color=%23${ICON_COLOR}&width=${ICON_SIZE}&height=${ICON_SIZE})`
    ;
    const Icon = (icon)=>({
            opacity: 1,
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center",
            backgroundImage: `unset`,
            backgroundColor: "transparent",
            transition: theme.transitions.create("opacity"),
            "&:before": {
                display: "block",
                width: ICON_SIZE,
                height: ICON_SIZE,
                content: getIcon(icon)
            },
            "&:hover": {
                opacity: 0.72
            }
        })
    ;
    return /*#__PURE__*/ _jsx(GlobalStyles, {
        styles: {
            "& .ReactModalPortal": {
                "& .ril__outer": {
                    backgroundColor: theme.palette.grey[900]
                },
                // Toolbar
                "& .ril__toolbar": {
                    height: "auto !important",
                    padding: theme.spacing(2, 3),
                    backgroundColor: "transparent"
                },
                "& .ril__toolbarLeftSide": {
                    display: "none"
                },
                "& .ril__toolbarRightSide": {
                    height: "auto !important",
                    padding: 0,
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    "& li": {
                        display: "flex",
                        alignItems: "center"
                    },
                    "& li:first-of-type": {
                        flexGrow: 1
                    },
                    "& li:not(:first-of-type)": {
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        marginLeft: theme.spacing(2)
                    }
                },
                // Button
                "& button:focus": {
                    outline: "none"
                },
                "& .ril__toolbarRightSide button": {
                    width: "100%",
                    height: "100%",
                    "&.ril__zoomInButton": Icon("zoom-in"),
                    "&.ril__zoomOutButton": Icon("zoom-out"),
                    "&.ril__closeButton": Icon("close")
                },
                "& .ril__navButtons": {
                    padding: theme.spacing(3),
                    "&.ril__navButtonPrev": {
                        right: "auto",
                        left: theme.spacing(2),
                        ...Icon(isRTL ? "arrow-right" : "arrow-left")
                    },
                    "&.ril__navButtonNext": {
                        left: "auto",
                        right: theme.spacing(2),
                        ...Icon(isRTL ? "arrow-left" : "arrow-right")
                    }
                }
            }
        }
    });
}
function LightboxModal({ images , photoIndex , setPhotoIndex , isOpen , ...other }) {
    useEffect(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [
        isOpen
    ]);
    const showIndex = /*#__PURE__*/ _jsx(Typography, {
        variant: "subtitle2",
        children: `${photoIndex + 1} / ${images.length}`
    });
    const toolbarButtons = [
        showIndex
    ];
    const customStyles = {
        overlay: {
            zIndex: 9999
        }
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(LightboxModalStyles, {}),
            isOpen && /*#__PURE__*/ _jsx(Lightbox, {
                animationDuration: 240,
                nextSrc: images[(photoIndex + 1) % images.length],
                prevSrc: images[(photoIndex + images.length - 1) % images.length],
                onMovePrevRequest: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length)
                ,
                onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % images.length)
                ,
                toolbarButtons: toolbarButtons,
                reactModalStyle: customStyles,
                ...other
            })
        ]
    });
};


/***/ }),

/***/ 6792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5617);

// @mui


//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(({ theme  })=>({
        ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(theme).bgBlur({
            opacity: 0.24,
            blur: 2
        }),
        top: 0,
        zIndex: 9999,
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
);
function LoadingScreen({ sx  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
                sx: sx,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.LinearProgress, {
                    sx: {
                        width: 1,
                        maxWidth: 320
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    width: "100%",
                    height: "100vh"
                }
            })
        ]
    });
};


/***/ }),

/***/ 1304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);


// next

// @mui


function Logo({ onDark =false , isSimple =false , sx  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const isLight = theme.palette.mode === "light";
    const PRIMARY_MAIN = theme.palette.primary.main;
    const LIGHT_COLOR = theme.palette.common.white;
    const DARK_COLOR = theme.palette.grey[800];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            sx: {
                width: isSimple ? 64 : 75,
                lineHeight: 0,
                cursor: "pointer",
                display: "inline-flex",
                ...sx
            },
            children: isSimple ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                height: "100%",
                fill: "none",
                viewBox: "0 0 512 512",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        cx: "405.143",
                        cy: "338.571",
                        fill: PRIMARY_MAIN,
                        rx: "82.857",
                        ry: "82.857"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: isLight && !onDark ? DARK_COLOR : LIGHT_COLOR,
                        d: "M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg ",
                width: "100%",
                height: "100%",
                fill: "none",
                viewBox: "0 0 812.5 288",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fill: isLight && !onDark ? DARK_COLOR : LIGHT_COLOR,
                                d: "M28.32,265.39v-39.57L109.63,82.2H28.32V29.23h148.92v48.91L102,212.43h75.24v52.96H28.32z"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fill: isLight && !onDark ? DARK_COLOR : LIGHT_COLOR,
                                d: "M203.72,265.39V29.23h131.16V82.2h-73.37v36.76h71.03v52.96h-71.03v40.5h73.37v52.96H203.72z"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fill: isLight && !onDark ? DARK_COLOR : LIGHT_COLOR,
                                d: "M518.86,265.39l-89.88-143.63l-0.78,0.31l1.71,143.31h-57.79V29.23h52.03l91.28,148.45l0.62-0.62l-2.65-147.83 h57.79v236.16H518.86z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: PRIMARY_MAIN,
                                    d: "M681.56,4.12c-1.21,0.64-3,2.31-4.04,3.75c-1.91,2.77-2.71,3.06-3.93,1.56c-1.16-1.33-5.08-3.06-7.16-3.06 c-6.41,0-11.78,5.03-11.84,11.03v2.08l-4.16-0.06c-5.03-0.06-8.14,1.33-10.69,4.68c-1.39,1.79-1.62,2.71-1.85,6.64 c-0.17,4.27-0.29,4.62-1.91,5.83c-7.1,5.2-8.66,8.14-8.61,16c0.06,7.51,2.37,15.71,7.28,25.42l3.06,6.06l0.29,8.26l0.29,8.2 l-1.68,0.87c-2.89,1.56-3.41,3.35-3.41,12.59c0,7.68,0.12,8.49,1.33,10.28c0.75,1.16,2.14,2.25,3.29,2.6 c1.44,0.46,2.08,1.04,2.19,2.02c0.52,4.39,2.66,14.73,3.93,18.83c1.79,6.06,6.41,15.25,9.59,19.06c5.2,6.3,14.44,12.13,22.7,14.32 c1.91,0.46,6.12,1.04,9.42,1.27l5.89,0.35l-6.82,3.29c-11.32,5.55-21.2,12.77-24.95,18.19c-4.56,6.64-3.35,11.03,4.33,15.6 c0.87,0.52,0.52,0.87-2.31,2.31c-5.03,2.6-5.83,3.93-5.66,9.99c0.29,9.36,3.47,23.86,8.32,38.01c1.56,4.51,2.83,8.32,2.83,8.43 c0,0.17-0.75,0.17-1.68,0c-1.39-0.17-1.91-0.75-3.12-3.52c-4.85-10.92-10.8-35.18-10.97-44.48c-0.06-4.74,0.64-6.82,3.29-9.24 l1.44-1.39l-1.39-1.79c-0.75-0.98-1.62-2.89-1.96-4.27c-0.4-1.33-0.81-2.43-1.04-2.43c-0.98,0-8.66,6.12-13.34,10.63 c-9.3,8.95-17.62,21.2-19.52,28.65c-1.62,6.41-0.29,12.01,3.93,16c5.2,5.03,18.08,10.97,30.38,14.04 c25.13,6.3,59.32,5.89,93.63-1.16c26.51-5.43,45-13.75,50.6-22.76c1.56-2.6,1.73-3.29,1.68-7.51 c-0.06-8.55-4.04-18.95-11.03-28.82c-6.87-9.7-19.81-21.14-30.73-27.15l-3.99-2.19l2.02,3.75c6.12,11.61,3.23,20.74-8.32,26.17 c-2.89,1.33-2.95,1.44-2.66,3.35c1.16,7.22-9.93,26.74-28.07,49.56c-4.91,6.12-4.97,6.18-7.39,6.18c-2.37,0-3.18-0.64-1.91-1.44 c0.92-0.58,15.65-20.33,20.04-26.92c7.45-11.15,11.96-20.04,12.71-25.13c0.29-2.02,0.06-2.6-1.5-4.39l-1.73-2.02l4.85-1.85 c11.96-4.51,15.02-10.51,10.4-20.16c-3.58-7.51-8.2-13.4-15.31-19.58c-3.99-3.47-4.39-4.04-5.26-7.28l-0.92-3.52l2.89-2.25 c8.09-6.41,12.77-13.34,16.75-24.78c0.35-0.92,0.52-0.92,2.37-0.17c1.16,0.46,3.58,0.87,5.43,0.87c10.8,0,19.81-11.9,19.06-25.07 c-0.46-7.51-3.18-12.94-7.97-16l-1.39-0.92l0.69-4.56c1.91-12.07,2.37-15.65,3-23.28c0.87-10.11,0.12-19.52-2.02-25.88 c-2.37-6.99-4.68-9.3-11.84-11.73l-4.33-1.44l-0.35-4.04c-0.35-4.68-1.68-7.74-4.45-10.57c-4.68-4.62-11.55-5.66-17.16-2.48 c-4.91,2.77-6.7,2.37-7.45-1.62c-0.87-4.62-4.85-8.26-10.22-9.36c-4.33-0.87-7.57,0.06-10.51,3c-2.14,2.08-4.45,3-4.45,1.68 c0-1.04-3.75-4.79-5.6-5.55C690.05,2.51,684.16,2.74,681.56,4.12z M717.03,57.09c1.44,0.69,3.99,2.6,5.6,4.22 c5.78,5.89,8.43,13.29,9.07,25.53c0.4,8.72,1.96,15.31,4.27,18.66l1.68,2.43l-2.71,0.35c-1.44,0.17-5.08,0.46-7.97,0.69l-5.37,0.4 v-1.85c0-1.04-0.4-2.6-0.87-3.52c-1.68-3.23-2.89-3.47-18.37-3.47c-13.57,0-14.15,0.06-15.71,1.27c-2.14,1.68-3.18,4.39-3.18,8.26 v3.18h-6.01h-6.01l-0.23-4.39c-0.17-4.22-0.29-4.45-2.37-6.35l-2.14-1.96h-11.78h-11.78l-0.4-3.81c-0.29-2.95-0.23-3.99,0.4-4.33 c1.68-1.1,5.03-1.68,9.99-1.68c4.27,0,5.72,0.23,8.2,1.39c2.43,1.16,3.18,1.27,3.93,0.69c1.79-1.33,0.87-3.41-2.31-4.97 c-2.6-1.33-3.58-1.44-9.82-1.44c-3.81,0-7.8,0.23-8.9,0.52l-1.96,0.46l0.35-7.39c0.23-5.49,0.64-8.38,1.5-10.92 c1.44-3.99,4.74-8.66,7.51-10.51c3.58-2.43,5.43-2.6,15.42-1.33c11.67,1.44,14.96,1.44,27.38-0.29 C707.03,55.24,713.33,55.24,717.03,57.09z M764.45,103.42c7.1,2.02,10.22,14.09,5.95,23.51c-1.68,3.81-5.89,8.38-8.66,9.42 c-3.41,1.27-10.17-0.06-11.55-2.31c-0.4-0.69-1.44-0.75-2.48-0.12c-0.4,0.29-1.27,2.43-1.91,4.79 c-3.06,11.21-10.97,21.83-19.41,26.17c-1.04,0.52-2.08,1.39-2.43,1.91c-0.64,1.21,0.17,3.06,1.33,3.06 c1.04,0,3.23,9.13,3.64,15.08c0.35,5.08-0.4,10.17-2.48,16.87c-1.73,5.49-2.25,6.18-6.87,9.18c-5.2,3.41-10.11,4.68-16.98,4.39 c-4.97-0.17-6.12-0.46-9.47-2.08c-6.3-3.12-6.3-3.18-1.21-15.13c3.41-8.14,4.22-10.69,4.27-13.11c0-2.83,0.12-3.06,1.62-3.35 c4.1-0.87,9.65-3,10.17-3.93c0.81-1.27-0.23-3-1.73-2.95c-0.64,0.06-3.29,0.69-6.01,1.44c-6.87,1.91-17.39,1.96-23.68,0 c-17.5-5.37-26.69-17.79-30.96-41.93c-1.27-7.34-2.31-6.64,9.18-6.7c6.12,0,10.69-0.29,11.9-0.69c2.6-0.92,4.16-3.12,4.51-6.41 l0.35-2.66h5.89h5.89l0.4,2.83c0.46,3.41,2.19,5.49,5.31,6.35c2.83,0.81,24.66,0.81,27.44,0.06c3.64-1.04,4.79-2.89,5.14-8.26 l0.29-4.74l13.17-1.16c11.9-1.1,13.29-1.33,13.8-2.31c1.33-2.48,5.72-6.06,8.38-6.87C760.64,102.72,761.73,102.67,764.45,103.42z M654.01,109.13c0,3.64,0.12,4.1,1.5,5.2c0.87,0.69,1.96,1.21,2.54,1.21c0.58,0,1.68-0.52,2.54-1.21c1.39-1.1,1.5-1.56,1.5-5.2 c0-3.99,0-3.99,1.62-3.99c2.71,0,3,0.75,3,8.72c0,9.65,0.69,9.18-12.48,9.18h-9.93l-0.35-3.64c-0.17-1.96-0.46-6.01-0.58-8.95 l-0.35-5.31h5.49h5.49V109.13z M704.26,108.67c0,1.91,0.29,3.99,0.64,4.62c0.87,1.68,3.29,2.43,5.2,1.68 c2.02-0.87,2.83-2.77,2.83-6.64c0-2.95,0.12-3.18,1.33-3.18c2.43,0,2.71,0.92,2.71,9.07c0,6.99-0.12,7.68-1.1,8.26 c-0.69,0.35-6.01,0.58-13.17,0.58c-15.54,0-14.61,0.52-14.61-8.72c0-3.81,0.29-7.45,0.58-8.09c0.58-0.98,1.27-1.1,8.09-1.1h7.51 V108.67z M639.11,116.01c0.17,4.45,0.06,6.41-0.35,6.3c-0.4-0.12-0.69-3.12-0.75-8.26C637.89,104.51,638.76,106.02,639.11,116.01z M688.03,215.76c7.74,5.14,21.6,5.78,30.15,1.39c1.33-0.64,2.48-1.1,2.6-0.92c0.12,0.12-6.24,14.61-14.09,32.23l-14.38,32 l-5.95-0.12c-3.23-0.06-6.06-0.23-6.18-0.35c-0.12-0.17-0.46-5.78-0.81-12.53c-0.64-13.52-0.06-27.38,1.5-35.81 c0.92-4.91,4.27-17.33,4.74-17.33C685.72,214.32,686.82,214.95,688.03,215.76z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: PRIMARY_MAIN,
                                    d: "M701.95,84.7c-2.66,0.46-8.38,2.66-9.36,3.58c-1.27,1.04-1.33,2.6-0.17,3.58c0.64,0.52,1.62,0.35,4.74-0.92 c3.41-1.39,4.68-1.62,9.42-1.62c4.62,0,6.12,0.29,9.3,1.56c4.51,1.85,5.49,1.91,6.3,0.46c0.87-1.73-0.87-3.35-5.49-5.03 C712.75,84.87,705.36,84.07,701.95,84.7z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: PRIMARY_MAIN,
                                    d: "M758.85,112.31c-2.19,0.98-4.62,3.58-5.49,5.78c-0.52,1.44-0.46,1.91,0.46,2.83 c0.92,0.87,1.39,0.98,2.31,0.46c0.64-0.35,1.33-1.16,1.56-1.79c0.58-1.73,3.12-3.47,5.26-3.47c1.33,0,2.14-0.35,2.54-1.1 c0.75-1.44,0.75-1.56-0.35-2.6C764.05,111.33,761.21,111.27,758.85,112.31z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: PRIMARY_MAIN,
                                    d: "M672.03,126.06c-1.96,1.96,0.23,6.93,3.99,8.84c3.18,1.68,8.61,0.81,8.61-1.33c0-1.68-1.21-2.43-3.75-2.43 c-2.89,0-4.91-1.33-4.91-3.18C675.96,125.89,673.42,124.67,672.03,126.06z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: PRIMARY_MAIN,
                                    d: "M670.07,141.94c-1.16,0.29-1.79,1.91-1.27,3.23c0.58,1.62,5.72,4.45,9.18,5.08 c5.2,0.98,10.63-0.06,15.13-2.89c2.66-1.62,3.29-2.54,2.77-4.1c-0.52-1.68-2.31-1.68-4.85,0.06c-4.68,3.12-12.71,3.52-16.46,0.81 C671.63,142.06,670.99,141.71,670.07,141.94z"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Logo));


/***/ }),

/***/ 4044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MangaImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function MangaImage({ disabledEffect =false , effect ="blur" , fullWidth , sx , ...other }) {
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: "span",
        sx: {
            lineHeight: 0,
            display: "block",
            overflow: "hidden",
            minHeight: loaded ? "auto" : "100vh",
            "& .wrapper": {
                width: fullWidth ? 1 : "auto",
                height: 1,
                backgroundSize: "cover !important"
            },
            ...sx
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage,
            wrapperClassName: "wrapper",
            effect: disabledEffect ? undefined : effect,
            placeholderSrc: "https://zone-assets-api.vercel.app/assets/img_placeholder.svg",
            sx: {
                width: 1,
                height: 1,
                objectFit: "cover"
            },
            afterLoad: ()=>setLoaded(true)
            ,
            ...other
        })
    });
};


/***/ }),

/***/ 8312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports RootStyle, default, components */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1075);
/* harmony import */ var prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9961);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1558);
/* harmony import */ var _iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_8__]);
([next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// icons

// next

// @mui


// components

// ----------------------------------------------------------------------
const MARGIN = {
    marginTop: 24,
    marginBottom: 16
};
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)("div", {
    shouldForwardProp: (prop)=>prop !== "firstLetter"
})(({ firstLetter , theme  })=>({
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
        },
        // First Letter
        ...firstLetter && {
            "& > p:first-of-type": {
                "&:first-letter": {
                    float: "left",
                    fontSize: 80,
                    lineHeight: 1,
                    paddingRight: theme.spacing(2),
                    fontWeight: theme.typography.fontWeightBold
                }
            }
        }
    })
);
function Markdown({ content , firstLetter =false  }) {
    return /*#__PURE__*/ _jsx(RootStyle, {
        firstLetter: firstLetter,
        children: /*#__PURE__*/ _jsx(MDXRemote, {
            ...content,
            components: components
        })
    });
};
// ----------------------------------------------------------------------
const components = {
    p: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
            ...props
        })
    ,
    hr: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Divider, {
            ...props
        })
    ,
    a: LinkMDX,
    blockquote: BlockquoteMDX,
    img: ImageMDX,
    code: CodeMDX
};
function LinkMDX(props) {
    return !props.href.includes("http") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: props.href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
            ...props,
            children: props.children
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
        ...props,
        href: props.href,
        target: "_blank",
        rel: "noopener",
        children: props.children
    });
}
// ----------------------------------------------------------------------
function ImageMDX(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .Image */ .Ee, {
        alt: props.alt,
        ratio: "16/9",
        sx: {
            borderRadius: 2,
            my: 5
        },
        ...props
    });
}
// ----------------------------------------------------------------------
function BlockquoteMDX(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
        direction: "row",
        spacing: {
            xs: 3,
            md: 5
        },
        sx: {
            my: 5,
            p: {
                xs: 3,
                md: 5
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .Iconify */ .Ir, {
                icon: (_iconify_icons_carbon_quotes__WEBPACK_IMPORTED_MODULE_4___default()),
                sx: {
                    width: 48,
                    height: 48,
                    color: "text.disabled",
                    opacity: 0.48
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                variant: "h5",
                children: props.children
            })
        ]
    });
}
function CodeMDX(props) {
    const { children , className: className1  } = props;
    const language = className1?.replace(/language-/, "");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((prism_react_renderer__WEBPACK_IMPORTED_MODULE_3___default()), {
        ...prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__.defaultProps,
        code: children,
        theme: (prism_react_renderer_themes_okaidia__WEBPACK_IMPORTED_MODULE_1___default()),
        language: language,
        children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: className,
                style: {
                    ...style,
                    backgroundColor: "transparent"
                },
                children: tokens.map((line, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ...getLineProps({
                            line,
                            key: i
                        }),
                        children: line.map((token, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                ...getTokenProps({
                                    token,
                                    key
                                })
                            }, key)
                        )
                    }, i)
                )
            })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2893);
/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8538);
/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_8__]);
_components__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// icons


// next


// @mui


// components

const ListSubheaderStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListSubheader, {
        disableSticky: true,
        disableGutters: true,
        ...props
    })
)(({ theme  })=>({
        ...theme.typography.overline,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        color: theme.palette.text.primary
    })
);
const ListItemStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemButton, {
    shouldForwardProp: (prop)=>prop !== "activeRoot" && prop !== "activeSub"
})(({ activeRoot , activeSub , theme  })=>({
        ...theme.typography.body2,
        height: 48,
        position: "relative",
        textTransform: "capitalize",
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(2.5),
        color: theme.palette.text.secondary,
        ...activeRoot && {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            "&:before": {
                top: 0,
                right: 0,
                width: 3,
                bottom: 0,
                content: "''",
                display: "block",
                position: "absolute",
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                backgroundColor: theme.palette.primary.main
            }
        },
        ...activeSub && {
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium
        }
    })
);
const ListItemIconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemIcon)({
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
        width: 22,
        height: 22
    }
});
const ListSubItemIconStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active , theme  })=>({
        width: 4,
        height: 4,
        display: "flex",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create("transform"),
        ...active && {
            transform: "scale(2)",
            backgroundColor: theme.palette.primary.main
        }
    })
);
function NavSection({ navConfig , ...other }) {
    return /*#__PURE__*/ _jsx(Box, {
        ...other,
        children: navConfig.map((list)=>/*#__PURE__*/ _jsxs(List, {
                disablePadding: true,
                sx: {
                    px: 0
                },
                children: [
                    /*#__PURE__*/ _jsx(ListSubheaderStyle, {
                        children: list.subheader
                    }),
                    list.items.map((item)=>/*#__PURE__*/ _jsx(NavSectionItem, {
                            item: item
                        }, item.title)
                    )
                ]
            }, list.subheader)
        )
    });
};
function NavSectionItem({ item: item1  }) {
    const { pathname , asPath  } = useRouter();
    const { title: title1 , path: path1 , icon , info , children  } = item1;
    const isActiveRoot = pathname === path1 || asPath === path1;
    const { 0: open , 1: setOpen  } = useState(isActiveRoot);
    const handleOpen = ()=>{
        setOpen(!open);
    };
    if (children) {
        return /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsxs(ListItemStyle, {
                    onClick: handleOpen,
                    activeRoot: isActiveRoot,
                    children: [
                        icon && /*#__PURE__*/ _jsx(ListItemIconStyle, {
                            children: icon
                        }),
                        /*#__PURE__*/ _jsx(ListItemText, {
                            disableTypography: true,
                            primary: title1
                        }),
                        info && info,
                        /*#__PURE__*/ _jsx(Iconify, {
                            icon: open ? chevronDown : chevronRight,
                            sx: {
                                width: 16,
                                height: 16,
                                ml: 1
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(Collapse, {
                    in: open,
                    timeout: "auto",
                    unmountOnExit: true,
                    children: /*#__PURE__*/ _jsx(List, {
                        component: "div",
                        disablePadding: true,
                        children: children.map((item)=>{
                            const { title , path  } = item;
                            const isActiveSub = pathname === path || asPath === path;
                            return /*#__PURE__*/ _jsx(NextLink, {
                                href: path,
                                passHref: true,
                                children: /*#__PURE__*/ _jsxs(ListItemStyle, {
                                    activeSub: isActiveSub,
                                    children: [
                                        /*#__PURE__*/ _jsx(ListItemIconStyle, {
                                            children: /*#__PURE__*/ _jsx(ListSubItemIconStyle, {
                                                component: "span",
                                                active: isActiveSub
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(ListItemText, {
                                            disableTypography: true,
                                            primary: title
                                        })
                                    ]
                                })
                            }, title);
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ _jsx(NextLink, {
        href: path1,
        passHref: true,
        children: /*#__PURE__*/ _jsxs(ListItemStyle, {
            activeRoot: isActiveRoot,
            children: [
                icon && /*#__PURE__*/ _jsx(ListItemIconStyle, {
                    children: icon
                }),
                /*#__PURE__*/ _jsx(ListItemText, {
                    disableTypography: true,
                    primary: title1
                }),
                info && info
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__, _animate__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_3__, _animate__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui

// components


function ProductCard({ product  }) {
    const { id , titles , images  } = product;
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                component: m.div,
                whileHover: "hover",
                variants: varHover(0.95),
                transition: varTranHover(),
                sx: {
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ _jsx(BgOverlay, {
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
                        children: /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                width: 1,
                                zIndex: 9,
                                bottom: 24,
                                display: "flex",
                                position: "absolute",
                                justifyContent: "center"
                            }
                        })
                    }),
                    /*#__PURE__*/ _jsx(m.div, {
                        variants: varHover(1.15),
                        transition: varTranHover(),
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: images[0],
                            alt: id,
                            ratio: "3/4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Typography, {
                variant: "h6",
                sx: {
                    mt: 2.5,
                    mb: 0.5,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ _jsx(TextMaxLine, {
                    line: 2,
                    persistent: true,
                    children: titles[0]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RatingLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7140);
/* harmony import */ var _iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1674);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__]);
_Iconify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icons

// @mui

// utils

//

function RatingLabel({ reviews , ratings , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        spacing: 0.5,
        direction: "row",
        alignItems: "center",
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: (_iconify_icons_carbon_star_filled__WEBPACK_IMPORTED_MODULE_1___default()),
                sx: {
                    width: 20,
                    height: 20,
                    color: "warning.main"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                children: Number.isInteger(ratings) ? `${ratings}.0` : ratings
            }),
            reviews && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                variant: "body2",
                sx: {
                    color: "text.secondary"
                },
                children: [
                    "(",
                    (0,_utils_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* .fShortenNumber */ .v1)(reviews),
                    " reviews)"
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);


// @mui


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(()=>({
        flexGrow: 1,
        height: "100%",
        overflow: "hidden"
    })
);
const SimpleBarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((simplebar_react__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme  })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&:before": {
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.grey[600], 0.48)
            },
            "&.simplebar-visible:before": {
                opacity: 1
            }
        },
        "& .simplebar-track.simplebar-vertical": {
            width: 10
        },
        "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
            height: 6
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    })
);
function Scrollbar({ children , sx , ...other }) {
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            sx: {
                overflowX: "auto",
                ...sx
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SimpleBarStyle, {
            timeout: 500,
            clickOnTrack: false,
            sx: sx,
            ...other,
            children: children
        })
    });
};


/***/ }),

/***/ 948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6192);
/* harmony import */ var _iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_3__]);
_Iconify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

// ----------------------------------------------------------------------
function SearchInput({ sx , ...other }) {
    return /*#__PURE__*/ _jsx(FilledInput, {
        fullWidth: true,
        startAdornment: /*#__PURE__*/ _jsx(InputAdornment, {
            position: "start",
            children: /*#__PURE__*/ _jsx(Iconify, {
                icon: searchIcon,
                sx: {
                    width: 24,
                    height: 24,
                    color: "text.disabled"
                }
            })
        }),
        placeholder: "Search...",
        sx: {
            "& .MuiFilledInput-input": {
                py: "18px"
            },
            ...sx
        },
        ...other
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function SearchNotFound({ keyword ="" , ...other }) {
    return /*#__PURE__*/ _jsxs(Paper, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(Typography, {
                gutterBottom: true,
                align: "center",
                variant: "subtitle1",
                children: "Not Found"
            }),
            /*#__PURE__*/ _jsxs(Typography, {
                variant: "body2",
                align: "center",
                children: [
                    "No results found for",
                    /*#__PURE__*/ _jsx("strong", {
                        children: ` ${keyword} `
                    }),
                    ".",
                    /*#__PURE__*/ _jsx("br", {}),
                    " Try checking for typos or using complete words."
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5086);
/* harmony import */ var _iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9410);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4602);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4513);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4612);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_8__, _animate__WEBPACK_IMPORTED_MODULE_9__]);
([___WEBPACK_IMPORTED_MODULE_8__, _animate__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//icon





// @mui

// components


function ShareButton({ sx  }) {
    const { 0: open , 1: setOpen  } = useState(null);
    const handleOpen = (event)=>{
        setOpen(event.currentTarget);
    };
    const handleClose = ()=>{
        setOpen(null);
    };
    const SOCIALS = [
        {
            name: "FaceBook",
            icon: logoFacebook,
            socialColor: "#1877F2"
        },
        {
            name: "Instagram",
            icon: logoInstagram,
            socialColor: "#E02D69"
        },
        {
            name: "Linkedin",
            icon: logoLinkedin,
            socialColor: "#007EBB"
        },
        {
            name: "Twitter",
            icon: logoTwitter,
            socialColor: "#00AAEC"
        }, 
    ];
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(IconButtonAnimate, {
                onClick: handleOpen,
                sx: {
                    ...open && {
                        color: "primary.main"
                    },
                    ...sx
                },
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: shareIcon,
                    sx: {
                        width: 20,
                        height: 20
                    }
                })
            }),
            /*#__PURE__*/ _jsx(Popover, {
                open: Boolean(open),
                onClose: handleClose,
                anchorEl: open,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                },
                PaperProps: {
                    sx: {
                        width: 220,
                        p: 1
                    }
                },
                children: SOCIALS.map((option)=>/*#__PURE__*/ _jsxs(MenuItem, {
                        onClick: handleClose,
                        sx: {
                            typography: "body3"
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Iconify, {
                                icon: option.icon,
                                sx: {
                                    width: 24,
                                    height: 24,
                                    mr: 2,
                                    color: option.socialColor
                                }
                            }),
                            "Share via ",
                            option.name
                        ]
                    }, option.name)
                )
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialsButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9410);
/* harmony import */ var _iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4602);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4612);
/* harmony import */ var _iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_7__]);
_Iconify__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icons




// @mui


//

function SocialsButton({ initialColor =false , simple =true , links ={} , sx , ...other }) {
    const SOCIALS = [
        {
            name: "FaceBook",
            icon: (_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_2___default()),
            socialColor: "#1877F2",
            path: links.facebook || "#facebook-link"
        },
        {
            name: "Instagram",
            icon: (_iconify_icons_carbon_logo_instagram__WEBPACK_IMPORTED_MODULE_4___default()),
            socialColor: "#E02D69",
            path: links.instagram || "#instagram-link"
        },
        {
            name: "Linkedin",
            icon: (_iconify_icons_carbon_logo_linkedin__WEBPACK_IMPORTED_MODULE_1___default()),
            socialColor: "#007EBB",
            path: links.linkedin || "#linkedin-link"
        },
        {
            name: "Twitter",
            icon: (_iconify_icons_carbon_logo_twitter__WEBPACK_IMPORTED_MODULE_3___default()),
            socialColor: "#00AAEC",
            path: links.twitter || "#twitter-link"
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
        direction: "row",
        flexWrap: "wrap",
        alignItems: "center",
        children: SOCIALS.map((social)=>{
            const { name , icon , path , socialColor  } = social;
            return simple ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Link, {
                href: path,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                    color: "inherit",
                    sx: {
                        ...initialColor && {
                            color: socialColor,
                            "&:hover": {
                                bgcolor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(socialColor, 0.08)
                            }
                        },
                        ...sx
                    },
                    ...other,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        icon: icon,
                        sx: {
                            width: 20,
                            height: 20
                        }
                    })
                })
            }, name) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {
                href: path,
                color: "inherit",
                variant: "outlined",
                size: "small",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    icon: icon
                }),
                sx: {
                    m: 0.5,
                    flexShrink: 0,
                    ...initialColor && {
                        color: socialColor,
                        borderColor: socialColor,
                        "&:hover": {
                            borderColor: socialColor,
                            bgcolor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(socialColor, 0.08)
                        }
                    },
                    ...sx
                },
                ...other,
                children: name
            }, name);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SvgIconStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


function SvgIconStyle({ src , sx  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: "span",
        sx: {
            width: 24,
            height: 24,
            display: "inline-block",
            bgcolor: "currentColor",
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx
        }
    });
};


/***/ }),

/***/ 8704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextIconLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);

// @mui

function TextIconLabel({ icon , value , endIcon =false , sx , ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        alignItems: "center",
        sx: {
            typography: "body2",
            ...sx
        },
        ...other,
        children: [
            !endIcon && icon,
            value,
            endIcon && icon
        ]
    });
};


/***/ }),

/***/ 3598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getFontValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4603);


// @mui

// utils

const TextMaxLine = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ asLink , variant ="body1" , line =2 , persistent =false , children , sx , ...other }, ref)=>{
    const { lineHeight  } = (0,_utils_getFontValue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(variant);
    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
        ...persistent && {
            height: lineHeight * line
        },
        ...sx
    };
    if (asLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
            color: "inherit",
            ref: ref,
            variant: variant,
            sx: {
                ...style
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        ref: ref,
        variant: variant,
        sx: {
            ...style
        },
        ...other,
        children: children
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextMaxLine);


/***/ }),

/***/ 5515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

function DialogAnimate({ open =false , variants , onClose , children , sx , ...other }) {
    return /*#__PURE__*/ _jsx(AnimatePresence, {
        children: open && /*#__PURE__*/ _jsx(Dialog, {
            fullWidth: true,
            maxWidth: "xs",
            open: open,
            onClose: onClose,
            PaperComponent: (props)=>/*#__PURE__*/ _jsxs(Box, {
                    component: m.div,
                    ...variants || varFade({
                        distance: 120,
                        durationIn: 0.32,
                        durationOut: 0.24,
                        easeIn: "easeInOut"
                    }).inUp,
                    sx: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            onClick: onClose,
                            sx: {
                                width: "100%",
                                height: "100%",
                                position: "fixed"
                            }
                        }),
                        /*#__PURE__*/ _jsx(Paper, {
                            sx: sx,
                            ...props,
                            children: props.children
                        })
                    ]
                })
            ,
            ...other,
            children: children
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3006:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui


const FabButtonAnimate = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef(({ color ="primary" , size ="large" , children , sx , sxWrap , ...other }, ref)=>{
    const theme = useTheme();
    if (color === "default" || color === "inherit" || color === "primary" || color === "secondary") {
        return /*#__PURE__*/ _jsx(AnimateWrap, {
            size: size,
            sxWrap: sxWrap,
            children: /*#__PURE__*/ _jsx(Fab, {
                ref: ref,
                size: size,
                color: color,
                sx: sx,
                ...other,
                children: children
            })
        });
    }
    return /*#__PURE__*/ _jsx(AnimateWrap, {
        size: size,
        sxWrap: sxWrap,
        children: /*#__PURE__*/ _jsx(Fab, {
            ref: ref,
            size: size,
            sx: {
                boxShadow: theme.customShadows[color],
                color: theme.palette[color].contrastText,
                bgcolor: theme.palette[color].main,
                "&:hover": {
                    bgcolor: theme.palette[color].dark
                },
                ...sx
            },
            ...other,
            children: children
        })
    });
})));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FabButtonAnimate)));
const varSmall = {
    hover: {
        scale: 1.07
    },
    tap: {
        scale: 0.97
    }
};
const varMedium = {
    hover: {
        scale: 1.06
    },
    tap: {
        scale: 0.98
    }
};
const varLarge = {
    hover: {
        scale: 1.05
    },
    tap: {
        scale: 0.99
    }
};
function AnimateWrap({ size , children , sxWrap  }) {
    const isSmall = size === "small";
    const isLarge = size === "large";
    return /*#__PURE__*/ _jsx(Box, {
        component: m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: "inline-flex",
            ...sxWrap
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

const IconButtonAnimate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ children , size ="medium" , sxWrap , ...other }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimateWrap, {
        size: size,
        sxWrap: sxWrap,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
            size: size,
            ref: ref,
            ...other,
            children: children
        })
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconButtonAnimate);
const varSmall = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 0.95
    }
};
const varMedium = {
    hover: {
        scale: 1.09
    },
    tap: {
        scale: 0.97
    }
};
const varLarge = {
    hover: {
        scale: 1.08
    },
    tap: {
        scale: 0.99
    }
};
function AnimateWrap({ size , children , sxWrap  }) {
    const isSmall = size === "small";
    const isLarge = size === "large";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
        whileTap: "tap",
        whileHover: "hover",
        variants: isSmall && varSmall || isLarge && varLarge || varMedium,
        sx: {
            display: "inline-flex",
            ...sxWrap
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

function MotionContainer({ animate , action =false , children , ...other }) {
    if (action) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
            initial: false,
            animate: animate ? "animate" : "exit",
            variants: (0,_variants__WEBPACK_IMPORTED_MODULE_3__/* .varContainer */ .Ew)(),
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: (0,_variants__WEBPACK_IMPORTED_MODULE_3__/* .varContainer */ .Ew)(),
        ...other,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionLazyContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const loadFeatures = ()=>__webpack_require__.e(/* import() */ 848).then(__webpack_require__.bind(__webpack_require__, 8848)).then((res)=>res.default
    )
;
function MotionLazyContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.LazyMotion, {
        strict: true,
        features: loadFeatures,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MotionViewport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1832);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui

// hooks

//

function MotionViewport({ children , disableAnimatedMobile =true , ...other }) {
    const isDesktop = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("up", "sm");
    if (!isDesktop && disableAnimatedMobile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
        initial: "initial",
        whileInView: "animate",
        viewport: {
            once: true,
            amount: 0.5
        },
        variants: (0,_animate__WEBPACK_IMPORTED_MODULE_4__/* .varContainer */ .Ew)(),
        ...other,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui

//

function TextAnimate({ text , variants , sx , ...other }) {
    return /*#__PURE__*/ _jsx(Box, {
        component: m.h1,
        sx: {
            typography: "h1",
            overflow: "hidden",
            display: "inline-flex",
            ...sx
        },
        ...other,
        children: text.split("").map((letter, index)=>/*#__PURE__*/ _jsx(m.span, {
                variants: variants || varFade().inUp,
                children: letter
            }, index)
        )
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.BN),
/* harmony export */   "DG": () => (/* reexport safe */ _MotionViewport__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "EU": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.EU),
/* harmony export */   "Ew": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.Ew),
/* harmony export */   "NM": () => (/* reexport safe */ _MotionContainer__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "U6": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.U6),
/* harmony export */   "Wp": () => (/* reexport safe */ _variants__WEBPACK_IMPORTED_MODULE_0__.Wp),
/* harmony export */   "w_": () => (/* reexport safe */ _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6118);
/* harmony import */ var _DialogAnimate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5515);
/* harmony import */ var _TextAnimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4140);
/* harmony import */ var _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3006);
/* harmony import */ var _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7251);
/* harmony import */ var _MotionViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2159);
/* harmony import */ var _MotionContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(540);
/* harmony import */ var _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DialogAnimate__WEBPACK_IMPORTED_MODULE_1__, _TextAnimate__WEBPACK_IMPORTED_MODULE_2__, _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__, _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__, _MotionViewport__WEBPACK_IMPORTED_MODULE_5__, _MotionContainer__WEBPACK_IMPORTED_MODULE_6__, _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__]);
([_DialogAnimate__WEBPACK_IMPORTED_MODULE_1__, _TextAnimate__WEBPACK_IMPORTED_MODULE_2__, _FabButtonAnimate__WEBPACK_IMPORTED_MODULE_3__, _IconButtonAnimate__WEBPACK_IMPORTED_MODULE_4__, _MotionViewport__WEBPACK_IMPORTED_MODULE_5__, _MotionContainer__WEBPACK_IMPORTED_MODULE_6__, _MotionLazyContainer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ----------------------------------------------------------------------









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wp": () => (/* reexport */ varBounce),
  "Ew": () => (/* reexport */ varContainer),
  "EU": () => (/* reexport */ varFade),
  "U6": () => (/* reexport */ varHover),
  "BN": () => (/* reexport */ varTranHover)
});

// UNUSED EXPORTS: TRANSITION, varBgColor, varBgKenburns, varBgPan, varFlip, varPath, varRotate, varScale, varSlide, varTranEnter, varTranExit, varZoom

;// CONCATENATED MODULE: ./src/components/animate/variants/path.ts
// ----------------------------------------------------------------------
const TRANSITION = {
    duration: 2,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const varPath = {
    animate: {
        fillOpacity: [
            0,
            0,
            1
        ],
        pathLength: [
            1,
            0.4,
            0
        ],
        transition: TRANSITION
    }
};

;// CONCATENATED MODULE: ./src/components/animate/variants/transition.ts
// ----------------------------------------------------------------------
const varTranHover = (props)=>{
    const duration = props?.duration || 0.32;
    const ease = props?.ease || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranEnter = (props)=>{
    const duration = props?.durationIn || 0.64;
    const ease = props?.easeIn || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranExit = (props)=>{
    const duration = props?.durationOut || 0.48;
    const ease = props?.easeOut || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/fade.ts
//

// ----------------------------------------------------------------------
const varFade = (props)=>{
    const distance = props?.distance || 120;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: varTranEnter
            },
            exit: {
                opacity: 0,
                transition: varTranExit
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/bounce.ts
//

// ----------------------------------------------------------------------
const varBounce = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            animate: {
                scale: [
                    0.3,
                    1.1,
                    0.9,
                    1.03,
                    0.97,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        inUp: {
            animate: {
                y: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: {
                    ...varTranEnter({
                        durationIn,
                        easeIn
                    })
                }
            },
            exit: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            animate: {
                y: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            animate: {
                x: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            animate: {
                x: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            animate: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outUp: {
            animate: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outDown: {
            animate: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outLeft: {
            animate: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outRight: {
            animate: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/actions.ts
// ----------------------------------------------------------------------
const varHover = (scale)=>({
        hover: {
            scale: scale || 1.1
        }
    })
;

;// CONCATENATED MODULE: ./src/components/animate/variants/container.ts
const varContainer = (props)=>{
    const staggerIn = props?.staggerIn || 0.05;
    const delayIn = props?.staggerIn || 0.05;
    const staggerOut = props?.staggerIn || 0.05;
    return {
        animate: {
            transition: {
                staggerChildren: staggerIn,
                delayChildren: delayIn
            }
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/index.ts














/***/ }),

/***/ 2542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarouselArrows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6342);
/* harmony import */ var _iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// icons

// @mui


//


// ----------------------------------------------------------------------
const BUTTON_SIZE = 40;
const ArrowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_)(({ theme  })=>({
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        cursor: "pointer",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            color: theme.palette.text.primary
        }
    })
);
function CarouselArrows({ customIcon , onNext , onPrevious , children , ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isRTL = theme.direction === "rtl";
    const style = {
        position: "absolute",
        mt: -2.5,
        top: "50%",
        zIndex: 9
    };
    if (children) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            ...other,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    className: "arrow left",
                    sx: {
                        ...style,
                        left: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                        onClick: onPrevious,
                        children: leftIcon(customIcon, isRTL)
                    })
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    className: "arrow right",
                    sx: {
                        ...style,
                        right: 0
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                        onClick: onNext,
                        children: rightIcon(customIcon, isRTL)
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        spacing: 2,
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                onClick: onPrevious,
                children: leftIcon(customIcon, isRTL)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowStyle, {
                onClick: onNext,
                children: rightIcon(customIcon, isRTL)
            })
        ]
    });
};
// ----------------------------------------------------------------------
const leftIcon = (customIcon, isRTL)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        icon: customIcon ? customIcon : (_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1___default()),
        sx: {
            width: 24,
            height: 24,
            transform: " scaleX(-1)",
            ...isRTL && {
                transform: " scaleX(1)"
            }
        }
    })
;
const rightIcon = (customIcon, isRTL)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        icon: customIcon ? customIcon : (_iconify_icons_carbon_direction_straight_right__WEBPACK_IMPORTED_MODULE_1___default()),
        sx: {
            width: 24,
            height: 24,
            ...isRTL && {
                transform: " scaleX(-1)"
            }
        }
    })
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6222);
/* harmony import */ var _iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_caret_right__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_4__, _animate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui


//


// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        zIndex: 9,
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.grey[900], 0.48)
    })
);
const ArrowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_animate__WEBPACK_IMPORTED_MODULE_5__/* .IconButtonAnimate */ .w_)(({ theme  })=>({
        padding: 6,
        opacity: 0.48,
        color: theme.palette.common.white,
        "&:hover": {
            opacity: 1
        }
    })
);
function CarouselArrowsIndex({ customIcon , index , total , onNext , onPrevious , ...other }) {
    const theme = useTheme();
    const isRTL = theme.direction === "rtl";
    return /*#__PURE__*/ _jsxs(RootStyle, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(ArrowStyle, {
                size: "small",
                onClick: onPrevious,
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: customIcon ? customIcon : caretRight,
                    sx: {
                        width: 20,
                        height: 20,
                        transform: " scaleX(-1)",
                        ...isRTL && {
                            transform: " scaleX(1)"
                        }
                    }
                })
            }),
            /*#__PURE__*/ _jsxs(Typography, {
                variant: "subtitle2",
                children: [
                    index + 1,
                    "/",
                    total
                ]
            }),
            /*#__PURE__*/ _jsx(ArrowStyle, {
                size: "small",
                onClick: onNext,
                children: /*#__PURE__*/ _jsx(Iconify, {
                    icon: customIcon ? customIcon : caretRight,
                    sx: {
                        width: 20,
                        height: 20,
                        ...isRTL && {
                            transform: " scaleX(-1)"
                        }
                    }
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarouselDots)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);

// @mui


const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    shouldForwardProp: (prop)=>prop !== "rounded"
})(({ rounded  })=>({
        display: "flex",
        listStyle: "none",
        alignItems: "center",
        justifyContent: "center",
        "& li": {
            width: 18,
            height: 18,
            opacity: 0.32,
            cursor: "pointer"
        },
        "& li.slick-active": {
            opacity: 1,
            ...rounded && {
                "& .dotActive": {
                    width: 16,
                    borderRadius: 6
                }
            }
        }
    })
);
const DotWrapStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("div")(()=>({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
);
const DotStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)("span")(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        })
    })
);
function CarouselDots(props) {
    const color = props?.color;
    const rounded = props?.rounded || false;
    return {
        appendDots: (dots)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
                    rounded: rounded,
                    component: "ul",
                    ...props,
                    children: dots
                })
            })
        ,
        customPaging: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DotWrapStyle, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DotStyle, {
                    className: "dotActive",
                    sx: {
                        bgcolor: color || "primary.main"
                    }
                })
            })
    };
};


/***/ }),

/***/ 3881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* reexport safe */ _CarouselDots__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "i5": () => (/* reexport safe */ _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _CarouselDots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _CarouselArrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2542);
/* harmony import */ var _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CarouselArrows__WEBPACK_IMPORTED_MODULE_1__, _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__]);
([_CarouselArrows__WEBPACK_IMPORTED_MODULE_1__, _CarouselArrowsIndex__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_3__.A0),
/* harmony export */   "AU": () => (/* reexport safe */ _BgOverlay__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "Cs": () => (/* reexport safe */ _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   "Ee": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "Ij": () => (/* reexport safe */ _SocialsButton__WEBPACK_IMPORTED_MODULE_23__.Z),
/* harmony export */   "Ir": () => (/* reexport safe */ _Iconify__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "Lh": () => (/* reexport safe */ _SvgIconStyle__WEBPACK_IMPORTED_MODULE_20__.Z),
/* harmony export */   "Oo": () => (/* reexport safe */ _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__.Z),
/* harmony export */   "T3": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "TR": () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "_6": () => (/* reexport safe */ _FavoriteButton__WEBPACK_IMPORTED_MODULE_27__.Z),
/* harmony export */   "__": () => (/* reexport safe */ _Label__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "a_": () => (/* reexport safe */ _LoadingScreen__WEBPACK_IMPORTED_MODULE_22__.Z),
/* harmony export */   "b3": () => (/* reexport safe */ _TextMaxLine__WEBPACK_IMPORTED_MODULE_19__.Z),
/* harmony export */   "fD": () => (/* reexport safe */ _TextIconLabel__WEBPACK_IMPORTED_MODULE_24__.Z),
/* harmony export */   "i5": () => (/* reexport safe */ _carousel__WEBPACK_IMPORTED_MODULE_3__.i5),
/* harmony export */   "u2": () => (/* reexport safe */ _skeleton__WEBPACK_IMPORTED_MODULE_4__.u2),
/* harmony export */   "w1": () => (/* reexport safe */ _RatingLabel__WEBPACK_IMPORTED_MODULE_15__.Z),
/* harmony export */   "w_": () => (/* reexport safe */ _animate__WEBPACK_IMPORTED_MODULE_2__.w_),
/* harmony export */   "xI": () => (/* reexport safe */ _MangaImage__WEBPACK_IMPORTED_MODULE_29__.Z)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7019);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5850);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3011);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3881);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8082);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1304);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5656);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5562);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2680);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7225);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8312);
/* harmony import */ var _BgOverlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5455);
/* harmony import */ var _Scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8201);
/* harmony import */ var _NavSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5655);
/* harmony import */ var _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2691);
/* harmony import */ var _RatingLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8200);
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(948);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9293);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6866);
/* harmony import */ var _TextMaxLine__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3598);
/* harmony import */ var _SvgIconStyle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3534);
/* harmony import */ var _LightboxModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7607);
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6792);
/* harmony import */ var _SocialsButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6053);
/* harmony import */ var _TextIconLabel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8704);
/* harmony import */ var _CountUpNumber__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(413);
/* harmony import */ var _AppStoreButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9878);
/* harmony import */ var _FavoriteButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(168);
/* harmony import */ var _SearchNotFound__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(3055);
/* harmony import */ var _MangaImage__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(4044);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(1720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_map__WEBPACK_IMPORTED_MODULE_0__, _player__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_2__, _carousel__WEBPACK_IMPORTED_MODULE_3__, _skeleton__WEBPACK_IMPORTED_MODULE_4__, _Iconify__WEBPACK_IMPORTED_MODULE_9__, _Markdown__WEBPACK_IMPORTED_MODULE_10__, _NavSection__WEBPACK_IMPORTED_MODULE_13__, _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__, _RatingLabel__WEBPACK_IMPORTED_MODULE_15__, _SearchInput__WEBPACK_IMPORTED_MODULE_16__, _ShareButton__WEBPACK_IMPORTED_MODULE_17__, _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__, _SocialsButton__WEBPACK_IMPORTED_MODULE_23__, _CountUpNumber__WEBPACK_IMPORTED_MODULE_25__, _FavoriteButton__WEBPACK_IMPORTED_MODULE_27__, _ProductCard__WEBPACK_IMPORTED_MODULE_30__]);
([_map__WEBPACK_IMPORTED_MODULE_0__, _player__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_2__, _carousel__WEBPACK_IMPORTED_MODULE_3__, _skeleton__WEBPACK_IMPORTED_MODULE_4__, _Iconify__WEBPACK_IMPORTED_MODULE_9__, _Markdown__WEBPACK_IMPORTED_MODULE_10__, _NavSection__WEBPACK_IMPORTED_MODULE_13__, _ErrorScreen__WEBPACK_IMPORTED_MODULE_14__, _RatingLabel__WEBPACK_IMPORTED_MODULE_15__, _SearchInput__WEBPACK_IMPORTED_MODULE_16__, _ShareButton__WEBPACK_IMPORTED_MODULE_17__, _Breadcrumbs__WEBPACK_IMPORTED_MODULE_18__, _SocialsButton__WEBPACK_IMPORTED_MODULE_23__, _CountUpNumber__WEBPACK_IMPORTED_MODULE_25__, _FavoriteButton__WEBPACK_IMPORTED_MODULE_27__, _ProductCard__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8557);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(929);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4310);
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4024);
/* harmony import */ var _MapStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9862);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Popup__WEBPACK_IMPORTED_MODULE_5__]);
_Popup__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// @mui

// config

//



function ContactMap({ offices , sx , ...other }) {
    const { 0: tooltip , 1: setTooltip  } = useState(null);
    const { 0: centerMap , 1: setCenterMap  } = useState({
        lat: offices[0].latlng[0],
        lng: offices[0].latlng[1]
    });
    const handleOpen = (lat, lng, office)=>{
        setCenterMap({
            ...centerMap,
            lat: lat - 32,
            lng
        });
        setTooltip(office);
    };
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            height: 480,
            overflow: "hidden",
            ...sx
        },
        ...other,
        children: /*#__PURE__*/ _jsxs(GoogleMapReact, {
            bootstrapURLKeys: {
                key: GOOGLE_API
            },
            center: centerMap,
            zoom: 2,
            options: {
                styles: MapStyle,
                disableDefaultUI: true
            },
            children: [
                offices.map((office, index)=>/*#__PURE__*/ _jsx(Marker, {
                        lat: office.latlng[0],
                        lng: office.latlng[1],
                        onOpen: ()=>handleOpen(office.latlng[0], office.latlng[1], office)
                    }, index)
                ),
                tooltip && /*#__PURE__*/ _jsx(Popup, {
                    lat: tooltip.latlng[0],
                    lng: tooltip.latlng[1],
                    office: tooltip,
                    onClose: ()=>setTooltip(null)
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9862:
/***/ (() => {

const FlatPaleTheme = [
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#6195a0"
            }
        ]
    },
    {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
            {
                lightness: "0"
            },
            {
                saturation: "0"
            },
            {
                color: "#f5f5f2"
            },
            {
                gamma: "1"
            }
        ]
    },
    {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
            {
                lightness: "-3"
            },
            {
                gamma: "1.00"
            }
        ]
    },
    {
        featureType: "landscape.natural.terrain",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#bae5ce"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: 45
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#fac9a9"
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
            {
                color: "#4e4e4e"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#787878"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "transit.station.airport",
        elementType: "labels.icon",
        stylers: [
            {
                hue: "#0a00ff"
            },
            {
                saturation: "-77"
            },
            {
                gamma: "0.57"
            },
            {
                lightness: "0"
            }
        ]
    },
    {
        featureType: "transit.station.rail",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#43321e"
            }
        ]
    },
    {
        featureType: "transit.station.rail",
        elementType: "labels.icon",
        stylers: [
            {
                hue: "#ff6c00"
            },
            {
                lightness: "4"
            },
            {
                gamma: "0.75"
            },
            {
                saturation: "-68"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                color: "#eaf6f8"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#c7eced"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                lightness: "-49"
            },
            {
                saturation: "-53"
            },
            {
                gamma: "0.79"
            }
        ]
    }, 
];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FlatPaleTheme)));


/***/ }),

/***/ 4024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);

// @mui

function Marker({ onOpen  }) {
    const handleOpen = (event)=>{
        event.stopPropagation();
        onOpen();
    };
    return /*#__PURE__*/ _jsx(Box, {
        onClick: handleOpen,
        children: /*#__PURE__*/ _jsx(SvgIcon, {
            sx: {
                color: "error.main",
                cursor: "pointer"
            },
            children: /*#__PURE__*/ _jsx("path", {
                d: "M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z"
            })
        })
    });
};


/***/ }),

/***/ 4310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6413);
/* harmony import */ var _iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_email__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5732);
/* harmony import */ var _iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_phone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3203);
/* harmony import */ var _iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close_filled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5562);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7225);
/* harmony import */ var _TextIconLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8704);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Iconify__WEBPACK_IMPORTED_MODULE_6__, _animate__WEBPACK_IMPORTED_MODULE_8__]);
([_Iconify__WEBPACK_IMPORTED_MODULE_6__, _animate__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// icons



//




function Popup({ office , onClose  }) {
    const handleClose = (event)=>{
        event.stopPropagation();
        onClose();
    };
    return /*#__PURE__*/ _jsxs(Paper, {
        sx: {
            width: 220,
            overflow: "hidden",
            borderRadius: 1.5,
            mt: 2,
            ml: 2,
            position: "relative"
        },
        children: [
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "absolute",
                    right: 4,
                    top: 4,
                    zIndex: 9
                },
                children: /*#__PURE__*/ _jsx(IconButtonAnimate, {
                    size: "small",
                    onClick: handleClose,
                    children: /*#__PURE__*/ _jsx(Iconify, {
                        icon: closeFilled,
                        sx: {
                            width: 20,
                            height: 20,
                            opacity: 0.48,
                            color: "common.white",
                            "&:hover": {
                                opacity: 1
                            },
                            ...!office.photo && {
                                color: "text.disabled"
                            }
                        }
                    })
                })
            }),
            office.photo && /*#__PURE__*/ _jsx(Image, {
                alt: "photo",
                src: office.photo,
                ratio: "4/3"
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 1,
                sx: {
                    p: 1.5,
                    wordBreak: "break-all",
                    ...!office.photo && {
                        p: 2,
                        pr: 3.5
                    }
                },
                children: [
                    office.country && /*#__PURE__*/ _jsx(Typography, {
                        variant: "subtitle2",
                        children: office.country
                    }),
                    office.address && /*#__PURE__*/ _jsx(Typography, {
                        component: "p",
                        variant: "caption",
                        children: office.address
                    }),
                    office.email && /*#__PURE__*/ _jsx(TextIconLabel, {
                        alignItems: "flex-start",
                        icon: /*#__PURE__*/ _jsx(Iconify, {
                            icon: emailIcon,
                            sx: {
                                mr: 0.5,
                                width: 18,
                                height: 18,
                                flexShrink: 0
                            }
                        }),
                        value: office.email,
                        sx: {
                            typography: "caption"
                        }
                    }),
                    office.phoneNumber && /*#__PURE__*/ _jsx(TextIconLabel, {
                        icon: /*#__PURE__*/ _jsx(Iconify, {
                            icon: phoneIcon,
                            sx: {
                                mr: 0.5,
                                width: 18,
                                height: 18,
                                flexShrink: 0
                            }
                        }),
                        value: office.phoneNumber,
                        sx: {
                            typography: "caption"
                        }
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7019:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _ContactMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactMap__WEBPACK_IMPORTED_MODULE_0__]);
_ContactMap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports ReactPlayerStyle, default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8924);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);


// @mui

// ----------------------------------------------------------------------
const ReactPlayerStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((react_player__WEBPACK_IMPORTED_MODULE_1___default()))(()=>({
        width: "100% !important",
        height: "100% !important",
        "& video": {
            objectFit: "cover"
        }
    })
);
// ----------------------------------------------------------------------
// https://github.com/CookPete/react-player
function Player({ ...other }) {
    return /*#__PURE__*/ _jsx(ReactPlayerStyle, {
        ...other
    });
};


/***/ }),

/***/ 4111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3011);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3250);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_animate__WEBPACK_IMPORTED_MODULE_4__, _Iconify__WEBPACK_IMPORTED_MODULE_6__]);
([_animate__WEBPACK_IMPORTED_MODULE_4__, _Iconify__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// icons

// @mui

//



function PlayerWithButton({ videoPath , open , onClose , ...other }) {
    const { 0: loading , 1: setLoading  } = useState(true);
    const onReady = ()=>{
        setLoading(false);
    };
    return /*#__PURE__*/ _jsxs(DialogAnimate, {
        fullScreen: true,
        open: open,
        variants: {
            initial: {
                ...varZoom().in.initial,
                scale: 0.64
            },
            animate: {
                ...varZoom().in.animate,
                transition: {
                    ...varZoom().in.animate.transition,
                    duration: 0.48
                }
            },
            exit: {
                ...varZoom().in.exit,
                scale: 0.64
            }
        },
        sx: {
            bgcolor: "transparent"
        },
        children: [
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    position: "fixed",
                    top: 24,
                    right: 24,
                    zIndex: 9
                },
                children: /*#__PURE__*/ _jsx(IconButtonAnimate, {
                    size: "large",
                    onClick: onClose,
                    sx: {
                        bgcolor: "common.white",
                        "&:hover": {
                            color: "primary.main",
                            bgcolor: "common.white"
                        }
                    },
                    children: /*#__PURE__*/ _jsx(Iconify, {
                        icon: closeIcon,
                        sx: {
                            width: 24,
                            height: 24
                        }
                    })
                })
            }),
            loading && /*#__PURE__*/ _jsx(CircularProgress, {
                sx: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    m: "auto",
                    zIndex: -1,
                    position: "absolute"
                }
            }),
            /*#__PURE__*/ _jsx(ReactPlayerStyle, {
                url: videoPath,
                playing: !loading,
                onReady: onReady,
                ...other
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5546);
/* harmony import */ var _iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9695);
/* harmony import */ var _iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_play_filled_alt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3250);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3011);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5562);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7225);
/* harmony import */ var _BgOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_animate__WEBPACK_IMPORTED_MODULE_6__, _Iconify__WEBPACK_IMPORTED_MODULE_8__]);
([_animate__WEBPACK_IMPORTED_MODULE_6__, _Iconify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// icons


// @mui

//





function PlayerWithImage({ imgPath , ratio ="16/9" , videoPath  }) {
    const { 0: loading , 1: setLoading  } = useState(true);
    const { 0: open , 1: setOpen  } = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const onReady = ()=>{
        setLoading(false);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    position: "relative",
                    borderRadius: 2,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ _jsx(FabButtonAnimate, {
                        size: "large",
                        color: "inherit",
                        onClick: handleOpen,
                        sx: {
                            width: 1,
                            height: 1,
                            bgcolor: "common.white"
                        },
                        sxWrap: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: 64,
                            height: 64,
                            zIndex: 9,
                            m: "auto",
                            position: "absolute"
                        },
                        children: /*#__PURE__*/ _jsx(Iconify, {
                            icon: playFilledAlt,
                            sx: {
                                color: "primary.main"
                            }
                        })
                    }),
                    /*#__PURE__*/ _jsx(BgOverlay, {}),
                    /*#__PURE__*/ _jsx(Image, {
                        alt: "hero",
                        src: imgPath,
                        ratio: ratio
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(DialogAnimate, {
                fullScreen: true,
                open: open,
                variants: {
                    initial: {
                        ...varZoom().in.initial,
                        scale: 0.64
                    },
                    animate: {
                        ...varZoom().in.animate,
                        transition: {
                            ...varZoom().in.animate.transition,
                            duration: 0.48
                        }
                    },
                    exit: {
                        ...varZoom().in.exit,
                        scale: 0.64
                    }
                },
                sx: {
                    bgcolor: "transparent"
                },
                children: [
                    /*#__PURE__*/ _jsx(Box, {
                        sx: {
                            position: "fixed",
                            top: 24,
                            right: 24,
                            zIndex: 9
                        },
                        children: /*#__PURE__*/ _jsx(IconButtonAnimate, {
                            size: "large",
                            onClick: handleClose,
                            sx: {
                                bgcolor: "common.white",
                                "&:hover": {
                                    color: "primary.main",
                                    bgcolor: "common.white"
                                }
                            },
                            children: /*#__PURE__*/ _jsx(Iconify, {
                                icon: closeIcon,
                                sx: {
                                    width: 24,
                                    height: 24
                                }
                            })
                        })
                    }),
                    loading && /*#__PURE__*/ _jsx(CircularProgress, {
                        sx: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            m: "auto",
                            zIndex: -1,
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ _jsx(ReactPlayerStyle, {
                        url: videoPath,
                        playing: !loading,
                        onReady: onReady
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5850:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3250);
/* harmony import */ var _PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4111);
/* harmony import */ var _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__, _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__]);
([_PlayerWithButton__WEBPACK_IMPORTED_MODULE_1__, _PlayerWithImage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_hooks__WEBPACK_IMPORTED_MODULE_2__]);
_src_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// @mui

// hooks

function CourseItemSkeleton({ vertical , ...other }) {
    const isDesktop = useResponsive("up", "sm");
    const verticalStyle = vertical || !isDesktop;
    return /*#__PURE__*/ _jsx(Card, {
        ...other,
        children: /*#__PURE__*/ _jsxs(Stack, {
            direction: verticalStyle ? "column" : "row",
            children: [
                /*#__PURE__*/ _jsx(Skeleton, {
                    variant: "rectangular",
                    sx: {
                        width: 240,
                        height: 346,
                        flexShrink: 0,
                        ...verticalStyle && {
                            width: 1
                        }
                    }
                }),
                /*#__PURE__*/ _jsxs(Stack, {
                    sx: {
                        p: 3,
                        flexGrow: 1
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            justifyContent: "space-between",
                            sx: {
                                mb: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 72
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 48
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Stack, {
                            spacing: 1,
                            flexGrow: 1,
                            children: [
                                ...Array(3)
                            ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        maxWidth: 1,
                                        height: 20 - index * 2,
                                        width: (5 - index) * 80
                                    }
                                }, index)
                            )
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            sx: {
                                mt: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 120,
                                        borderRadius: 0.5
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 120,
                                        borderRadius: 0.5
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            sx: {
                                my: 3
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "circular",
                                    width: 40,
                                    height: 40
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 48
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "text",
                                    sx: {
                                        height: 20,
                                        width: 24
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs(Stack, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 1.5,
                            children: [
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 56,
                                        borderRadius: 0.5
                                    }
                                }),
                                /*#__PURE__*/ _jsx(Skeleton, {
                                    variant: "rectangular",
                                    sx: {
                                        height: 16,
                                        width: 56,
                                        borderRadius: 0.5
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);

// @mui

// ----------------------------------------------------------------------
function JobItemSkeleton({ ...other }) {
    return /*#__PURE__*/ _jsxs(Card, {
        ...other,
        children: [
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 2,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "circular",
                        width: 48,
                        height: 48
                    }),
                    [
                        ...Array(4)
                    ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                            variant: "text",
                            sx: {
                                height: 20 - index * 2,
                                width: (5 - index) * 50
                            }
                        }, index)
                    )
                ]
            }),
            /*#__PURE__*/ _jsx(Divider, {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    p: 3,
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: "repeat(2, 1fr)"
                },
                children: [
                    ...Array(4)
                ].map((_, index)=>/*#__PURE__*/ _jsx(Skeleton, {
                        variant: "rectangular",
                        sx: {
                            width: 1,
                            height: 20,
                            borderRadius: 0.5
                        }
                    }, index)
                )
            })
        ]
    });
};


/***/ }),

/***/ 8211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MangaTileSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3011);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _animate__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui

// components


function MangaTileSkeleton() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                component: framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div,
                whileHover: "hover",
                variants: (0,_animate__WEBPACK_IMPORTED_MODULE_3__/* .varHover */ .U6)(0.95),
                transition: (0,_animate__WEBPACK_IMPORTED_MODULE_3__/* .varTranHover */ .BN)(),
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                width: 1,
                                zIndex: 9,
                                bottom: 24,
                                display: "flex",
                                position: "absolute",
                                justifyContent: "center"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.div, {
                        variants: (0,_animate__WEBPACK_IMPORTED_MODULE_3__/* .varHover */ .U6)(1.15),
                        transition: (0,_animate__WEBPACK_IMPORTED_MODULE_3__/* .varTranHover */ .BN)(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee, {
                            src: "",
                            alt: "skeleton",
                            ratio: "3/4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                variant: "text",
                sx: {
                    mt: 2.5,
                    textAlign: "center"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                variant: "text",
                sx: {
                    mb: 0.5,
                    textAlign: "center"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                variant: "text",
                sx: {
                    color: "text.disabled",
                    textAlign: "center"
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


// ----------------------------------------------------------------------
function TourItemSkeleton({ ...other }) {
    return /*#__PURE__*/ _jsxs(Card, {
        ...other,
        children: [
            /*#__PURE__*/ _jsx(Skeleton, {
                variant: "rectangular",
                sx: {
                    width: 1,
                    height: 240
                }
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: 1,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 50
                        }
                    }),
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 1
                        }
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Divider, {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                direction: "row",
                justifyContent: "space-between",
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 100
                        }
                    }),
                    /*#__PURE__*/ _jsx(Skeleton, {
                        variant: "text",
                        sx: {
                            height: 20,
                            width: 50
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u2": () => (/* reexport safe */ _MangaTileSkeleton__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _JobItemSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7952);
/* harmony import */ var _TourItemSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7207);
/* harmony import */ var _CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5035);
/* harmony import */ var _MangaTileSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__, _MangaTileSkeleton__WEBPACK_IMPORTED_MODULE_3__]);
([_CourseItemSkeleton__WEBPACK_IMPORTED_MODULE_2__, _MangaTileSkeleton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E0": () => (/* binding */ HOST_API),
/* harmony export */   "Vr": () => (/* binding */ reactQueryConfig),
/* harmony export */   "he": () => (/* binding */ defaultSettings),
/* harmony export */   "j2": () => (/* binding */ ROMCOM_API),
/* harmony export */   "w_": () => (/* binding */ HEADER_MOBILE_HEIGHT),
/* harmony export */   "xt": () => (/* binding */ CUUTROM_API),
/* harmony export */   "zj": () => (/* binding */ HEADER_DESKTOP_HEIGHT)
/* harmony export */ });
/* unused harmony exports GOOGLE_API, CAREER_POSTS_DIRECTORY, ELEARNING_POSTS_DIRECTORY, TRAVEL_POSTS_DIRECTORY, MARKETING_POSTS_DIRECTORY, CASE_STUDIES_DIRECTORY, COMPONENTS_DIRECTORY, defaultLocale, DRAWER_WIDTH */
// API
// ----------------------------------------------------------------------
const HOST_API = {
    dev: "http://localhost:8888/api",
    production: "https://zenno.moe/api"
};
const CUUTROM_API = "http://localhost:3000";
const ROMCOM_API = "https://backend.zenno.moe";
const GOOGLE_API = (/* unused pure expression or super */ null && (""));
// MARKDOWN FILE DIRECTORY
// ----------------------------------------------------------------------
const CAREER_POSTS_DIRECTORY = "_data/blog-posts/career";
const ELEARNING_POSTS_DIRECTORY = "_data/blog-posts/e-learning";
const TRAVEL_POSTS_DIRECTORY = "_data/blog-posts/travel";
const MARKETING_POSTS_DIRECTORY = "_data/blog-posts/marketing";
const CASE_STUDIES_DIRECTORY = "_data/case-studies";
const COMPONENTS_DIRECTORY = "_data/components";
// DEFAULT LOCALE
// ----------------------------------------------------------------------
// Also change in next.config.mjs
const defaultLocale = "en";
// SETTINGS
// ----------------------------------------------------------------------
const defaultSettings = {
    // light | dark
    themeMode: "dark",
    // ltr | rtl
    themeDirection: "ltr",
    //  default | blueOrange | greenOrange | purpleTeal | cyanYellow | pinkCyan
    themeColorPresets: "cyanYellow"
};
// LAYOUT
// ----------------------------------------------------------------------
const HEADER_MOBILE_HEIGHT = 64;
const HEADER_DESKTOP_HEIGHT = 96;
const DRAWER_WIDTH = 280;
const reactQueryConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 1
        }
    }
};


/***/ }),

/***/ 4191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "m": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6230);
/* harmony import */ var _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5294);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_2__]);
_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// hooks

// utils

// config

// ----------------------------------------------------------------------
const initialState = {
    ..._config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he,
    onToggleMode: ()=>{},
    onToggleDirection: ()=>{},
    onChangeColorPresets: ()=>{},
    onResetSetting: ()=>{},
    setColor: _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* .colorPresets[0] */ .P[0],
    colorOption: []
};
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
function SettingsProvider({ children  }) {
    const [settings, setSettings] = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLocalStorage */ ._)("settings", {
        ..._config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he
    });
    const onToggleMode = ()=>{
        setSettings({
            ...settings,
            themeMode: settings.themeMode === "light" ? "dark" : "light"
        });
    };
    const onToggleDirection = ()=>{
        setSettings({
            ...settings,
            themeDirection: settings.themeDirection === "ltr" ? "rtl" : "ltr"
        });
    };
    const onChangeColorPresets = (event)=>{
        setSettings({
            ...settings,
            themeColorPresets: event.target.value
        });
    };
    const onResetSetting = ()=>{
        setSettings({
            ..._config__WEBPACK_IMPORTED_MODULE_4__/* .defaultSettings */ .he
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            ...settings,
            // Mode
            onToggleMode,
            // Direction
            onToggleDirection,
            // Color Presets
            onChangeColorPresets,
            setColor: (0,_utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(settings.themeColorPresets),
            colorOption: _utils_getColorPresets__WEBPACK_IMPORTED_MODULE_3__/* .colorPresets.map */ .P.map((color)=>({
                    name: color.name,
                    primary: color.primary.main,
                    secondary: color.secondary.main
                })
            ),
            // Reset Setting
            onResetSetting
        },
        children: children
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fs": () => (/* reexport safe */ _useResponsive__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "ZY": () => (/* reexport safe */ _useBoundingClientRect__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "_": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "rV": () => (/* reexport safe */ _useSettings__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "yN": () => (/* reexport safe */ _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4255);
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4722);
/* harmony import */ var _useOffSetTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _useResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1832);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2411);
/* harmony import */ var _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5333);
/* harmony import */ var _useBoundingClientRect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useRequest__WEBPACK_IMPORTED_MODULE_0__, _useSettings__WEBPACK_IMPORTED_MODULE_1__, _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__]);
([_useRequest__WEBPACK_IMPORTED_MODULE_0__, _useSettings__WEBPACK_IMPORTED_MODULE_1__, _useHoverParallax__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ----------------------------------------------------------------------








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useBoundingClientRect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useBoundingClientRect(containerRef) {
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (containerRef.current) {
            const value = containerRef.current.getBoundingClientRect();
            setContainer(value);
        }
    }, [
        containerRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, [
        handleResize
    ]);
    return container;
};


/***/ }),

/***/ 5333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react-hooks/rules-of-hooks */ 
// ----------------------------------------------------------------------
function useHoverParallax(stiffness = 250, damping = 20) {
    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useSpring)(0, {
        stiffness,
        damping
    });
    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useSpring)(0, {
        stiffness,
        damping
    });
    const offsetX = (force)=>(0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useTransform)(x, (event)=>event / force
        )
    ;
    const offsetY = (force)=>(0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useTransform)(y, (event)=>event / force
        )
    ;
    const onMouseMoveHandler = (event)=>{
        x.set(event.clientX);
        y.set(event.clientY);
    };
    const onMouseLeaveHandler = ()=>{
        x.set(0);
        y.set(0);
    };
    return {
        offsetX,
        offsetY,
        onMouseMoveHandler,
        onMouseLeaveHandler
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHoverParallax);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useLocalStorage(key, defaultValue) {
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const storedValue = window.localStorage.getItem(key);
        if (storedValue !== null) {
            setValue(JSON.parse(storedValue));
        }
    }, [
        key
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [
        key,
        value
    ]);
    return [
        value,
        setValue
    ];
};


/***/ }),

/***/ 17:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useOffSetTop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function useOffSetTop(top) {
    const { 0: offsetTop , 1: setOffSetTop  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const isTop = top || 100;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.onscroll = ()=>{
            if (window.pageYOffset > isTop) {
                setOffSetTop(true);
            } else {
                setOffSetTop(false);
            }
        };
        return ()=>{
            window.onscroll = null;
        };
    }, [
        isTop
    ]);
    return offsetTop;
}; // Usage
 // const offset = useOffSetTop(100);


/***/ }),

/***/ 4255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// utils

// ----------------------------------------------------------------------
const fetcher = (url)=>axios.get(url).then((res)=>res.data
    )
;
function useRequest(url, options) {
    const { data , error , isValidating , mutate  } = useSWR(url, fetcher, options);
    return {
        data,
        error,
        mutate,
        isValidating,
        isLoading: !error && !data
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useResponsive)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);


function useResponsive(query, key, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.up(key));
    const mediaDown = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down(key));
    const mediaBetween = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.between(start, end));
    const mediaOnly = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.only(key));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    if (query === "only") {
        return mediaOnly;
    }
};


/***/ }),

/***/ 4722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__]);
_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export basePath */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(929);

// config

// ----------------------------------------------------------------------
const basePath =  true ? _config__WEBPACK_IMPORTED_MODULE_1__/* .HOST_API.production */ .E0.production : 0;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: basePath
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ }),

/***/ 5617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cssStyles)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

function getDirection(value = "bottom") {
    return ({
        top: "to top",
        right: "to right",
        bottom: "to bottom",
        left: "to left"
    })[value];
}
function cssStyles(theme) {
    return {
        bgBlur: (props)=>{
            const color = props?.color || theme?.palette.background.default || "#000000";
            const blur = props?.blur || 6;
            const opacity = props?.opacity || 0.8;
            return {
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, opacity)
            };
        },
        bgGradient: (props)=>{
            const direction = getDirection(props?.direction);
            const startColor = props?.startColor || `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#000000", 0)} 0%`;
            const endColor = props?.endColor || "#000000 75%";
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor});`
            };
        },
        bgImage: (props)=>{
            const url = props?.url || "https://zone-assets-api.vercel.app/assets/bg_gradient.jpg";
            const direction = getDirection(props?.direction);
            const startColor = props?.startColor || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme?.palette.grey[900] || "#000000", 0.88);
            const endColor = props?.endColor || (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme?.palette.grey[900] || "#000000", 0.88);
            return {
                background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            };
        }
    };
};


/***/ }),

/***/ 1674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": () => (/* binding */ fShortenNumber)
/* harmony export */ });
/* unused harmony exports fCurrency, fPercent, fNumber, fData */
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8032);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

// ----------------------------------------------------------------------
function fCurrency(number) {
    return numeral(number).format(Number.isInteger(number) ? "$0,0" : "$0,0.00");
}
function fPercent(number) {
    return numeral(number / 100).format("0.0%");
}
function fNumber(number) {
    return numeral(number).format();
}
function fShortenNumber(number) {
    return numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format("0.00a").replace(".00", "");
}
function fData(number) {
    return numeral(number).format("0.0 b");
}


/***/ }),

/***/ 5294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ colorPresets),
/* harmony export */   "Z": () => (/* binding */ getColorPresets)
/* harmony export */ });
/* harmony import */ var _theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4367);
// theme

// ----------------------------------------------------------------------
const presetsKey = {
    default: "default",
    blueOrange: "blueOrange",
    greenOrange: "greenOrange",
    purpleTeal: "purpleTeal",
    cyanYellow: "cyanYellow",
    pinkCyan: "pinkCyan"
};
const colorPresets = [
    // DEFAULT
    {
        name: presetsKey.default,
        primary: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.primary */ .Z.light.primary,
        secondary: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* ["default"].light.secondary */ .Z.light.secondary
    },
    // PINK CYAN
    {
        name: presetsKey.pinkCyan,
        primary: {
            lighter: "#FEE7E4",
            light: "#FBAEB5",
            main: "#F2779A",
            dark: "#AE3B72",
            darker: "#741655",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#CAFDEB",
            light: "#61F4D9",
            main: "#00DCDA",
            dark: "#00849E",
            darker: "#004569",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    },
    // CYAN YELLOW
    {
        name: presetsKey.cyanYellow,
        primary: {
            lighter: "#C8FAEC",
            light: "#5CE6D6",
            main: "#00A3AC",
            dark: "#00607B",
            darker: "#003252",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#FEF9DA",
            light: "#FEE992",
            main: "#FDD14A",
            dark: "#B68B25",
            darker: "#79540E",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.black */ .Y.black
        }
    },
    // PURPLE - TEAL
    {
        name: presetsKey.purpleTeal,
        primary: {
            lighter: "#EACCFF",
            light: "#B566FF",
            main: "#6E00FF",
            dark: "#3F00B7",
            darker: "#1F007A",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#CBFEFB",
            light: "#65F2FE",
            main: "#00C5FE",
            dark: "#0073B6",
            darker: "#003B79",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    },
    // BLUE - ORANGE
    {
        name: presetsKey.blueOrange,
        primary: {
            lighter: "#CCEEFF",
            light: "#66BDFF",
            main: "#007AFF",
            dark: "#0046B7",
            darker: "#00237A",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#FFF3D8",
            light: "#FFD18B",
            main: "#FFA03F",
            dark: "#B75D1F",
            darker: "#7A2D0C",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.black */ .Y.black
        }
    },
    // GREEN - ORANGE
    {
        name: presetsKey.greenOrange,
        primary: {
            lighter: "#DBF7EE",
            light: "#8BD0C7",
            main: "#2D6365",
            dark: "#163E48",
            darker: "#082130",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        },
        secondary: {
            lighter: "#FEEFD5",
            light: "#FBC182",
            main: "#F37F31",
            dark: "#AE4318",
            darker: "#741B09",
            contrastText: _theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .contrastText.white */ .Y.white
        }
    }, 
];
// ----------------------------------------------------------------------
const getPreset = (presetsKey1)=>colorPresets.filter((item)=>item.name === presetsKey1
    )[0]
;
function getColorPresets(themeColorPresets) {
    let color;
    switch(themeColorPresets){
        // pinkCyan
        case presetsKey.pinkCyan:
            color = getPreset(presetsKey.pinkCyan);
            break;
        // cyanYellow
        case presetsKey.cyanYellow:
            color = getPreset(presetsKey.cyanYellow);
            break;
        // blueOrange
        case presetsKey.blueOrange:
            color = getPreset(presetsKey.blueOrange);
            break;
        // greenOrange
        case presetsKey.greenOrange:
            color = getPreset(presetsKey.greenOrange);
            break;
        // purpleTeal
        case presetsKey.purpleTeal:
            color = getPreset(presetsKey.purpleTeal);
            break;
        default:
            color = getPreset(presetsKey.default);
    }
    return color;
};


/***/ }),

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q1": () => (/* binding */ pxToRem),
/* harmony export */   "ZP": () => (/* binding */ GetFontValue),
/* harmony export */   "yE": () => (/* binding */ responsiveFontSizes)
/* harmony export */ });
/* unused harmony export remToPx */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1832);
// material

// hooks

// ----------------------------------------------------------------------
function GetFontValue(variant) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const breakpoints = useWidth();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const fontWeight = theme.typography[variant].fontWeight;
    const letterSpacing = theme.typography[variant].letterSpacing;
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
};
// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
function useWidth() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return(// @ts-ignore not sure what is this
    keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = (0,_hooks_useResponsive__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("up", key);
        return !output && matches ? key : output;
    }, null) || "xs");
}


/***/ })

};
;