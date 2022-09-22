function staircase(n) {
  // Write your code here
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let s = n - 1; s >= i; s--) {
      result += " ";
    }
    for (let h = 1; h <= i; h++) {
      result += "#";
    }
    result += "\n";
  }
  console.log(result);
}
staircase(4);