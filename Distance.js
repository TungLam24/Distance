var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
function distance(big_radius, small_radius) {
    var dist = Math.sqrt(Math.pow((big_radius - small_radius), 2) + Math.pow(24, 2));
    return dist;
}
var big = new Circle(9);
var small = new Circle(5);
console.log(distance(big.radius, small.radius));
