
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const insertionSort = (arr) => {

    for (let j = 1; j< arr.length; j++) {
        const current = arr[j];
        // 将key插入到 已经排好序的数组中
        let i = j-1;
        while (i >-1 && arr[i] > current) {
            arr[i+1] = arr[i];
            i = i- 1;
        }
        arr[i +1] = current
    }
    return arr
}


console.log(insertionSort([9, 4, 6, 2, 4, 7, 2]));