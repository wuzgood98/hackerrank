const arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  // Write your code here
  const arrLen = arr.length;
  /* let zeros = 0
  let negatives = 0
  let positives = 0
  for (let i = 0; i < arrLen; i++) {
    if(arr[i] < 0) {
      negatives++
    } else if(arr[i] > 0) {
      positives++
    } else {
      zeros++
    }
  } */

  const positive = (arr.filter((e) => e > 0).length / arrLen).toFixed(6);
  const negative = (arr.filter((e) => e < 0).length / arrLen).toFixed(6);
  const zero = (arr.filter((e) => e === 0).length / arrLen).toFixed(6);
  const res = [positive, negative, zero].join("\n");
  console.log(res);

  /* const  positiveFraction = (positives / arrLen).toFixed(6),
  negativesFraction = (negatives / arrLen).toFixed(6),
  zerosFraction = (zeros / arrLen).toFixed(6)
  console.log(positiveFraction, negativesFraction, zerosFraction); */
}
plusMinus(arr);