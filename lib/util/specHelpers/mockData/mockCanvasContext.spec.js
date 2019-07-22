"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expect = require("expect");

var mockCanvasContext = {
  fillRect: (0, _expect.createSpy)(),
  clearRect: (0, _expect.createSpy)(),
  getImageData: (0, _expect.createSpy)().andReturn([]),
  putImageData: (0, _expect.createSpy)(),
  createImageData: (0, _expect.createSpy)().andReturn([]),
  setTransform: (0, _expect.createSpy)(),
  drawImage: (0, _expect.createSpy)(),
  save: (0, _expect.createSpy)(),
  fillText: (0, _expect.createSpy)(),
  restore: (0, _expect.createSpy)(),
  beginPath: (0, _expect.createSpy)(),
  moveTo: (0, _expect.createSpy)(),
  lineTo: (0, _expect.createSpy)(),
  closePath: (0, _expect.createSpy)(),
  stroke: (0, _expect.createSpy)(),
  translate: (0, _expect.createSpy)(),
  scale: (0, _expect.createSpy)(),
  rotate: (0, _expect.createSpy)(),
  arc: (0, _expect.createSpy)(),
  fill: (0, _expect.createSpy)(),
  resetSpies: function resetSpies() {
    return Object.values(mockCanvasContext).forEach(function (spy) {
      if ((0, _expect.isSpy)(spy)) {
        spy.reset();
      }
    });
  }
};
var _default = mockCanvasContext;
exports["default"] = _default;