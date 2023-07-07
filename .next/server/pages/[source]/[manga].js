"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565,573,197];
exports.modules = {

/***/ 4003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MangaPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(929);
/* harmony import */ var _src_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7836);
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9176);
/* harmony import */ var _src_sources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9569);
/* harmony import */ var _src_sections_proxy_MangaInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5613);
/* harmony import */ var _src_sections_proxy_ChaptersList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3145);
/* harmony import */ var _src_hooks_useProxy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3296);
/* harmony import */ var _src_api_proxy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(256);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _src_components__WEBPACK_IMPORTED_MODULE_6__, _src_sources__WEBPACK_IMPORTED_MODULE_7__, _src_sections_proxy_MangaInfo__WEBPACK_IMPORTED_MODULE_8__, _src_sections_proxy_ChaptersList__WEBPACK_IMPORTED_MODULE_9__, _src_hooks_useProxy__WEBPACK_IMPORTED_MODULE_10__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _src_components__WEBPACK_IMPORTED_MODULE_6__, _src_sources__WEBPACK_IMPORTED_MODULE_7__, _src_sections_proxy_MangaInfo__WEBPACK_IMPORTED_MODULE_8__, _src_sections_proxy_ChaptersList__WEBPACK_IMPORTED_MODULE_9__, _src_hooks_useProxy__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui


// config

// layouts

// components

// sections





// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        paddingTop: _src_config__WEBPACK_IMPORTED_MODULE_4__/* .HEADER_MOBILE_HEIGHT */ .w_,
        [theme.breakpoints.up("md")]: {
            paddingTop: _src_config__WEBPACK_IMPORTED_MODULE_4__/* .HEADER_DESKTOP_HEIGHT */ .zj
        }
    })
);
// ----------------------------------------------------------------------
const getServerSideProps = async (context)=>{
    try {
        const source = _src_sources__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z[String(context.query.source)];
        if (!source) throw new Error("Not Found Source");
        const mangaId = String(context.query.manga);
        const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
        await queryClient.fetchQuery([
            "manga",
            {
                sourceId: source.id,
                mangaId
            }
        ], ()=>(0,_src_api_proxy__WEBPACK_IMPORTED_MODULE_11__/* .getManga */ .uf)(source.id, mangaId)
        );
        return {
            props: {
                sourceId: source.id,
                dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.dehydrate)(queryClient),
                mangaId
            }
        };
    } catch (error) {
        console.log(error);
    }
    return {
        props: {
            sourceId: null,
            mangaId: null
        }
    };
};
function MangaPage({ sourceId , mangaId  }) {
    const { data: manga  } = (0,_src_hooks_useProxy__WEBPACK_IMPORTED_MODULE_10__/* .useManga */ .XH)(sourceId, mangaId);
    if (!sourceId || !manga) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_6__/* .ErrorScreen */ .Cs, {});
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: chapters = []  } = (0,_src_hooks_useProxy__WEBPACK_IMPORTED_MODULE_10__/* .useChapters */ .HV)(sourceId, mangaId);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_6__/* .Page */ .T3, {
        title: manga.titles[0] ?? "RomCom iz da bezt...",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                sx: {
                    mt: {
                        xs: 8,
                        md: 10
                    },
                    mb: {
                        xs: 10,
                        md: 15
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            alignItems: "flex-start",
                            display: "grid",
                            gap: 5,
                            gridTemplateColumns: {
                                md: "repeat(2, 1fr)"
                            },
                            mb: {
                                xs: 10,
                                md: 15
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                sx: {
                                    width: {
                                        xs: "80%",
                                        md: "100%"
                                    },
                                    mx: "auto"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components__WEBPACK_IMPORTED_MODULE_6__/* .Image */ .Ee, {
                                    alt: "cover",
                                    src: manga.image,
                                    ratio: "3/4",
                                    sx: {
                                        borderRadius: 2
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_sections_proxy_MangaInfo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                manga: manga
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_sections_proxy_ChaptersList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        chapters: chapters
                    })
                ]
            })
        })
    });
};
// ----------------------------------------------------------------------
MangaPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: page
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChaptersList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5339);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @types
// components




