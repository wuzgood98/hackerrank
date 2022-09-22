function compareTriplets(a, b) {
  let alicePoints = 0,
    bobPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      alicePoints = alicePoints;
      bobPoints = bobPoints;
    } else if (a[i] < b[i]) {
      bobPoints++;
    } else if (a[i] > b[i]) {
      alicePoints++;
    }
  }
  return [alicePoints, bobPoints];
}

console.log(compareTriplets([3, 2, 5], [1, 3, 5]));