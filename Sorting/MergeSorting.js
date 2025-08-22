function conquer(arr, first, last, mid) {
    let temp = new Array(last - first + 1)
    let i = first
    let j = mid + 1
    let k = 0
    while (i <= mid && j <= last) {

        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++]
        }
        else temp[k++] = arr[j++]
    }
    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= last) {
        temp[k++] = arr[j++]
    }

    let p = 0, t = first
    while (p < temp.length) {
        arr[t++] = temp[p++]
    }
}


function divide(arr, first, last,) {
    if (first >= last) return
    let mid = Math.floor((last + first) / 2);
    divide(arr, first, mid)
    divide(arr, mid + 1, last)

    conquer(arr, first, last, mid)

}
let arr = [8, 5, 2, 7, 1]

divide(arr, 0, arr.length - 1);
console.log(arr)