function ChaptersList({ chapters  }) {
    const { 0: currentChapters , 1: setChapters  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setChapters(chapters);
    }, [
        chapters
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                sx: {
                    mb: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Iconify */ .Ir, {
                        icon: "fa:sort"
                    }),
                    onClick: ()=>{
                        console.log("click");
                        setChapters((prev)=>[
                                ...prev
                            ].reverse()
                        );
                    },
                    children: "S\u1EAFp x\u1EBFp"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                lg: 7,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        display: "grid",
                        gap: {
                            md: 3,
                            xs: 1
                        },
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            md: "repeat(3, 1fr)"
                        }
                    },
                    children: currentChapters.map((chapter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChapterItem, {
                            chapter: chapter
                        }, chapter.id)
                    )
                })
            })
        ]
    });
};
function ChapterItem({ chapter  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: chapter.internalURL,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            variant: "outlined",
            sx: {
                p: 3,
                borderRadius: 1.5,
                cursor: "pointer",
                bgcolor: "transparent",
                transition: (theme)=>theme.transitions.create("all", {
                        duration: theme.transitions.duration.enteringScreen
                    })
                ,
                "&:hover": {
                    bgcolor: "background.paper",
                    boxShadow: (theme)=>theme.customShadows.z24
                    ,
                    "& h6": {
                        color: "primary.main"
                    }
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .TextMaxLine */ .b3, {
                    variant: "h6",
                    line: 2,
                    persistent: true,
                    gutterBottom: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Iconify */ .Ir, {
                            icon: `circle-flags:${chapter.langCode || "gb"}`
                        }),
                        " ",
                        chapter.name
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "body3",
                    sx: {
                        color: "text.disabled"
                    },
                    children: (0,_utils_formatTime__WEBPACK_IMPORTED_MODULE_3__/* .fToNow */ .DY)(chapter.time ?? new Date(), {})
                })
            ]
        })
    }, chapter.id);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MangaInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);
/* harmony import */ var _iconify_icons_carbon_cube__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_cube__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5869);
/* harmony import */ var _iconify_icons_carbon_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
/* harmony import */ var _utils_manga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6194);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_4__, _hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// icons


// next
// @mui

// @utils
// components



