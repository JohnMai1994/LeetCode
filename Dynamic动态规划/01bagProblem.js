// 给定一个固定大小的背包，背包的容量为 capacity，有一组物品，存在对应的价值和重量，要求找出一个最佳的解决方案，使得装入背包的物品总重量不超过背包容量 capacity，而且总价值最大。本题中给出了3个物品，其价值和重量分别是 (3,2),(4,3),(5,4)。括号左边为价值，右边为重量，背包容量 capacity 为5。那么求出其搭配组合，使得背包内总价最大，且最大价值为多少？


function knapSack(w, val, capacity, n) {
    let T = [];

    for (let i = 0; i < n; i++) {
        T[i] = [];
        for (let j = 0; j <= capacity; j++) {
            // 容量为0
            if (j ===0 ){
                T[i][j] = 0;
                continue;
            }

            // 容量小于物品重量，本行hold不住
            if (j < w[i]) {
                if (i === 0) {
                    // i = 0时，不存在i-1, 所以T[i][j]取0
                    T[i][j] = 0;
                } else {
                    // 容量小于物品重量，参照上一行
                    T[i][j] = T[i-1][j]
                }
                continue;
            }
            if (i ===0) {
                // 第0行，不存在，最多只能放这一行的哪一个吴胖
                T[i][j] = val[i];
            } else {
                T[i][j] = Math.max(val[i] + T[i-1][j-w[i]], T[i-1][j]);
            }
        }
    }
    
    return T;
}

console.log(knapSack([2, 3, 4], [3, 4, 5], 5, 3));