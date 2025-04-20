/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade

90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  // Calculate the average score
  let score = (s1 + s2 + s3) / 3;
  let grade = "";

  // Determine the grade based on the average score
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score < 90) {
    grade = "B";
  } else if (score >= 70 && score < 80) {
    grade = "C";
  } else if (score >= 60 && score < 70) {
    grade = "D";
  } else if (score >= 0 && score < 60) {
    grade = "F";
  } else {
    grade = "Invalid score"; // Handle unexpected scores
  }

  return grade;
}

console.log(getGrade(95, 100, 93)); // Output: A
