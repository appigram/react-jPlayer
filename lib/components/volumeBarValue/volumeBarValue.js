"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume;
  var volumeBarValuePercentage = "".concat(muted ? 0 : volume * 100, "%");
  var style = {
    width: !verticalVolume ? volumeBarValuePercentage : null,
    height: verticalVolume ? volumeBarValuePercentage : null
  };
  return _react["default"].createElement("div", {
    className: _constants.classes.VOLUME_BAR_VALUE,
    style: style
  });
};

VolumeBarValue.propTypes = {
  muted: _propTypes["default"].bool.isRequired,
  volume: _propTypes["default"].number.isRequired,
  verticalVolume: _propTypes["default"].bool.isRequired
};
var _default = VolumeBarValue;
exports["default"] = _default;