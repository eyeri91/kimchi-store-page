/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n5. Use the user's configured `sans` font-feature-settings by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n  font-feature-settings: normal; /* 5 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted currentColor;\\n          text-decoration: underline dotted currentColor;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/* Make elements with the HTML hidden attribute stay hidden by default */\\n[hidden] {\\n  display: none;\\n}\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.container {\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  padding-right: 2rem;\\n  padding-left: 2rem;\\n}\\n@media (min-width: 640px) {\\n\\n  .container {\\n    max-width: 640px;\\n  }\\n}\\n@media (min-width: 768px) {\\n\\n  .container {\\n    max-width: 768px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n\\n  .container {\\n    max-width: 1024px;\\n  }\\n}\\n@media (min-width: 1280px) {\\n\\n  .container {\\n    max-width: 1280px;\\n  }\\n}\\n@media (min-width: 1536px) {\\n\\n  .container {\\n    max-width: 1536px;\\n  }\\n}\\n.visible {\\n  visibility: visible;\\n}\\n.collapse {\\n  visibility: collapse;\\n}\\n.absolute {\\n  position: absolute;\\n}\\n.relative {\\n  position: relative;\\n}\\n.-left-\\\\[1px\\\\] {\\n  left: -1px;\\n}\\n.-top-\\\\[50px\\\\] {\\n  top: -50px;\\n}\\n.m-8 {\\n  margin: 72px;\\n}\\n.my-3 {\\n  margin-top: 16px;\\n  margin-bottom: 16px;\\n}\\n.my-2 {\\n  margin-top: 12px;\\n  margin-bottom: 12px;\\n}\\n.mt-4 {\\n  margin-top: 24px;\\n}\\n.mt-3 {\\n  margin-top: 16px;\\n}\\n.mb-3 {\\n  margin-bottom: 16px;\\n}\\n.block {\\n  display: block;\\n}\\n.flex {\\n  display: flex;\\n}\\n.table {\\n  display: table;\\n}\\n.grid {\\n  display: grid;\\n}\\n.contents {\\n  display: contents;\\n}\\n.hidden {\\n  display: none;\\n}\\n.h-\\\\[150px\\\\] {\\n  height: 150px;\\n}\\n.w-3 {\\n  width: 16px;\\n}\\n.w-2 {\\n  width: 12px;\\n}\\n.w-3\\\\/4 {\\n  width: 75%;\\n}\\n.w-2\\\\/5 {\\n  width: 40%;\\n}\\n.min-w-fit {\\n  min-width: -moz-fit-content;\\n  min-width: fit-content;\\n}\\n.max-w-2xl {\\n  max-width: 42rem;\\n}\\n.basis-3 {\\n  flex-basis: 16px;\\n}\\n.border-collapse {\\n  border-collapse: collapse;\\n}\\n.transform {\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.resize {\\n  resize: both;\\n}\\n.grid-cols-1 {\\n  grid-template-columns: repeat(1, minmax(0, 1fr));\\n}\\n.grid-cols-2 {\\n  grid-template-columns: repeat(2, minmax(0, 1fr));\\n}\\n.grid-rows-2 {\\n  grid-template-rows: repeat(2, minmax(0, 1fr));\\n}\\n.grid-rows-1 {\\n  grid-template-rows: repeat(1, minmax(0, 1fr));\\n}\\n.flex-col {\\n  flex-direction: column;\\n}\\n.items-center {\\n  align-items: center;\\n}\\n.justify-center {\\n  justify-content: center;\\n}\\n.gap-4 {\\n  gap: 24px;\\n}\\n.rounded-lg {\\n  border-radius: 0.5rem;\\n}\\n.rounded-md {\\n  border-radius: 0.375rem;\\n}\\n.rounded-sm {\\n  border-radius: 0.125rem;\\n}\\n.rounded-b-none {\\n  border-bottom-right-radius: 0px;\\n  border-bottom-left-radius: 0px;\\n}\\n.rounded-t-md {\\n  border-top-left-radius: 0.375rem;\\n  border-top-right-radius: 0.375rem;\\n}\\n.rounded-tl-none {\\n  border-top-left-radius: 0px;\\n}\\n.border {\\n  border-width: 1px;\\n}\\n.border-b-2 {\\n  border-bottom-width: 2px;\\n}\\n.border-b {\\n  border-bottom-width: 1px;\\n}\\n.border-solid {\\n  border-style: solid;\\n}\\n.border-dotted {\\n  border-style: dotted;\\n}\\n.border-yellow-900 {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(113, 63, 18, var(--tw-border-opacity));\\n}\\n.border-yellow-700 {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(161, 98, 7, var(--tw-border-opacity));\\n}\\n.border-neutral-400 {\\n  --tw-border-opacity: 1;\\n  border-color: rgba(163, 163, 163, var(--tw-border-opacity));\\n}\\n.bg-neutral {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(255, 247, 240, var(--tw-bg-opacity));\\n}\\n.bg-lightPink {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(252, 213, 206, var(--tw-bg-opacity));\\n}\\n.bg-cream {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(255, 252, 242, var(--tw-bg-opacity));\\n}\\n.bg-gray {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(245, 245, 244, var(--tw-bg-opacity));\\n}\\n.bg-opacity-40 {\\n  --tw-bg-opacity: 0.4;\\n}\\n.bg-opacity-60 {\\n  --tw-bg-opacity: 0.6;\\n}\\n.p-4 {\\n  padding: 24px;\\n}\\n.p-2 {\\n  padding: 12px;\\n}\\n.py-2 {\\n  padding-top: 12px;\\n  padding-bottom: 12px;\\n}\\n.px-3 {\\n  padding-left: 16px;\\n  padding-right: 16px;\\n}\\n.px-2 {\\n  padding-left: 12px;\\n  padding-right: 12px;\\n}\\n.pb-1 {\\n  padding-bottom: 8px;\\n}\\n.pt-1 {\\n  padding-top: 8px;\\n}\\n.pb-2 {\\n  padding-bottom: 12px;\\n}\\n.text-left {\\n  text-align: left;\\n}\\n.text-center {\\n  text-align: center;\\n}\\n.text-3xl {\\n  font-size: 1.953rem;\\n}\\n.text-5xl {\\n  font-size: 3.052rem;\\n}\\n.text-6xl {\\n  font-size: 3.75rem;;\\n}\\n.text-2xl {\\n  font-size: 1.563rem;\\n}\\n.text-xl {\\n  font-size: 1.25rem;\\n}\\n.underline {\\n  text-decoration-line: underline;\\n}\\n.outline {\\n  outline-style: solid;\\n}\\n\\n/* Set content div relatve and then move tab buttons */\\n:root {\\n  /* Colors */\\n  --cream: #fffcf2;\\n  --neutral: #f8edeb;\\n  --bright-pink: #fcd5ce;\\n  --rose: #ffb5a7;\\n  --bright-nude: #f9dcc4;\\n  --nude: #fec89a;\\n\\n  /* Fonts */\\n  --main-font: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.tab-buttons-container-bottom::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  bottom: 0px;\\n  left: 1px;\\n  height: 0px;\\n  width: 247.5px;\\n  border-top: solid 1px #fffcf2;\\n  border-top: solid 1px var(--cream);\\n}\\n\\n.clicked-tab-button-bg-color {\\n  background-color: #fffcf2;\\n  background-color: var(--cream);\\n}\\n\\n.first-line\\\\:basis-3\\\\/4::first-line {\\n  flex-basis: 75%;\\n}\\n\\n@media (min-width: 640px) {\\n\\n  .sm\\\\:h-\\\\[200px\\\\] {\\n    height: 200px;\\n  }\\n\\n  .sm\\\\:w-\\\\[400px\\\\] {\\n    width: 400px;\\n  }\\n\\n  .sm\\\\:grid-cols-2 {\\n    grid-template-columns: repeat(2, minmax(0, 1fr));\\n  }\\n\\n  .sm\\\\:grid-rows-1 {\\n    grid-template-rows: repeat(1, minmax(0, 1fr));\\n  }\\n\\n  .sm\\\\:text-5xl {\\n    font-size: 3.052rem;\\n  }\\n}\\n\\n@media (min-width: 768px) {\\n\\n  .md\\\\:text-6xl {\\n    font-size: 3.75rem;;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utility.js */ \"./src/utils/utility.js\");\n/* harmony import */ var _tab_modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab_modules/home.js */ \"./src/tab_modules/home.js\");\n/* harmony import */ var _tab_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab_modules/menu.js */ \"./src/tab_modules/menu.js\");\n/* harmony import */ var _tab_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab_modules/contact.js */ \"./src/tab_modules/contact.js\");\n\n\n\n\n\n\nconst contentContainer = document.getElementById(\"content\");\n\nconst tabButtonObjectsList = [\n  {\n    buttonText: \"Home\",\n    buttonId: \"home-tab-btn\",\n    connectedPage: () => (0,_tab_modules_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n  },\n  {\n    buttonText: \"Menu\",\n    buttonId: \"menu-tab-btn\",\n    connectedPage: () => (0,_tab_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n  },\n  {\n    buttonText: \"Contact\",\n    buttonId: \"contact-tab-btn\",\n    connectedPage: () => (0,_tab_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n  },\n];\n\nconst tabButtonsContainer = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\");\ntabButtonsContainer.id = \"tab-btns-container\";\ntabButtonsContainer.classList.add(\n  \"rounded-lg\",\n  \"rounded-b-none\",\n  \"absolute\",\n  \"-left-[1px]\",\n  \"-top-[50px]\",\n  \"tab-buttons-container-bottom\"\n);\n\n// # Apply currying to common functions for all tabs.\nconst removeAllChildNodes = (id) => () => {\n  const contentBody = document.getElementById(id);\n  if (contentBody.hasChildNodes()) contentBody.replaceChildren();\n};\n\nconst removeAllChildNodesOfContentBody = removeAllChildNodes(\"content-body\");\n\nconst updateElementText = (id) => (text) =>\n  (document.getElementById(id).textContent = text);\n\nconst updateContenTitleTextContent = updateElementText(\"content-title\");\n\n// const addClassToElement =\n//   (selector) =>\n//   (...classes) =>\n//     document.querySelector(selector).classList.add(...classes);\n\nconst contentTitle = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\", \"Home\");\ncontentTitle.id = \"content-title\";\ncontentTitle.classList.add(\n  \"text-2xl\",\n  \"border-b-2\",\n  \"border-dotted\",\n  \"border-yellow-700\",\n  \"pb-1\"\n);\n\nconst contentBodyContainer = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"div\");\ncontentBodyContainer.id = \"content-body\";\ncontentBodyContainer.classList.add(\n  \"mt-4\",\n  \"flex\",\n  \"flex-col\",\n  \"justify-center\",\n  \"items-center\"\n);\n\ncontentContainer.append(\n  tabButtonsContainer,\n  contentTitle,\n  contentBodyContainer\n);\n\nfor (const tabButtonObject of tabButtonObjectsList) {\n  const tabButton = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"button\", tabButtonObject.buttonText);\n  tabButton.id = tabButtonObject.buttonId;\n  tabButton.classList.add(\n    \"py-2\",\n    \"px-3\",\n    \"border\",\n    \"rounded-t-md\",\n    \"border-solid\",\n    \"border-yellow-700\",\n    \"bg-lightPink\",\n    \"bg-opacity-60\"\n  );\n  tabButtonsContainer.append(tabButton);\n\n  // Add event handlers to each tab button.\n  tabButton.addEventListener(\"click\", () => {\n    removeAllChildNodesOfContentBody();\n    toggleTabButtonColor(tabButton);\n    updateContenTitleTextContent(tabButtonObject.buttonText);\n    tabButtonObject.connectedPage();\n  });\n}\n\nfunction toggleTabButtonColor(tabButton) {\n  for (const button of tabButtonObjectsList) {\n    if (button.buttonId === tabButton.id) {\n      tabButton.classList.add(\"bg-cream\", \"bg-opacity-40\");\n    } else {\n      const otherButton = document.getElementById(button.buttonId);\n      otherButton.classList.remove(\"bg-cream\", \"bg-opacity-40\");\n    }\n  }\n}\n\n(0,_tab_modules_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/tab_modules/contact.js":
/*!************************************!*\
  !*** ./src/tab_modules/contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utility.js */ \"./src/utils/utility.js\");\n/* harmony import */ var _imgs_dubai_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/dubai.jpg */ \"./src/imgs/dubai.jpg\");\n/* harmony import */ var _imgs_seoul_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/seoul.jpg */ \"./src/imgs/seoul.jpg\");\n/* harmony import */ var _imgs_budapest_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/budapest.jpg */ \"./src/imgs/budapest.jpg\");\n\n\n\n\n\n\nconst branchObjectsList = [\n  {\n    title: \"Dubai\",\n    image: _imgs_dubai_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    location: \"SZR, Dubai, United Arab Emirates\",\n    phone: \"123-1234-1234\",\n    email: \"dubai_kimchi@mkbty.com\",\n  },\n  {\n    title: \"Seoul\",\n    image: _imgs_seoul_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    location: \"Myeong-dong, Seoul, South Korea\",\n    phone: \"456-4567-4567\",\n    email: \"seoul_kimchi@mkbty.com\",\n  },\n  {\n    title: \"Budapest\",\n    image: _imgs_budapest_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    location: \"Blah\",\n    phone: \"Budapest, Hungary\",\n    email: \"budapest_kimchi@mkbty.com\",\n  },\n];\n\nfunction openContactPage() {\n  const contentBodyContainer = document.getElementById(\"content-body\");\n\n  for (const branch of branchObjectsList) {\n    const branchDiv = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.makeSemiTitle)(`${branch.title} ` + \"Branch\");\n    contentBodyContainer.append(branchDiv);\n    const branchImage = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(branch.image, 400);\n    contentBodyContainer.append(branchImage);\n\n    const branchDetailsDiv = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    contentBodyContainer.append(branchDetailsDiv);\n    branchDetailsDiv.classList.add(\n      \"text-left\",\n      \"p-2\",\n      \"pt-1\",\n      \"rounded-md\",\n      \"bg-gray\",\n      \"min-w-fit\",\n      \"sm:w-[400px]\",\n      \"my-3\"\n    );\n    const branchDetailsHeading = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h\", branch.title);\n    branchDetailsHeading.classList.add(\"text-xl\", \"pb-2\");\n    branchDetailsDiv.append(branchDetailsHeading);\n    const branchDetailsParagrapgh = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n      \"p\",\n      `Address: ${branch.location} \\n Phone: ${branch.phone} \\n Email: ${branch.email}`\n    );\n    branchDetailsDiv.append(branchDetailsParagrapgh);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openContactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab_modules/contact.js?");

