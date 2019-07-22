"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../../util/specHelpers/containerSetup.spec"));

var _actions = require("../../../actions/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScreenFullContainer;
var id = 'TestPlayer';
var fullscreenchange = 'fullscreenchange';

var setup = function setup(jPlayers, screenfull, props) {
  ScreenFullContainer = (0, _proxyquire["default"])('./screenFullContainer', {
    screenfull: screenfull
  })["default"];
  return (0, _containerSetup["default"])(ScreenFullContainer, jPlayers, props);
};

describe('ScreenFullContainer', function () {
  var jPlayers;
  var screenfull;
  var request;
  var exit;
  beforeEach(function () {
    request = _expect["default"].createSpy();
    exit = _expect["default"].createSpy();
    jPlayers = _defineProperty({}, id, {});
    screenfull = {
      enabled: false,
      isFullscreen: false,
      raw: {
        fullscreenchange: fullscreenchange
      },
      request: request,
      exit: exit
    };
  });
  describe('closeFullScreenListener', function () {
    it('sets fullScreen to false if screenFull is enabled', function () {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      var _setup = setup(jPlayers, screenfull),
          store = _setup.store;

      document.dispatchEvent(new window.Event(fullscreenchange));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.fullScreen).toBe(false);
    });
    it('doesnt set fullScreen to false if screenFull is full screen', function () {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;
      screenfull.isFullscreen = true;

      var _setup2 = setup(jPlayers, screenfull),
          store = _setup2.store;

      document.dispatchEvent(new window.Event(fullscreenchange));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.fullScreen).toNotBe(false);
    });
    it('doesnt set full screen to false if fullScreen is false', function () {
      screenfull.enabled = true;

      var _setup3 = setup(jPlayers, screenfull),
          store = _setup3.store;

      document.dispatchEvent(new window.Event(fullscreenchange));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.fullScreen).toNotBe(false);
    });
    it('doesnt sets full screen to false if screenFull is enabled when unmounted', function () {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      var _setup4 = setup(jPlayers, screenfull),
          wrapper = _setup4.wrapper,
          store = _setup4.store;

      wrapper.unmount();
      document.dispatchEvent(new window.Event(fullscreenchange));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.fullScreen).toBe(true);
    });
  });
  describe('requestFullScreen', function () {
    it('requests screenfull when fullScreen and screenfull is enabled', function () {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;
      setup(jPlayers, screenfull);
      (0, _expect["default"])(request).toHaveBeenCalled();
      (0, _expect["default"])(document.body.style.visibility).toBe('hidden');
    });
    it('sets document visibility to hidden if fullScreen and screenfull not enabled', function () {
      jPlayers[id].fullScreen = true;
      setup(jPlayers, screenfull);
      (0, _expect["default"])(request).toNotHaveBeenCalled();
      (0, _expect["default"])(document.body.style.visibility).toBe('hidden');
    });
    it('visibility stays as visible when fullScreen not true', function () {
      setup(jPlayers, screenfull);
      (0, _expect["default"])(document.body.style.visibility).toBe('visible');
    });
  });
  describe('exitFullScreen', function () {
    it('exits full screen if fullScreen not true and screenFull is enabled', function () {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      var _setup5 = setup(jPlayers, screenfull),
          store = _setup5.store;

      store.dispatch((0, _actions.setOption)(id, 'fullScreen', false));
      (0, _expect["default"])(exit).toHaveBeenCalled();
    });
    it('sets document visibility to visible if fullScreen not true and screenfull not enabled', function () {
      jPlayers[id].fullScreen = true;

      var _setup6 = setup(jPlayers, screenfull),
          store = _setup6.store;

      store.dispatch((0, _actions.setOption)(id, 'fullScreen', false));
      (0, _expect["default"])(exit).toNotHaveBeenCalled();
      (0, _expect["default"])(document.body.style.visibility).toBe('visible');
    });
  });
  afterEach(function () {
    document.body.style.visibility = 'visible';
  });
});