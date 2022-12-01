# 第 4 天 查找算法（简单）

## [剑指 Offer 03. 数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 创建一个哈希表（`set`），方便查找重复数字
2. 然后遍历数组，如果哈希表中不存在就添加该元素，下次再遇到该元素则为重复元素

代码：

```cpp
class Solution {
public:
  int findRepeatNumber(vector<int>& nums) {
    set<int> s;
    for (auto x: nums) {
      if (s.count(x)) return x;
      s.insert(x);
    }
    return -1;
  } 
};
```

## [剑指 Offer 53 - I. 在排序数组中查找数字 I](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651) 

思路：

1. 因为数组是单调的，所以可以使用二分查找
2. 二分查找找到 `target` 的左右边界，然后进行计算，如果不存在该数则直接返回 0

代码：

```cpp
class Solution {
public:
  int search(vector<int>& nums, int target) {
    if (nums.size() == 0) return 0;
    int l = 0, r = nums.size() - 1;
    while (l < r) {
      int mid = l + r >> 1;
      if (nums[mid] >= target) r = mid;
      else l = mid + 1;
    }
    if (nums[l] != target) return 0;
    int left = l;
    l = 0, r = nums.size() - 1;
    while (l < r) {
      int mid = l + r + 1 >> 1;
      if (nums[mid] <= target) l = mid;
      else r = mid - 1;
    }
    return r - left + 1;
  }
};
```

## [剑指 Offer 53 - II. 0～n-1中缺失的数字](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 遍历数组，判断元素是否等于下标，不等于则返回下标，此元素为缺失元素
2. 注意，缺失的可能是最后一个元素，所以最后返回 `nums.size()`

代码：

```cpp
class Solution {
public:
  int missingNumber(vector<int>& nums) {
    for (int i = 0; i < nums.size(); i++) {
      if (nums[i] != i) return i;
    }
    return nums.size();
  }
};
```

补充：因为题目中说了是有序数组，所以也可以考虑二分的做法

```cpp
class Solution {
public:
  int missingNumber(vector<int>& nums) {
    int len = nums.size();
    if (len == 0) return 0;
    int l = 0, r = len - 1;
    while (l < r) {
      int mid = (l + r) >> 1;
      if (nums[mid] != mid) r = mid;
      else l = mid + 1;
    }
    // 等于表示缺失的是最后一个元素，不等于表示缺失的就是该数
    return nums[l] == l ? l + 1 : l;
  }
};
```

## 二分总结

**二分的本质是边界**，多用于具有单调性的题目中。如果我们在一个区间上定义某种性质，使得整个区间可以被一分为二，即这个性质在一边区间满足而在另一边区间不满足。那么使用二分就可以找出左边界的右端点或右边界的左端点。
可能你会发现网上二分查找的算法介绍特别多，一般文章中都会提到边界问题，这也是二分查找比较难的地方。因此，下面给出二分查找通用的模板，无需考虑边界问题。
**注意：题目可能无解，但二分一定有解。**
1. 寻找右区间的左端点，区间 $[l, r]$ 被划分成 $[l, mid]$ 和 $[mid + 1, r]$ 时使用：
```cpp
int binarySearch(int l, int r) {
  while (l < r) {
    int mid = l + r >> 1;
    if (check(mid)) r = mid; // 满足所定义的性质
    else l = mid + 1;
  }
  return l;
}
```
2. 寻找左区间右端点，区间 $[l, r]$ 被划分成 $[l, mid - 1]$ 和 $[mid, r]$ 时使用：
```cpp
int binarySearch(int l, int r) {
  while (l < r) {
  	// 加 1 是为了防止当 r = l + 1 时 (l + (l + 1)) / 2 = l 进入 [l, l + 1] 死循环
    int mid = l + r + 1 >> 1; // 向上取整
    if (check(mid)) l = mid; // 满足所定义的性质
    else r = mid - 1;
  }
  return l;
}
```