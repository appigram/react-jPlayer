"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlayBar = function PlayBar(props) {
  var width = props.smoothPlayBar ? "".concat(props.smoothWidth, "%") : "".concat(props.currentPercentRelative, "%");
  return _react["default"].createElement("div", {
    className: _constants.classes.PLAY_BAR,
    style: {
      width: width
    }
  });
};

PlayBar.propTypes = {
  smoothPlayBar: _propTypes["default"].bool.isRequired,
  smoothWidth: _propTypes["default"].number.isRequired,
  currentPercentRelative: _propTypes["default"].number.isRequired
};
var _default = PlayBar;
exports["default"] = _default;