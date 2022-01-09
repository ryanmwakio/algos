//inputs: 15
//output: position of 15

//using binary search

let numbers = [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19];

function searchNum(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num) {
    if (num < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(middle);
  return middle;
}

searchNum(numbers, 18);
