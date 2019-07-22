"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMotion = require("react-motion");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gui = _interopRequireDefault(require("./gui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Animation = function Animation(_ref) {
  var fullScreen = _ref.fullScreen,
      guiFadeOut = _ref.guiFadeOut,
      onMouseMove = _ref.onMouseMove,
      children = _ref.children;
  return _react["default"].createElement(_reactMotion.Motion, {
    defaultStyle: {
      opacity: 1
    },
    style: {
      opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1
    }
  }, function (values) {
    return _react["default"].createElement(_gui["default"], {
      opacity: values.opacity,
      onMouseMove: onMouseMove
    }, children);
  });
};

Animation.propTypes = {
  onMouseMove: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].element]).isRequired,
  guiFadeOut: _propTypes["default"].bool.isRequired,
  fullScreen: _propTypes["default"].bool.isRequired
};
var _default = Animation;
exports["default"] = _default;