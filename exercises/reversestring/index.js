// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let emptyArray = [];
  let emptyString = "";
  for(let i = str.length - 1; i>= 0; i--) {
    emptyArray.push(str[i]);
  }
emptyString = emptyArray.join('');
return emptyString;
// const arr = str.split(''); alternate solution
// arr.reverse();
// return arr.join('');
}
reverse("wassup");
module.exports = reverse;
