// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.width.transformed
// Description:Line stroke widths are affected by scale transformations
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Line stroke widths are affected by scale transformations");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.lineWidth = 4;
// Draw a green line over a red box, to check the line is not too small
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(15, 15, 20, 20);
ctx.save();
 ctx.scale(5, 1);
 ctx.beginPath();
 ctx.moveTo(5, 15);
 ctx.lineTo(5, 35);
 ctx.stroke();
ctx.restore();
// Draw a green box over a red line, to check the line is not too large
ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.save();
 ctx.scale(-5, 1);
 ctx.beginPath();
 ctx.moveTo(-15, 15);
 ctx.lineTo(-15, 35);
 ctx.stroke();
ctx.restore();
ctx.fillRect(65, 15, 20, 20);
_assertPixel(canvas, 14,25, 0,255,0,255, "14,25", "0,255,0,255");
_assertPixel(canvas, 15,25, 0,255,0,255, "15,25", "0,255,0,255");
_assertPixel(canvas, 16,25, 0,255,0,255, "16,25", "0,255,0,255");
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 34,25, 0,255,0,255, "34,25", "0,255,0,255");
_assertPixel(canvas, 35,25, 0,255,0,255, "35,25", "0,255,0,255");
_assertPixel(canvas, 36,25, 0,255,0,255, "36,25", "0,255,0,255");
_assertPixel(canvas, 64,25, 0,255,0,255, "64,25", "0,255,0,255");
_assertPixel(canvas, 65,25, 0,255,0,255, "65,25", "0,255,0,255");
_assertPixel(canvas, 66,25, 0,255,0,255, "66,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
_assertPixel(canvas, 84,25, 0,255,0,255, "84,25", "0,255,0,255");
_assertPixel(canvas, 85,25, 0,255,0,255, "85,25", "0,255,0,255");
_assertPixel(canvas, 86,25, 0,255,0,255, "86,25", "0,255,0,255");
t.done();

});
done();
