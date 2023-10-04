let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are 
// the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintstonesObj = {};

flintstones.forEach((name, index) => {
	flintstonesObj[name] = index;
})

console.log(flintstonesObj);

// ------------------------------------------------ //
// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = 0;

Object.values(ages).forEach(age => sum += age);

console.log(sum);

// Pick out the minimum age from our current Munster family object:

let lowestAge = 100000;

Object.values(ages).forEach(age => {
	if (age < lowestAge) {
		lowestAge = age;
	}
})

console.log(lowestAge);

// ------------------------------------------------ //
// Create an object that expresses the frequency with which each letter occurs in 
// this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let statementArr = statement.split('').filter(char => char !== ' ');
let letterObj = {};

statementArr.forEach(letter => {
	if (Object.keys(letterObj).includes(letter)) {
		letterObj[letter] += 1;
	} else if (statementArr.includes(letter)) {
		letterObj[letter] = 1;
	}
})

console.log(letterObj);
















