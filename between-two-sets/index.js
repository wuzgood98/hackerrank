/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here
  let count = 0;
  let min_a = Math.min(...a);
  for (let i = min_a; i <= Math.max(...b); i += min_a) {
    if (b.every((item) => item % i === 0)) {
      if (a.every((item) => i % item === 0)) {
        count++;
      }
    }
  }
  return count;
}
getTotalX([2, 4], [16, 32, 96]);
