"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-stringify";
exports.ids = ["vendor-chunks/remark-stringify"];
exports.modules = {

/***/ "(rsc)/./node_modules/remark-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkStringify)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown */ \"(rsc)/./node_modules/mdast-util-to-markdown/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownOptions\n * @typedef {import('unified').Compiler<Root, string>} Compiler\n * @typedef {import('unified').Processor<undefined, undefined, undefined, Root, string>} Processor\n */ /**\n * @typedef {Omit<ToMarkdownOptions, 'extensions'>} Options\n */ \n/**\n * Add support for serializing to markdown.\n *\n * @param {Readonly<Options> | null | undefined} [options]\n *   Configuration (optional).\n * @returns {undefined}\n *   Nothing.\n */ function remarkStringify(options) {\n    /** @type {Processor} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.\n    const self = this;\n    self.compiler = compiler;\n    /**\n   * @type {Compiler}\n   */ function compiler(tree) {\n        return (0,mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_0__.toMarkdown)(tree, {\n            ...self.data(\"settings\"),\n            ...options,\n            // Note: this option is not in the readme.\n            // The goal is for it to be set by plugins on `data` instead of being\n            // passed by users.\n            extensions: self.data(\"toMarkdownExtensions\") || []\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUVEOztDQUVDLEdBRWdEO0FBRWpEOzs7Ozs7O0NBT0MsR0FDYyxTQUFTQyxnQkFBZ0JDLE9BQU87SUFDN0Msc0JBQXNCLEdBQ3RCLG9GQUFvRjtJQUNwRixNQUFNQyxPQUFPLElBQUk7SUFFakJBLEtBQUtDLFFBQVEsR0FBR0E7SUFFaEI7O0dBRUMsR0FDRCxTQUFTQSxTQUFTQyxJQUFJO1FBQ3BCLE9BQU9MLGtFQUFVQSxDQUFDSyxNQUFNO1lBQ3RCLEdBQUdGLEtBQUtHLElBQUksQ0FBQyxXQUFXO1lBQ3hCLEdBQUdKLE9BQU87WUFDViwwQ0FBMEM7WUFDMUMscUVBQXFFO1lBQ3JFLG1CQUFtQjtZQUNuQkssWUFBWUosS0FBS0csSUFBSSxDQUFDLDJCQUEyQixFQUFFO1FBQ3JEO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0BzZS0yL25leHRqcy8uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9pbmRleC5qcz83MGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bk9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaWZpZWQnKS5Db21waWxlcjxSb290LCBzdHJpbmc+fSBDb21waWxlclxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pZmllZCcpLlByb2Nlc3Nvcjx1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBSb290LCBzdHJpbmc+fSBQcm9jZXNzb3JcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPbWl0PFRvTWFya2Rvd25PcHRpb25zLCAnZXh0ZW5zaW9ucyc+fSBPcHRpb25zXG4gKi9cblxuaW1wb3J0IHt0b01hcmtkb3dufSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duJ1xuXG4vKipcbiAqIEFkZCBzdXBwb3J0IGZvciBzZXJpYWxpemluZyB0byBtYXJrZG93bi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbWFya1N0cmluZ2lmeShvcHRpb25zKSB7XG4gIC8qKiBAdHlwZSB7UHJvY2Vzc29yfSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBpbiBKU0RvYyBnZW5lcmF0ZXMgd3JvbmcgdHlwZXMgaWYgYHRoaXNgIGlzIHR5cGVkIHJlZ3VsYXJseS5cbiAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICBzZWxmLmNvbXBpbGVyID0gY29tcGlsZXJcblxuICAvKipcbiAgICogQHR5cGUge0NvbXBpbGVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGlsZXIodHJlZSkge1xuICAgIHJldHVybiB0b01hcmtkb3duKHRyZWUsIHtcbiAgICAgIC4uLnNlbGYuZGF0YSgnc2V0dGluZ3MnKSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBOb3RlOiB0aGlzIG9wdGlvbiBpcyBub3QgaW4gdGhlIHJlYWRtZS5cbiAgICAgIC8vIFRoZSBnb2FsIGlzIGZvciBpdCB0byBiZSBzZXQgYnkgcGx1Z2lucyBvbiBgZGF0YWAgaW5zdGVhZCBvZiBiZWluZ1xuICAgICAgLy8gcGFzc2VkIGJ5IHVzZXJzLlxuICAgICAgZXh0ZW5zaW9uczogc2VsZi5kYXRhKCd0b01hcmtkb3duRXh0ZW5zaW9ucycpIHx8IFtdXG4gICAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRvTWFya2Rvd24iLCJyZW1hcmtTdHJpbmdpZnkiLCJvcHRpb25zIiwic2VsZiIsImNvbXBpbGVyIiwidHJlZSIsImRhdGEiLCJleHRlbnNpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/remark-stringify/lib/index.js\n");

/***/ })

};
;