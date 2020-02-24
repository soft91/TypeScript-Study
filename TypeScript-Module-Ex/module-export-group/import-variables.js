"use strict";
exports.__esModule = true;
var export_variables_1 = require("./export-variables");
console.log("api name: " + export_variables_1.author);
console.log("api version: " + export_variables_1.ver);
export_variables_1.extensions.forEach(function (s) {
    console.log("extensions : " + s);
});
console.log("display() : " + export_variables_1.display());
