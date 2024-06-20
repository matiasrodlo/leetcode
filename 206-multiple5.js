/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

function roundToNext5(n) {
  // Check if the number is already a multiple of 5
  if (n % 5 === 0) {
    return n;
  }

  // Otherwise, calculate the remainder when divided by 5
  const remainder = n % 5;

  // Check if the number is negative
  if (n < 0) {
    // Round down for negative numbers: subtract remainder
    return n - remainder;
  } else {
    // Round up for positive numbers (existing logic)
    return n + (5 - remainder);
  }
}

roundToNext5(-7);
