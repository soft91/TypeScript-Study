const myEvent = "mouseover";
console.log(typeof myEvent, myEvent);
function on(event, callback) {
    console.log(typeof event, event);
    callback("callback!");
}
on(myEvent, (message) => console.log(message));
//# sourceMappingURL=string-literal-types.js.map