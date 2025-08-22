
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




