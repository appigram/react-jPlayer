"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _jPlayer = _interopRequireDefault(require("./jPlayer"));

var _keyControlContainer = _interopRequireDefault(require("./keyControl/keyControlContainer"));

var _screenFullContainer = _interopRequireDefault(require("./screenFull/screenFullContainer"));

var _errorLoggerContainer = _interopRequireDefault(require("./errorLogger/errorLoggerContainer"));

var _timeDisplayContainer = _interopRequireDefault(require("./timeDisplay/timeDisplayContainer"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_jPlayer["default"], _objectSpread({
    onMouseMoveCapture: _expect["default"].createSpy(),
    className: 'jp-test',
    id: 'TestPlayer',
    children: _react["default"].createElement("div", null)
  }, props));
};

describe('JPlayer', function () {
  it('has custom class', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper,
        props = _setup.props;

    (0, _expect["default"])(wrapper.hasClass(props.className)).toBe(true);
  });
  it('has id', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper,
        props = _setup2.props;

    (0, _expect["default"])(wrapper.prop('id')).toBe(props.id);
  });
  describe('children', function () {
    it('passes keyBindings to KeyControl', function () {
      var keyBindings = {
        test: {
          key: 44,
          fn: _expect["default"].createSpy()
        }
      };

      var _setup3 = setup({
        keyBindings: keyBindings
      }),
          wrapper = _setup3.wrapper;

      (0, _expect["default"])(wrapper.find(_keyControlContainer["default"]).prop('keyBindings')).toBe(keyBindings);
    });
    it('renders TimeDisplay', function () {
      var _setup4 = setup(),
          wrapper = _setup4.wrapper;

      (0, _expect["default"])(wrapper.find(_timeDisplayContainer["default"]).exists()).toBe(true);
    });
    it('renders ScreenFull', function () {
      var _setup5 = setup(),
          wrapper = _setup5.wrapper;

      (0, _expect["default"])(wrapper.find(_screenFullContainer["default"]).exists()).toBe(true);
    });
    it('renders ErrorLogger', function () {
      var _setup6 = setup(),
          wrapper = _setup6.wrapper;

      (0, _expect["default"])(wrapper.find(_errorLoggerContainer["default"]).exists()).toBe(true);
    });
    it('renders custom children', function () {
      var _setup7 = setup(),
          wrapper = _setup7.wrapper,
          props = _setup7.props;

      (0, _expect["default"])(wrapper.contains(props.children)).toBe(true);
    });
  });
});