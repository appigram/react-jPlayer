"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Gui = function Gui(_ref) {
  var opacity = _ref.opacity,
      children = _ref.children,
      onMouseMove = _ref.onMouseMove;
  return _react["default"].createElement("div", {
    className: _constants.classes.GUI,
    onMouseMove: onMouseMove,
    style: {
      opacity: opacity
    }
  }, children);
};

Gui.propTypes = {
  opacity: _propTypes["default"].number.isRequired,
  onMouseMove: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].element]).isRequired
};
var _default = Gui;
exports["default"] = _default;