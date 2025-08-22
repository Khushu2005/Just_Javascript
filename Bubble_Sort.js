// DEF: Bubble Sort repeatedly compares adjacent elements in an array and swaps them if they are in the wrong order. After each pass, the largest element “bubbles” to the end.

function BubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true

      }
    }
    if (swapped == false) {
      console.log("no swap");
      break;

    }

  }
  return arr
}
console.log(BubbleSort([0, 1, 2, 3, 8])
);






// CONCEPT: Bubble sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// How Bubble Sort Works:

// Traverse through the list from index 0 to n-1.
// Compare the current element with the next element.
// If the current element is greater than the next element, swap them.
// After each full pass, the largest unsorted element "bubbles up" to its correct position.
// Repeat the process until no swaps are needed (the list is sorted).

// TIME COMPLEXITY :
// Best Case: O(n) - When the array is already sorted (only one pass needed).
// Average Case: O(n^2) - When the array is in random order (multiple passes needed).
// Worst Case: O(n^2) - When the array is in reverse order (maximum swaps and comparisons).

// SPACE COMPLEXITY :
// O(1) (in-place).

// Stability:
// 👉 Yes, Bubble Sort is stable because equal elements don’t change their relative order.




// Q and A
// Q1. Why isn’t Bubble Sort used in practice?
// 👉 Because its O(n²) complexity makes it inefficient for large datasets. Faster algorithms like Quick Sort or Merge Sort exist.

// Q2. Is Bubble Sort stable? Why?
// 👉 Yes. Because it only swaps adjacent elements, equal elements keep their original order.

// Q3. Is Bubble Sort adaptive?
// 👉 Yes, in the optimized version with a swap flag — if the array is already sorted, it will stop in one pass (O(n)).



// 🔹 Advanced Level (Deep Dive)

// Q1. Compare Bubble Sort vs Insertion Sort.
// 👉 Both are O(n²) worst case, but Insertion Sort is usually faster for small or nearly sorted arrays because it shifts elements instead of swapping repeatedly.

// Q2. Why is Bubble Sort bad for large datasets?
// 👉 Because it makes too many comparisons/swaps. For 1 million elements, it may take ~10¹² operations.

// Q3. How would you explain Bubble Sort to a beginner?
// 👉 Imagine lining up kids by height. You keep comparing two kids standing next to each other and swap them if the taller one is in front. After one full round, the tallest kid is at the end. Repeat until all are sorted.

// Q4. Can Bubble Sort detect a sorted array early?
// 👉 Yes, by using the swapped flag. If no swap happens in a pass, it means the array is already sorted.

// Q5. Can Bubble Sort be parallelized?
// 👉 Not efficiently, because it depends heavily on comparisons of adjacent elements.

// Q6. Where might Bubble Sort still be useful?
// 👉 For teaching sorting concepts, for very small arrays, or when simplicity matters more than efficiency.

