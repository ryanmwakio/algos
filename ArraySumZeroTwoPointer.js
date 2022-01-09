//sum zero
//Test cases
//1) sumZero([-3,-2,-1,0,1,2,3]) --> returns [-3,3] because they add to zero 0
//2) sumZero([-2,0,1,3]) --> returns undefined
//3) sumZero([1,2,3]) --> returns undefined

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
