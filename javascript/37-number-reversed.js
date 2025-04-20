/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

function digitize(n) {
  let arr = [];
  let numCon = n.toString();

  for (let i = numCon.length - 1; i >= 0; i--) {
    arr.push(Number(numCon[i]));
  }
  return arr;
}

digitize(35231);
