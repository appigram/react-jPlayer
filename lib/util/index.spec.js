"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_enzyme["default"].configure({
  adapter: new _enzymeAdapterReact["default"](),
  disableLifecycleMethods: true
});

describe('convertTime', function () {
  it('sets timeText to empty if time is NaN', function () {
    var timeText = (0, _reactJplayerUtils.convertTime)('test');
    (0, _expect["default"])(timeText).toBe('');
  });
  it('sets timeText to have hours if showHour is true', function () {
    var timeText = (0, _reactJplayerUtils.convertTime)(200000, _objectSpread({}, _constants.defaultOptions.timeFormats, {
      showHour: true,
      padHour: true
    }));
    (0, _expect["default"])(timeText).toBe('07:33:20');
  });
  it('sets timeText to not have minutes if showMin is false', function () {
    var timeText = (0, _reactJplayerUtils.convertTime)(200000, _objectSpread({}, _constants.defaultOptions.timeFormats, {
      showMin: false
    }));
    (0, _expect["default"])(timeText).toBe('27200');
  });
  it('sets timeText to not have seconds if showSec is false', function () {
    var timeText = (0, _reactJplayerUtils.convertTime)(200000, _objectSpread({}, _constants.defaultOptions.timeFormats, {
      showSec: false,
      sepMin: ''
    }));
    (0, _expect["default"])(timeText).toBe('453');
  });
  it('minutes don\'t get padded when false', function () {
    var timeText = (0, _reactJplayerUtils.convertTime)(20, _objectSpread({}, _constants.defaultOptions.timeFormats, {
      padMin: false
    }));
    (0, _expect["default"])(timeText).toBe('0:20');
  });
});