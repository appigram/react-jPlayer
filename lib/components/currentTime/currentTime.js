"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CurrentTime = function CurrentTime(_ref) {
  var currentTimeText = _ref.currentTimeText;
  return _react["default"].createElement("div", {
    className: _constants.classes.CURRENT_TIME
  }, currentTimeText);
};

CurrentTime.propTypes = {
  currentTimeText: _propTypes["default"].string.isRequired
};
var _default = CurrentTime;
exports["default"] = _default;