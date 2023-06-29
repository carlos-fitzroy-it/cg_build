exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 1501:
/***/ ((module) => {

// Exports
module.exports = {
	"button_1": "button_1_button_1__INF8A"
};


/***/ }),

/***/ 3110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_1_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1501);
/* harmony import */ var _button_1_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_1_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Button_1(props) {
    if (props.link) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: (_button_1_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_1),
        href: props.link,
        children: props.children
    });
    else if (props.type) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_button_1_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_1),
        type: props.type,
        children: props.children
    });
    else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_button_1_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_1),
        onClick: props.onClick,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button_1);


/***/ })

};
;