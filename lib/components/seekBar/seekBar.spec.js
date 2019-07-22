"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _seekBar = _interopRequireDefault(require("./seekBar"));

var _constants = require("../../util/constants");

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var testProps = (0, _componentSetup["default"])(_seekBar["default"], _objectSpread({
    seekPercent: 22,
    clickMoveBar: _expect["default"].createSpy(),
    touchMoveBar: _expect["default"].createSpy(),
    children: _react["default"].createElement("div", null)
  }, props));
  testProps.seekBar = testProps.wrapper.find(".".concat(_constants.classes.SEEK_BAR));
  return testProps;
};

describe('Seekbar', function () {
  it('renders children', function () {
    var _setup = setup(),
        seekBar = _setup.seekBar,
        props = _setup.props;

    (0, _expect["default"])(seekBar.prop('children')).toBe(props.children);
  });
  it('renders seekPercent as style width', function () {
    var _setup2 = setup(),
        seekBar = _setup2.seekBar,
        props = _setup2.props;

    (0, _expect["default"])(seekBar.prop('style').width).toBe("".concat(props.seekPercent, "%"));
  });
});