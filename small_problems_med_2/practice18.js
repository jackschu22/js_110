/*
Input: number (positive)
Output: number

Data Structures: - array of digits

Algorithm: take a positive number (num) and split it into its digits. multiply 
the digits together, reassign product to num. check if length of num is 1. if so
return multiplicativePersistence. if not, increment multiplicativePersistence 
by 1 and repeat with new num.

    - declare multiplicative persistance variable, initialize to 0
    
    - while true
      - coerce input to string and split string into array of digits
      - declare `product`, initialize to 1
      - for each digit in `digits`, product = product * digit
      - multiplicativePersistance += 1
      - if String(product).length < 2, return multiplicativePersistence
      - reassign product to num and repeat until finished
*/

function persistence(num) {
  let multiplicativePersistence = 0;
  if (String(num).length < 2) return 0;
  while (true) {
    let product = 1;
    let digits = String(num).split('');
    
    digits.forEach(digit => product = product * digit);
    multiplicativePersistence += 1;
    
    if (String(product).length < 2) return multiplicativePersistence;
    num = product;  
  }
}

console.log(persistence(39) === 3);
console.log(persistence(4) === 0);
console.log(persistence(25) === 2);
console.log(persistence(999) === 4);