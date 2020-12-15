// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//  
//
// 示例:
//
//     给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*
	思路：
	因为是两数之和，所以我们其实只需要关注其中一个数字就可以，剩下的另一个数字交给map来处理
	1. 把数组中的数字，用forEach 放进Map中，key=item value=index(为了获取item的位置)
	2. for循环，循环找到 目标值减去数组中的一个，获得 diff, 再从上面的Map中找是否存在和diff一样的值，如果一样，就retrun [i, Map.get(diff)]
	3. 循环结束都没有找到，return []; 

*/

var twoSum = function(nums, target) {
    // 使用Map来做
    const originMap = new Map();
    nums.forEach((item, index) => {
        originMap.set(item, index);
    })
    // for 循环
    for (let i = 0; i< nums.length; i++) {
        const diff = target - nums[i];
        if (originMap.has(diff) && i !== originMap.get(diff)) {
            return [i, originMap.get(diff)]
        }
    }
    return [];
};

