"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _keyControlContainer = _interopRequireDefault(require("./keyControlContainer"));

var _containerSetup = _interopRequireDefault(require("../../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var id = 'TestPlayer';
var keyDown = 'keydown';

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(_keyControlContainer["default"], jPlayers, props);
};

describe('keyControlContainer', function () {
  var jPlayers;
  var event;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      focused: true,
      keyEnabled: true,
      src: 'www.test.com'
    });
    event = document.createEvent('Event');
  });
  describe('custom keyBindings', function () {
    it('merges custom keyBinding with different name', function () {
      var customKeySpy = _expect["default"].createSpy();

      var customKeyBindings = {
        test: {
          key: 20,
          fn: customKeySpy
        }
      };
      setup(jPlayers, {
        keyBindings: customKeyBindings
      });
      event.keyCode = 20;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      (0, _expect["default"])(customKeySpy).toHaveBeenCalled();
    });
    it('custom keyBinding overwrite default function with same name', function () {
      var customKeySpy = _expect["default"].createSpy();

      var customKeyBindings = {
        play: {
          key: 20,
          fn: customKeySpy
        }
      };
      setup(jPlayers, {
        keyBindings: customKeyBindings
      });
      event.key = 20;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      (0, _expect["default"])(customKeySpy).toHaveBeenCalled();
    });
  });
  describe('play', function () {
    it('pauses when playing', function () {
      var _setup = setup(jPlayers),
          store = _setup.store;

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.paused).toBe(true);
    });
    it('plays when paused', function () {
      jPlayers[id].paused = true;

      var _setup2 = setup(jPlayers),
          store = _setup2.store;

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.paused).toBe(false);
    });
  });
  describe('fullScreen', function () {
    it('toggles fullScreen', function () {
      var _setup3 = setup(jPlayers),
          store = _setup3.store;

      event.keyCode = 70;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.fullScreen).toBe(true);
    });
  });
  describe('mute', function () {
    it('toggles mute', function () {
      var _setup4 = setup(jPlayers),
          store = _setup4.store;

      event.keyCode = 77;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.muted).toBe(true);
    });
  });
  describe('volumeUp', function () {
    it('increments volume', function () {
      jPlayers[id].volume = 0;

      var _setup5 = setup(jPlayers),
          store = _setup5.store;

      event.keyCode = 190;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.volume).toBe(0.1);
    });
  });
  describe('volumeDown', function () {
    it('decrements volume', function () {
      jPlayers[id].volume = 0.1;

      var _setup6 = setup(jPlayers),
          store = _setup6.store;

      event.keyCode = 188;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.volume).toBe(0);
    });
  });
  describe('loop', function () {
    it('toggles loop', function () {
      var _setup7 = setup(jPlayers),
          store = _setup7.store;

      event.keyCode = 76;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.loop).toBe(true);
    });
  });
  describe('onKeyDown', function () {
    it('doesnt handle the key down if focused is false', function () {
      jPlayers[id].focused = false;

      var _setup8 = setup(jPlayers),
          store = _setup8.store;

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.paused).toNotBe(true);
    });
    it('doesnt handle the key down if keyEnabled is false', function () {
      jPlayers[id].keyEnabled = false;

      var _setup9 = setup(jPlayers),
          store = _setup9.store;

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.paused).toNotBe(true);
    });
  });
  describe('unmount', function () {
    it('should remove onKeyDown event listener', function () {
      var _setup10 = setup(jPlayers),
          wrapper = _setup10.wrapper,
          store = _setup10.store;

      wrapper.unmount();
      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.paused).toNotBe(true);
    });
  });
});