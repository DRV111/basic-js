const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let row = matrix.length;
  console.log(row);
  let column = matrix[0].length;
  console.log(column);

  let sum = 0;

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if (matrix[j][i] !== 0) {
        sum += matrix[j][i];
      } else {
        return row;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
