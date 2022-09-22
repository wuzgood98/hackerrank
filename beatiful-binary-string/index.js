/**
 * We iterate through the string, and if we find a 0, 1, 0 sequence, we increment the number of moves
 * and skip the next two characters
 * @param b - a string of binary digits
 * @returns The number of moves it takes to make the binary string beautiful.
 */
function beautifulBinaryString(b) {
  // Write your code here
  const n = b.length;
  let minMoves = 0;
  for (let i = 0; i < n; i++) {
    if (b[i] === "0" && b[i + 1] === "1" && b[i + 2] === "0") {
      minMoves++;
      i += 2;
    }
  }

  return minMoves;
}
beautifulBinaryString("0100101010");
