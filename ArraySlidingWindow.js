//sliding window
function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    //the first sum, e.g if it's three sum the first three numbers
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    //start the loop after first e.g three number
    tempSum = tempSum - arr[i - num] + arr[i]; //add and remove you don't have to sum everything
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5, 19], 3));
