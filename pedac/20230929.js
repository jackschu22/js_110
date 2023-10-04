/*

TAKEAWAYS: - don't be afraid to spend 20 mins doing PEDAC before you start coding
                - Clare has seen people take even more time and still finish
           - write your algorithm in such a way that it describes what each step of 
             the solution accomplishes, but doesn't wed you to one particular approach
           - once you finish writing the algorithm, "run" a test case (or 2) through 
             the algorithm to make sure it works
           - write a few "high level" sentences describing the algorithm before getting
             into the step-by-step
                - write as if there are built-in JS methods/functions (i.e. `isValid`,
                  `isPalindrome`) to do exactly what you want -- you can later write
                  helper functions to accomplish this
           - by the time you start coding, you should have already solved the problem
             while writing out the algorithm
           - don't be afraid to test code in the REPL
           - MOST IMPORTANTLY: whatever you do, you want to remain in control of the
             problem and work smoothly/confidently
           - TEST (ALMOST) EVERY LINE OF CODE YOU WRITE

=======================================================================================

Problem: Numerical Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads 
the same backward as forward. Examples of numerical palindromes are:

      - 2332 
      - 110011 
      - 54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an 
array of s number of numerical palindromes that come after num. If num is a palindrome 
itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

Examples/Test Cases:
  - only accept non-negative integers
    - return "Not valid" otherwsie
  - if `num` is a palindrome, include in list
  - single digit numbers are not included

Data Structures:
  - Input: 2 inputs (`num`, `s`)
  - Output: array of numbers OR String

Algorithm: check inputs, return appropriate message if invalid. if inputs are valid, 
generate a list (array) of numbers that occur after (or including) `num`, check if 
each is a palindrome. if so, add to `result` array until array's length === `s`. 
helper function `isPalindrome`.

  - helper function: `isValid`
    - determine whether input is a number and is greater than or equal to zero

  - helper function: `isPalindrome`
    - guard clause: check that input length > 1
    - return whether the input reads the same backwards and forwards
      - split the input into characters so I can reverse it

  - Main  
    - if invalid, return "Not valid"
    - declare empty `palindromes` array
    - while the length of palindromes is less than s
      - if `num` is palindrome, add to `palindromes`
      - increment num
    - return `palindromes`
*/

function isValid(input) {
  return input >= 0 && typeof input === 'number';
}

function isPalindrome(input) {
  if (String(input).length < 2) return false;
  return String(input) === String(input).split('')
                                        .reverse()
                                        .join('');
}

function palindrome(num, s) {
  if (!isValid(num) || !isValid(s)) return "Not valid";

  let palindromes = [];

  while (palindromes.length < s) {
    if (isPalindrome(num)) {
      palindromes.push(num);
    }
    num++;
  }
  return palindromes;
}

console.log(palindrome(6,4)); // [11,22,33,44]
console.log(palindrome(75,1)); // [77]
console.log(palindrome(101,2)); // [101,111]
console.log(palindrome(20,0)); // []
console.log(palindrome(0,4)); // [11,22,33,44]
console.log(palindrome("ACCDDCCA",3)); // "Not valid"
console.log(palindrome(773,"1551")); // "Not valid"
console.log(palindrome(-4505,15)); // "Not valid"
console.log(palindrome(4505,-15)); // "Not valid"