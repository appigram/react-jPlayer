"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOption = exports.focus = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = void 0;

var _constants = require("../util/constants");

var setMedia = function setMedia(id, media) {
  return {
    type: _constants.actionNames.SET_MEDIA,
    id: id,
    media: media
  };
};

exports.setMedia = setMedia;

var clearMedia = function clearMedia(id) {
  return {
    type: _constants.actionNames.CLEAR_MEDIA,
    id: id
  };
};

exports.clearMedia = clearMedia;

var play = function play(id, time) {
  return {
    type: _constants.actionNames.PLAY,
    id: id,
    time: time
  };
};

exports.play = play;

var pause = function pause(id, time) {
  return {
    type: _constants.actionNames.PAUSE,
    id: id,
    time: time
  };
};

exports.pause = pause;

var setPlayHead = function setPlayHead(id, percent) {
  return {
    type: _constants.actionNames.PLAY_HEAD,
    id: id,
    percent: percent
  };
};

exports.setPlayHead = setPlayHead;

var setVolume = function setVolume(id, volume) {
  return {
    type: _constants.actionNames.VOLUME,
    id: id,
    volume: volume
  };
};

exports.setVolume = setVolume;

var setMute = function setMute(id, mute) {
  return {
    type: _constants.actionNames.MUTE,
    id: id,
    mute: mute
  };
};

exports.setMute = setMute;

var focus = function focus(id) {
  return {
    type: _constants.actionNames.FOCUS,
    id: id
  };
};

exports.focus = focus;

var setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};

exports.setOption = setOption;