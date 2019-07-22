"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Events = function Events(props) {
  return _react["default"].cloneElement(_react["default"].Children.only(props.children), {
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
  });
};

Events.propTypes = {
  children: _propTypes["default"].element.isRequired,
  onAbort: _propTypes["default"].func.isRequired,
  onCanPlay: _propTypes["default"].func.isRequired,
  onCanPlayThrough: _propTypes["default"].func.isRequired,
  onDurationChange: _propTypes["default"].func.isRequired,
  onEmptied: _propTypes["default"].func.isRequired,
  onEncrypted: _propTypes["default"].func.isRequired,
  onEnded: _propTypes["default"].func.isRequired,
  onError: _propTypes["default"].func.isRequired,
  onLoadedData: _propTypes["default"].func.isRequired,
  onLoadedMetadata: _propTypes["default"].func.isRequired,
  onLoadStart: _propTypes["default"].func.isRequired,
  onPause: _propTypes["default"].func.isRequired,
  onPlay: _propTypes["default"].func.isRequired,
  onPlaying: _propTypes["default"].func.isRequired,
  onProgress: _propTypes["default"].func.isRequired,
  onRateChange: _propTypes["default"].func.isRequired,
  onSeeked: _propTypes["default"].func.isRequired,
  onSeeking: _propTypes["default"].func.isRequired,
  onStalled: _propTypes["default"].func.isRequired,
  onSuspend: _propTypes["default"].func.isRequired,
  onTimeUpdate: _propTypes["default"].func.isRequired,
  onVolumeChange: _propTypes["default"].func.isRequired,
  onWaiting: _propTypes["default"].func.isRequired
};
var _default = Events;
exports["default"] = _default;