/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  let gradesAfterRounding = [];
  let point = 0;

  for (let i = 0; i < grades.length; i++) {
    let notToRound = grades[i];
    if (grades[i] < 38) {
      notToRound = grades[i];
      if (grades[i] % 5 > 2) {
        point = grades[i] % 5;
        grades[i] += 5 - point;
      }
    }
    gradesAfterRounding.push(notToRound);
  }
  return gradesAfterRounding;
}

console.log(gradingStudents([73, 67, 38, 33]));

/* function getMultiplesOfFive() {
  let integers = [];
  let num = 0;
  while (num <= 100) {
    num++;
    integers.push(num);
  }

  return integers.filter((integer) => integer % 5 === 0);
}
console.log(getMultiplesOfFive()); */
