"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _barContainer = _interopRequireDefault(require("../barContainer"));

var _playbackRateBarValueContainer = _interopRequireDefault(require("../playbackRateBarValue/playbackRateBarValueContainer"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlaybackRateBar = function PlaybackRateBar(props) {
  return _react["default"].createElement(_barContainer["default"], {
    clickMoveBar: props.clickMoveBar,
    touchMoveBar: props.touchMoveBar
  }, _react["default"].createElement("div", {
    className: _constants.classes.PLAYBACK_RATE_BAR
  }, props.children));
};

PlaybackRateBar.defaultProps = {
  children: _react["default"].createElement(_playbackRateBarValueContainer["default"], null)
};
PlaybackRateBar.propTypes = {
  clickMoveBar: _propTypes["default"].func.isRequired,
  touchMoveBar: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
var _default = PlaybackRateBar;
exports["default"] = _default;