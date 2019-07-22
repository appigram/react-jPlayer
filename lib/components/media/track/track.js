"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Track = function Track(props) {
  return _react["default"].createElement("track", {
    "default": props["default"],
    kind: props.kind,
    src: props.src,
    label: props.label,
    srcLang: props.srclang
  });
};

Track.defaultProps = {
  "default": null,
  kind: null,
  label: null,
  srclang: null
};
Track.propTypes = {
  "default": _propTypes["default"].bool,
  kind: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  srclang: _propTypes["default"].string
};
var _default = Track;
exports["default"] = _default;