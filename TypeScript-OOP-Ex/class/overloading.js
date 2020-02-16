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
var SingleTypeChecker = /** @class */ (function () {
    function SingleTypeChecker() {
    }
    SingleTypeChecker.prototype.typeCheck = function (value) {
        console.log(typeof value + " : " + value);
    };
    return SingleTypeChecker;
}());
var UnionTypeChecker = /** @class */ (function (_super) {
    __extends(UnionTypeChecker, _super);
    function UnionTypeChecker() {
        return _super.call(this) || this;
    }
    UnionTypeChecker.prototype.typeCheck = function (value) {
        if (typeof value === "number") {
            console.log("\uC22B\uC790: " + value);
        }
        else if (typeof value === "string") {
            console.log("\uBB38\uC790\uC5F4: " + value);
        }
        else {
            console.log("\uAE30\uD0C0: " + value);
        }
    };
    return UnionTypeChecker;
}(SingleTypeChecker));
var unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck("happy");
