"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _playBar = _interopRequireDefault(require("./playBar"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_playBar["default"], _objectSpread({
    smoothPlayBar: false,
    smoothWidth: 22,
    currentPercentRelative: 33
  }, props));
};

describe('PlayBar', function () {
  it('has gui class', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.hasClass(_constants.classes.PLAY_BAR)).toBe(true);
  });
  describe('width', function () {
    it('is smoothWidth when smoothPlayBar is true', function () {
      var _setup2 = setup({
        smoothPlayBar: true
      }),
          wrapper = _setup2.wrapper,
          props = _setup2.props;

      (0, _expect["default"])(wrapper.prop('style').width).toBe("".concat(props.smoothWidth, "%"));
    });
    it('is smoothWidth when smoothPlayBar is true', function () {
      var _setup3 = setup(),
          wrapper = _setup3.wrapper,
          props = _setup3.props;

      (0, _expect["default"])(wrapper.prop('style').width).toBe("".concat(props.currentPercentRelative, "%"));
    });
  });
});