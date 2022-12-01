# 第 8 天 动态规划（简单）

## [剑指 Offer 10- I. 斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 状态表示： `f[i]` 表示斐波那契数列第 `i` 项的值
2. 状态计算：`f[i] = f[i - 1] + f[i - 2]`
3. 计算的时候取模

代码：

```cpp
class Solution {
public:
  int f[110];
  int MOD = 1e9 + 7;
  int fib(int n) {
    f[1] = 1;
    for (int i = 2; i <= 100; i++) {
      f[i] = (f[i - 1] % MOD + f[i - 2] % MOD) % MOD;
    }
    return f[n];
  }
};
```

## [剑指 Offer 10- II. 青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 状态表示：`f[i]` 表示青蛙跳上第 `i` 级台阶跳法的总数
2. 状态计算：`f[i] = f[i - 1] + f[i - 2]`，即跳上第 `i` 级台阶可从 `i - 2` 级上两级，或从第 `i - 1` 级上一级
3. 计算的时候取模

代码：

```cpp
class Solution {
public:
  int MOD = 1e9 + 7;
  int f[110];
  int numWays(int n) {
    f[0] = f[1] = 1;
    for (int i = 2; i <= 100; i++) {
      f[i] = (f[i - 1] % MOD + f[i - 2] % MOD) % MOD;
    }
    return f[n];
  }
};
```

## [剑指 Offer 63. 股票的最大利润](https://leetcode.cn/problems/gu-piao-de-zui-da-li-run-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 状态表示：`dp[i]` 表示以第 `i` 天为结尾的最大利润
2. 状态计算：`dp[i] = max(dp[i - 1], prices[i] - 从 0 到 i - 1 的子数组的最小值)`
3. 可以在一开始的时候定义一个变量来保存最小值，在遍历的时候不断更新

代码：

```cpp
class Solution {
public:
  int maxProfit(vector<int>& prices) {
    if (prices.size() == 0) return 0;
    vector<int> dp;
    dp.push_back(0);
    int min_x = prices[0];
    for (int i = 1; i < prices.size(); i++) {
      dp.push_back(max(dp[i - 1], prices[i] - min_x));
      min_x = min(min_x, prices[i]);
    }
    return dp[prices.size() - 1];
  }
};
```
