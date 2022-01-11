// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.create1.initial
// Description:createImageData(imgdata) returns transparent black data of the right size
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("createImageData(imgdata) returns transparent black data of the right size");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var imgdata1 = ctx.getImageData(0, 0, 10, 20);
var imgdata2 = ctx.createImageData(imgdata1);
_assertSame(imgdata2.data.length, imgdata1.data.length, "imgdata2.data.length", "imgdata1.data.length");
_assertSame(imgdata2.width, imgdata1.width, "imgdata2.width", "imgdata1.width");
_assertSame(imgdata2.height, imgdata1.height, "imgdata2.height", "imgdata1.height");
var isTransparentBlack = true;
for (var i = 0; i < imgdata2.data.length; ++i)
    if (imgdata2.data[i] !== 0)
        isTransparentBlack = false;
_assert(isTransparentBlack, "isTransparentBlack");
t.done();

});
done();
