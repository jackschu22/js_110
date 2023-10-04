/* JS110 Lesson 2: Practice Problem 14

Given the following data structure write some code to return an array containing 
the colors of the fruits and the sizes of the vegetables. The sizes should be 
uppercase, and the colors should be capitalized. */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let valuesArr = Object.values(obj);

let result = valuesArr.map(entry => {
	if (entry.type ==='fruit') {
		return entry.colors.map(color => color[0].toUpperCase() + color.slice(1));
	} else {
		return entry.size.toUpperCase();
	}
})

console.log(result);