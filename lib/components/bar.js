"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Bar = function Bar(props) {
  return _react["default"].cloneElement(_react["default"].Children.only(props.children), {
    onClick: props.onClick,
    onMouseDown: props.onMouseDown,
    onTouchStart: props.onTouchStart,
    ref: props.setBar
  });
};

Bar.propTypes = {
  children: _propTypes["default"].element.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onMouseDown: _propTypes["default"].func.isRequired,
  onTouchStart: _propTypes["default"].func.isRequired,
  setBar: _propTypes["default"].func.isRequired
};
var _default = Bar;
exports["default"] = _default;