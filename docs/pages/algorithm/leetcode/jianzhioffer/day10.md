# 第 10 天 动态规划（中等）

## [剑指 Offer 46. 把数字翻译成字符串](https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：动态规划

1. 状态表示：`dp[i]` 表示以 `i` 结尾的数字的翻译的方法总数
2. 状态计算：`dp[i] = dp[i - 1] + (10 <= s[i- 1]s[i] 组成的两位数 <= 25 ? dp[i - 2] : 0)`

代码：

```cpp
class Solution {
public:
  int dp[11];
  int translateNum(int num) {
    string s = to_string(num);
    dp[0] = dp[1] = 1;
    for (int i = 2; i <= s.size(); i++) {
      dp[i] = dp[i - 1];
      if (stoi(s.substr(i - 2, 2)) <= 25 && s[i - 2] != '0') {
        dp[i] += dp[i - 2];
      }
    }
    return dp[s.size()];
  }
};
```

## [剑指 Offer 48. 最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：动态规划 + 双指针

1. 状态表示：`dp[i]` 表示以第 `i` 个字符结尾的最长不重复子串长度
2. 从左到右遍历，对于每个右边界 `i`，往左查找第一个等于 `s[i]` 的字符，假设其下标为 `j`
3. 如果 `dp[i - 1] < i - j`，那么说明 `j` 在该区间外面，所以 `dp[i] = dp[i - 1] + 1`
4. 如果 `dp[i - 1] >= i - j`， 那么说明 `j` 在该区间里面，所以 `dp[i] = i - j`
5. 对于上述变量，可以在题目中用单个变量进行简化，每次循环时更新

代码：

```cpp
class Solution {
public:
  int lengthOfLongestSubstring(string s) {
    int res = 0;
    for (int i = 0, k = 0; i < s.size(); i++) {
      int j = i - 1;
      while (j >= 0 && s[i] != s[j]) j--;
      k = k < i - j ? k + 1 : i - j;
      res = max(res, k);
    }
    return res;
  }
};
```