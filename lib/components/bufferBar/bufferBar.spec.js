"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _bufferBar = _interopRequireDefault(require("./bufferBar"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_bufferBar["default"], _objectSpread({
    setCanvas: _expect["default"].createSpy()
  }, props));
};

describe('Audio', function () {
  it('has bufferBar class', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.hasClass(_constants.classes.BUFFER_BAR)).toBe(true);
  });
  it('renders canvas', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    (0, _expect["default"])(wrapper.type()).toBe('canvas');
  });
});