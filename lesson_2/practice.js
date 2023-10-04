const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
]

// array with four elements [obj, arr, str, obj]
// return value for obj prop `three` (6)

console.log(ARR[1][0].three);
console.log(ARR[1][0]['three']);

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

todoLists[0]['todos'][2]['name'] = 'Orange Juice';

console.log(todoLists);