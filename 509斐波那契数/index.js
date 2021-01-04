// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
//
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。
//
//  
//
// 示例 1：
//
// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
// 示例 2：
//
// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
// 示例 3：
//
// 输入：4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
//
//
// 提示：
//
// 0 <= n <= 30
//

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let list = [0,1,1];

    for (let i = 3; i <= n; i++){
        list[i] = list[i-1] + list[i-2];
    }
    return  list[n]
};

var fib2 = function (n) {
    if (n === 0 || n ===1) {
        return n
    } else {
        let pre = 0;
        let next = 1;
        let current = 0;
        for (let i = 2; i <= n; i++) {
            current = pre + next;
            pre = next;
            next = current;
        }
        return current;
    }



}

