//two sum...two pointer
function twoSum(arr, target) {
  let sum;
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
}

console.log(twoSum([3, 19, 5, 6, 9, 10], 29));
