"use strict";
(() => {
var exports = {};
exports.id = 417;
exports.ids = [417,573,197];
exports.modules = {

/***/ 4641:
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _hooks_useProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3296);
/* harmony import */ var _api_proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(256);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7492);
/* harmony import */ var _sections_proxy_ChapterBottomNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2172);
/* harmony import */ var _sections_proxy_ChapterTopNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8206);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(371);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__, _hooks_useProxy__WEBPACK_IMPORTED_MODULE_3__, _404__WEBPACK_IMPORTED_MODULE_5__, _sections_proxy_ChapterBottomNav__WEBPACK_IMPORTED_MODULE_6__, _sections_proxy_ChapterTopNav__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__, _hooks_useProxy__WEBPACK_IMPORTED_MODULE_3__, _404__WEBPACK_IMPORTED_MODULE_5__, _sections_proxy_ChapterBottomNav__WEBPACK_IMPORTED_MODULE_6__, _sections_proxy_ChapterTopNav__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// @mui
// config
// layouts
// components










const RootStyle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__.styled)("div")(({ theme  })=>({
        paddingTop: _src_config__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_MOBILE_HEIGHT */ .w_,
        paddingBottom: _src_config__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_MOBILE_HEIGHT */ .w_,
        [theme.breakpoints.up("md")]: {
            paddingBottom: _src_config__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_DESKTOP_HEIGHT */ .zj,
            paddingTop: _src_config__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_DESKTOP_HEIGHT */ .zj
        }
    })
);
// ----------------------------------------------------------------------
const getServerSideProps = async (context)=>{
    try {
        const sourceId = String(context.query.source);
        const mangaId = String(context.query.manga);
        const chapterId = String(context.query.chapter);
        const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
        await queryClient.fetchQuery([
            "chapters",
            {
                sourceId,
                mangaId
            }
        ], ()=>(0,_api_proxy__WEBPACK_IMPORTED_MODULE_4__/* .getChapters */ .Uo)(sourceId, mangaId)
        );
        return {
            props: {
                sourceId,
                mangaId,
                chapterId,
                dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.dehydrate)(queryClient)
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
function MangaPage({ sourceId , mangaId , chapterId  }) {
    if (!sourceId || !mangaId) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ErrorScreen */ .Cs, {});
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: chapters  } = (0,_hooks_useProxy__WEBPACK_IMPORTED_MODULE_3__/* .useChapters */ .HV)(sourceId, mangaId);
    if (!chapters || chapters.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_5__["default"], {});
    let currentChapterId = router.query.chapter || chapterId;
    if (currentChapterId === "newest") currentChapterId = chapters[0].id;
    if (currentChapterId === "oldest") currentChapterId = chapters[0].id;
    const chapterIndex = chapters.findIndex((chapter)=>chapter.id === currentChapterId
    );
    if (chapterIndex < 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_5__["default"], {});
    const chapter1 = chapters[chapterIndex];
    chapter1.prevChapterId = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1].id : undefined;
    chapter1.nextChapterId = chapterIndex > 0 ? chapters[chapterIndex - 1].id : undefined;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: manga  } = (0,_hooks_useProxy__WEBPACK_IMPORTED_MODULE_3__/* .useManga */ .XH)(sourceId, mangaId);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: chapterDetails  } = (0,_hooks_useProxy__WEBPACK_IMPORTED_MODULE_3__/* .useChapter */ .W$)(sourceId, mangaId, chapter1.id);
    const handleChapterChange = (newChapterId)=>{
        if (!router) return;
        router.push({
            pathname: _routes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].proxy.chapter */ .Z.proxy.chapter("[source]", "[manga]", "[chapter]"),
            query: {
                source: sourceId,
                manga: mangaId,
                chapter: newChapterId
            }
        }, undefined, {
            shallow: true,
            scroll: true
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Page */ .T3, {
        title: chapter1.name + " - " + (manga?.titles[0] || ""),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_proxy_ChapterTopNav__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                chapterDetails?.pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .MangaImage */ .xI, {
                        src: page,
                        sx: {
                            textAlign: "center"
                        }
                    }, page)
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sections_proxy_ChapterBottomNav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    manga: manga,
                    chapters: chapters,
                    chapter: chapter1,
                    handleChapterChange: handleChapterChange
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6230);
/* harmony import */ var _Iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_3__, _Iconify__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks__WEBPACK_IMPORTED_MODULE_3__, _Iconify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// @mui


// hooks

//

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ToggleButton)(({ theme  })=>({
        border: 0,
        width: "100%",
        borderRadius: 0,
        padding: theme.spacing(3),
        justifyContent: "space-between",
        "& svg": {
            width: 28,
            height: 28,
            transition: theme.transitions.create("all")
        },
        "&.Mui-selected": {
            backgroundColor: "transparent"
        }
    })
);
// ----------------------------------------------------------------------
function SettingMode() {
    const { themeMode , onToggleMode  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .rV)();
    const isLight = themeMode === "light";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
        value: "check",
        selected: !isLight,
        onChange: onToggleMode,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "subtitle2",
                children: isLight ? "Dark" : "Light"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: isLight ? "eva:moon-fill" : "eva:sun-fill"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChapterBottomNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(929);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6230);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// next

