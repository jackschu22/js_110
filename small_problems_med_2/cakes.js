/*
In: two objects
Out: number

Data Structures: - objects (recipe, available)
                 - arrays of keys
                 
Algorithm: subtract the values of each property in the `recipe` object from
           each value with the corresponding property in the `available` object
           until one of the values <= 0. increment `count` for each successful
           round of subtraction
           
           - helper function: `ingredientsRemain`
              - input: object
              - output: boolean
              - get values of object
                  - quantities = Object.values(input)
              - call `every` method on values array, value => value > 0
              - return ^
           
           Main
           - declare `cakes`, set to 0
           - declare `numIngredients`, set to number of keys in `recipe` object
           - while ingredientsRemain(available)
              - count `ingredientsUsed`, set to 0
              - for each key in the `recipe` object, reassign
                the value in `available` to equal itself - recipe[key]
                - if reassigned value >= 0, increment `ingredientsUsed`
              - if `ingredientsUsed` === `numIngredients`, increment `cakes`
           - return count
*/

function itemsRemain(input) {
  quantities = Object.values(input);
  return quantities.every(value => value > 0);
}

function cakes(recipe, available) {
  let cakes = 0;
  let numIngredients = Object.keys(recipe).length;
  
  while (itemsRemain(available)) {
    let ingredientsUsed = 0;
    for (let key in recipe) {
      available[key] = available[key] - recipe[key];
      if (available[key] >= 0) {
        ingredientsUsed += 1;
      } 
    }
    if (ingredientsUsed === numIngredients) {
      cakes += 1;
    }
  }
  return cakes;
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available));

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
console.log(cakes(recipe, available));
