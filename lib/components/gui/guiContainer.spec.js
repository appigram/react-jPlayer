"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

var _actions = require("../../actions/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockGuiAnimation = function mockGuiAnimation(_ref) {
  var onMouseMove = _ref.onMouseMove;
  return _react["default"].createElement("div", {
    onMouseMove: onMouseMove
  });
};

var GuiContainer = (0, _proxyquire["default"])('./guiContainer', {
  './animation': mockGuiAnimation
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(GuiContainer, jPlayers, props);
};

describe('GuiContainer', function () {
  var jPlayers;
  var mockSetTimeout;
  var mockClearTimeout;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {});
    mockSetTimeout = _expect["default"].spyOn(global, 'setTimeout');
    mockClearTimeout = _expect["default"].spyOn(global, 'clearTimeout');
  });
  describe('onMouseMove', function () {
    it('dispatches startGuiFadeOut to false if fullScreen is enabled', function () {
      jPlayers[id].fullScreen = true;
      jPlayers[id].startGuiFadeOut = true;

      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          store = _setup.store;

      wrapper.simulate('mousemove');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.startGuiFadeOut).toBe(false);
    });
    it('doesnt dispatch startGuiFadeOut to false if fullScreen is not enabled', function () {
      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          store = _setup2.store;

      wrapper.simulate('mousemove');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.startGuiFadeOut).toNotBe(false);
    });
    it('clears all timeouts if fullScreen is enabled', function () {
      jPlayers[id].fullScreen = true;

      var _setup3 = setup(jPlayers),
          wrapper = _setup3.wrapper,
          store = _setup3.store;

      mockSetTimeout.andReturn(1);
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', true));
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', false));
      mockSetTimeout.andReturn(2);
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', true));
      wrapper.simulate('mousemove');
      (0, _expect["default"])(mockClearTimeout.calls.length).toBe(2);
      (0, _expect["default"])(mockClearTimeout).toHaveBeenCalledWith(1);
      (0, _expect["default"])(mockClearTimeout).toHaveBeenCalledWith(2);
    });
    it('doesnt clear any timeouts if fullScreen is not enabled', function () {
      jPlayers[id].fullScreen = true;

      var _setup4 = setup(jPlayers),
          wrapper = _setup4.wrapper,
          store = _setup4.store;

      mockSetTimeout.andReturn(1);
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', true));
      store.dispatch((0, _actions.setOption)(id, 'fullScreen', false));
      wrapper.simulate('mousemove');
      (0, _expect["default"])(mockClearTimeout).toNotHaveBeenCalled();
    });
  });
  describe('startFade', function () {
    it('dispatches guiFadeOut to true if fullScreen, !paused and startGuiFadeOut', function () {
      jPlayers[id].fullScreen = true;

      var _setup5 = setup(jPlayers),
          store = _setup5.store;

      mockSetTimeout.andCall(function (fn) {
        fn();
      });
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', true));
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.guiFadeOut).toBe(true);
    });
    it('doesnt dispatch guiFadeOut to true if !fullScreen', function () {
      var _setup6 = setup(jPlayers),
          store = _setup6.store;

      mockSetTimeout.andCall(function (fn) {
        fn();
      });
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', true));
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.guiFadeOut).toNotBe(true);
    });
    it('doesnt dispatch guiFadeOut to true if paused', function () {
      jPlayers[id].fullScreen = true;
      jPlayers[id].paused = true;

      var _setup7 = setup(jPlayers),
          store = _setup7.store;

      mockSetTimeout.andCall(function (fn) {
        fn();
      });
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', true));
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.guiFadeOut).toNotBe(true);
    });
    it('dispatchs guiFadeOut to false if !startGuiFadeOut', function () {
      jPlayers[id].fullScreen = true;
      jPlayers[id].startGuiFadeOut = true;

      var _setup8 = setup(jPlayers),
          store = _setup8.store;

      mockSetTimeout.andCall(function (fn) {
        fn();
      });
      store.dispatch((0, _actions.setOption)(id, 'startGuiFadeOut', false));
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.guiFadeOut).toBe(false);
    });
  });
  afterEach(function () {
    mockSetTimeout.restore();
    mockClearTimeout.restore();
  });
});