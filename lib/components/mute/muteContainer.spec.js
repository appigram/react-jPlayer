"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockMute = function mockMute(_ref) {
  var setMute = _ref.setMute;
  return _react["default"].createElement("button", {
    onClick: function onClick() {
      return setMute(id, true);
    }
  });
};

var MuteContainer = (0, _proxyquire["default"])('./muteContainer', {
  './mute': mockMute
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(MuteContainer, jPlayers, props);
};

describe('MuteContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {});
  });
  it('sets muted', function () {
    var _setup = setup(jPlayers),
        wrapper = _setup.wrapper,
        store = _setup.store;

    wrapper.simulate('click');
    var jPlayer = store.getState().jPlayers[id];
    (0, _expect["default"])(jPlayer.muted).toBe(true);
  });
});