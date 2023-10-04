/* JS110 Small Problems Debugging JS 1:

Problem: Upon first glance, Gemma's code below looks like it should work. But it throws 
a TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

Answer: This function doesn't work as intended because Gemma is missing a semicolon on
the first line, so the `forEach` method is being called on ''['head', 'heal', 'teal',
 'tell', 'tall', 'tail'], not just the array.
*/

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail