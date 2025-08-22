// DEF: Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.



function SelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minimum = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    if (minimum !== i) {
      [arr[i], arr[minimum]] = [arr[minimum], arr[i]]
    }
  }
  return arr

}
console.log(SelectionSort([6, 2, 1, 3, 8]))
