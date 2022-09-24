/*
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s) {
  // Write your code here
  const n = s.length;

  return s
    .split("")
    .slice(0, Math.floor(n / 2))
    .reduce(
      (acc, curr, index) =>
        acc + Math.abs(curr.charCodeAt() - s[n - 1 - index].charCodeAt()),
      0
    );
}
console.log(theLoveLetterMystery("cba"));
