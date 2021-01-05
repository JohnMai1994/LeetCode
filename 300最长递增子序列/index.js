// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
//
// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
//
//  
// 示例 1：
//
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：
//
// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：
//
// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
//
//
// 提示：
//
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
//
//
// 进阶：
//
// 你可以设计时间复杂度为 O(n2) 的解决方案吗？
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?


// 解题思路
// 1. dp[i]，表示以第i位作为结束字符子序列，能产生的最长上升序列长度
// 2. i前面的字符0到i用j表示。让第i位，分别跟在第j位作为结束字符子序列后面
// 3. nums[i] > nums[j]，dp[i] = dp[j] + 1。0到i会得到i个dp[i]，选最大值
// 4. dp包含数组每一位作为结束字符子序列的最长上升序列长度，选最大值


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var dp = [1]

    for(let i = 1; dp[i] = 1, i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] +1))
        }
    }
    return nums.length < 2? nums.length : Math.max(...dp)

};


var lengthOfLIS2 = function(nums) {
    const arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= arr[0]) {

            arr[0] = nums[i];
            console.log("if",arr)
        } else if (arr[arr.length - 1] < nums[i]) {
            arr.push(nums[i]);
            console.log("else if",arr)
        } else {
            // 这部分是BS，Binary Search的变种
            let l = 0, r = arr.length - 1;
            while(l < r) {
                const mid = (l + r) >> 1;
                if (arr[mid] === nums[i]) {
                    l = mid;
                    break;
                };

                if (arr[mid] < nums[i]) {

                    l = mid + 1;
                } else {
                    r = mid;
                }
            }
            arr[l] = nums[i];
            console.log("else",arr)
        }
    }
    console.log("result",arr)
    return arr.length;
};


console.log(lengthOfLIS2([1,2,3,4,5,6,7,8,4.5]));

