/* Problem
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321 */

function reverse(num) {
  let newArr = [];

  let stringNum = num.toString();
  let numArr = stringNum.split("");

  newArr.push(numArr.reverse());

  let joinNewArr = "";
  for (let i = 0; i < newArr.length; i++) {
    joinNewArr += newArr[i].join("");
  }
  return joinNewArr;
}

console.log(reverse(120));
