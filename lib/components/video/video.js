"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _mediaContainer = _interopRequireDefault(require("../media/mediaContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable jsx-a11y/media-has-caption */
var Video = function Video(props) {
  return _react["default"].createElement(_mediaContainer["default"], {
    onAbort: props.onAbort,
    onCanPlay: props.onCanPlay,
    onCanPlayThrough: props.onCanPlayThrough,
    onDurationChange: props.onDurationChange,
    onEmptied: props.onEmptied,
    onEncrypted: props.onEncrypted,
    onEnded: props.onEnded,
    onError: props.onError,
    onLoadedData: props.onLoadedData,
    onLoadedMetadata: props.onLoadedMetadata,
    onLoadStart: props.onLoadStart,
    onPause: props.onPause,
    onPlay: props.onPlay,
    onPlaying: props.onPlaying,
    onProgress: props.onProgress,
    onRateChange: props.onRateChange,
    onSeeked: props.onSeeked,
    onSeeking: props.onSeeking,
    onStalled: props.onStalled,
    onSuspend: props.onSuspend,
    onTimeUpdate: props.onTimeUpdate,
    onVolumeChange: props.onVolumeChange,
    onWaiting: props.onWaiting
  }, _react["default"].createElement("video", null));
};

Video.defaultProps = {
  onAbort: Function.prototype,
  onCanPlay: Function.prototype,
  onCanPlayThrough: Function.prototype,
  onDurationChange: Function.prototype,
  onEmptied: Function.prototype,
  onEncrypted: Function.prototype,
  onEnded: Function.prototype,
  onError: Function.prototype,
  onLoadedData: Function.prototype,
  onLoadedMetadata: Function.prototype,
  onLoadStart: Function.prototype,
  onPause: Function.prototype,
  onPlay: Function.prototype,
  onPlaying: Function.prototype,
  onProgress: Function.prototype,
  onRateChange: Function.prototype,
  onSeeked: Function.prototype,
  onSeeking: Function.prototype,
  onStalled: Function.prototype,
  onSuspend: Function.prototype,
  onTimeUpdate: Function.prototype,
  onVolumeChange: Function.prototype,
  onWaiting: Function.prototype
};
Video.propTypes = {
  onAbort: _propTypes["default"].func,
  onCanPlay: _propTypes["default"].func,
  onCanPlayThrough: _propTypes["default"].func,
  onDurationChange: _propTypes["default"].func,
  onEmptied: _propTypes["default"].func,
  onEncrypted: _propTypes["default"].func,
  onEnded: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onLoadedData: _propTypes["default"].func,
  onLoadedMetadata: _propTypes["default"].func,
  onLoadStart: _propTypes["default"].func,
  onPause: _propTypes["default"].func,
  onPlay: _propTypes["default"].func,
  onPlaying: _propTypes["default"].func,
  onProgress: _propTypes["default"].func,
  onRateChange: _propTypes["default"].func,
  onSeeked: _propTypes["default"].func,
  onSeeking: _propTypes["default"].func,
  onStalled: _propTypes["default"].func,
  onSuspend: _propTypes["default"].func,
  onTimeUpdate: _propTypes["default"].func,
  onVolumeChange: _propTypes["default"].func,
  onWaiting: _propTypes["default"].func
};

var _default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.require;
}, (0, _recompose.renderComponent)(Video)))((0, _recompose.renderNothing)(null));

exports["default"] = _default;