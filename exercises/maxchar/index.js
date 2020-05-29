// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charObj = {};
  let maxC = "";
  let maxVal = 0;
  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char] += 1;
    }
  }
  for (let objChar in charObj) {
    if (charObj[objChar] > maxVal) {
      maxVal = charObj[objChar];
      maxC = objChar;
    }
  }
  return maxC;
}

module.exports = maxChar;
