/**
 * We create an object that stores the number of instances of each color, then we loop through the
 * values of the object and add the number of pairs to the variable pairs
 * @param n - the number of socks in the pile
 * @param ar - an array of integers representing the color of each sock
 * @returns The number of pairs of socks that are available.
 */
function sockMerchant(n, ar) {
  // Write your code here
  let instance = {},
    pairs = 0;

  for (let i = 0; i < n; i++) {
    instance[ar[i]] = instance[ar[i]] ? (instance[ar[i]] += 1) : 1;
  }

  for (let i of Object.values(instance)) {
    pairs += Math.floor(i / 2);
  }

  return pairs;
}

const pairs = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(pairs);