/***/ }),

/***/ "./src/tab_modules/home.js":
/*!*********************************!*\
  !*** ./src/tab_modules/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utility.js */ \"./src/utils/utility.js\");\n/* harmony import */ var _imgs_kimchi_history_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/kimchi-history.jpg */ \"./src/imgs/kimchi-history.jpg\");\n\n\n\nfunction openHomePage() {\n  const contentBodyContainer = document.getElementById(\"content-body\");\n\n  const kimchiImageForHomeTab = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_kimchi_history_jpg__WEBPACK_IMPORTED_MODULE_1__, 500);\n  contentBodyContainer.append(kimchiImageForHomeTab);\n\n  const storeHomeParagraph = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n    \"p\",\n    \"The history has started since 1991. The best kimchi in the town. That was the aim of the ....\"\n  );\n  storeHomeParagraph.classList.add(\"my-3\", \"px-2\", \"w-3/4\");\n  contentBodyContainer.append(storeHomeParagraph);\n\n  const homeTabButton = document.getElementById(\"home-tab-btn\");\n  homeTabButton.classList.add(\"bg-cream\", \"bg-opacity-40\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openHomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab_modules/home.js?");

/***/ }),

/***/ "./src/tab_modules/menu.js":
/*!*********************************!*\
  !*** ./src/tab_modules/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utility.js */ \"./src/utils/utility.js\");\n/* harmony import */ var _imgs_cab_baechu_kimchi_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/cab-baechu-kimchi.jpg */ \"./src/imgs/cab-baechu-kimchi.jpg\");\n/* harmony import */ var _imgs_cab_dongchimi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/cab-dongchimi.jpg */ \"./src/imgs/cab-dongchimi.jpg\");\n/* harmony import */ var _imgs_non_cab_kkakdugi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/non-cab-kkakdugi.jpg */ \"./src/imgs/non-cab-kkakdugi.jpg\");\n/* harmony import */ var _imgs_non_cab_pakimchi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/non-cab-pakimchi.jpg */ \"./src/imgs/non-cab-pakimchi.jpg\");\n/* harmony import */ var _imgs_side_veggi_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/side-veggi.jpg */ \"./src/imgs/side-veggi.jpg\");\n/* harmony import */ var _imgs_side_non_veggi_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/side-non-veggi.jpg */ \"./src/imgs/side-non-veggi.jpg\");\n\n\n\n\n\n\n\n\n\nconst cabbageKimchiList = [\"Baechu kimchi\", \"Dongchimi\"];\nconst nonCabbageKimchiList = [\"Kkakdugi\", \"Pa-kimchi\"];\nconst otherDishesList = [\"Vegetarian\", \"Non-vegetarian\"];\n\nfunction openMenuPage() {\n  const contentBodyContainer = document.getElementById(\"content-body\");\n\n  const cabbageKimchiTitleContainer = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.makeSemiTitle)(\"Cabbage Kimchi\");\n  cabbageKimchiTitleContainer.classList.remove(\"mt-3\");\n  contentBodyContainer.append(cabbageKimchiTitleContainer);\n\n  // Img sources for cabbage kimchi\n  const cabbageKimchiImage1 = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_cab_baechu_kimchi_jpg__WEBPACK_IMPORTED_MODULE_1__);\n  const cabbageKimchiImage2 = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_cab_dongchimi_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n  // Kimchi grid\n  const cabbageKimchiGrid = createImageGrid(\"cabbage\", cabbageKimchiList);\n  findImageDivAndLoadImage(\"cabbage-0\", cabbageKimchiImage1);\n  findImageDivAndLoadImage(\"cabbage-1\", cabbageKimchiImage2);\n\n  contentBodyContainer.append(cabbageKimchiGrid);\n\n  // Img sources for non-cabbage kimchi\n  const nonCabbageKimchiImage1 = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_non_cab_kkakdugi_jpg__WEBPACK_IMPORTED_MODULE_3__);\n  const nonCabbageKimchiImage2 = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_non_cab_pakimchi_jpg__WEBPACK_IMPORTED_MODULE_4__);\n\n  // Non-cabbage kimchi grid\n  const nonCabbageKimchiTitleContainer = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.makeSemiTitle)(\"Other Kimchi\");\n  contentBodyContainer.append(nonCabbageKimchiTitleContainer);\n  const otherKimchiGrid = createImageGrid(\"non-cabbage\", nonCabbageKimchiList);\n  findImageDivAndLoadImage(\"non-cabbage-0\", nonCabbageKimchiImage1);\n  findImageDivAndLoadImage(\"non-cabbage-1\", nonCabbageKimchiImage2);\n  contentBodyContainer.append(otherKimchiGrid);\n\n  // Img sources for other dishes\n  const sideDishImage1 = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_side_veggi_jpg__WEBPACK_IMPORTED_MODULE_5__);\n  const sideDishImage2 = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.getImageSourceAndStyle)(_imgs_side_non_veggi_jpg__WEBPACK_IMPORTED_MODULE_6__);\n\n  // Side dishes grid\n  const otherDishesTitleContainer = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.makeSemiTitle)(\"Other dishes\");\n  contentBodyContainer.append(otherDishesTitleContainer);\n  const otherDishesGrid = createImageGrid(\"other-dishes\", otherDishesList);\n  findImageDivAndLoadImage(\"other-dishes-0\", sideDishImage1);\n  findImageDivAndLoadImage(\"other-dishes-1\", sideDishImage2);\n  contentBodyContainer.append(otherDishesGrid);\n}\n\nfunction createImageGrid(menuCategory, menuList) {\n  const imageGridContainer = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n  imageGridContainer.classList.add(\n    \"grid\",\n    \"grid-rows-2\",\n    \"grid-cols-1\",\n    \"sm:grid-rows-1\",\n    \"sm:grid-cols-2\",\n    \"gap-4\"\n  );\n\n  for (let i = 0; i < 2; i++) {\n    const kimchiImageDiv = (0,_utils_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\n    kimchiImageDiv.id = `${menuCategory}-${i}`;\n    kimchiImageDiv.textContent = menuList[i];\n    imageGridContainer.append(kimchiImageDiv);\n  }\n  return imageGridContainer;\n}\n\nfunction findImageDivAndLoadImage(imageDivId, img) {\n  setTimeout(() => {\n    const imageDiv = document.getElementById(imageDivId);\n    imageDiv.append(img), 0;\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openMenuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab_modules/menu.js?");

