"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _title = _interopRequireDefault(require("./title"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup(props) {
  var values = (0, _componentSetup["default"])(_title["default"], _objectSpread({}, props));
  values.title = values.wrapper.dive();
  return values;
};

describe('Title', function () {
  describe('when title is supplied', function () {
    var title = 'test';
    it('has title class', function () {
      var values = setup({
        title: title
      });
      (0, _expect["default"])(values.title.hasClass(_constants.classes.TITLE)).toBe(true);
    });
    it('renders title as a child', function () {
      var values = setup({
        title: title
      });
      (0, _expect["default"])(values.title.prop('children')).toBe(title);
    });
  });
  it('renders nothing if no title is supplied', function () {
    var _setup = setup(),
        title = _setup.title;

    (0, _expect["default"])(title.type()).toBe(null);
  });
});