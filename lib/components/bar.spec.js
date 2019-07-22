"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _bar = _interopRequireDefault(require("./bar"));

var _componentSetup = _interopRequireDefault(require("../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_bar["default"], _objectSpread({
    children: _react["default"].createElement("div", {
      className: "bar"
    }),
    onClick: _expect["default"].createSpy(),
    onMouseDown: _expect["default"].createSpy(),
    onTouchStart: _expect["default"].createSpy(),
    setBar: _expect["default"].createSpy()
  }, props));
};

describe('Bar', function () {
  it('calls onClick', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper,
        props = _setup.props;

    wrapper.simulate('click');
    (0, _expect["default"])(props.onClick).toHaveBeenCalled();
  });
  it('calls onMouseDown', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper,
        props = _setup2.props;

    wrapper.simulate('mousedown');
    (0, _expect["default"])(props.onMouseDown).toHaveBeenCalled();
  });
  it('calls onTouchStart', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper,
        props = _setup3.props;

    wrapper.simulate('touchstart');
    (0, _expect["default"])(props.onTouchStart).toHaveBeenCalled();
  });
  it('children are rendered', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    (0, _expect["default"])(wrapper.find('.bar').exists()).toBe(true);
  });
});