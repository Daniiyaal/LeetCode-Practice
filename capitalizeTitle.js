// You are given a string title consisting of one or more words separated by a single space,
// where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// - If the length of the word is 1 or 2 letters, change all letters to lowercase.
// - Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// Example:
// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"

// Solution
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const titleArray = title.split(' ')
  for (var i = 0; i < titleArray.length; i++) {
    const lowerCaseWord = titleArray[i].toLowerCase()
    console.log(lowerCaseWord)
    titleArray[i] =
      titleArray[i].length > 2
        ? titleArray[i].charAt(0).toUpperCase() + lowerCaseWord.slice(1)
        : lowerCaseWord
    console.log(titleArray[i])
  }
  // console.log(titleArray);
  const result = titleArray.join(' ')
  return result
}

capitalizeTitle('capiTalIze tHe titLe')
