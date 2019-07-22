"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _playbackRateBar = _interopRequireDefault(require("./playbackRateBar"));

var _playbackRateBarValueContainer = _interopRequireDefault(require("../playbackRateBarValue/playbackRateBarValueContainer"));

var _constants = require("../../util/constants");

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var testProps = (0, _componentSetup["default"])(_playbackRateBar["default"], _objectSpread({
    clickMoveBar: _expect["default"].createSpy(),
    touchMoveBar: _expect["default"].createSpy()
  }, props));
  testProps.playbackRateBar = testProps.wrapper.find(".".concat(_constants.classes.PLAYBACK_RATE_BAR));
  return testProps;
};

describe('PlaybackRateBar', function () {
  describe('children', function () {
    it('overwrite default', function () {
      var children = 'playbackRate';

      var _setup = setup({
        children: children
      }),
          playbackRateBar = _setup.playbackRateBar;

      (0, _expect["default"])(playbackRateBar.prop('children')).toBe(children);
    });
    it('renders playbackRateBarValue as default', function () {
      var _setup2 = setup(),
          playbackRateBar = _setup2.playbackRateBar;

      (0, _expect["default"])(playbackRateBar.find(_playbackRateBarValueContainer["default"]).exists()).toBe(true);
    });
  });
});