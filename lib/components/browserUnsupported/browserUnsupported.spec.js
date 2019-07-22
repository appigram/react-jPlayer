"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _constants = require("../../util/constants");

var _browserUnsupported = _interopRequireDefault(require("./browserUnsupported"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var values = (0, _componentSetup["default"])(_browserUnsupported["default"], _objectSpread({}, props));
  values.browserUnsupported = values.wrapper.dive();
  return values;
};

describe('BrowserUnsupported', function () {
  describe('when media is not supported', function () {
    var nonSupported = true;
    it('renders default children', function () {
      var _setup = setup({
        nonSupported: nonSupported
      }),
          browserUnsupported = _setup.browserUnsupported;

      (0, _expect["default"])(browserUnsupported.find('h4').exists()).toBeTruthy();
    });
    it('has browserUnsupported class', function () {
      var _setup2 = setup({
        nonSupported: nonSupported
      }),
          browserUnsupported = _setup2.browserUnsupported;

      (0, _expect["default"])(browserUnsupported.hasClass(_constants.classes.NO_BROWSER_SUPPORT)).toBe(true);
    });
    it('custom children overwrite default if specified', function () {
      var children = 'test';

      var _setup3 = setup({
        nonSupported: nonSupported,
        children: children
      }),
          browserUnsupported = _setup3.browserUnsupported;

      (0, _expect["default"])(browserUnsupported.prop('children')).toBe(children);
      (0, _expect["default"])(browserUnsupported.find('h4').exists()).toBeFalsy();
    });
  });
  it('renders nothing if media is supported', function () {
    var _setup4 = setup(),
        browserUnsupported = _setup4.browserUnsupported;

    (0, _expect["default"])(browserUnsupported.type()).toBe(null);
  });
});