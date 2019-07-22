"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _barContainer = _interopRequireDefault(require("../barContainer"));

var _volumeBarValueContainer = _interopRequireDefault(require("../volumeBarValue/volumeBarValueContainer"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VolumeBar = function VolumeBar(props) {
  return _react["default"].createElement(_barContainer["default"], {
    clickMoveBar: props.clickMoveBar,
    touchMoveBar: props.touchMoveBar
  }, _react["default"].createElement("div", {
    className: _constants.classes.VOLUME_BAR
  }, props.children));
};

VolumeBar.defaultProps = {
  children: _react["default"].createElement(_volumeBarValueContainer["default"], null)
};
VolumeBar.propTypes = {
  clickMoveBar: _propTypes["default"].func.isRequired,
  touchMoveBar: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
var _default = VolumeBar;
exports["default"] = _default;