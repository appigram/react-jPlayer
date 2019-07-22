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

var Download = function Download(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return _react["default"].createElement("a", {
    className: _constants.classes.DOWNLOAD,
    href: url,
    download: true,
    target: "_blank",
    rel: "noopener noreferrer"
  }, children);
};

Download.defaultProps = {
  url: null
};
Download.propTypes = {
  children: _propTypes["default"].node.isRequired,
  url: _propTypes["default"].string
};

var _default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.free;
}, (0, _recompose.renderComponent)(Download)))((0, _recompose.renderNothing)(null));

exports["default"] = _default;