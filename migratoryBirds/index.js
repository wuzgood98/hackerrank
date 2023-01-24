function migratoryBirds(arr) {
  // Write your code here
  let temp = {}
  for (let i of arr) {
    temp[i] = (temp[i] || 0) + 1;
  }
  
  return Object.entries(temp).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));