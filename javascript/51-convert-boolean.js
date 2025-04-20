/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) {
  let result = "";

  switch (bool) {
    case true:
      result = "Yes";
      break;
    case false:
      result = "No";
      break;
  }
  return result;
}

boolToWord(false);
