/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let start = s,
    stop = t,
    apple = a,
    orange = b,
    appleCount = 0,
    orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    apples[i] += apple;
    if (apples[i] >= start && apples[i] <= stop) {
      appleCount++;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    oranges[j] += orange;
    if (oranges[j] >= start && oranges[j] <= stop) {
      orangeCount++;
    }
  }

  console.log([appleCount, orangeCount].join("\n"));
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
