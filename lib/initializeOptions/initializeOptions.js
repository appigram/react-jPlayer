"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _constants = require("../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};
exports.initialState = initialState;

var options = function options(jPlayerOptions) {
  initialState[jPlayerOptions.id] = (0, _lodash["default"])({}, _constants.defaultStatus, _constants.defaultOptions, jPlayerOptions);
};

var _default = options;
exports["default"] = _default;