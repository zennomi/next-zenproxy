"use strict";
(() => {
var exports = {};
exports.id = 266;
exports.ids = [266,573,197];
exports.modules = {

/***/ 8344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RomComTitlePage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2905);
/* harmony import */ var _src_api_romcom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(655);
/* harmony import */ var _src_layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7836);
/* harmony import */ var _src_hooks_useRomcom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4497);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9176);
/* harmony import */ var _src_components_CustomStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2253);
/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(371);
/* harmony import */ var _src_sections_romcom_TitleLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8480);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_6__, _src_hooks_useRomcom__WEBPACK_IMPORTED_MODULE_9__, _src_components__WEBPACK_IMPORTED_MODULE_10__, _src_sections_romcom_TitleLinks__WEBPACK_IMPORTED_MODULE_13__, _404__WEBPACK_IMPORTED_MODULE_14__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_6__, _src_hooks_useRomcom__WEBPACK_IMPORTED_MODULE_9__, _src_components__WEBPACK_IMPORTED_MODULE_10__, _src_sections_romcom_TitleLinks__WEBPACK_IMPORTED_MODULE_13__, _404__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const regexForStripHTML = /(<([^>]+)>)/ig;
const getServerSideProps = async (context)=>{
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
    const id = context.query.id;
    await queryClient.prefetchQuery([
        "romcom-title",
        id
    ], ()=>(0,_src_api_romcom__WEBPACK_IMPORTED_MODULE_7__/* .getTitle */ .Y)(id)
    );
    return {
        props: {
            titleId: id,
            dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
        }
    };
};
function RomComTitlePage({ titleId  }) {
    const { data: title , error  } = (0,_src_hooks_useRomcom__WEBPACK_IMPORTED_MODULE_9__/* .useTitle */ .Z)(titleId);
    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: currentIndex , 1: setCurrentIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const settings = {
        speed: 800,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setCurrentIndex(next)
        ,
        ...(0,_src_components__WEBPACK_IMPORTED_MODULE_10__/* .CarouselDots */ .A0)({
            zIndex: 9,
            top: 24,
            left: 24,
            position: "absolute"
        })
    };
    const handlePrevious = ()=>{
        carouselRef.current?.slickPrev();
    };
    const handleNext = ()=>{
        carouselRef.current?.slickNext();
    };
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_14__["default"], {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Page */ .T3, {
        title: title?.name || "Manga RomCom",
        meta: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: title?.name || "Manga RomCom"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "article"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: title?.coverArt?.[0] || "https://telegraph-image-bak.pages.dev/file/005019a5b28c88d1a013e.jpg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: `https://zenno.moe/romcom/${title?._id || ""}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: title?.description?.replaceAll(regexForStripHTML, "") || "Th\xf4ng tin v\u1EC1 b\u1ED9 romcom n\xe0y"
                })
            ]
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_layouts__WEBPACK_IMPORTED_MODULE_8__/* .RootStyle */ .i, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Breadcrumbs */ .Oo, {
                        links: [
                            {
                                name: "Trang ch\u1EE7",
                                href: "/"
                            },
                            {
                                name: "Th\u01B0 vi\u1EC7n RomCom",
                                href: _src_routes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].romcom.titles */ .Z.romcom.titles
                            },
                            {
                                name: title?.name || "Manga RomCom"
                            }
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        container: true,
                        spacing: 2,
                        sx: {
                            my: 1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                item: true,
                                xs: 12,
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardSlider, {
                                    sx: {
                                        mx: "auto",
                                        mb: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            ref: carouselRef,
                                            ...settings,
                                            children: title?.coverArt ? title.coverArt.map((cover, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarouselItem, {
                                                    coverArt: cover
                                                }, index)
                                            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarouselItem, {
                                                coverArt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .CarouselArrows */ .i5, {
                                            onNext: handleNext,
                                            onPrevious: handlePrevious,
                                            spacing: 0,
                                            sx: {
                                                top: 16,
                                                right: 16,
                                                position: "absolute",
                                                "& .arrow": {
                                                    p: 0,
                                                    width: 32,
                                                    height: 32,
                                                    opacity: 0.48,
                                                    color: "common.white",
                                                    "&:hover": {
                                                        color: "common.white",
                                                        opacity: 1
                                                    }
                                                }
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                item: true,
                                xs: 12,
                                md: 9,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                                        direction: "row",
                                        spacing: 0.5,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
                                                color: "error",
                                                variant: "filled",
                                                children: title?.type.toUpperCase()
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatusLabel, {
                                                status: title?.status
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                        variant: "h3",
                                        children: [
                                            title?.name?.toUpperCase() || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {}),
                                            "  ",
                                            title?.score && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Rating, {
                                                value: title.score / 100 * 5,
                                                precision: 0.5,
                                                readOnly: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                        variant: "body2",
                                        sx: {
                                            opacity: 0.72
                                        },
                                        children: title?.altTitle?.toUpperCase()
                                    }),
                                    title && title.staff.map((a)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
                                            sx: {
                                                m: 0.5
                                            },
                                            variant: "filled",
                                            children: a
                                        }, a)
                                    ),
                                    title?.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_CustomStyle__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                                            variant: "body1",
                                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__["default"])(title.description)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                                        sx: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            mt: 2
                                        },
                                        children: [
                                            title?.genres.map((genre)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
                                                    color: "primary",
                                                    sx: {
                                                        m: 0.2
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `${_src_routes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].romcom.titles */ .Z.romcom.titles}?genres=${genre}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
                                                            href: `${_src_routes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].romcom.titles */ .Z.romcom.titles}?genres=${genre}`,
                                                            children: genre
                                                        })
                                                    })
                                                }, genre)
                                            ),
                                            title?.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
                                                    color: "primary",
                                                    variant: "outlined",
                                                    sx: {
                                                        m: 0.2
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `${_src_routes__WEBPACK_IMPORTED_MODULE_12__/* ["default"].romcom.titles */ .Z.romcom.titles}?tags=${tag}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Link, {
                                                            children: tag
                                                        })
                                                    })
                                                }, tag)
                                            )
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {
                                        sx: {
                                            my: 2
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_sections_romcom_TitleLinks__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    links: title?.links
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
RomComTitlePage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_layouts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        simpleFooter: true,
        children: page
    });
};
function CarouselItem({ coverArt  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
        sx: {
            position: "relative"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Image */ .Ee, {
            src: coverArt,
            ratio: "4/6"
        })
    });
}
function StatusLabel({ status ="ongoing"  }) {
    let color;
    if (status === "ongoing") color = "info";
    else if (status === "completed") color = "success";
    else if (status === "hiatus") color = "warning";
    else color = "error";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_10__/* .Label */ .__, {
        color: color,
        variant: "filled",
        children: status.toUpperCase()
    });
}
const CardSlider = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card)(({ theme  })=>({
        [theme.breakpoints.down("md")]: {
            width: "70%"
        }
    })
);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TitleLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7225);
/* harmony import */ var _components_Scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Iconify__WEBPACK_IMPORTED_MODULE_2__]);
_components_Iconify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// @mui

