"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _states = _interopRequireDefault(require("./states"));

var _constants = require("../../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('States', function () {
  var jPlayer;
  beforeEach(function () {
    jPlayer = {
      mediaSettings: {}
    };
  });
  it('default state', function () {
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toBe('jp-jplayer jp-state-audio jp-state-playing jp-state-no-volume-support');
  });
  it('applies additional classes if specified', function () {
    var testOneClass = 'testOneClass';
    var testTwoClass = 'testTwoClass';
    var className = (0, _states["default"])(jPlayer, null, 'testOneClass', 'testTwoClass');
    (0, _expect["default"])(className).toContain(testOneClass);
    (0, _expect["default"])(className).toContain(testTwoClass);
  });
  it('applies additional states if specified', function () {
    var additionalStates = {
      testOneClass: true,
      testTwoClass: false
    };
    var className = (0, _states["default"])(jPlayer, additionalStates);
    (0, _expect["default"])(className).toContain('testOneClass');
    (0, _expect["default"])(className).toNotContain('testTwoClass');
  });
  it('applies audio class if video is not true', function () {
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.AUDIO);
  });
  it('applies video class if video is true', function () {
    jPlayer.mediaSettings.video = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.VIDEO);
  });
  it('does not apply playing class if paused', function () {
    jPlayer.paused = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toNotContain(_constants.classes.states.PLAYING);
  });
  it('applies idle class if current time is 0', function () {
    jPlayer.currentTime = 0;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.IDLE);
  });
  it('applies fullScreen class if fullScreen is true', function () {
    jPlayer.fullScreen = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.FULL_SCREEN);
  });
  it('applies muted class if muted is true', function () {
    jPlayer.muted = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.MUTED);
  });
  describe('VOLUME_LOW', function () {
    it('applies volume_low class if not muted and volume < 0.5', function () {
      jPlayer.volume = 0.33;
      var className = (0, _states["default"])(jPlayer);
      (0, _expect["default"])(className).toContain(_constants.classes.states.VOLUME_LOW);
    });
    it('does not apply volume_low class if muted', function () {
      jPlayer.muted = true;
      var className = (0, _states["default"])(jPlayer);
      (0, _expect["default"])(className).toNotContain(_constants.classes.states.VOLUME_LOW);
    });
    it('does not apply volume_low class if volume >= 0.5', function () {
      jPlayer.volume = 0.5;
      var className = (0, _states["default"])(jPlayer);
      (0, _expect["default"])(className).toNotContain(_constants.classes.states.VOLUME_LOW);
    });
  });
  describe('VOLUME_HIGH', function () {
    it('applies volume_high class if not muted and volume > 0.5', function () {
      jPlayer.volume = 0.73;
      var className = (0, _states["default"])(jPlayer);
      (0, _expect["default"])(className).toContain(_constants.classes.states.VOLUME_HIGH);
    });
    it('does not apply volume_high class if muted', function () {
      jPlayer.muted = true;
      var className = (0, _states["default"])(jPlayer);
      (0, _expect["default"])(className).toNotContain(_constants.classes.states.VOLUME_HIGH);
    });
    it('does not apply volume_high class if volume higher than < 0.5', function () {
      jPlayer.volume = 0.49;
      var className = (0, _states["default"])(jPlayer);
      (0, _expect["default"])(className).toNotContain(_constants.classes.states.VOLUME_HIGH);
    });
  });
  it('applies seeking class if seeking is true', function () {
    jPlayer.seeking = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.SEEKING);
  });
  it('applies looped class if loop is true', function () {
    jPlayer.loop = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.LOOPED);
  });
  it('applies no_browser_support class if nonSupported is true', function () {
    jPlayer.mediaSettings.nonSupported = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toContain(_constants.classes.states.NO_BROWSER_SUPPORT);
  });
  it('does not apply no_volume_support class if nonSupported is true', function () {
    jPlayer.volumeSupported = true;
    var className = (0, _states["default"])(jPlayer);
    (0, _expect["default"])(className).toNotContain(_constants.classes.states.NO_VOLUME_SUPPORT);
  });
});