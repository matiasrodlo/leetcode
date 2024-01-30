/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

function abbrevName(name) {
  const word = name.split(" ");

  const firstName = word[0][0].toUpperCase();
  const lastName = word[1][0].toUpperCase();

  return firstName + "." + lastName;
}

abbrevName("jaime coloma");
