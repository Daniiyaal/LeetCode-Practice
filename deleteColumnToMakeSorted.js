// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  if (strs.length == 0) return 0
  let res = 0
  for (let row = 0; row < strs[0].length; row++) {
    let col = 0
    for (; col < strs.length - 1; col++) {
      if (strs[col].charAt(row) > strs[col + 1].charAt(row)) {
        break
      }
    }

    if (col != strs.length - 1) res++
  }
  console.log(res)
  return res
}


minDeletionSize(["abc", "bce", "cae"]);