const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsArr) {
  let kittyKittys = [];
  for (let i = 0; i < catsArr.length; i++) {
    for (let j = 0; j < catsArr[i].length; j++) {
      if (catsArr[i][j] === '^^') {
        kittyKittys.push(catsArr[i][j]);
      }
    }
  }
  return kittyKittys.length;
  // remove line with error and write your code here
}

module.exports = {
  countCats,
};
