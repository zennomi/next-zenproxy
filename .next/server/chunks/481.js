"use strict";
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 5947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @mui


// components

// ----------------------------------------------------------------------
const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        display: "none",
        [theme.breakpoints.up("md")]: {
            width: 1,
            flexGrow: 1,
            display: "block",
            position: "relative"
        }
    })
);
function AuthCarousel({ title  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const carouselSettings = {
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: Boolean(theme.direction === "rtl"),
        ...(0,_components__WEBPACK_IMPORTED_MODULE_4__/* .CarouselDots */ .A0)({
            rounded: true,
            sx: {
                left: 0,
                right: 0,
                zIndex: 9,
                bottom: 80,
                mx: "auto",
                position: "absolute"
            }
        })
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RootStyle, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .BgOverlay */ .AU, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h2",
                sx: {
                    p: 10,
                    bottom: 80,
                    zIndex: 10,
                    position: "absolute",
                    color: "common.white"
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
                ...carouselSettings,
                children: [
                    "auth01",
                    "auth02"
                ].map((img)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee, {
                            alt: img,
                            src: `https://zone-assets-api.vercel.app/assets/images/auth/${img}.jpg`,
                            sx: {
                                width: 1,
                                height: "100vh"
                            }
                        })
                    }, img)
                )
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthWithSocial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4602);
/* harmony import */ var _iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_carbon_logo_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5704);
/* harmony import */ var _iconify_icons_carbon_logo_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_logo_github__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// icons


// @mui

// components

// ----------------------------------------------------------------------
function AuthWithSocial() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        direction: "row",
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                fullWidth: true,
                size: "large",
                color: "inherit",
                variant: "contained",
                sx: {
                    bgcolor: "grey.5008",
                    "&:hover": {
                        bgcolor: "grey.50024"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .Ee, {
                    alt: "google icon",
                    src: "https://zone-assets-api.vercel.app/assets/icons/ic_google.svg",
                    sx: {
                        width: 24,
                        height: 24
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                fullWidth: true,
                size: "large",
                color: "inherit",
                variant: "contained",
                sx: {
                    bgcolor: "grey.5008",
                    "&:hover": {
                        bgcolor: "grey.50024"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                    icon: (_iconify_icons_carbon_logo_facebook__WEBPACK_IMPORTED_MODULE_1___default()),
                    sx: {
                        color: "#1877F2",
                        width: 24,
                        height: 24
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                color: "inherit",
                fullWidth: true,
                variant: "contained",
                size: "large",
                sx: {
                    bgcolor: "grey.5008",
                    "&:hover": {
                        bgcolor: "grey.50024"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Iconify */ .Ir, {
                    icon: (_iconify_icons_carbon_logo_github__WEBPACK_IMPORTED_MODULE_2___default()),
                    sx: {
                        color: "text.primary",
                        width: 24,
                        height: 24
                    }
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6592);
/* harmony import */ var _iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9249);
/* harmony import */ var _iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(371);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// icons


// next

// @mui


// routes

// components

// ----------------------------------------------------------------------
const FormSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Email is required").email("That is not an email"),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Password is required").min(6, "Password should be of minimum 6 characters length")
});
function LoginForm() {
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { reset , control , handleSubmit , formState: { isSubmitting  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        mode: "onTouched",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const handleShowPassword = ()=>{
        setShowPassword(!showPassword);
    };
    const onSubmit = async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500)
        );
        alert(JSON.stringify(data, null, 2));
        reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Stack, {
            spacing: 2.5,
            alignItems: "flex-end",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "email",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                            ...field,
                            fullWidth: true,
                            label: "Email address",
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "password",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                            ...field,
                            fullWidth: true,
                            label: "Password",
                            type: showPassword ? "text" : "password",
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
                                        onClick: handleShowPassword,
                                        edge: "end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_11__/* .Iconify */ .Ir, {
                                            icon: showPassword ? (_iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5___default()) : (_iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6___default())
                                        })
                                    })
                                })
                            },
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: _routes__WEBPACK_IMPORTED_MODULE_10__/* ["default"].resetPassword */ .Z.resetPassword,
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Link, {
                        variant: "body3",
                        underline: "always",
                        color: "text.secondary",
                        children: "Forgot password?"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_8__.LoadingButton, {
                    fullWidth: true,
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isSubmitting,
                    children: "Login"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6592);
/* harmony import */ var _iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9249);
/* harmony import */ var _iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// icons


// @mui


// components

