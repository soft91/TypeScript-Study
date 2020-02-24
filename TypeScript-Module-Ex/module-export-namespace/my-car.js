"use strict";
exports.__esModule = true;
var MyCar = /** @class */ (function () {
    function MyCar(name) {
        this.name = name;
    }
    MyCar.prototype.getName = function () {
        return this.name;
    };
    return MyCar;
}());
exports.MyCar = MyCar;
var engine_1 = require("./engine");
exports.SuperEngine = engine_1.Engine;
