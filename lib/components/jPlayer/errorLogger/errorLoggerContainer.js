"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _recompose = require("recompose");

/* eslint-disable no-console */
var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    error: jPlayers[id].error
  };
};

var lifecycleFunctions = {
  logError: function logError() {
    console.error(this.props.error);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.logError();
    }
  }
};

var _default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.lifecycle)(lifecycleFunctions))((0, _recompose.renderNothing)(null));

exports["default"] = _default;