function MangaInfo({ manga  }) {
    const { titles , status , desc , tags , lastUpdate , hentai , views , follows , author , artist , rating  } = manga;
    const isDesktop = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useResponsive */ .Fs)("up", "sm");
    const genres = tags?.find((tag)=>tag.label.toLowerCase() === "genres"
    )?.tags.map((t)=>t.label
    );
    const mangaTags = tags?.find((tag)=>tag.label.toLowerCase() === "tags"
    )?.tags.map((t)=>t.label
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        spacing: 5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h5",
                children: titles[0]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                spacing: 2,
                direction: {
                    xs: "column",
                    md: "row"
                },
                justifyContent: {
                    md: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        spacing: 2,
                        children: [
                            titles[1] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h6",
                                children: titles[1]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .RatingLabel */ .w1, {
                                ratings: rating ?? 0,
                                reviews: follows
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: "row",
                        alignItems: "center",
                        spacing: 1.5,
                        sx: {
                            minWidth: 100
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
                                src: "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "body3",
                                        sx: {
                                            color: "text.disabled"
                                        },
                                        children: "T\xe1c gi\u1EA3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                        variant: "subtitle2",
                                        children: author
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "body2",
                sx: {
                    overflowWrap: "anywhere"
                },
                children: desc
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionSummary, {
                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                            icon: "eva:arrow-ios-downward-fill"
                        }),
                        "aria-controls": "panel1a-content",
                        id: "panel1a-header",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            children: "T\xf3m t\u1EAFt"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionDetails, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            variant: "body2",
                            sx: {
                                overflowWrap: "anywhere"
                            },
                            children: desc
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                spacing: 3,
                sx: {
                    p: {
                        xs: 2,
                        md: 3
                    },
                    borderRadius: 2,
                    border: (theme)=>`dashed 1px ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        variant: "h5",
                        children: "Th\xf4ng tin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LineItem, {
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                            icon: (_iconify_icons_carbon_events__WEBPACK_IMPORTED_MODULE_2___default())
                        }),
                        label: "T\xecnh tr\u1EA1ng",
                        value: (0,_utils_manga__WEBPACK_IMPORTED_MODULE_6__/* .fStatus */ .A)(status)?.toLocaleUpperCase()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    genres && genres.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LineItem, {
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                            icon: (_iconify_icons_carbon_cube__WEBPACK_IMPORTED_MODULE_1___default())
                        }),
                        label: "Th\u1EC3 lo\u1EA1i",
                        value: genres.join(", ")
                    }),
                    mangaTags && mangaTags.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LineItem, {
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                            icon: (_iconify_icons_carbon_cube__WEBPACK_IMPORTED_MODULE_1___default())
                        }),
                        label: "Th\u1EC3 lo\u1EA1i",
                        value: mangaTags.join(", ")
                    })
                ]
            })
        ]
    });
};
function LineItem({ icon , label , value  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .TextIconLabel */ .fD, {
        icon: icon,
        value: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                label,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                    variant: "subtitle2",
                    sx: {
                        color: "text.primary",
                        flexGrow: 1,
                        textAlign: "right"
                    },
                    children: value
                })
            ]
        }),
        sx: {
            color: "text.disabled",
            "& svg": {
                mr: 1,
                width: 24,
                height: 24
            }
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DY": () => (/* binding */ fToNow)
});

// UNUSED EXPORTS: fDate, fTimestamp

;// CONCATENATED MODULE: external "date-fns/format"
const format_namespaceObject = require("date-fns/format");
;// CONCATENATED MODULE: external "date-fns/getTime"
const getTime_namespaceObject = require("date-fns/getTime");
;// CONCATENATED MODULE: external "date-fns/formatDistanceToNow"
const formatDistanceToNow_namespaceObject = require("date-fns/formatDistanceToNow");
var formatDistanceToNow_default = /*#__PURE__*/__webpack_require__.n(formatDistanceToNow_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/formatTime.ts



function fDate(date, option) {
    return date ? format(new Date(date), option || "dd MMM yyyy") : null;
}
function fTimestamp(date) {
    return date ? getTime(new Date(date)) : null;
}
function fToNow(date, { addSuffix =true , includeSeconds =false  }) {
    return date ? formatDistanceToNow_default()(new Date(date), {
        addSuffix: addSuffix,
        includeSeconds: includeSeconds
    }) : null;
}


/***/ }),

/***/ 6194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ fStatus)
/* harmony export */ });
function fStatus(status) {
    switch(status){
        case 0:
            return "\u0111\xe3 ho\xe0n th\xe0nh";
        case 1:
            return "\u0111ang ti\u1EBFn h\xe0nh";
        case 2:
            return "kh\xf4ng r\xf5";
        case 3:
            return "d\u1EEBng v\xf4 h\u1EA1n";
        case 4:
            return "t\u1EA1m ng\u1EEBng";
    }
}


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

/***/ 260:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/cube");

/***/ }),

/***/ 6342:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/direction-straight-right");

/***/ }),

/***/ 6413:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/email");

/***/ }),

/***/ 5869:
/***/ ((module) => {

module.exports = require("@iconify/icons-carbon/events");

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

/***/ 1730:
/***/ ((module) => {

module.exports = require("entities");

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

/***/ 4580:
/***/ ((module) => {

module.exports = require("paperback-extensions-common");

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

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,152,367,38,176,836,296,569], () => (__webpack_exec__(4003)));
module.exports = __webpack_exports__;

})();