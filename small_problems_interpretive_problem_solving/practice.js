function scramble(str1, str2) {
  let str1Chars = str1.split('');
  let targetNum = str2.length;
  let charsFound = 0;
  
  str1Chars.forEach(char => {
    if (str2.includes(char)) {
      charsFound++;
      console.log(charsFound);
    }
  });
  
  return charsFound === targetNum;
}

console.log(scramble('worldaaaaa', 'world'));
console.log(scramble('worldabgdgbgdaaa', 'dab'));
console.log(scramble('worldaaaaax', 'ax'));