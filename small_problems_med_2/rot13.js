/*
Input: string
Output: string

Rules: - replace each letter with the letter that comes 13 places (indices)
         after it in the alphabet
       - only transform letters, not numbers or special characters
       - case-sensitive
       
Data Structures: - array of characters
                 - array of uppercase letters
                 - array of lowercase letters

Algorithm: Helper Function: `isUppercase`
           - input: string
           - output: boolean
           - return uppers.includes(char)
           
           Helper Function: `isLowercase`
           - input: string
           - output: boolean
           - return lowers.includes(char)

           Main
           - create arrays representing a-z and A-Z (with length doubled to 
             account for wrap-around indexing)
           - split input string into array of characters
           - call `map` method on array of characters to selectively transform
              - if char is lowercase, callback returns lowers[idx + 13]
              - if char is uppercase, callback returns uppers[idx + 13]
              - else callback returns char
           - join characters back into string
           - return
*/

function isUppercase(string) {
  let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return uppers.includes(string);
}

function isLowercase(string) {
  let lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return lowers.includes(string);
}

function rot13(message){
  let lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
  let chars = message.split('');
  let transformedChars = chars.map(char => {
    if (isLowercase(char)) {
      return lowers[lowers.indexOf(char) + 13];
    }
    if (isUppercase(char)) {
      return uppers[uppers.indexOf(char) + 13];
    }
    return char;
  });
  
  return transformedChars.join('');
}

console.log(rot13('Ruby is cool!'));    // 'Ehol vf pbby!'

