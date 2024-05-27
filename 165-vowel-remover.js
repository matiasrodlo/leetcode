/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

don't worry about uppercase vowels y is not considered a vowel for this kata
*/

function shortcut(string) {
  let newString = [];

  for (let i = 0; i < string.length; i++) {
    if (!["a", "e", "i", "o", "u"].includes(string[i])) {
      newString.push(string[i]);
    }
  }
  return newString.join("");
}

console.log(shortcut("hello world")); // Outputs: "hll wrld"

shortcut("hello");
