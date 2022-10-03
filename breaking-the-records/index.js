/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

/**
 * We keep track of the max and min scores, and the number of times they change
 * @param scores - an array of integers
 * @returns The number of times the highest score was broken and the number of times the lowest score
 * was broken.
 */
function breakingRecords(scores) {
  // Write your code here
  let minCount = 0,
    maxCount = 0,
    maxScore = scores[0],
    minScore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    const currScore = scores[i];
    if (currScore > maxScore) {
      maxCount++;
      maxScore = scores[i];
    }
    if (currScore < minScore) {
      minCount++;
      minScore = scores[i];
    }
  }
  return [maxCount, minCount];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
