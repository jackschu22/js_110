/* JS110 Lesson 2: Practice Problem 6

One of the most frequently used real-world string operations is that of "string 
substitution," where we take a hard-coded string and modify it with various parameters 
from our program. Given this previously seen family object, print the name, age, and 
gender of each family member: (Name) is a (age)-year-old (male or female). */

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.entries(munsters);

for (let i = 0; i < munstersArray.length; i ++) {
	let name = munstersArray[i][0];
	let age = munstersArray[i][1]['age'];
	let gender = munstersArray[i][1]['gender'];

	console.log(`${name} is a ${age}-year-old ${gender}.`);
}

/* Solution with forEach: 

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

*/