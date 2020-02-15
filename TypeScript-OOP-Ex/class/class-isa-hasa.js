var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Flashlight = /** @class */ (function () {
    function Flashlight(lightIntensity) {
        this.lightIntensity = lightIntensity;
    }
    return Flashlight;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(numberOfWheel) {
        this.numberOfWheel = numberOfWheel;
    }
    Bicycle.prototype.getNumberOfWheel = function () {
        return this.numberOfWheel;
    };
    return Bicycle;
}());
var MountainBike = /** @class */ (function (_super) {
    __extends(MountainBike, _super);
    function MountainBike(numberOfWheel, hasBackSaddle) {
        var _this = _super.call(this, numberOfWheel) || this;
        _this.numberOfWheel = numberOfWheel;
        _this.hasBackSaddle = hasBackSaddle;
        _this.flashlight = new Flashlight(90);
        return _this;
    }
    MountainBike.prototype.getHasBackSaddle = function () {
        return this.hasBackSaddle;
    };
    MountainBike.prototype.getNumberOfWheel = function () {
        return this.numberOfWheel;
    };
    return MountainBike;
}(Bicycle));
var hasBackSaddle = true;
var numberOfWheel = 2;
var mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log("\uC790\uC804\uAC70\uC758 \uC548\uC7A5 \uC720\uBB34: " + mountainBike.getHasBackSaddle());
console.log("\uC790\uC804\uAC70\uC758 \uBC14\uD034 \uAC1C\uC218: " + mountainBike.getNumberOfWheel());
