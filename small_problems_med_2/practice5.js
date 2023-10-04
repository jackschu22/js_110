/*
Algorithm: - generate list of prime numbers until the last element
             is greater than the sum of the input array
           - return last prime number in list - sum of input array
*/

function isPrime(num) {
   if ((num % 2) &&
       (num % 3) &&
       (num % 4) &&
       (num % 5) &&
       (num % 6) &&
       (num % 7) &&
       (num % 8) &&
       (num % 9)) {
     return true;
   };
  return false;
}

function minimumNumber(numbers){
  let primeNumbers = [1, 3, 5, 7];
  let sum = numbers.reduce((sum, num) => sum + num);
  if (sum === 1 || sum === 3 || sum === 5 || sum === 7 || isPrime(sum)) return 0;
  let currentHighestPrime = primeNumbers[primeNumbers.length - 1] + 1;
  
  while (true) {
    if (isPrime(currentHighestPrime)) {
      primeNumbers.push(currentHighestPrime);
    }
    if (currentHighestPrime > sum && isPrime(currentHighestPrime)) break;
    currentHighestPrime++;
  }
  console.log('----');
    while (primeNumbers[primeNumbers.length - 1] > sum) {
      console.log(primeNumbers[primeNumbers.length - 1]);
      primeNumbers.pop();
      console.log(primeNumbers[primeNumbers.length - 1]);
    }
    console.log('----');

  let numToAdd = primeNumbers[primeNumbers.length - 1] - sum;
  console.log(primeNumbers);
  console.log(`${primeNumbers[primeNumbers.length - 1]} - ${sum}`);
  console.log(numToAdd);
  return(numToAdd);
}

console.log(minimumNumber([3,1,2]));