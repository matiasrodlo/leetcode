/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 */

function fakeBin(x) {
  let newArr = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newArr.push(0);
    } else {
      newArr.push(1);
    }
  }

  return newArr.join("");
}

const result = fakeBin([1, 2, 9, 8]);
console.log(result);
