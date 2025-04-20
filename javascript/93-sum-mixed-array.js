/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x) {
  let num = [];
  let result = 0;

  for (let i = 0; i < x.length; i++) {
    num.push(x[i] / 1);
  }

  for (let j = 0; j < num.length; j++) {
    result += num[j];
  }
  return result;
}

sumMix([9, 3, "7", "3"]);
