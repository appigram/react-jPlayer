"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMotion = require("react-motion");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _playBar = _interopRequireDefault(require("./playBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Animation = function Animation(props) {
  return _react["default"].createElement(_reactMotion.Motion, {
    style: {
      smoothWidth: (0, _reactMotion.spring)(props.currentPercentAbsolute, [250])
    }
  }, function (values) {
    return _react["default"].createElement(_playBar["default"], {
      smoothWidth: values.smoothWidth,
      smoothPlayBar: props.smoothPlayBar,
      currentPercentRelative: props.currentPercentRelative
    });
  });
};

Animation.propTypes = {
  currentPercentRelative: _propTypes["default"].number.isRequired,
  currentPercentAbsolute: _propTypes["default"].number.isRequired,
  smoothPlayBar: _propTypes["default"].bool.isRequired
};
var _default = Animation;
exports["default"] = _default;