// @mui

// config

// hooks




const ITEM_HEIGHT = 40;
const MenuProps = {
    PaperProps: {
        sx: {
            px: 1,
            maxHeight: ITEM_HEIGHT * 10,
            "& .MuiList-root": {
                py: 0.5
            },
            borderRadius: 0
        }
    }
};
function ChapterBottomNav({ manga , chapters , chapter: chapter1 , handleChapterChange  }) {
    const isScrolling = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_DESKTOP_HEIGHT */ .zj);
    const isDesktop = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useResponsive */ .Fs)("up", "md");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {
        sx: {
            boxShadow: 0,
            bottom: 0,
            top: "auto"
        },
        position: "fixed",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_5__/* .ToolbarStyle */ .t, {
                disableGutters: true,
                scrolling: isScrolling,
                sx: {
                    height: "unset"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        columnGap: {
                            md: 2,
                            xs: 1
                        }
                    },
                    children: [
                        isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapButton, {
                            sx: {
                                borderRadius: "5px 0px 0px 5px"
                            },
                            variant: "outlined",
                            disabled: !chapter1.prevChapterId,
                            onClick: ()=>handleChapterChange(chapter1.prevChapterId)
                            ,
                            children: "Ch\u01B0\u01A1ng tr\u01B0\u1EDBc"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapButton, {
                            sx: {
                                borderRadius: "5px 0px 0px 5px"
                            },
                            variant: "outlined",
                            disabled: !chapter1.prevChapterId,
                            onClick: ()=>handleChapterChange(chapter1.prevChapterId)
                            ,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
                                icon: "eva:arrow-left-fill"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: manga?.internalURL || "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapButton, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
                                    icon: "eva:home-fill"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                            size: "small",
                            sx: {
                                maxWidth: "50%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                labelId: "demo-simple-select-label",
                                id: "demo-simple-select",
                                value: chapter1.id,
                                onChange: (event)=>handleChapterChange(event.target.value)
                                ,
                                input: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapInput, {}),
                                MenuProps: MenuProps,
                                children: Object.values(chapters).map((chapter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        value: chapter.id,
                                        children: chapter.name
                                    }, chapter.id)
                                )
                            })
                        }),
                        isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapButton, {
                            sx: {
                                borderRadius: "0px 5px 5px 0px"
                            },
                            variant: "outlined",
                            disabled: !chapter1.nextChapterId,
                            onClick: ()=>handleChapterChange(chapter1.nextChapterId)
                            ,
                            children: "Ch\u01B0\u01A1ng sau"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapButton, {
                            sx: {
                                borderRadius: "0px 5px 5px 0px"
                            },
                            variant: "outlined",
                            disabled: !chapter1.nextChapterId,
                            onClick: ()=>handleChapterChange(chapter1.nextChapterId)
                            ,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .Iconify */ .Ir, {
                                icon: "eva:arrow-right-fill"
                            })
                        })
                    ]
                })
            }),
            isScrolling && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_5__/* .ToolbarShadowStyle */ .X, {})
        ]
    });
};
const BootstrapInput = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputBase)(({ theme  })=>({
        "label + &": {
            marginTop: theme.spacing(3)
        },
        "& .MuiInputBase-input": {
            borderRadius: 0,
            position: "relative",
            backgroundColor: theme.palette.background.paper,
            border: "1.5px solid " + theme.palette.primary.main,
            color: theme.palette.primary.main,
            fontSize: 16,
            padding: "10px 26px 10px 12px",
            transition: theme.transitions.create([
                "border-color",
                "box-shadow"
            ]),
            [theme.breakpoints.down("md")]: {
                fontSize: 13,
                padding: "5px 13px 5px 10px"
            },
            "&:hover": {
                borderRadius: 0,
                color: theme.palette.background.paper,
                backgroundColor: theme.palette.primary.main
            },
            "&:active": {
                borderRadius: 0
            },
            "&:focus": {
                borderRadius: 0
            }
        },
        "& .MuiSelect-icon": {
            color: theme.palette.primary.main
        }
    })
);
const BootstrapButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button)(({ theme  })=>({
        borderRadius: 0,
        minWidth: "unset",
        fontSize: 16,
        height: "45px",
        fontWeight: 400,
        [theme.breakpoints.down("md")]: {
            fontSize: 16,
            padding: "5px 6px",
            height: "35px"
        },
        padding: "10px 12px",
        border: "1.5px solid " + theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
        "&:hover": {
            color: theme.palette.background.paper,
            backgroundColor: theme.palette.primary.main
        },
        "&:active": {
            backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.primary.main, 0.5),
            boxShadow: "none",
            outline: "none"
        },
        "&:focus": {
            boxShadow: "0 0 0 0.2rem " + (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.primary.main, 0.5)
        }
    })
);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChapterBottomNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(929);
/* harmony import */ var _hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
/* harmony import */ var _HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var _components_settings_SettingMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8204);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__, _components_settings_SettingMode__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_4__, _components_settings_SettingMode__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// @mui

