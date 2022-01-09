//array problem count unique values
//test cases
//1) countUniqueValues([1,1,1,1,1,2]) --> returns 2
//2) countUniqueValues([1,2,3,4,4,4,7,7,12,13])--> returns 7
function countUniqueValues(arr) {
  let countObj = {};

  for (val of arr) {
    countObj[val] ? (countObj[val] += 1) : (countObj[val] = 1);
  }

  let uniqueValuesCount = Object.keys(countObj).length;

  return uniqueValuesCount;
}

countUniqueValues([-2, -2, -1, 0, 1]);
