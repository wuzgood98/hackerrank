function diagonalDifference(arr) {
  // Write your code here
  const primaryDiagonal = arr
    .map((e, i) => e[i])
    .reduce((acc, curr) => acc + curr, 0);

  const secondaryDiagonal = arr
    .map((e, i) => {
      const reversedIndex = arr.length - i - 1;
      return e[reversedIndex];
    })
    .reduce((acc, curr) => acc + curr, 0);

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(
  diagonalDifference([
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1],
  ])
);

/* 
* to reverse an array: the length of the array minus the index
arr.length - i
*/