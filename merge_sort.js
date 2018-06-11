// Merge Sort
//
// Time complexity: O(n log n)
// Space complexity: O(n)
//
// - Divide and conquer
// - Recursive
// - Stable: order is maintained if similar keys,
//   eg. sort by x-coord
//   (1, 2), (2, 5), (4, 3), (2, 3) ->  (1, 2),  (2, 5), (2, 3), (4, 3)
// - NOT in-place: space complexity is O(n)
//
// Notes: Lists must be already sorted when comparing and sorting two lists
// with the implemented sort function.

// Function to recursively break array into smaller arrays:
// 1,5,4,2,9,8
// 1,5,4   2,9,8
// 1,5   4   2,9   8
// 1   5   4   2   9   8
function mergeSort(arr) {
  // Base case is when there is a list of 1.
  if (arr.length < 2) {
    return arr;
  }

  // Find the midpoint of unsortedArray and round down.
  let midpoint = Math.floor(arr.length/2);
  let leftArr = arr.slice(0, midpoint);
  let rightArr = arr.slice(midpoint);

  return sort(mergeSort(leftArr), mergeSort(rightArr));
}

// Function to compare and sort arrays:
// Compare number in left array with right array and a third array will store the
// sorted numbers.
function sort(left, right) {
  const sortedArray = [];

  let indexLeft = 0;
  let indexRight = 0;

  // Left and right arrays both have items to compare.
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      sortedArray.push(left[indexLeft]);
      indexLeft++;
    } else if (right[indexRight] < left[indexLeft]) {
      sortedArray.push(right[indexRight]);
      indexRight++;
    }

  }
  return sortedArray.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

console.log('sort returns: ', sort([1, 4], [2, 8, 9])); // [1, 2, 4, 8, 9]
console.log('mergeSort returns: ', mergeSort([2, 4, 1, 8, 9]));
