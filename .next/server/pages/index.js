"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ fetchAPIData)
/* harmony export */ });
// Helper API Caller
async function fetchAPIData(url, method, body = null, param = null) {
    let requestInfo = null;
    requestInfo = {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body
    };
    return fetch(url, requestInfo).then((response)=>response.json());
}


/***/ }),

/***/ 6103:
/***/ (() => {


// UNUSED EXPORTS: getCognitoPoolVariables

;// CONCATENATED MODULE: external "@aws-sdk/client-secrets-manager"
const client_secrets_manager_namespaceObject = require("@aws-sdk/client-secrets-manager");
;// CONCATENATED MODULE: ./helpers/getCognitoPoolVariables.js

async function getCognitoPoolVariables() {
    const secret_name = "CG_ALPHA";
    const client = new SecretsManagerClient({
        region: "ap-southeast-2"
    });
    let response;
    try {
        response = await client.send(new GetSecretValueCommand({
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

/***/ 6008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);

//HOC to validate if the user has been authenticated or not. If authenticated: redirect to homepage. Else: redirect to login page (/auth/signin)
function validateSession(gssp) {
    return async (context)=>{
        const { req  } = context;
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
            req
        });
        if (!session) {
            return {
                redirect: {
                    destination: "/auth/signin"
                }
            };
        }
        return await gssp(context);
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateSession);


/***/ }),

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_ui_buttons_button_1_button_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3110);
/* harmony import */ var _helpers_validateSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6008);
/* harmony import */ var _helpers_fetchAPIData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1050);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_getCognitoPoolVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);
swr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const fetcher = (url)=>(0,_helpers_fetchAPIData__WEBPACK_IMPORTED_MODULE_7__/* .fetchAPIData */ .h)(url, "get");
function Homepage() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])("/api/deployment/get-updated-branch-list", fetcher);
    const [deploymentData, setDeploymentData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        virtualHost: "",
        repoBranch: "",
        responseMessage: ""
    });
    const [virtualHostKey, repoBranchKey] = Object.keys(deploymentData);
    const onChangeHandler = (e)=>{
        setDeploymentData({
            ...deploymentData,
            responseMessage: "",
            [e.target.name]: e.target.value
        });
    };
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "homepage-error",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Failed to load. ",
                    error
                ]
            })
        })
    });
    if (isLoading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "homepage-error",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Loading..."
            })
        })
    });
    const onSubmitHandler = (method)=>async (e)=>{
            e.preventDefault();
            const responseData = await (0,_helpers_fetchAPIData__WEBPACK_IMPORTED_MODULE_7__/* .fetchAPIData */ .h)(`/api/deployment/deploy`, method, JSON.stringify(deploymentData));
            setDeploymentData({
                ...deploymentData,
                responseMessage: responseData.data.message
            });
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "deployment-page",
        children: [
            data.isRepoBranchUpdated ? router.reload() : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center p-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Deployment Page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Select a virtual host and a repository branch to deploy"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: onSubmitHandler("post"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "d-flex-column align-items-center justify-content-center text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            className: "form-input d-inline-block",
                                            id: virtualHostKey,
                                            name: virtualHostKey,
                                            onChange: onChangeHandler,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    className: "text-center",
                                                    children: "Select a Virtual Host"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t1",
                                                    children: "/usr/share/nginx/html/t1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t2",
                                                    children: "/usr/share/nginx/html/t2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t3",
                                                    children: "/usr/share/nginx/html/t3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t4",
                                                    children: "/usr/share/nginx/html/t4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t5",
                                                    children: "/usr/share/nginx/html/t5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t6",
                                                    children: "/usr/share/nginx/html/t6"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t7",
                                                    children: "/usr/share/nginx/html/t7"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t8",
                                                    children: "/usr/share/nginx/html/t8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t9",
                                                    children: "/usr/share/nginx/html/t9"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "/usr/share/nginx/html/t10",
                                                    children: "/usr/share/nginx/html/t10"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            className: "form-input d-inline-block",
                                            id: repoBranchKey,
                                            name: repoBranchKey,
                                            onChange: onChangeHandler,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    className: "text-center",
                                                    children: "Select a Branch"
                                                }),
                                                data.repoBranchList.map((branch, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: branch,
                                                        children: branch
                                                    }, index))
                                            ]
                                        })
                                    }),
                                    deploymentData.virtualHost && deploymentData.repoBranch ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_buttons_button_1_button_1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        type: "submit",
                                        children: "Deploy"
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: deploymentData.responseMessage
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);
const getServerSideProps = (0,_helpers_validateSession__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async (context)=>{
    return {
        props: {
            providers: null
        }
    };
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,110], () => (__webpack_exec__(9241)));
module.exports = __webpack_exports__;

})();