"use strict";

var _expect = _interopRequireDefault(require("expect"));

var actions = _interopRequireWildcard(require("./actions"));

var _constants = require("../util/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('jPlayer actions', function () {
  var id = 'jPlayer-1';
  it('should create an action to set the jPlayer defaultOptions', function () {
    var key = 'verticalVolume';
    var value = true;
    var expectedAction = {
      type: _constants.actionNames.SET_OPTION,
      key: key,
      value: value,
      id: id
    };
    (0, _expect["default"])(actions.setOption(id, key, value)).toEqual(expectedAction);
  });
  it('should create an action to set the media', function () {
    var media = {
      mp3: 'test',
      poster: 'test-poster'
    };
    var expectedAction = {
      type: _constants.actionNames.SET_MEDIA,
      media: media,
      id: id
    };
    (0, _expect["default"])(actions.setMedia(id, media)).toEqual(expectedAction);
  });
  it('should create an action to clear the media', function () {
    var expectedAction = {
      type: _constants.actionNames.CLEAR_MEDIA,
      id: id
    };
    (0, _expect["default"])(actions.clearMedia(id)).toEqual(expectedAction);
  });
  it('should create an action to play the media', function () {
    var time = 30;
    var expectedAction = {
      type: _constants.actionNames.PLAY,
      time: time,
      id: id
    };
    (0, _expect["default"])(actions.play(id, time)).toEqual(expectedAction);
  });
  it('should create an action to pause the media', function () {
    var time = 30;
    var expectedAction = {
      type: _constants.actionNames.PAUSE,
      time: time,
      id: id
    };
    (0, _expect["default"])(actions.pause(id, time)).toEqual(expectedAction);
  });
  it('should create an action to set the play head', function () {
    var percent = 30;
    var expectedAction = {
      type: _constants.actionNames.PLAY_HEAD,
      percent: percent,
      id: id
    };
    (0, _expect["default"])(actions.setPlayHead(id, percent)).toEqual(expectedAction);
  });
  it('should create an action to set the volume', function () {
    var volume = 0.8;
    var expectedAction = {
      type: _constants.actionNames.VOLUME,
      volume: volume,
      id: id
    };
    (0, _expect["default"])(actions.setVolume(id, volume)).toEqual(expectedAction);
  });
  it('should create an action to mute the media', function () {
    var mute = true;
    var expectedAction = {
      type: _constants.actionNames.MUTE,
      mute: mute,
      id: id
    };
    (0, _expect["default"])(actions.setMute(id, mute)).toEqual(expectedAction);
  });
  it('should create an action to set the focus', function () {
    var expectedAction = {
      type: _constants.actionNames.FOCUS,
      id: id
    };
    (0, _expect["default"])(actions.focus(id)).toEqual(expectedAction);
  });
});