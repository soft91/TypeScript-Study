function myIndexOf(x, y) {
    if (typeof x === "string") {
        return x.indexOf(y); // x가 string 타입일 때
    }
    else {
        return -1;
    }
}
console.log(myIndexOf("hello", "e"));
//# sourceMappingURL=union-types-typeof-check.js.map