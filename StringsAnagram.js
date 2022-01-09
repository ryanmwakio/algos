//anagram
//test cases
//1) validAnagram('','') --> returns true
//2) validAnagram('aaz','zza') --> returns false
//3) validAnagram('anagram','nagaram')  --> returns true

function validAnagram(str1, str2) {
  let charCounter1 = {};
  let charCounter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (value of str1) {
    if (!charCounter1[value]) {
      charCounter1[value] = 1;
    } else {
      charCounter1[value] += 1;
    }
  }

  for (value of str2) {
    if (!charCounter2[value]) {
      charCounter2[value] = 1;
    } else {
      charCounter2[value] += 1;
    }
  }

  for (key in charCounter1) {
    if (charCounter1[key] !== charCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("", ""));
