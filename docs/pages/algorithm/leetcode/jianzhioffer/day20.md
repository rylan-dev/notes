# 第 20 天 分治算法（中等）

## [剑指 Offer 07. 重建二叉树](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 通过前序遍历结果拿到根节点，将中序遍历一分为二，递归这个过程
2. 第一次根节点为 `preorder[0]`，左边界为 `0`，右边界为 `preorder.size() - 1`
3. 如果左边界大于右边界，到达递归边界
4. 以根节点建树，通过根节点分出左子树和右子树，然后左右子树重复上述过程

代码：
```cpp
class Solution {
public:
  TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    return reBuild(preorder, inorder, 0, 0, preorder.size() - 1);
  }

  TreeNode* reBuild(vector<int>& preorder, vector<int>& inorder, int root, int left, int right) {
    if (left > right) return nullptr;

    auto node = new TreeNode(preorder[root]);

    int idx;
    for (int i = 0; i < inorder.size(); i++) {
      if (inorder[i] == preorder[root]) {
        idx = i;
        break;
      }
    }

    node->left = reBuild(preorder, inorder, root + 1, left, idx - 1);
    node->right = reBuild(preorder, inorder, root + idx - left  + 1, idx + 1, right);

    return node;
  }
};
```


## [剑指 Offer 16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 要求 $x^n$，可以使用递归：`x * myPow(x, n - 1)`
2. 不过这样很容易爆栈，可以使用分治，先算 $x^{\frac{n}{2}}$，然后再相乘（如果是奇数再乘一个 x）
3. 如果继续进行优化，就是快速幂

代码：
```cpp
class Solution {
public:
  double myPow(double x, int n) {
    if (n == 0) return 1;
    if (n == 1) return x;

    // -2^31 变正数会溢出 int
    long long b = n;
    if (b < 0) {
      b = -b;
      x = 1 / x;
    }
    double ans = myPow(x, b / 2);
    ans *= ans;

    if (b % 2) ans *= x;

    return ans;
  }
};
```

## [剑指 Offer 33. 二叉搜索树的后序遍历序列](https://leetcode.cn/study-plan/lcof/?progress=1v5v651)

思路：
1. 后序遍历最后一个节点是根节点，通过根节点，检查左右子树
2. 从前往后遍历，找到第一个比根节点大的值，可以划分出左右子树，然后递归判断左右子树

代码：
```cpp
class Solution {
public:
  bool verifyPostorder(vector<int>& postorder) {
    return recur(postorder, 0, postorder.size() - 1);
  }

  bool recur(vector<int>& postorder, int l, int r) {
    if (l >= r) return true;
    int root = postorder[r];
    int idx = l;
    while (postorder[idx] < root) idx++;
    int mid = idx++;
    while (idx < r) {
      // 如果右子树出现反例，直接返回 false
      if (postorder[idx] < root) return false;
      idx++;
    }
    return recur(postorder, l, mid - 1) && recur(postorder, mid, r - 1);
  }
};
```
