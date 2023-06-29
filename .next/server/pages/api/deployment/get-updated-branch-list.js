"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492,748];
exports.modules = {

/***/ 4657:
/***/ ((module) => {

module.exports = require("@aws-sdk/client-secrets-manager");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 4008:
/***/ ((module) => {

module.exports = require("next-auth/providers/cognito");

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 5248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6164);
/* harmony import */ var _helpers_runTerminalCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__]);
_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);
    if (session) {
        // Signed in
        try {
            const responseData = await (0,_helpers_runTerminalCommand__WEBPACK_IMPORTED_MODULE_2__/* .runTerminalCommand */ .g)(`git fetch -p && git branch -r`);
            let commandLineString = responseData.message.replace("Success!. ", "").trim();
            commandLineString = commandLineString.trim().replace(/^\s*[a-z]+\//gm, "").split("\n").filter((branch)=>{
                return !branch.includes("HEAD ->");
            });
            if (responseData.message.includes("From https://github.com")) res.status(responseData.status).json({
                repoBranchList: [
                    ""
                ],
                isRepoBranchUpdated: true
            });
            else res.status(responseData.status).json({
                repoBranchList: commandLineString,
                isRepoBranchUpdated: false
            });
        } catch (error) {
            res.status(500).json({
                error: error,
                isRepoBranchUpdated: true
            });
        }
    } else {
        // Not Signed in
        res.status(401).json({
            success: false,
            status: 401,
            error: "Unauthenticated"
        });
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [164,462], () => (__webpack_exec__(5248)));
module.exports = __webpack_exports__;

})();