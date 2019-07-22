"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _fullScreen = _interopRequireDefault(require("./fullScreen"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var id = 'TestPlayer';

var setup = function setup(props) {
  return (0, _componentSetup["default"])(_fullScreen["default"], _objectSpread({
    children: 'fullScreen',
    fullScreen: false,
    setFullScreen: _expect["default"].createSpy(),
    id: id
  }, props));
};

describe('FullScreen', function () {
  it('has fullScreen class', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.hasClass(_constants.classes.FULL_SCREEN)).toBe(true);
  });
  it('toggles fullScreen on click', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper,
        props = _setup2.props;

    wrapper.simulate('click');
    (0, _expect["default"])(props.setFullScreen).toHaveBeenCalledWith(id, !props.fullScreen);
  });
  it('children are rendered', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper,
        props = _setup3.props;

    (0, _expect["default"])(wrapper.prop('children')).toBe(props.children);
  });
});