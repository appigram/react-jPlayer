"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _barContainer = _interopRequireDefault(require("../barContainer"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SeekBar = function SeekBar(props) {
  return _react["default"].createElement(_barContainer["default"], {
    clickMoveBar: props.clickMoveBar,
    touchMoveBar: props.touchMoveBar
  }, _react["default"].createElement("div", {
    className: _constants.classes.SEEK_BAR,
    style: {
      width: "".concat(props.seekPercent, "%")
    }
  }, props.children));
};

SeekBar.propTypes = {
  seekPercent: _propTypes["default"].number.isRequired,
  clickMoveBar: _propTypes["default"].func.isRequired,
  touchMoveBar: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].element]).isRequired
};
var _default = SeekBar;
exports["default"] = _default;