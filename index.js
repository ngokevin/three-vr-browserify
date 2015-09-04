var THREE = window.THREE = require('three');
var VRControls = require('three-vr-controls');
var VREffect = require('three-vr-effect');

module.exports = {
  THREE: THREE,
  VRControls: VRControls,
  VREffect: VREffect
};

delete window.THREE;
