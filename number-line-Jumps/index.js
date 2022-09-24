/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

/**
 * If the second kangaroo is faster than the first, then they will never meet. Otherwise, if the
 * distance between them is a multiple of the difference in their speeds, then they will meet
 * @param x1 - starting position of kangaroo 1
 * @param v1 - Kangaroo 1's jump distance (in meters)
 * @param x2 - the starting position of the second kangaroo
 * @param v2 - the speed of the second kangaroo
 * @returns a string.
 */
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  return v2 > v1 ? "NO" : (x2 - x1) % Math.abs(v1 - v2) === 0 ? "YES" : "NO";
}
console.log(kangaroo(0, 3, 4, 2));
