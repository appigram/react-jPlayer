"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _duration = _interopRequireDefault(require("./duration"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var values = (0, _componentSetup["default"])(_duration["default"], _objectSpread({}, props));
  values.duration = values.wrapper.dive();
  return values;
};

describe('Duration', function () {
  describe('when durationText is supplied', function () {
    var durationText = '2:20';
    it('has duration class', function () {
      var _setup = setup({
        durationText: durationText
      }),
          duration = _setup.duration;

      (0, _expect["default"])(duration.hasClass(_constants.classes.DURATION)).toBe(true);
    });
    it('durationText is rendered as a child', function () {
      var _setup2 = setup({
        durationText: durationText
      }),
          duration = _setup2.duration,
          props = _setup2.props;

      (0, _expect["default"])(duration.prop('children')).toBe(props.durationText);
    });
  });
  it('renders nothing if durationText is not supplied', function () {
    var _setup3 = setup(),
        duration = _setup3.duration;

    (0, _expect["default"])(duration.type()).toBe(null);
  });
});