// components


const lanCodeToIcon = {
    vi: "vietnam",
    en: "united-kingdom",
    ja: "japan",
    zh: "china",
    ko: "south-korea"
};
// ----------------------------------------------------------------------
function TitleLinks({ links =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Scrollbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            sx: {
                maxHeight: 500,
                my: 1
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Table, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableHead, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableRow, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                        children: "Site"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                                        align: "center",
                                        children: "Ng\xf4n ng\u1EEF"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableBody, {
                            children: links.map((row)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Row, {
                                    row: row
                                }, row.link)
                            )
                        })
                    ]
                })
            })
        })
    });
};
function LinkIcon({ site  }) {
    if (site === "BLOGTRUYEN.VN") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        width: 32,
        src: "/icons/ic_blogtruyen.png"
    });
    else if (site === "MANGADEX.ORG") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: "/icons/ic_mangadex.svg"
    });
    else if (site === "HAKO.RE" || site === "DOCLN.NET") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        width: 32,
        src: "/icons/ic_hako.png"
    });
    else if (site === "FACEBOOK.COM") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        icon: "logos:facebook"
    });
    else if (site === "GOOGLE-SENSEI") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        icon: "flat-color-icons:google"
    });
    else if (site === "TWITTER.COM") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        icon: "logos:twitter"
    });
    else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        icon: "fa-solid:link"
    });
}
function Row({ row  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableRow, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            color: "primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkIcon, {
                                site: row.site
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                ml: 2,
                                maxWidth: {
                                    xs: 100,
                                    md: 200,
                                    xl: 400
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "subtitle2",
                                    children: [
                                        " ",
                                        row.site
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "body2",
                                    sx: {
                                        color: "text.secondary"
                                    },
                                    noWrap: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        href: row.link,
                                        target: "_blank",
                                        children: row.link
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TableCell, {
                align: "center",
                sx: {
                    minWidth: 50
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: `emojione-v1:flag-for-${lanCodeToIcon[row.language] || "japan"}`,
                    sx: {
                        width: 32,
                        height: 32
                    }
                })
            })
        ]
    }, row.link);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6222:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/caret-right");

/***/ }),

/***/ 8538:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/chevron-down");

/***/ }),

/***/ 2893:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/chevron-right");

/***/ }),

/***/ 5546:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/close");

/***/ }),

/***/ 3203:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/close-filled");

/***/ }),

/***/ 6342:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/direction-straight-right");

/***/ }),

/***/ 6413:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/email");

/***/ }),

/***/ 967:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/favorite");

/***/ }),

/***/ 1779:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/favorite-filled");

/***/ }),

/***/ 4602:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/logo-facebook");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/logo-instagram");

/***/ }),

/***/ 9410:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/logo-linkedin");

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/logo-twitter");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/phone");

/***/ }),

/***/ 9695:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/play-filled-alt");

/***/ }),

/***/ 1558:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/quotes");

/***/ }),

/***/ 3793:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/rotate-360");

/***/ }),

/***/ 6192:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/search");

/***/ }),

/***/ 5086:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/share");

/***/ }),

/***/ 7140:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/star-filled");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8557:
/***/ ((module) => {

module.exports = require("google-map-react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 1075:
/***/ ((module) => {

module.exports = require("prism-react-renderer/themes/okaidia");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 4990:
/***/ ((module) => {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ 9252:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4172:
/***/ ((module) => {

module.exports = require("simplebar-react");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,152,367,38,176,836,371,492,870], () => (__webpack_exec__(8344)));
module.exports = __webpack_exports__;

})();