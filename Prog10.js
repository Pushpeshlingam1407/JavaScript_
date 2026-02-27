//Bitwise Operators
console.log(5&9);
console.log(5|9);
console.log(5^9);
console.log(5<<9);
console.log(9>>5);
console.log(15>>>19);


//TODO: 4️⃣ 5 << 9 → Left Shift
// Rule:
// * Shift bits left by 9 positions.
// * Each left shift ≈ multiply by 2.

//TODO: 9 >> 5 → Right Shift
// Rule:
// * Shift bits right by 5 positions.
// * Each right shift ≈ divide by 2 (floor).

// //TODO:
// * Quick Real-World Example
// * Checking if a number is EVEN or ODD using &
let num = 7;
if (num & 1) {
  console.log("Odd");
} else {
  console.log("Even");
}
//
// ! Why?
// ? Because last bit of odd numbers is always 1.

//TODO: Fast Multiplication & Division
// ! Instead of: num * 8
// ? We can do: num << 3   // multiply by 2³
// ! Instead of: num / 4
// ? We can do: num >> 2

//TODO: Competitive Programming / Interviews
// ! Common problems:
// ? Find single non-repeating number → use XOR
// ? Swap two numbers without temp variable
// ? Count set bits
// ? Subset generation
// ? Bit masking DP

// ! Example:
// let arr = [2, 3, 2, 4, 4];
// let unique = 0;
// for (let num of arr) {
//   unique ^= num;
// }
// console.log(unique); // 3

//TODO: Summary
// * Bitwise operators manipulate individual bits of numbers.
// * They are fast and memory-efficient.
// * Commonly used in low-level programming, graphics, and competitive coding.
// * Understanding them can give you an edge in certain problems.

