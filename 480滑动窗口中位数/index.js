// 中位数是有序序列最中间的那个数。如果序列的大小是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。
//
// 例如：
//
// [2,3,4]，中位数是 3
//     [2,3]，中位数是 (2 + 3) / 2 = 2.5
// 给你一个数组 nums，有一个大小为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。
//
//  
//
// 示例：
//
// 给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。
//
// 窗口位置                      中位数
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       1
// 1 [3  -1  -3] 5  3  6  7      -1
// 1  3 [-1  -3  5] 3  6  7      -1
// 1  3  -1 [-3  5  3] 6  7       3
// 1  3  -1  -3 [5  3  6] 7       5
// 1  3  -1  -3  5 [3  6  7]      6
// 因此，返回该滑动窗口的中位数数组 [1,-1,-1,3,5,6]。
//
//  
//
// 提示：
//
// 你可以假设 k 始终有效，即：k 始终小于输入的非空数组的元素个数。
// 与真实值误差在 10 ^ -5 以内的答案将被视作正确答案。
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow2 = function (nums, k) {
    if (k > nums.length) {
        return [];
    }

    let result = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        result.push(findMiddleNumber(nums.slice(i, i+k)))
    }
    return result;
};

let findMiddleNumber = function (nums) {

    nums = nums.sort((a,b) => a-b);
    let len = nums.length;
    let mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        // 偶数
        return ((nums[mid] + nums[mid - 1])/ 2);
    } else {
        //基数
        return nums[mid];
    }
}


/*方法二*/
var medianSlidingWindow = function (nums, k) {
    const ans = []
    let l = 0
    let r = 0
    const arr = []
    const isOdd = k & 1
    while (r < nums.length) {
        insert(arr, nums[r++])
        if (arr.length === k) {
            const mid = k >> 1
            if (isOdd) {
                ans.push(arr[mid])
            } else {
                ans.push((arr[mid] + arr[mid - 1]) / 2)
            }
            remove(arr, nums[l++])
        }
    }
    return ans

    function insert(arr, num) {
        const len = arr.length
        if (len === 0) {
            arr.push(num)
        } else {
            if (arr[0] > num) {
                arr.unshift(num)
            } else if (arr[len - 1] <= num) {
                arr.push(num)
            } else {
                const index = search(arr, num)
                arr.splice(index, 0, num)
            }
        }
    }

    function search(arr, num) {
        let l = 0
        let r = arr.length - 1
        while (l <= r) {
            const mid = (l + r) >> 1
            if (arr[mid] > num) {
                r = mid - 1
            } else if (arr[mid] < num) {
                l = mid + 1
            } else {
                return mid
            }
        }
        return l
    }

    function remove(arr, num) {
        const index = arr.indexOf(num)
        arr.splice(index, 1)
    }
}



console.log(medianSlidingWindow([1, 5, 2,3], 2))