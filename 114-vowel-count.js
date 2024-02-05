/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let newStr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let result = 0;

  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (newStr[i] === vowels[j]) {
        result += 1;
      }
    }
  }
  return result;
}

getCount("abracadabra");
