//TODO: Function Declaration

const res=sum(45,36);
console.log(res);
function sum(a,b){
    return a+b;
}

//function declartions should always moves on top while execution of the javascript
//that is called hoisting

//TODO: Function Expression
//This is not hoisted
const sum1=function(a,b){
    return a+b;
}           
const res1=sum1(40,36);
console.log(res1);