/***/ }),

/***/ "./src/utils/utility.js":
/*!******************************!*\
  !*** ./src/utils/utility.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"getImageSourceAndStyle\": () => (/* binding */ getImageSourceAndStyle),\n/* harmony export */   \"makeSemiTitle\": () => (/* binding */ makeSemiTitle)\n/* harmony export */ });\nfunction createElement(elementType, elementText = \"\") {\n  const element = document.createElement(elementType);\n  element.innerText = elementText;\n  return element;\n}\n\nfunction makeSemiTitle(semiTitleName) {\n  const semiTitleCotainer = createElement(\"div\", semiTitleName);\n  semiTitleCotainer.classList.add(\n    \"text-xl\",\n    \"border-b\",\n    \"border-dotted\",\n    \"border-neutral-400\",\n    \"pb-1/2\",\n    \"w-2/5\",\n    \"mb-3\",\n    \"mt-3\"\n  );\n  return semiTitleCotainer;\n}\n\nfunction getImageSourceAndStyle(imgSource, width = 300) {\n  const imgElement = new Image();\n  imgElement.src = imgSource;\n  imgElement.setAttribute(\"width\", width);\n  imgElement.classList.add(\"rounded-sm\", \"my-2\");\n  return imgElement;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/utils/utility.js?");

