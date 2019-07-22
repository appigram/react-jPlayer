"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _animation = _interopRequireDefault(require("./animation"));

var _playBar = _interopRequireDefault(require("./playBar"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_animation["default"], _objectSpread({
    smoothPlayBar: false,
    currentPercentRelative: 33,
    currentPercentAbsolute: 22
  }, props));
};

describe('PlayBarAnimation', function () {
  it('renders PlayBar as a child', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.dive().type()).toBe(_playBar["default"]);
  });
  describe('Motion', function () {
    it('smoothWidth for motion is currentPercentAbsolute', function () {
      var _setup2 = setup(),
          wrapper = _setup2.wrapper,
          props = _setup2.props;

      (0, _expect["default"])(wrapper.prop('style').smoothWidth.val).toBe(props.currentPercentAbsolute);
    });
  });
});