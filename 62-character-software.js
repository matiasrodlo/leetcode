/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string) {
  let correctedString = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

    if (currentChar === "5") {
      correctedString += "S";
    } else if (currentChar === "0") {
      correctedString += "O";
    } else if (currentChar === "1") {
      correctedString += "I";
    } else {
      correctedString += currentChar;
    }
  }

  return correctedString;
}

correct("H3ll0 51r");
