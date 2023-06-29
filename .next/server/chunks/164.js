"use strict";
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 4830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getCognitoPoolVariables)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_secrets_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4657);
/* harmony import */ var _aws_sdk_client_secrets_manager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_secrets_manager__WEBPACK_IMPORTED_MODULE_0__);

async function getCognitoPoolVariables() {
    const secret_name = "CG_ALPHA";
    const client = new _aws_sdk_client_secrets_manager__WEBPACK_IMPORTED_MODULE_0__.SecretsManagerClient({
        region: "ap-southeast-2"
    });
    let response;
    try {
        response = await client.send(new _aws_sdk_client_secrets_manager__WEBPACK_IMPORTED_MODULE_0__.GetSecretValueCommand({
            SecretId: secret_name,
            VersionStage: "AWSCURRENT"
        }));
    } catch (error) {
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        throw error;
    }
    return JSON.parse(response.SecretString);
}


/***/ }),

/***/ 6164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authOptions": () => (/* binding */ authOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_cognito__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4008);
/* harmony import */ var next_auth_providers_cognito__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_cognito__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_getCognitoPoolVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4830);



const cognitoPoolValues = await (0,_helpers_getCognitoPoolVariables__WEBPACK_IMPORTED_MODULE_2__/* .getCognitoPoolVariables */ .h)();
const authOptions = {
    secret: cognitoPoolValues.NEXTAUTH_SECRET,
    providers: [
        next_auth_providers_cognito__WEBPACK_IMPORTED_MODULE_1___default()({
            clientId: cognitoPoolValues.NEXT_PUBLIC_COGNITO_CLIENT_ID,
            clientSecret: cognitoPoolValues.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
            issuer: cognitoPoolValues.NEXT_PUBLIC_COGNITO_ISSUER
        })
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

};
;