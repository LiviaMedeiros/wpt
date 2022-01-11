// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.put.cross
// Description:putImageData() accepts image data got from a different canvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("putImageData() accepts image data got from a different canvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
var ctx2 = offscreenCanvas2.getContext('2d');
ctx2.fillStyle = '#0f0';
ctx2.fillRect(0, 0, 100, 50)
var imgdata = ctx2.getImageData(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.putImageData(imgdata, 0, 0);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
t.done();

});
done();
