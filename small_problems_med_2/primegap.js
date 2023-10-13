/* Codewars: Prime Gap

Problem: The prime numbers are not regularly spaced. For example from 2 to 3 the gap 
is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the 
following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43.

So this function should return the first pair of two prime numbers spaced with a gap 
of g between the limits m, n if these numbers exist otherwise `nil or null or None or 
Nothing (or ... depending on the language).

Input: three numbers
       - prime gap
       - start range
       - end range
Output: array with two prime numbers within range that have specified gap
Rules: g >= 2, m > 2, n >= m

Data Structures: - array of prime numbers
                 - array of prime numbers with required gap
                 - array of first two prime numbers with required gap
                
Algorithm: Helper Function: `isPrime`
           - input: number
           - output: boolean
           - declare aray of prime integers [2, 3, 5, 7]
           - if primes includes input, return true
           - declare counter = last prime (7);
           - while counter < number
              - check if counter is divisible by any number in primes array
              - if not, add to primes array
              - increment counter
           - return primes array includes number
           
           Main
           - guard clause: if g < 2, m < 2, n <= m, return null
           - declare empty array `primes`
           - while true
              - increment from m to n
              - if m is prime, add to primes
           - filter primes such that gap is satisfied
              - primes(idx) - primes(idx + 1) === g OR
                primes(idx - 1) - primes(idx) === g
           - if filtered array's length < 2, return null
           - return first two elements of filter primes array
*/

function isPrime(num) {
  let primes = [2, 3, 5, 7];
  if (primes.includes(num)) return true;
  let counter = primes[primes.length - 1];
  
  while (counter <= num) {
    if (primes.every(prime => num % prime !== 0)) {
      primes.push(counter);
    }
    counter += 1;
  }
  return primes.includes(num);
}

function gap(g, m, n) {
  if (g < 2 || m <= 2 || n < m) return null;
  
  let primes = [];
  while (m < n) {
    if (isPrime(m)) {
      primes.push(m);
    }
    m += 1;
  }
  
  let gapPrimes = primes.filter((prime, idx) => {
    return (prime - primes[idx - 1] === g) || (primes[idx + 1] - prime === g);
  });
  
  if (gapPrimes.length < 2) return null;
  
  return gapPrimes.slice(0, 2);
}

// TESTS

console.log(gap(2, 100, 110));           // [101, 103]
console.log(gap(4, 100, 110));           // [103, 107]
console.log(gap(6, 100, 110) === null);  // true
console.log(gap(8, 300, 400));           // [359, 367]
console.log(gap(10, 300, 400));          // [337, 347]