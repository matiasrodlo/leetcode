/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
  // Check if the input is a perfect square using the Math.sqrt method
  const sqrt = Math.sqrt(sq);
  if (!Number.isInteger(sqrt)) {
    return -1;
  }

  // Increment the square root to find the next perfect square
  return (sqrt + 1) * (sqrt + 1);
}

findNextSquare(121); // 144
