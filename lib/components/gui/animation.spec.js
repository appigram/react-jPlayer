"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _animation = _interopRequireDefault(require("./animation"));

var _gui = _interopRequireDefault(require("./gui"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_animation["default"], _objectSpread({
    guiFadeOut: false,
    fullScreen: false,
    children: _react["default"].createElement("div", null),
    onMouseMove: _expect["default"].createSpy()
  }, props));
};

describe('GuiAnimation', function () {
  it('renders GUI as a child', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    var gui = wrapper.dive();
    (0, _expect["default"])(gui.type()).toBe(_gui["default"]);
  });
  it('calls onMouseMove', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper,
        props = _setup2.props;

    var gui = wrapper.dive();
    gui.simulate('mousemove');
    (0, _expect["default"])(props.onMouseMove).toHaveBeenCalled();
  });
  describe('Motion', function () {
    it('default opacity for motion is 1', function () {
      var _setup3 = setup(),
          wrapper = _setup3.wrapper;

      (0, _expect["default"])(wrapper.prop('defaultStyle')).toEqual({
        opacity: 1
      });
    });
    it('opacity for motion is 1 when fullScreen false', function () {
      var _setup4 = setup(),
          wrapper = _setup4.wrapper;

      (0, _expect["default"])(wrapper.prop('style')).toEqual({
        opacity: 1
      });
    });
    it('opacity value is 1 when fullScreen true and guiFadeOut false', function () {
      var _setup5 = setup({
        fullScreen: true
      }),
          wrapper = _setup5.wrapper;

      (0, _expect["default"])(wrapper.prop('style').opacity.val).toBe(1);
    });
    it('opacity value is 0 when fullScreen true and guiFadeOut true', function () {
      var _setup6 = setup({
        fullScreen: true,
        guiFadeOut: true
      }),
          wrapper = _setup6.wrapper;

      (0, _expect["default"])(wrapper.prop('style').opacity.val).toBe(0);
    });
  });
});