/***/ }),

/***/ "./src/imgs/budapest.jpg":
/*!*******************************!*\
  !*** ./src/imgs/budapest.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd1dc5923512adb49ae6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/budapest.jpg?");

/***/ }),

/***/ "./src/imgs/cab-baechu-kimchi.jpg":
/*!****************************************!*\
  !*** ./src/imgs/cab-baechu-kimchi.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f756a3368fea5b06c4e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/cab-baechu-kimchi.jpg?");

/***/ }),

/***/ "./src/imgs/cab-dongchimi.jpg":
/*!************************************!*\
  !*** ./src/imgs/cab-dongchimi.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f54b20ae038a029eeb46.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/cab-dongchimi.jpg?");

/***/ }),

/***/ "./src/imgs/dubai.jpg":
/*!****************************!*\
  !*** ./src/imgs/dubai.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e3efe1f988cb5d8279f6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/dubai.jpg?");

/***/ }),

/***/ "./src/imgs/kimchi-history.jpg":
/*!*************************************!*\
  !*** ./src/imgs/kimchi-history.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5b0222e1900846d66f8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/kimchi-history.jpg?");

/***/ }),

/***/ "./src/imgs/non-cab-kkakdugi.jpg":
/*!***************************************!*\
  !*** ./src/imgs/non-cab-kkakdugi.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5db319690cf29af9047f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/non-cab-kkakdugi.jpg?");

/***/ }),

/***/ "./src/imgs/non-cab-pakimchi.jpg":
/*!***************************************!*\
  !*** ./src/imgs/non-cab-pakimchi.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62f568ecdbc06382d6bf.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/non-cab-pakimchi.jpg?");

/***/ }),

/***/ "./src/imgs/seoul.jpg":
/*!****************************!*\
  !*** ./src/imgs/seoul.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46acc4c2de99b22e8e8e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/seoul.jpg?");

/***/ }),

/***/ "./src/imgs/side-non-veggi.jpg":
/*!*************************************!*\
  !*** ./src/imgs/side-non-veggi.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e151eccfab35859b7bd4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/side-non-veggi.jpg?");

/***/ }),

/***/ "./src/imgs/side-veggi.jpg":
/*!*********************************!*\
  !*** ./src/imgs/side-veggi.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3189ecf0e751b9846094.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/side-veggi.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;