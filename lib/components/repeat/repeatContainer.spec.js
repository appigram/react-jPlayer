"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockRepeat = function mockRepeat(_ref) {
  var loop = _ref.loop;
  return _react["default"].createElement("button", {
    onClick: loop
  });
};

var RepeatContainer = (0, _proxyquire["default"])('./repeatContainer', {
  './repeat': mockRepeat
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(RepeatContainer, jPlayers, props);
};

describe('RepeatContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {});
  });
  describe('loop', function () {
    it('toggles to true when falsy', function () {
      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          store = _setup.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.loop).toBe(true);
    });
    it('toggles to false when true', function () {
      jPlayers[id].loop = true;

      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          store = _setup2.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.loop).toBe(false);
    });
  });
});