// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
//
// 示例 1:
//
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
//     向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:
//
// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释:
//     向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:
//
//     尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 思路： 三重旋转
// 一重旋转，整体旋转
// 二重旋转，k值前旋转
// 二重旋转，k值后旋转

var rotate = function(nums, k) {
    k %= nums.length
    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length - 1);
};


var reverse = function (nums, start , end) {
  while (start < end) {
      let tmp = nums[start]
      nums[start] = nums[end]
      nums[end] = tmp;
      start++;
      end--;
  }
};

let test = [1,2,3,4,5,6,7];
rotate(test,7)
console.log(test)
