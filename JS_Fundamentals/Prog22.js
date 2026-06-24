//TODO: Function Declaration

const res = sum(45, 36);
console.log(res);
function sum(a, b) {
  return a + b;
}

//* Function declarations should always moves on top during the execution of the javascript
//* That is called hoisting

//TODO: Function Expression
//* This is not hoisted because we are creating it in runtime
const sum1 = function (a, b) {
  return a + b;
};
const res1 = sum1(40, 36);
console.log(res1);
