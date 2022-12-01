# 第 14 天 搜索与回溯算法（中等）

## [剑指 Offer 12. 矩阵中的路径](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：dfs
1. 以 `board` 的每个点为起点，都进行一次 dfs
2. 使用变量 `k` 记录当前遍历到的长度
   - 如果 `board[i][j] != word[k]`，则返回 `fasle`
   - 如果 `k == word.size() - 1` ，则返回 `true`
3. 遍历完 `board[i][j]` 后，向四个方向扩展

代码：
```cpp
class Solution {
public:
  bool dfs(int i, int j, int k, vector<vector<bool>>& st, vector<vector<char>>& board, string& word) {
    if (i >= board.size() || i < 0 || j >= board[0].size() || j < 0 || st[i][j] || board[i][j] != word[k]) {
      return false;
    }
    if (k == word.size() - 1) return true;
    st[i][j] = true;
    bool res = dfs(i - 1, j, k + 1, st, board, word) ||
                dfs(i, j + 1, k + 1, st, board, word) ||
                dfs(i + 1, j, k + 1, st, board, word) ||
                dfs(i, j - 1, k + 1, st, board, word);
    st[i][j] = false;
    return res;
  }

  bool exist(vector<vector<char>>& board, string word) {
    int m = board.size(), n = board[0].size();
    bool res = false;
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        vector<vector<bool>> st(m, vector<bool> (n, false));
        res = res || dfs(i, j, 0, st, board, word);
      }
    }
    return res;
  }
};
```

## [面试题13. 机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：dfs
1. 递归的思想：已经知道 `[0][0]` 的答案为 1，则递归公式为 `ans = 1 + ans[0 + 1][0] + ans[0][0 + 1]`
2. 递归边界：出了矩阵 || 已经访问过 || 满足数位和大于 `k`

代码：
```cpp
class Solution {
public:
  int bitSum(int n) {
    int sum = 0;
    while (n) {
      sum += n % 10;
      n /= 10;
    }
    return sum;
  }

  int dfs(int i, int j, vector<vector<bool>>& st, int m, int n, int k) {
    if (i >= m || j >= n || st[i][j] || bitSum(i) + bitSum(j) > k) return 0;
    st[i][j] = true;
    return 1 + dfs(i + 1, j, st, m, n, k) + dfs(i, j + 1, st, m, n, k);
  }

  int movingCount(int m, int n, int k) {
    vector<vector<bool>> st(m, vector<bool>(n, false));
    return dfs(0, 0, st, m, n, k);
  }
};
```

思路：bfs
1. 首先把起点推进队列
2. 不断的把符合条件的点加入队列

```cpp
class Solution {
public:
  int bitSum(int n) {
    int sum = 0;
    while (n) {
      sum += n % 10;
      n /= 10;
    }
    return sum;
  }

  int movingCount(int m, int n, int k) {
    if (k == 0) return 1;
    int dx[] = {0, 1}, dy[] = {1, 0};
    queue<pair<int, int>> q;
    vector<vector<int>> st(m, vector<int>(n, 0));
    st[0][0] = 1;
    q.push({0, 0});
    int ans = 1;
    while (!q.empty()) {
      auto [x, y] = q.front();
      q.pop();
      for (int i = 0; i < 2; i++) {
        int a = x + dx[i], b = y + dy[i];
        if (a < n && b < m && !st[b][a] && bitSum(a) + bitSum(b) <= k) {
          st[b][a] = 1;
          q.push({a, b});
          ans++;
        }
      }
    }
    return ans;
  }
};
```
