// Quicksort
//
// Time complexity:
//   best/average case: O(n log n)
//   worst case: O(n^2)
//   Worst case can be minimized by implementing randomized quicksort.
//   Randomized quicksort uses a method to randomly select a partition value.
// Space complexity: O(log n)
//
// - Divide and conquer: break problem into smaller subproblems.
// - Recursion: recursion commonly used in divide and conquer strategies.
// - NOT stable: sorting similar keys does not guarantee the order of original
//   input (like it does for merge sort).
// - sorts in-place: space complexity is O(n log n).
//

// Randomized partition - randomly select a pivot. This pivot will be the number
//   that will be used to compare with other numbers. Eventually numbers to
//   left of the pivot will be smaller than or equal to the pivot and numbers to
//   the right of the pivot will be larger than the pivot.
// Swapping - swapping numbers to eventually sort entire array.
// Quicksort - main function to recursively call itself.

function quicksort(arr, startIndex, endIndex) {
  // Base case: start index is less than end index.
  if (startIndex < endIndex) {
    const partitionIndex = randomizedPartition(arr, startIndex, endIndex);
    // Items to the left of pivot.
    quicksort(arr, startIndex, partitionIndex-1)
    // Items to the right of pivot.
    quicksort(arr, partitionIndex+1, endIndex)
  }
  
  return arr;
}


function randomizedPartition(arr, startIndex, endIndex) {
  // Generate random index to minimize worst case scenario.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const pivotIndex = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;

  if (pivotIndex < endIndex) {
      swap(arr, pivotIndex, endIndex); // Have pivot be last item in array.
  }

  return partition(arr, startIndex, endIndex);
}


function partition(arr, startIndex, endIndex) {
  const pivot = arr[endIndex];
  // partitionIndex will keep track of where to swap items. Anything
  // to the left of partitionIndex will be smaller than pivot.
  let partitionIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  // Finally swap pivot position with item at partitionIndex.
  // Since we know all items before partitionIndex are less than or equal to pivot
  // value, we can swap these two numbers.
  swap(arr, endIndex, partitionIndex);

  return partitionIndex;
}


// Helper function to swap items
function swap(arr, itemIndex, indexToSwapWith) {
  if (itemIndex !== indexToSwapWith) {
    const temp = arr[itemIndex];
    arr[itemIndex] = arr[indexToSwapWith];
    arr[indexToSwapWith] = temp;
  }
}


console.log(quicksort([5, 2, 1, 3], 0, 3));
console.log(quicksort([2, 1, 3, 6, 9, 4, 8], 0, 6));
console.log(quicksort([2, 1, 3, 5], 0, 3));
console.log(quicksort([1, 2, 3, 5], 0, 3));
console.log(quicksort([5, 2, 1, 3], 0, 3));
console.log(quicksort([6, 2, 1, 5], 0, 3));
