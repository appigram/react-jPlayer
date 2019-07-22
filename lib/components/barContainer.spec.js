"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockBar = function mockBar(props) {
  return _react["default"].createElement("button", {
    onClick: props.onClick,
    onTouchStart: props.onTouchStart,
    onMouseDown: props.onMouseDown
  });
};

var BarContainer = (0, _proxyquire["default"])('./barContainer', {
  './bar': mockBar
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(BarContainer, jPlayers, _objectSpread({
    clickMoveBar: _expect["default"].createSpy(),
    touchMoveBar: _expect["default"].createSpy()
  }, props));
};

describe('BarContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      barDrag: false
    });
  });
  describe('onClick', function () {
    it('calls clickMoveBar', function () {
      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          props = _setup.props;

      wrapper.simulate('click');
      (0, _expect["default"])(props.clickMoveBar).toHaveBeenCalled();
    });
  });
  describe('onTouchMove', function () {
    var event = new window.Event('touchmove');
    it('calls touchMoveBar when barDrag and dragging are true', function () {
      jPlayers[id].barDrag = true;

      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          props = _setup2.props;

      wrapper.simulate('touchstart');
      document.dispatchEvent(event);
      (0, _expect["default"])(props.touchMoveBar).toHaveBeenCalled();
    });
    it('doesnt call touchMoveBar when barDrag is false', function () {
      var _setup3 = setup(jPlayers),
          wrapper = _setup3.wrapper,
          props = _setup3.props;

      wrapper.simulate('touchstart');
      document.dispatchEvent(event);
      (0, _expect["default"])(props.touchMoveBar).toNotHaveBeenCalled();
    });
    it('doesnt call touchMoveBar when dragging is false', function () {
      jPlayers[id].barDrag = true;

      var _setup4 = setup(jPlayers),
          props = _setup4.props;

      document.dispatchEvent(event);
      (0, _expect["default"])(props.touchMoveBar).toNotHaveBeenCalled();
    });
  });
  describe('onMouseMove', function () {
    var event = new window.Event('mousemove');
    it('calls clickMoveBar when barDrag and dragging are true', function () {
      jPlayers[id].barDrag = true;

      var _setup5 = setup(jPlayers),
          wrapper = _setup5.wrapper,
          props = _setup5.props;

      wrapper.simulate('mousedown');
      document.dispatchEvent(event);
      (0, _expect["default"])(props.clickMoveBar).toHaveBeenCalled();
    });
    it('doesnt call clickMoveBar when barDrag is false', function () {
      var _setup6 = setup(jPlayers),
          wrapper = _setup6.wrapper,
          props = _setup6.props;

      wrapper.simulate('mousedown');
      document.dispatchEvent(event);
      (0, _expect["default"])(props.clickMoveBar).toNotHaveBeenCalled();
    });
    it('doesnt call clickMoveBar when dragging is false', function () {
      jPlayers[id].barDrag = true;

      var _setup7 = setup(jPlayers),
          props = _setup7.props;

      document.dispatchEvent(event);
      (0, _expect["default"])(props.clickMoveBar).toNotHaveBeenCalled();
    });
  });
});