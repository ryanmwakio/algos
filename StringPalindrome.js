//palindrome test

//Test cases
//1) aza --> should return true
//2) azaa --> should return false

function validPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(validPalindrome("azaza"));
