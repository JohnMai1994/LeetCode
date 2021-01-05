// 有n块石头分别在x轴0,1,...n-1位置
// 一只青蛙在石头0，想跳到石头n-1
// 如果青蛙在第i块石头上，它最多可以向右跳距离ai
// 问青蛙能否跳到石头n-1

// 动态规划四个步骤
// 1. 确定状态: 最后一步，如果请问能跳到最后一块石头n-1, 我们考虑它跳的最后一步
// 这一步是从石头 i 跳过来， i < n - 1
// 需要同时满足两个条件
// - 青蛙可以跳到石头 i
// - 最后异步不超过跳跃的最大距离: n - 1 - i <= ai

// 2.