function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
Jack

variables: `bar`, `arg1`, `arg2`, `foo`, `qux`, `result`
object property names: `abc`, `def`, `ghi`, `jkl`, `mno`, `pqr`
primitive values: `'Hello'` (line 70), `null` (line 73), `NaN` (line 74), `'Victor'` (line 83), `'Antonia'` (line 83)
objects: `bar`, `qux`, `[1, 2, 3, [4, 5, 6]]` (line 72), `result`

*/

// SOLUTION 1:

let numArray = [];
let stringArray = [];

arr.forEach(elem => {
  if (typeof elem === 'number') {
    numArray.push(elem);
  } else {
    stringArray.push(elem);
  }
});

stringArray.sort();
numArray.sort((a, b) => b - a);
console.log(numArray.concat(stringArray))  // [96, 48, 23, 11, 10, 5, 3, 2, 'Chase', 'Fuad', 'Hamdi', 'Jack']

// SOLUTION 2:

arr.sort((a, b) => {
  if ((typeof a === 'string' && typeof b === 'number')) {
    return 1;
  }
  if ((typeof a === 'number' && typeof b === 'string')) {
    return -1;
  }
  if ((typeof a === 'string' && typeof b === 'string')) {
    if (a < b) {
      return -1;
  } else if (a > b) {
      return 1;
  } else {
      return 0;
    }
  }
  if ((typeof a === 'number' && typeof b === 'number')) {
    if (a < b) {
      return -1;
  } else if (a > b) {
      return 1;
  } else {
      return 0;
    }
  }
});

// SOLUTION 3:

arr.sort((a, b) => {
  if ((typeof a === 'string' && typeof b === 'number') || (typeof b === 'string' && typeof a === 'number')) {
    return typeof a === 'string' ? 1 : -1;                      // ternary
  } else if (typeof a === 'string' && typeof b === 'string') {
    if (a === b) return 0;                                      // first remove possibility of strict equality
    return a > b ? 1 : -1;                                      // ternary
  } else if (typeof a === 'number' && typeof b === 'number'){
    if (a === b) return 0;                                      // first remove possibility of strict equality
    return a < b ? 1 : -1;                                      // ternary
  }
  return 0;
});