// config

// hooks

// components

//


// ----------------------------------------------------------------------
function ChapterBottomNav() {
    const isScrolling = (0,_hooks_useOffSetTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_config__WEBPACK_IMPORTED_MODULE_2__/* .HEADER_DESKTOP_HEIGHT */ .zj);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
        sx: {
            boxShadow: 0,
            bgcolor: "transparent"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_5__/* .ToolbarStyle */ .t, {
                disableGutters: true,
                scrolling: isScrolling,
                sx: {
                    px: 2
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    maxWidth: false,
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Logo */ .TR, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            direction: "row",
                            alignItems: "center",
                            divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                                orientation: "vertical"
                            }),
                            spacing: 2.5,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    minWidth: "115px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_settings_SettingMode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        })
                    ]
                })
            }),
            isScrolling && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderToolbarStyle__WEBPACK_IMPORTED_MODULE_5__/* .ToolbarShadowStyle */ .X, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ToolbarShadowStyle),
/* harmony export */   "t": () => (/* binding */ ToolbarStyle)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5617);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(929);
// @mui


// utils

// config

const ToolbarStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
    shouldForwardProp: (prop)=>prop !== "transparent" && prop !== "scrolling"
})(({ transparent , scrolling , theme  })=>({
        height: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_MOBILE_HEIGHT */ .w_,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create([
            "height",
            "background-color"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        }),
        [theme.breakpoints.up("md")]: {
            height: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_DESKTOP_HEIGHT */ .zj
        },
        ...transparent && {
            color: theme.palette.common.white,
            backgroundColor: "transparent"
        },
        ...scrolling && {
            ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(theme).bgBlur(),
            [theme.breakpoints.up("md")]: {
                height: _config__WEBPACK_IMPORTED_MODULE_3__/* .HEADER_DESKTOP_HEIGHT */ .zj - 20
            }
        }
    })
);
const ToolbarShadowStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        margin: "auto",
        borderRadius: "50%",
        position: "absolute",
        width: `calc(100% - 48px)`,
        boxShadow: `-23px 16px 56px -8px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.common.black, 1)}`
    })
);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,152,367,38,176,836,371,492,296], () => (__webpack_exec__(4641)));
module.exports = __webpack_exports__;

})();