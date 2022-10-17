/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

/**
 * If the grade is greater than 35, then if the grade modulo 5 is greater than 2, then add 5 minus the
 * grade modulo 5 to the grade
 * @param grades - an array of integers representing grades before rounding
 * @returns The grades array with the rounded grades.
 */
function gradingStudents(grades) {
  // Write your code here
  let grade = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 35) {
      if (grades[i] % 5 > 2) {
        grade = grades[i] % 5;
        grades[i] += 5 - grade;
      }
    }
  }
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
