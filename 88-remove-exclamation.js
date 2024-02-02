/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  let exclamation = "!";
  let words = s.split("");
  let sentence = [];

  for (let i = 0; i < s.length; i++) {
    if (words[i] !== exclamation) {
      sentence.push(words[i]);
    }
  }
  return sentence.join("");
}

removeExclamationMarks("hola!");
