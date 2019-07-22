"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockPlay = function mockPlay(_ref) {
  var play = _ref.play,
      paused = _ref.paused;
  return _react["default"].createElement("button", {
    onClick: function onClick() {
      return play(id, paused);
    }
  });
};

var PlayContainer = (0, _proxyquire["default"])('./playContainer', {
  './play': mockPlay
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(PlayContainer, jPlayers, props);
};

describe('PlayContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      src: 'test.mp3'
    });
  });
  it('plays media when paused onClick', function () {
    jPlayers[id].paused = true;

    var _setup = setup(jPlayers),
        wrapper = _setup.wrapper,
        store = _setup.store;

    wrapper.simulate('click');
    var jPlayer = store.getState().jPlayers[id];
    (0, _expect["default"])(jPlayer.paused).toBe(false);
  });
  it('pauses media when playing onClick', function () {
    var _setup2 = setup(jPlayers),
        wrapper = _setup2.wrapper,
        store = _setup2.store;

    wrapper.simulate('click');
    var jPlayer = store.getState().jPlayers[id];
    (0, _expect["default"])(jPlayer.paused).toBe(true);
  });
});