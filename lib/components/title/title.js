"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Title = function Title(_ref) {
  var title = _ref.title;
  return _react["default"].createElement("div", {
    className: _constants.classes.TITLE
  }, title);
};

Title.propTypes = {
  title: _propTypes["default"].string.isRequired
};

var _default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.title;
}, (0, _recompose.renderComponent)(Title)))((0, _recompose.renderNothing)(null));

exports["default"] = _default;