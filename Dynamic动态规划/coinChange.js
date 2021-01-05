// 给定｛2，3，5｝求如果要27块最少可以怎么组合


function coinChange(Arr, Money)  {
	// 设定f是显示从0块到Money+1块的找钱的可能
	let f = [0];
	const len = Arr.length;

	// 上面设置f[0] = 0, 所以从1块钱到Money+1
	for (let i = 1; i <= Money; i++) {
		// 一开始都假设f[i]是无穷大
		f[i] = 9999;
		// 遍历有多少种币,{2,3,5}有三种币
		for (let j = 0; j < len; j++) {
			// 成立条件
			// 1. i > Arr[j]因为如果 1块钱的话，那么没有组合
			// 2. f[i - Arr[j]] != Number.MAX_VALUE 就是他的前一个组合不能是没有组合

			if( i >= Arr[j] && f[i - Arr[j]] != 9999) {
				f[i] = Math.min(f[i - Arr[j]] + 1, f[i])
			}
		}
	}

	if (f[Money] == 9999) {
		f[Money] = -1
	}

	return f[Money]

}

