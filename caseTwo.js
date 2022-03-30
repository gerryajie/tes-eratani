function solution(inputString) {
  const lengthString = inputString.length;
  const median = Math.floor(lengthString / 2);

  for (let i = 0; i < median; i++) {
    if (inputString[i] !== inputString[lengthString - 1 - i]) {
      return inputString + " Itu bukan Palindrome";
    }
  }
  return inputString + " Itu Palindrome";
}

console.log(solution("kodokkodok"));
console.log(solution("jinggaaku"));
console.log(solution("123321"));
