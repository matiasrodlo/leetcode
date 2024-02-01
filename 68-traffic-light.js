/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
  let result;

  switch (current) {
    case "red":
      result = "green";
      break;
    case "yellow":
      result = "red";
      break;
    case "green":
      result = "yellow";
      break;
    default:
      result = "yellow";
      break;
  }
  return result;
}

updateLight("red");
