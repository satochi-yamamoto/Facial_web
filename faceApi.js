const faceapi = require('face-api.js');
const canvas = require('canvas');

const faceDetectionNet = faceapi.nets.ssdMobilenetv1;
const faceDetectionOptions = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 });

const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

module.exports = { faceDetectionNet, faceDetectionOptions, canvas };
