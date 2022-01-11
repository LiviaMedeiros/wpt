// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.stroke.prune.arc
// Description:Zero-length line segments from arcTo and arc are removed before stroking
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Zero-length line segments from arcTo and arc are removed before stroking");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.lineWidth = 100;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.beginPath();
ctx.moveTo(50, 25);
ctx.arcTo(50, 25, 150, 25, 10);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(60, 25);
ctx.arc(50, 25, 10, 0, 0, false);
ctx.stroke();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
