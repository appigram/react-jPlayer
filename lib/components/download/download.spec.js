"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _download = _interopRequireDefault(require("./download"));

var _constants = require("../../util/constants");

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var values = (0, _componentSetup["default"])(_download["default"], _objectSpread({
    children: 'download'
  }, props));
  values.download = values.wrapper.dive();
  return values;
};

describe('Download', function () {
  describe('when media is free', function () {
    var free = true;
    it('has download class', function () {
      var _setup = setup({
        free: free
      }),
          download = _setup.download;

      (0, _expect["default"])(download.hasClass(_constants.classes.DOWNLOAD)).toBe(true);
    });
    it('has download attribute', function () {
      var _setup2 = setup({
        free: free
      }),
          download = _setup2.download;

      (0, _expect["default"])(download.prop('download')).toBe(true);
    });
    it('href is set to url', function () {
      var url = 'www.test.com';

      var _setup3 = setup({
        url: url,
        free: free
      }),
          download = _setup3.download;

      (0, _expect["default"])(download.prop('href')).toBe(url);
    });
    it('children are rendered', function () {
      var _setup4 = setup({
        free: free
      }),
          download = _setup4.download,
          props = _setup4.props;

      (0, _expect["default"])(download.prop('children')).toBe(props.children);
    });
  });
  it('renders nothing if media is not free', function () {
    var _setup5 = setup(),
        download = _setup5.download;

    (0, _expect["default"])(download.type()).toBe(null);
  });
});