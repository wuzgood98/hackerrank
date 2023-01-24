/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

/**
 * We loop through the array of items, and add up the total of all items except the one that Anna
 * didn't eat. Then we divide that total by 2 to get the amount that Brian should have been charged. If
 * the amount Brian was charged is less than the amount he should have been charged, we return the
 * difference. If the amount Brian was charged is equal to the amount he should have been charged, we
 * return "Bon Appetit"
 * @param bill - an array of integers representing the cost of each item ordered
 * @param k - The index of the item Anna doesn't eat
 * @param b - an array of integers representing the cost of each item ordered
 * @returns The amount that Anna was overcharged.
 */
function bonAppetit(bill, k, b) {
  // Write your code here
  let itemNotEaten = bill[k],
    actual = 0,
    charged = 0;

  for (let i = 0; i < bill.length; i++) {
    if (bill[i] !== itemNotEaten) {
      actual += bill[i];
    }
  }

  actual /= 2;

  if (actual < b) {
    charged = b - actual;
  }

  if (actual === b) {
    return "Bon Appetit";
  }

  return charged;
}

const res = bonAppetit([40, 39, 97, 5, 2, 84, 35, 93, 59, 39], 2, 198);
console.log(res);
