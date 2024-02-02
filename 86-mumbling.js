/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let letter = s.split("");
  let duplicate = [];
  let uppercase = [];

  for (let i = 0; i < letter.length; i++) {
    duplicate.push(letter[i].repeat(i + 1));
  }

  for (let j = 0; j < duplicate.length; j++) {
    uppercase.push(
      duplicate[j].charAt(0).toUpperCase() + duplicate[j].slice(1).toLowerCase()
    );
  }
  return uppercase.join("-");
}

accum("abcd");
