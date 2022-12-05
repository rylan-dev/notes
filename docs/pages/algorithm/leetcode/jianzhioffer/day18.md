# 第 18 天搜索与回溯算法（中等）

## [剑指 Offer 55 - I. 二叉树的深度](https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：递归
1. 深度 = 1 + 左右子树深度最大值

代码：
```cpp
class Solution {
public:
  int maxDepth(TreeNode* root) {
    if (root == nullptr) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
  }
};
```

## [剑指 Offer 55 - II. 平衡二叉树](https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 遍历每一个节点，看是否满足平衡二叉树要求
2. 判断当前节点是否满足：`abs(depth(root->left) - depth(root->right)) <= 1`

代码；
```cpp
class Solution {
public:
  bool isBalanced(TreeNode* root) {
    if (root == nullptr) return true;
    return abs(depth(root->left) - depth(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
  }

  int depth(TreeNode* node) {
    if (node == nullptr) return 0;
    return 1 + max(depth(node->left), depth(node->right));
  }
};
```
