// We define the usage of capitals in a word to be right when one of the following cases holds:

// 1. All letters in this word are capitals, like "USA".
// 2. All letters in this word are not capitals, like "leetcode".
// 3. Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.


// Solution
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return /^([A-Z]+|[A-Z][a-z]*|[a-z]+)$/.test(word);
};


detectCapitalUse("FlaG");