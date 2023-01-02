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
    // splitting and converting into array of strings
  const titleArray = title.split(' ');
  //loop through each element of the array and capitalize the first letter
  for (var i = 0; i < titleArray.length; i++) {
    const lowerCaseWord = titleArray[i].toLowerCase();
    titleArray[i] =
      titleArray[i].length > 2
        ? titleArray[i].charAt(0).toUpperCase() + lowerCaseWord.slice(1)
        : titleArray[i]
  }
  const result = titleArray.join(' ')
  console.log(result)
  return result
}

capitalizeTitle("capiTalIze tHe titLe");
