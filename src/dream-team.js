const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersArr) {
  const arr = membersArr;
  if (!Array.isArray(arr)) {
    return false;
  }
  function filterIt(items) {
    if (typeof items === 'string') {
      return true;
    } else {
      return false;
    }
  }
  let filteredArr = arr.filter(filterIt);
  let trimmedStringsArr = [];
  let dreamTeamName = [];
  for (let i = 0; i < filteredArr.length; i++) {
    let trimmed = filteredArr[i].trim();
    trimmedStringsArr.push(trimmed);
  }
  for (let j = 0; j < trimmedStringsArr.length; j++) {
    let firstChar = trimmedStringsArr[j].charAt(0);
    dreamTeamName.push(firstChar);
  }
  return dreamTeamName
    .sort((a, b) => a.localeCompare(b))
    .join('')
    .toUpperCase();
}

module.exports = {
  createDreamTeam,
};
