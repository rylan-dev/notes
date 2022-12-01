# 第 7 天 搜索与回溯算法（简单）

> 回顾一下上次写链表时的递归通用解法：不管题目使用递归时的递归公式是否明显，都应从题目中抽象出一个递归公式，然后再加上边界条件，就可以实现出代码。

## [剑指 Offer 26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 首先题目已经说明空树不是任意一个数的子结构，所以当 A 为空或者 B 为空时，直接返回 `false`
2. 然后再看如何递归，假设我们已经知道 B 是否是以根节点左孩子为开始的左子树的子结构的结果、以根节点右孩子为开始的右子树的子结构的结果，那么问题可以拆解为：B 是否是以根节点为开始的树的子结构 + 上面两种情况，这三种情况只要满足其一就成立了。
3. 那么如何判断 B 是否是以某一特定节点开始的树的子结构呢？这里可以再次使用递归，假设已经知道左子树和右子树的结果，那么只需要比对根节点，如果 B 为空，说明比对完了，返回 `true` ，如果 A 为空或者当前比对节点的值不同，说明比对时不符合，返回 `false`。 

代码：

```cpp
class Solution {
public:
  bool isSubStructure(TreeNode* A, TreeNode* B) {
    if (A == nullptr || B == nullptr) return false;
    return isChild(A, B) || isSubStructure(A->left, B) || isSubStructure(A->right, B);
  }
  bool isChild(TreeNode* A, TreeNode* B) {
    if (B == nullptr) return true;
    if (A == nullptr || A->val != B->val) return false;
    return isChild(A->left, B->left) && isChild(A->right, B->right);
  }
};
```

## [剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 要求二叉树的镜像，可以将其每一层进行反转
2. 假设左子树和右子树已经完成了反转，现在要做的就是交换左子树和右子树

代码：

```cpp
class Solution {
public:
  TreeNode* mirrorTree(TreeNode* root) {
    if (root == nullptr) return nullptr;
    auto tmp = mirrorTree(root->right);
    root->right = mirrorTree(root->left);
    root->left = tmp;
    return root;
  }
};
```

## [剑指 Offer 28. 对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 要判断是否对称，就要将每一层对应位置的两个节点进行对比
2. 假设已经知道左子树与右子树是否对称的结果，则直接返回，因为根节点只有一个，不需要处理
3. 如果比对的节点都为空，则返回 `true`，如果有只一个为空或者比对节点不相等，则返回 `false`，递归公式：当前两个节点比对结果 && 第一个节点的左孩子和第二个节点的右孩子的比对结果 && 第一个节点的右孩子和第二个节点的左孩子的比对结果

代码：

```cpp
class Solution {
public:
  bool isSymmetric(TreeNode* root) {
    if (root == nullptr) return true;
    return symmetric(root->left, root->right); 
  }

  bool symmetric(TreeNode* A, TreeNode* B) {
    if (A == nullptr && B == nullptr) return true;
    if (A == nullptr || B == nullptr || A->val != B->val) return false;
    return symmetric(A->left, B->right) && symmetric(A->right, B->left);
  }
};
```

