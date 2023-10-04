/* JS110 Lesson 2: Practice Problem 5

Compute and display the total age of the male members of the Muenster family. */

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let familyDetails = Object.values(munsters);
let totalMaleAge = 0;

for (let i = 0; i < familyDetails.length; i++) {
	if (familyDetails[i]['gender'] === 'male') {
		totalMaleAge += familyDetails[i]['age'];
	}
}

console.log(totalMaleAge);
