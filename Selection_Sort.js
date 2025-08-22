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





















// 💡 Easy Trick yaad rakhne ka:
// Selection Sort = “Bahar se sabse chhota element uthao aur sorted list ke aage chipka do.”

// Array ko 2 parts maan lo → Left (sorted) & Right (unsorted).
// Har pass me unsorted part se minimum element dhoondo.
// Us minimum ko current position ke element se swap karo.
// Sorted part ek element badh jata hai, unsorted ek element kam ho jata hai.
// Ye process n-1 passes tak repeat karo.
// Last tak poora array sorted ho jata hai ✅.


// ⚡ Complexity of Selection Sort
// 1. Best Case → O(n²)
// Array: [1, 2, 3, 4, 5](Already Sorted)
// Selection Sort kya karega ?

// Pass 1: Minimum dhoondega → fir bhi pura array check karega(n - 1 comparisons)
// Pass 2: Baki array check karega(n - 2 comparisons)
// Pass 3: (n - 3 comparisons)... aur aise hi last tak
// 👉 Comparisons hamesha(n(n - 1)) / 2 ≈ O(n²) * honge.
// 👉 Matlab chahe array sorted ho, selection sort ko sab compare karna padta hai.

// 2. Worst Case → O(n²)
// Array: [5, 4, 3, 2, 1](Completely Reverse Sorted)
// Har pass me minimum dhoondhne ke liye again full traversal karna padega.
// Comparisons same rahenge: (n * (n - 1)) / 2 ≈ O(n²).
// Sirf swaps slightly different honge, but time same.

// 3. Average Case → O(n²)
// Array: [64, 25, 12, 22, 11](Random order)
// Har pass me minimum dhoondhne ke liye unsorted portion pura traverse karna padta hai.
// Average bhi hamesha O(n²) hi rahega.

// 4. Space Complexity → O(1)
// Kyunki ye array ke andar hi swap karta hai, koi extra data structure use nahi karta.
// Isliye isko in -place algorithm bolte hain.

// 5. Swaps → Max(n - 1)
// Har pass me sirf ek swap hota hai(minimum element ko uski jagah le aana).

//   Example:
// Array size n = 5
// Max swaps = 4(Pass 1 me 1 swap, Pass 2 me 1 swap … last pass me swap ki zaroorat hi nahi).
// 👉 Bubble sort ke comparison me selection sort bahut kam swaps karta hai.

// 6. Stable ? ❌
// Example: [4(1), 4(2), 3]
// Yahan 4(1) aur 4(2) do equal elements hain.
// Agar minimum 3 ko pick karke 4(1) ke sath swap kar diya, toh equal 4 elements ka relative order change ho gaya.
// 👉 Isliye by default Selection Sort stable nahi hota.











