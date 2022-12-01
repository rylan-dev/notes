# 第 6 天 搜索与回溯算法（简单）

## [剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：层序遍历（使用队列辅助）

代码：

```cpp
class Solution {
public:
  vector<int> levelOrder(TreeNode* root) {
    vector<int> ans;
    queue<TreeNode*> q;
    if (root != nullptr) q.push(root);
    while (!q.empty()) {
      auto node = q.front();
      q.pop();
      ans.push_back(node->val);
      if (node->left != nullptr) q.push(node->left);
      if (node->right != nullptr) q.push(node->right);
    }
    return ans;
  }
};
```

## [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：层序遍历，每一层的元素单独存储

代码：

```cpp
class Solution {
public:
  vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    queue<TreeNode*> q;
    if (root) q.push(root);
    while (!q.empty()) {
      int size = q.size();
      vector<int> tmp;
      for (int i = 0; i < size; i++) {
        auto node = q.front();
        q.pop();
        tmp.push_back(node->val);
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
      }
      ans.push_back(tmp);
    }
    return ans;
  }
};
```

## [剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：层序遍历，使用一个变量记录该层是偶数还是奇数，奇数则反着放元素

```cpp
class Solution {
public:
  vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    deque<TreeNode*> q;
    int flag = 0;
    if (root) q.push_back(root);
    while (!q.empty()) {
      int size = q.size();
      vector<int> tmp;
      for (int i = 0; i < size; i++) {
        auto node = q.front();
        q.pop_front();
        tmp.push_back(node->val);
        if (node->left) q.push_back(node->left);
        if (node->right) q.push_back(node->right);
      }
      if (flag % 2) reverse(tmp.begin(), tmp.end());
      flag++;
      ans.push_back(tmp);
    }
    return ans;
  }
};
```

