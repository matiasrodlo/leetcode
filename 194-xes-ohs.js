/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  let xSum = 0;
  let oSum = 0;

  let strLow = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (strLow[i] == "x") {
      xSum += 1;
    } else if (strLow[i] == "o") oSum += 1;
  }
  return xSum == oSum;
}

XO("xo");
