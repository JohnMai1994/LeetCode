
// 从 (0,0) 点出发到(m-1, n-1)的点，有多少个方法到达

function uniquePaths(m,  n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i< m; i++) { // row: top to bottom

        for (let j = 0; j < n; j++) { // column: left to right
            if (i === 0 || j === 0) {
                f[i][j] = 1;
            } else {
                f[i][j] = f[i-1][j] + f[i][j-1]
            }

        }
    }

    console.log(f)
    return f[m-1][n-1]



}

console.log(uniquePaths(3, 4));