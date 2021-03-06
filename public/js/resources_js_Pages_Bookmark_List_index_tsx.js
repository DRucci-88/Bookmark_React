"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Bookmark_List_index_tsx"],{

/***/ "./resources/js/Pages/Bookmark/List/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/List/index.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));

var BookmarkListPage = function BookmarkListPage(_ref) {
  var bookmarks = _ref.bookmarks;
  return react_1["default"].createElement("div", null, react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: 'row'
  }, react_1["default"].createElement("div", {
    className: 'col-sm-8'
  }, react_1["default"].createElement("ul", {
    className: 'list-group'
  }, bookmarks.length > 0 && bookmarks.map(function (bookmark, index) {
    return react_1["default"].createElement("li", {
      className: 'list-group-item',
      key: index
    }, react_1["default"].createElement("p", null, "Title: ", bookmark.title));
  }))))));
};

exports["default"] = BookmarkListPage;

/***/ }),

/***/ "./resources/js/components/common/layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/layout/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement("div", {
    className: 'container'
  }, children);
};

exports["default"] = Layout; //
// const Layout: React.FC<Props> = ({children}) => {
//   return
//   <div className={'container'}>
//     {children}ss
//   </div>
// }
//
// export default Layout;

/***/ })

}]);