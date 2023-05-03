"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 4367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ contrastText),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createGradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9409);

// utils

// SETUP COLORS
const contrastText = {
    white: "#FFFFFF",
    black: "#212B36"
};
const PRIMARY = {
    lighter: "#FEE9D1",
    light: "#FDAB76",
    main: "#FA541C",
    dark: "#B3200E",
    darker: "#770508",
    contrastText: contrastText.white
};
const SECONDARY = {
    lighter: "#D2FCF4",
    light: "#77F0ED",
    main: "#22B8CF",
    dark: "#116E95",
    darker: "#063963",
    contrastText: contrastText.white
};
const INFO = {
    lighter: "#CBFEFC",
    light: "#63E8F9",
    main: "#00B1ED",
    dark: "#0067AA",
    darker: "#003471",
    contrastText: contrastText.white
};
const SUCCESS = {
    lighter: "#CDFCD1",
    light: "#69F290",
    main: "#0CD66E",
    dark: "#069A6B",
    darker: "#02665B",
    contrastText: contrastText.black
};
const WARNING = {
    lighter: "#FFF8D1",
    light: "#FFE475",
    main: "#FFC81A",
    dark: "#B7860D",
    darker: "#7A5204",
    contrastText: contrastText.black
};
const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
    contrastText: contrastText.white
};
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    500_8: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.08),
    500_12: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.12),
    500_16: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.16),
    500_24: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.24),
    500_32: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.32),
    500_48: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.48),
    500_56: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.56),
    500_80: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)("#919EAB", 0.8)
};
const GRADIENTS = {
    primary: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(PRIMARY.light, PRIMARY.main),
    secondary: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(SECONDARY.light, SECONDARY.main),
    info: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(INFO.light, INFO.main),
    success: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(SUCCESS.light, SUCCESS.main),
    warning: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(WARNING.light, WARNING.main),
    error: (0,_utils_createGradient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ERROR.light, ERROR.main)
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        ...PRIMARY,
        contrastText: "#fff"
    },
    secondary: {
        ...SECONDARY,
        contrastText: "#fff"
    },
    info: {
        ...INFO,
        contrastText: "#fff"
    },
    success: {
        ...SUCCESS,
        contrastText: GREY[800]
    },
    warning: {
        ...WARNING,
        contrastText: GREY[800]
    },
    error: {
        ...ERROR,
        contrastText: "#fff"
    },
    grey: GREY,
    gradients: GRADIENTS,
    divider: GREY[500_24],
    action: {
        hover: GREY[500_8],
        selected: GREY[500_12],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
const palette = {
    light: {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#fff",
            default: "#fff",
            neutral: GREY[100]
        },
        action: {
            active: GREY[600],
            ...COMMON.action
        }
    },
    dark: {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#fff",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: GREY[500_12]
        },
        action: {
            active: GREY[500],
            ...COMMON.action
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (palette);


/***/ }),

/***/ 9409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createGradient)
/* harmony export */ });
// ----------------------------------------------------------------------
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
};


/***/ })

};
;