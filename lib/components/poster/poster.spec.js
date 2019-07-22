"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _poster = _interopRequireDefault(require("./poster"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var values = (0, _componentSetup["default"])(_poster["default"], _objectSpread({}, props));
  values.poster = values.wrapper.dive();
  return values;
};

describe('Poster', function () {
  describe('when src is supplied', function () {
    var src = 'test.mp3';
    it('has poster class', function () {
      var _setup = setup({
        src: src
      }),
          poster = _setup.poster;

      (0, _expect["default"])(poster.hasClass(_constants.classes.POSTER)).toBe(true);
    });
    it('has src', function () {
      var _setup2 = setup({
        src: src
      }),
          poster = _setup2.poster;

      (0, _expect["default"])(poster.prop('src')).toBe(src);
    });
  });
  it('renders nothing if no src is supplied', function () {
    var _setup3 = setup(),
        poster = _setup3.poster;

    (0, _expect["default"])(poster.type()).toBe(null);
  });
});