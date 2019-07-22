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

var Poster = function Poster(_ref) {
  var src = _ref.src;
  return _react["default"].createElement("img", {
    className: _constants.classes.POSTER,
    alt: "",
    src: src
  });
};

Poster.defaultProps = {
  src: null
};
Poster.propTypes = {
  src: _propTypes["default"].string
};

var _default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.src;
}, (0, _recompose.renderComponent)(Poster)))((0, _recompose.renderNothing)(null));

exports["default"] = _default;