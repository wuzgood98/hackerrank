/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

/**
 * We loop through the array, and for each element, we loop through the array again, and check if the
 * sum of the current element and the element we're looping through is divisible by k. If it is, we
 * increment count
 * @param n - the integer length of array ar.
 * @param k - the divisor
 * @param ar - an array of integers
 * @returns The number of pairs that are divisible by k.
 */
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      (ar[i] + ar[j]) % k === 0 && count++;
    }
  }
  return count;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
