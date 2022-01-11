// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.clip.2
// Description:Shadows are not drawn outside the clipping region
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadows are not drawn outside the clipping region");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 50, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(50, 0, 50, 50);
ctx.save();
ctx.beginPath();
ctx.rect(0, 0, 50, 50);
ctx.clip();
ctx.shadowColor = '#f00';
ctx.shadowOffsetX = 50;
ctx.fillRect(0, 0, 50, 50);
ctx.restore();
_assertPixel(canvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(canvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
t.done();

});
done();
