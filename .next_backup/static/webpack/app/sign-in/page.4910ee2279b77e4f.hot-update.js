"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/sign-in/page",{

/***/ "(app-pages-browser)/./app/sign-in/page.tsx":
/*!******************************!*\
  !*** ./app/sign-in/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _signIn_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signIn.module.css */ \"(app-pages-browser)/./app/sign-in/signIn.module.css\");\n/* harmony import */ var _signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signIn_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Importing CSS module for styling\nconst SignInPage = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!email || !password) {\n            setError(\"Both fields are required.\");\n            return;\n        }\n        setError(\"\");\n        console.log(\"Signing in with\", {\n            email,\n            password\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().signInBox),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                    children: [\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().field),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    placeholder: \"Enter your email\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().field),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                                    placeholder: \"Enter your password\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/forgot-password\",\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().forgotPassword),\n                                    children: \"Forgot your password?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().orSeparator),\n                    children: \"or\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialButtons),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialButton), \" \").concat((_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().microsoftButton)),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/icons/microsoft-placeholder.png\",\n                                    alt: \"Microsoft\",\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Continue with Microsoft\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\".concat((_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialButton), \" \").concat((_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().googleButton)),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/icons/google-placeholder.png\",\n                                    alt: \"Google\",\n                                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Continue with Google\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().additionalLinks),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/sign-up\",\n                                className: (_signIn_module_css__WEBPACK_IMPORTED_MODULE_2___default().signUpLink),\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 37\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\goril\\\\OneDrive\\\\Documents\\\\uk-hockey\\\\app\\\\sign-in\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInPage, \"Mo0y3DcwABf2JuX2Ot7Vabl3QMk=\");\n_c = SignInPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInPage);\nvar _c;\n$RefreshReg$(_c, \"SignInPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zaWduLWluL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ0MsQ0FBQyxtQ0FBbUM7QUFFN0UsTUFBTUcsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVMsZUFBZSxDQUFDQztRQUNwQkEsTUFBTUMsY0FBYztRQUVwQixJQUFJLENBQUNSLFNBQVMsQ0FBQ0UsVUFBVTtZQUN2QkcsU0FBUztZQUNUO1FBQ0Y7UUFFQUEsU0FBUztRQUNUSSxRQUFRQyxHQUFHLENBQUMsbUJBQW1CO1lBQUVWO1lBQU9FO1FBQVM7SUFDbkQ7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBV2QscUVBQWdCO2tCQUM5Qiw0RUFBQ2E7WUFBSUMsV0FBV2QscUVBQWdCOzs4QkFDOUIsOERBQUNpQjtvQkFBR0gsV0FBV2QsaUVBQVk7OEJBQUU7Ozs7Ozs4QkFDN0IsOERBQUNtQjtvQkFBS0MsVUFBVVo7b0JBQWNNLFdBQVdkLGdFQUFXOzt3QkFDakRNLHVCQUFTLDhEQUFDZTs0QkFBRVAsV0FBV2QsaUVBQVk7c0NBQUdNOzs7Ozs7c0NBQ3ZDLDhEQUFDTzs0QkFBSUMsV0FBV2QsaUVBQVk7OzhDQUMxQiw4REFBQ3VCO29DQUFNQyxTQUFRO29DQUFRVixXQUFXZCxpRUFBWTs4Q0FBRTs7Ozs7OzhDQUNoRCw4REFBQ3lCO29DQUNDQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxPQUFPMUI7b0NBQ1AyQixVQUFVLENBQUNDLElBQU0zQixTQUFTMkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUN4Q2QsV0FBV2QsaUVBQVk7b0NBQ3ZCZ0MsYUFBWTtvQ0FDWkMsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDcEI7NEJBQUlDLFdBQVdkLGlFQUFZOzs4Q0FDMUIsOERBQUN1QjtvQ0FBTUMsU0FBUTtvQ0FBV1YsV0FBV2QsaUVBQVk7OENBQUU7Ozs7Ozs4Q0FDbkQsOERBQUN5QjtvQ0FDQ0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsT0FBT3hCO29DQUNQeUIsVUFBVSxDQUFDQyxJQUFNekIsWUFBWXlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDM0NkLFdBQVdkLGlFQUFZO29DQUN2QmdDLGFBQVk7b0NBQ1pDLFFBQVE7Ozs7Ozs4Q0FFViw4REFBQ0M7b0NBQUVDLE1BQUs7b0NBQW1CckIsV0FBV2QsMEVBQXFCOzhDQUFFOzs7Ozs7Ozs7Ozs7c0NBRS9ELDhEQUFDcUM7NEJBQU9YLE1BQUs7NEJBQVNaLFdBQVdkLGtFQUFhO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDYTtvQkFBSUMsV0FBV2QsdUVBQWtCOzhCQUFFOzs7Ozs7OEJBQ3BDLDhEQUFDYTtvQkFBSUMsV0FBV2QseUVBQW9COztzQ0FDbEMsOERBQUNxQzs0QkFBT3ZCLFdBQVcsR0FBMEJkLE9BQXZCQSx3RUFBbUIsRUFBQyxLQUEwQixPQUF2QkEsMkVBQXNCOzs4Q0FDakUsOERBQUMwQztvQ0FBSUMsS0FBSTtvQ0FBbUNDLEtBQUk7b0NBQVk5QixXQUFXZCxnRUFBVzs7Ozs7O2dDQUFJOzs7Ozs7O3NDQUV4Riw4REFBQ3FDOzRCQUFPdkIsV0FBVyxHQUEwQmQsT0FBdkJBLHdFQUFtQixFQUFDLEtBQXVCLE9BQXBCQSx3RUFBbUI7OzhDQUM5RCw4REFBQzBDO29DQUFJQyxLQUFJO29DQUFnQ0MsS0FBSTtvQ0FBUzlCLFdBQVdkLGdFQUFXOzs7Ozs7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7OEJBR3BGLDhEQUFDYTtvQkFBSUMsV0FBV2QsMkVBQXNCOzhCQUNwQyw0RUFBQ3FCOzs0QkFBRTswQ0FBdUIsOERBQUNhO2dDQUFFQyxNQUFLO2dDQUFXckIsV0FBV2Qsc0VBQWlCOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JGO0dBakVNQztLQUFBQTtBQW1FTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2lnbi1pbi9wYWdlLnRzeD9mMGExIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2lnbkluLm1vZHVsZS5jc3MnOyAvLyBJbXBvcnRpbmcgQ1NTIG1vZHVsZSBmb3Igc3R5bGluZ1xyXG5cclxuY29uc3QgU2lnbkluUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgc2V0RXJyb3IoJ0JvdGggZmllbGRzIGFyZSByZXF1aXJlZC4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yKCcnKTtcclxuICAgIGNvbnNvbGUubG9nKCdTaWduaW5nIGluIHdpdGgnLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJveH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5TaWduIEluPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290UGFzc3dvcmR9PkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5TaWduIEluPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JTZXBhcmF0b3J9Pm9yPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxCdXR0b25zfT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc29jaWFsQnV0dG9ufSAke3N0eWxlcy5taWNyb3NvZnRCdXR0b259YH0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL21pY3Jvc29mdC1wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJNaWNyb3NvZnRcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPiBDb250aW51ZSB3aXRoIE1pY3Jvc29mdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNvY2lhbEJ1dHRvbn0gJHtzdHlsZXMuZ29vZ2xlQnV0dG9ufWB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9nb29nbGUtcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiR29vZ2xlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz4gQ29udGludWUgd2l0aCBHb29nbGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaXRpb25hbExpbmtzfT5cclxuICAgICAgICAgIDxwPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIi9zaWduLXVwXCIgY2xhc3NOYW1lPXtzdHlsZXMuc2lnblVwTGlua30+U2lnbiB1cDwvYT48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2lnbkluUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic2lnbkluQm94IiwiaDEiLCJ0aXRsZSIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJmaWVsZCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYSIsImhyZWYiLCJmb3Jnb3RQYXNzd29yZCIsImJ1dHRvbiIsIm9yU2VwYXJhdG9yIiwic29jaWFsQnV0dG9ucyIsInNvY2lhbEJ1dHRvbiIsIm1pY3Jvc29mdEJ1dHRvbiIsImltZyIsInNyYyIsImFsdCIsImljb24iLCJnb29nbGVCdXR0b24iLCJhZGRpdGlvbmFsTGlua3MiLCJzaWduVXBMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/sign-in/page.tsx\n"));

/***/ })

});