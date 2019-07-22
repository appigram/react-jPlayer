"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(Component, props) {
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(Component, props));
  return {
    props: props,
    wrapper: wrapper
  };
};

exports["default"] = _default;