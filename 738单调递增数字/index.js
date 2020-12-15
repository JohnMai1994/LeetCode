// 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
//
// （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
//
// 示例 1:
//
// 输入: N = 10
// 输出: 9
// 示例 2:
//
// 输入: N = 1234
// 输出: 1234
// 示例 3:
//
// 输入: N = 332
// 输出: 299
// 说明: N 是在 [0, 10^9] 范围内的一个整数。

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
    // 将 10 => [1, 0]
    const strN = N
        // 将数字转换成String
        .toString()
        // 将String拆分成[],里面是String
        .split("")
        // 将[]里面的String，转换成数字
        .map(v => +v)

    let i = 1;
    // 寻找 后一个数字要比前一个数字要 大or等于
    while (i < strN.length && strN[i-1] <= strN[i]) {
        i++;
    }

    // 如果整个数组都是 从小到大递增数列，返回
    if (i < strN.length){

        // 看数组里面，递增的最边边，看前一个数字-1
        // !!! 但是有个问题，就是StrN[i-1]数字减一导致了 strN[i-2]不能构成递增数列
        // 需要while loop轮询检查，保证[0,i]是一个递增的数列
        while (i> 0 && strN[i-1] > strN[i]) {
            strN[i-1] -=1;
            i -= 1
        }

        // 剩下的就用最大值9来替换
        for (i += 1; i < strN.length ; ++i) {
            strN[i] = 9;
        }
    }
    return parseInt(strN.join(""))

};

console.log(monotoneIncreasingDigits(430));