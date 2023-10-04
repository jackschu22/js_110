/* JS110 Small Problems Debugging JS 2:

Problem: We have been asked to implement a function that determines whether or not a 
given word is a reserved keyword. We wrote the isReserved function below along with 
some test cases, but we aren't seeing the expected result. Why not? Fix the code so 
that it behaves as intended.

Answer: This function doesn't work as intended because the `forEach` method will
return `undefined` regardless of what its callback function returns, so `isReserved`
will always return false. This function can be simplified by calling the 
`includes` method on the `RESERVED_KEYWORDS` array with `name` as an argument to check
if it exists in the array.
*/

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
	return RESERVED_KEYWORDS.includes(name);
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true