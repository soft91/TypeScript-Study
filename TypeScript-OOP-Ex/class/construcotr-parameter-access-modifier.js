var Cube = /** @class */ (function () {
    function Cube(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
    }
    Cube.prototype.getVolume = function () {
        return this.width * this.length * this.height;
    };
    return Cube;
}());
var _a = [1, 2, 3], cWidth = _a[0], cLength = _a[1], cHeight = _a[2];
var cube = new Cube(cWidth, cLength, cHeight);
console.log("1\uBC88 \uC138\uB85C : " + cube.width + "cm");
console.log("2\uBC88 \uBD80\uD53C : " + cube.getVolume() + "ml");
