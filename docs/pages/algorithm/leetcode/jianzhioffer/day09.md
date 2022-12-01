# 第 9 天 动态规划（中等）

## [剑指 Offer 42. 连续子数组的最大和](https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 状态表示：`dp[i]` 表示以 `i` 为结尾元素的子数组的连续子数组的最大和
2. 状态计算：`dp[i] = max(nums[i], dp[i - 1] + nums[i])`，表示加上 `nums[i]` 或者直接选择 `nums[i]`

代码：

```cpp
class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    if (nums.size() == 0) return 0;
    vector<int> dp;
    dp.push_back(nums[0]);
    for (int i = 1; i < nums.size(); i++) {
      dp.push_back(max(nums[i], dp[i - 1] + nums[i]));
    }
    int ans = dp[0];
    for (int i = 1; i < dp.size(); i++) {
      ans = max(ans, dp[i]);
    }
    return ans;
  }
};
```

## [剑指 Offer 47. 礼物的最大价值](https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 状态表示：`dp[i][j]` 表示从起点走到第 `i` 行第 `j` 列礼物的最大价值
2. 状态计算：每次要么从上面走下来，要么从左边走到右边，取最大，因为第一行和第一列只有一种方法可以到达，所以可以直接初始化

代码：

```cpp
class Solution {
public:
  int dp[210][210];
  int maxValue(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    dp[0][0] = grid[0][0];
    for (int i = 1; i < n; i++) {
      dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for (int i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (int i = 1; i < m; i++) {
      for (int j = 1; j < n; j++) {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
    return dp[m - 1][n - 1];
  }
};
```