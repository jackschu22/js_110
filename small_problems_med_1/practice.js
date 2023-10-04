/*
create an object to map any number value to its stirng type
iterate thru the string.
if the current element is a key in the object, assign the element the keys value.
return the string.
*/
const nums = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8,
  'nine': 9 }

const wordToDigit = (str) => {
  return str.split(' ').map((el) => el in nums ? nums[el] : el).join(' ');  
} 

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));