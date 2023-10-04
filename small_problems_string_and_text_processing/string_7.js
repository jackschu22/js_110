/* JS110 Small Problems String and Text Processing 7:

Problem: Modify the function from the previous exercise so it ignores non-alphabetic 
characters when determining whether it should uppercase or lowercase each letter. The 
non-alphabetic characters should still be included in the return value; they just don't 
count when toggling the desired case.

Input: string
Output: string

Data Structure: array of characters

Algorithm: - split input string into array of characters
		   - declare counter to keep track of upper/lower determination
		   - `for` loop to iterate through array of characters
		   		- if counter is even: return char.toUpperCase()
		   		- if counter is odd: return char.toLowerCase()
		   - join and return
*/

function isUppercase(char) {
	return char >= 'A' && char <= 'Z';
}

function isLowercase(char) {
	return char >= 'a' && char <= 'z';
}

function staggeredCase1(string) {
	let chars = string.split('');
	let caseCounter = -1;

	for (let i = 0; i < chars.length; i++) {
		if (isUppercase(chars[i]) || isLowercase(chars[i])) {
			caseCounter += 1;
		}

		if (caseCounter % 2 === 0) {
			chars[i] = chars[i].toUpperCase();
		}
		if (caseCounter % 2 === 1) {
			chars[i] = chars[i].toLowerCase();
		}
	}
	return chars.join('');
}

function staggeredCase2(string) {
	let needUpper = true;

	return string
		.split('')
		.map(char => {
			char = char.toLowerCase();
      		if (isLowercase(char)) {
        		if (needUpper) {
         			needUpper = false;
          			return char.toUpperCase();
        		} else {
          			needUpper = true;
          			return char.toLowerCase();
        		}
      		} else {
        		return char;
     		}
		})
		.join('');
}

console.log(staggeredCase1("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase1("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase1("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);