// ----------------------------------------------------------------------
const FormSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    fullName: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Full name is required").min(6, "Mininum 6 characters").max(15, "Maximum 15 characters"),
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Email is required").email("That is not an email"),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Password is required").min(6, "Password should be of minimum 6 characters length"),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Confirm password is required").oneOf([
        yup__WEBPACK_IMPORTED_MODULE_1__.ref("password")
    ], "Password's not match")
});
function RegisterForm() {
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { reset , control , handleSubmit , formState: { isSubmitting  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        mode: "onTouched",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(FormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });
    const handleShowPassword = ()=>{
        setShowPassword(!showPassword);
    };
    const onSubmit = async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500)
        );
        alert(JSON.stringify(data, null, 2));
        reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {
            spacing: 2.5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "fullName",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                            ...field,
                            label: "Full Name",
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "email",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                            ...field,
                            fullWidth: true,
                            label: "Email address",
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "password",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                            ...field,
                            fullWidth: true,
                            label: "Password",
                            type: showPassword ? "text" : "password",
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
                                        onClick: handleShowPassword,
                                        edge: "end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                                            icon: showPassword ? (_iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5___default()) : (_iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6___default())
                                        })
                                    })
                                })
                            },
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "confirmPassword",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, {
                            ...field,
                            label: "Confirm Password",
                            type: showPassword ? "text" : "password",
                            InputProps: {
                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.InputAdornment, {
                                    position: "end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {
                                        onClick: handleShowPassword,
                                        edge: "end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_9__/* .Iconify */ .Ir, {
                                            icon: showPassword ? (_iconify_icons_carbon_view__WEBPACK_IMPORTED_MODULE_5___default()) : (_iconify_icons_carbon_view_off__WEBPACK_IMPORTED_MODULE_6___default())
                                        })
                                    })
                                })
                            },
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_7__.LoadingButton, {
                    fullWidth: true,
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isSubmitting,
                    children: "Register"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                    variant: "caption",
                    align: "center",
                    sx: {
                        color: "text.secondary",
                        mt: 3
                    },
                    children: [
                        "I agree to",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
                            color: "text.primary",
                            href: "#",
                            children: [
                                "",
                                " Terms of Service ",
                                ""
                            ]
                        }),
                        "and",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, {
                            color: "text.primary",
                            href: "#",
                            children: [
                                "",
                                " Privacy Policy."
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

/***/ 5202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResetPasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// @mui


// ----------------------------------------------------------------------
const FormSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Email is required").email("That is not an email")
});
function ResetPasswordForm({ onSent , onGetEmail  }) {
    const { reset , control , handleSubmit , formState: { isSubmitting  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        mode: "onTouched",
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(FormSchema),
        defaultValues: {
            email: ""
        }
    });
    const onSubmit = async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500)
        );
        onSent();
        onGetEmail(data.email);
        reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
            spacing: 2.5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                    name: "email",
                    control: control,
                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {
                            ...field,
                            fullWidth: true,
                            label: "Email address",
                            error: Boolean(error),
                            helperText: error?.message
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_4__.LoadingButton, {
                    fullWidth: true,
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isSubmitting,
                    children: "Reset Password"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerifyCodeForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// @mui


// ----------------------------------------------------------------------
const FormSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    code: yup__WEBPACK_IMPORTED_MODULE_1__.array().of(yup__WEBPACK_IMPORTED_MODULE_1__.string().required())
});
function VerifyCodeForm() {
    const { reset , control , handleSubmit , formState: { errors , isSubmitting  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(FormSchema),
        defaultValues: {
            code: [
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        }
    });
    const onSubmit = async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve, 500)
        );
        alert(JSON.stringify(data.code.join(""), null, 2));
        reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
            spacing: 3,
            sx: {
                mt: 5,
                mb: 3
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                    direction: "row",
                    spacing: 2,
                    justifyContent: "center",
                    children: [
                        ...Array(6)
                    ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            name: `code.${index}`,
                            control: control,
                            render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.FilledInput, {
                                    ...field,
                                    fullWidth: true,
                                    placeholder: "-",
                                    error: Boolean(error),
                                    sx: {
                                        maxWidth: {
                                            xs: 48,
                                            sm: 56
                                        },
                                        "& .MuiFilledInput-input": {
                                            px: 0,
                                            py: {
                                                xs: "14px",
                                                sm: "18px"
                                            },
                                            textAlign: "center"
                                        }
                                    }
                                })
                        }, `code-${index}`)
                    )
                }),
                Boolean(errors.code) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.FormHelperText, {
                    sx: {
                        px: 2
                    },
                    error: true,
                    children: "Code is required"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_4__.LoadingButton, {
                    fullWidth: true,
                    size: "large",
                    type: "submit",
                    variant: "contained",
                    loading: isSubmitting,
                    children: "Verify"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2": () => (/* reexport safe */ _RegisterForm__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "QL": () => (/* reexport safe */ _VerifyCodeForm__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "Rv": () => (/* reexport safe */ _AuthWithSocial__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "U0": () => (/* reexport safe */ _LoginForm__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "YK": () => (/* reexport safe */ _AuthCarousel__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "tz": () => (/* reexport safe */ _ResetPasswordForm__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _AuthCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5947);
/* harmony import */ var _AuthWithSocial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4706);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1389);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8065);
/* harmony import */ var _ResetPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5202);
/* harmony import */ var _VerifyCodeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthCarousel__WEBPACK_IMPORTED_MODULE_0__, _AuthWithSocial__WEBPACK_IMPORTED_MODULE_1__, _LoginForm__WEBPACK_IMPORTED_MODULE_2__, _RegisterForm__WEBPACK_IMPORTED_MODULE_3__, _ResetPasswordForm__WEBPACK_IMPORTED_MODULE_4__, _VerifyCodeForm__WEBPACK_IMPORTED_MODULE_5__]);
([_AuthCarousel__WEBPACK_IMPORTED_MODULE_0__, _AuthWithSocial__WEBPACK_IMPORTED_MODULE_1__, _LoginForm__WEBPACK_IMPORTED_MODULE_2__, _RegisterForm__WEBPACK_IMPORTED_MODULE_3__, _ResetPasswordForm__WEBPACK_IMPORTED_MODULE_4__, _VerifyCodeForm__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;