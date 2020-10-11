import * as _ from "underscore";
let sum = _.reduce([1, 2, 3], (memo, num) => {
  return memo + num;
},0);

console.log(sum);