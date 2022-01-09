function typedOutString(S, T) {
  let newS = "";
  let newT = "";

  for (let i = 0; i < S.length; i++) {
    if (S[i + 1] === "#" || S[i] === "#") {
      continue;
    } else {
      newS += S[i];
    }
  }

  for (let j = 0; j < S.length; j++) {
    if (T[j + 1] === "#" || T[j] === "#") {
      continue;
    } else {
      newT += T[j];
    }
  }

  if (newS === newT) {
    return true;
  } else {
    return false;
  }
}

console.log(typedOutString("ab##c", "az#c"));
