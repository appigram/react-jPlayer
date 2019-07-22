"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlaybackRateBarValue = function PlaybackRateBarValue(props) {
  var ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
  var playbackRateBarPercentage = "".concat(ratio * 100, "%");
  var style = {
    width: !props.verticalPlaybackRate ? playbackRateBarPercentage : null,
    height: props.verticalPlaybackRate ? playbackRateBarPercentage : null
  };
  return _react["default"].createElement("div", {
    className: _constants.classes.PLAYBACK_RATE_BAR_VALUE,
    style: style
  });
};

PlaybackRateBarValue.propTypes = {
  verticalPlaybackRate: _propTypes["default"].bool.isRequired,
  minPlaybackRate: _propTypes["default"].number.isRequired,
  maxPlaybackRate: _propTypes["default"].number.isRequired,
  playbackRate: _propTypes["default"].number.isRequired
};
var _default = PlaybackRateBarValue;
exports["default"] = _default;