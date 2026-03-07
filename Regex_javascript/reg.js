let pattern = /pushpesh lingam/;
let pname = "pushpesh";
let res = pattern.test(pname);
console.log(res);

// TODO: Model 1

//* ^ indicates the beginning of the pattern
//* $ indicates the end of the pattern
//* {} specifies the size (length)

let pat1 = /^[a-z,A-Z,0-9]{8}$/; //* Should Contain alphabets or numbers, have length 8, and $ indicates the end
let pn = "Pushpesh";
let tes = pat1.test(pn);
console.log(tes);

//TODO: Model 2 -> Email Format
//* ^ indicates the beginning of the email pattern
//* [a-zA-Z0-9._%+-]+ allows username characters before '@'
//* @ symbol separates username and domain
//* [a-zA-Z0-9]+ allows domain name characters
//* \. represents the dot before the domain extension
//* [a-zA-Z]{2,} specifies the domain extension length (at least 2 letters)
//* $ indicates the end of the pattern

let pat2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/; //* Email Format
let input1 = "test@gmail.com";
let check1 = pat2.test(input1);
console.log(check1);

//TODO: Model 3 -> Phone number
let pat3 = /^[6-9]{1}[0-9]{9}$/;
let input2 = "6281682082";
let check2 = pat3.test(input2);
console.log(check2);
