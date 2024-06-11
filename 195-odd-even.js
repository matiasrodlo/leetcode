/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

function oddOrEven(array) {
  let sumNum = 0;
  for (let i = 0; i < array.length; i++) {
    sumNum += array[i];
  }
  if (sumNum % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

oddOrEven([0, 1, 5]);
