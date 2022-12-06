# 第 19 天 搜索与回溯算法（中等）

## [剑指 Offer 64. 求1+2+…+n](https://leetcode.cn/problems/qiu-12n-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：利用 `&&` 逻辑运算符进行短路操作

代码：
```cpp
class Solution {
public:
  int sumNums(int n) {
    n && (n += sumNums(n - 1));
    return n;
  }
};
```

## [剑指 Offer 68 - I. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 如果两个节点分别在左右子树，则最近公共祖先为根节点
2. 如果两个节点都在左子树，则对左孩子进行判断（即回到第一种情况）
3. 如果两个节点都在右子树，同上

代码：
```cpp
class Solution {
public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    while (root != nullptr) {
      if (root->val < p->val && root->val < q->val) {
        root = root->right;
      } else if (root->val > p->val && root->val > q->val) {
        root = root->left;
      } else {
        break;
      }
    }
    return root;
  }
};
```

## [剑指 Offer 68 - II. 二叉树的最近公共祖先](https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 如果两个节点在不同侧，则根节点为最近公共祖先
2. 如果任一节点等于根节点，另一节点在根节点子树中，则根节点为最近公共祖先

代码：
```cpp
class Solution {
public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (root == nullptr) return nullptr;
    if (p == root || q == root) return root;

    auto left = lowestCommonAncestor(root->left, p, q);
    auto right = lowestCommonAncestor(root->right, p, q);

    if (left == nullptr) return right;
    if (right == nullptr) return left;
    
    return root;
  }
};

```
