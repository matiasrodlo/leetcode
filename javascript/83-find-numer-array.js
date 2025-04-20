/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
  let dif;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i + 2]) {
      dif = [numbers[i], numbers[i + 1]];
      break;
    }
  }  
  for (let j = 0; j < numbers.length; j++) {
    if (dif[0] === numbers[j]) {
      return dif[1];
    }
  }
}
*/

function stray(numbers) {
  // Sorting the array in ascending order
  var a = numbers.sort();
  // Checking if the first element is different from the second
  if (a[0] != a[1]) {
    // If true, return the first element (as it is the stray/different number)
    return a[0];
  }

  // If false, return the last element (as it is the stray/different number)
  return a[a.length - 1];
}

stray([17, 17, 3, 17, 17, 17, 17]);
