// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.filter.canvasFilterObject
// Description:Test CanvasFilter() object
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Test CanvasFilter() object");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

_assert(ctx.filter == 'none', "ctx.filter == 'none'");
ctx.filter = 'blur(5px)';
_assert(ctx.filter == 'blur(5px)', "ctx.filter == 'blur(5px)'");
ctx.filter = new CanvasFilter({filter: "gaussianBlur", stdDeviation: 5});
_assert(ctx.filter.toString() == '[object CanvasFilter]', "ctx.filter.toString() == '[object CanvasFilter]'");
ctx.filter = new CanvasFilter([
    {filter: "gaussianBlur", stdDeviation: 5},
    {filter: "gaussianBlur", stdDeviation: 10}
]);
_assert(ctx.filter.toString() == '[object CanvasFilter]', "ctx.filter.toString() == '[object CanvasFilter]'");
var canvas2 = new OffscreenCanvas(100, 50);
var ctx2 = canvas2.getContext('2d');
ctx2.filter = ctx.filter;
_assert(ctx.filter.toString() == '[object CanvasFilter]', "ctx.filter.toString() == '[object CanvasFilter]'");
ctx.filter = 'blur(5px)';
_assert(ctx.filter == 'blur(5px)', "ctx.filter == 'blur(5px)'");
ctx.filter = 'none';
_assert(ctx.filter == 'none', "ctx.filter == 'none'");
ctx.filter = new CanvasFilter({filter: "gaussianBlur", stdDeviation: 5});
ctx.filter = "this string is not a filter and should do nothing";
_assert(ctx.filter.toString() == '[object CanvasFilter]', "ctx.filter.toString() == '[object CanvasFilter]'");
t.done();

});
done();
