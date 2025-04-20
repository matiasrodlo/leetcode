/* Problem
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5 */

function lastWord(sentence) {
  let word = [];

  for (let i = sentence.length - 1; i > 0; i--) {
    if (sentence[i] != " ") {
      word.push(sentence[i]);
    } else {
      break;
    }
  }
  return word.reverse().join("");
}

console.log(lastWord("Hello World"));
