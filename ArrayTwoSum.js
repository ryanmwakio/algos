//return indices of two numbers that add up to a target
function twoSum(nums, target) {
  const numsToFindMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentValue = numsToFindMap[nums[p]]; //does the current value already exist in the numbers to find hashmap

    if (currentValue >= 0) {
      //if the current value has an index in the hashmap {numberToFind:index},, 0 is also an index
      return [currentValue, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p; //adds items to the hash map/object #key:value--->numberToFind:index
    }
  }

  return null;
}

console.log(twoSum([100, 300, 700, 900, 200], 1100));
