(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/main/main.scss
var main = __webpack_require__(258);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/ui/buttons/button_1/button_1.js
var button_1 = __webpack_require__(3110);
;// CONCATENATED MODULE: ./components/layout/main-header.js




function MainHeader(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "d-none d-lg-block",
                    children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                        className: "navbar navbar-expand-lg navbar-dark pt-4 pb-5",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "img-fluid",
                                            src: "/images/logo.png",
                                            style: {
                                                height: "50px"
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "navbar-toggler",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#navbarNavDropdown",
                                    "aria-controls": "navbarNavDropdown",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "collapse navbar-collapse dropdown-custom-menu",
                                    id: "navbarNavDropdown",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "navbar-nav ms-auto",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: "m-auto p-3",
                                                children: [
                                                    "Welcome ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("b", {
                                                        children: [
                                                            props.username,
                                                            "!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(button_1/* default */.Z, {
                                                    onClick: props.signOut,
                                                    to: "/",
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "nav-mobile-section",
                children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                    className: "navbar navbar-light",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container p-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/",
                                className: "navbar-brand d-lg-none",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "img-fluid",
                                        src: "/images/logo.png",
                                        style: {
                                            height: "30px"
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "navbar-toggler mb-2 d-lg-none",
                                type: "button",
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#navbarModal",
                                "aria-controls": "navbarModal",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "navbar-toggler-icon"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "modal fade",
                                id: "navbarModal",
                                tabIndex: "-1",
                                "aria-labelledby": "navbarModal",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "modal-dialog modal-fullscreen",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "modal-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "modal-header pb-3",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "container-fluid",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "row justify-content-between align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-10",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                    className: "modal-title text-black",
                                                                    id: "navbarModal",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "pb-3",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            className: "img-fluid",
                                                                            src: "/images/logo.png",
                                                                            style: {
                                                                                height: "30px"
                                                                            }
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-2 text-end",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    type: "button",
                                                                    className: "btn-close",
                                                                    "data-bs-dismiss": "modal",
                                                                    "aria-label": "Close"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "modal-body ps-md-5 ps-5",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    className: "navbar-nav ms-auto",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        onClick: props.signOut,
                                                        children: "Log Out"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const main_header = (MainHeader);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: ./pages/auth/signin.js
var signin = __webpack_require__(576);
;// CONCATENATED MODULE: ./components/layout/layout.js








function Layout({ children  }) {
    const { data , status  } = (0,react_.useSession)();
    const router = (0,navigation.useRouter)();
    if (status === "loading") {
        return null;
    }
    if (status === "authenticated") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(main_header, {
                    signOut: react_.signOut,
                    username: data.user.name
                }),
                /*#__PURE__*/ jsx_runtime.jsx("main", {
                    children: children
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        children: children
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js






function App({ Component , pageProps: { session , ...pageProps }  }) {
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(399);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ jsx_runtime.jsx(layout, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 258:
/***/ (() => {



/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,754,110,576], () => (__webpack_exec__(3071)));
module.exports = __webpack_exports__;

})();