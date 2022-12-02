# 第 15 天 搜索与回溯算法（中等）

## [剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：dfs
1. 使用 `path` 数组记录路径，`res` 数组记录答案
2. 如果遍历到当前节点 `target` 为 0，并且左孩子和右孩子为空（叶子节点），说明该路径是一个答案
3. 注意将 `path` 进行复制后推入到 `res` 中，否则 `res` 中都是一个 `path`

代码：
```cpp
class Solution {
public:
  vector<vector<int>> res;
  vector<int> path;
  vector<vector<int>> pathSum(TreeNode* root, int target) {
    recur(root, target);
    return res;
  }

  void recur(TreeNode* node, int target) {
    if (node == nullptr) return;
    path.push_back(node->val);
    target -= node->val;
    if (target == 0 && node->left == nullptr && node->right == nullptr) {
      res.push_back(vector<int>(path.begin(), path.end()));
    }
    recur(node->left, target);
    recur(node->right, target);
    path.pop_back();
  }
};
```

## [剑指 Offer 36. 二叉搜索树与双向链表](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：中序遍历
1. 二叉搜索树的中序遍历结果就是排好序的数组
2. 定义两个指针：`head` 指向头，`prev` 指向当前遍历节点的前序节点
3. 初始时，`head` 指向当前节点，`prev = null`
4. 随着遍历的进行，重复：`prev->right = cur`，`cur->left = prev`，`prev = cur`
5. 最后 `head->left = prev` 和 `prev->right = head` 形成循环链表

代码：
```cpp
class Solution {
public:
  Node* head, * prev;
  Node* treeToDoublyList(Node* root) {
    if (root == nullptr) return nullptr;
    dfs(root);
    head->left = prev;
    prev->right = head;
    return head;
  }
  void dfs(Node* cur) {
    if (cur == nullptr) return;
    dfs(cur->left);
    if (prev == nullptr) head = cur;
    else prev->right = cur;
    cur->left = prev;
    prev = cur;
    dfs(cur->right);
  }
};
```

## [剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：中序遍历
1. 对二叉搜索树进行中序遍历，得到有序数组
2. 第 k 大的节点即 `path[path.size() - 1]`

代码：
```cpp
class Solution {
public:
  vector<int> path;
  int kthLargest(TreeNode* root, int k) {
    if (root == nullptr) return -1;
    dfs(root);
    return path[path.size() - k];
  }
  void dfs(TreeNode* node) {
    if (node == nullptr) return;
    dfs(node->left);
    path.push_back(node->val);
    dfs(node->right);
  }
};
```
