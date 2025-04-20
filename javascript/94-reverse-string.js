/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

function solution(str) {
  let letters = str.split("");
  let newStr = [];

  for (let i = letters.length - 1; i >= 0; i--) {
    newStr.push(letters[i]);
  }
  return newStr.join("");
}

solution("world");
