//hello---> {h:1,e:1,l:2,o:1}

function charCount(myString) {
  let charMap = {};
  //loop through the string while creating an object {character:count}
  for (let i = 0; i < myString.length; i++) {
    if (charMap[myString[i]] > 0) {
      charMap[myString[i]] += 1;
    } else {
      charMap[myString[i]] = 1;
    }
  }

  if (Object.keys(charMap).length === 0) {
    return "no string was passed";
  }

  return charMap;
}

console.log(charCount(" "));
