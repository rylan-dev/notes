# 第 16 天 排序（简单）

## [面试题45. 把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 对数组进行排序
2. 如果 `sa + sb < sb + sa` 的话，则 `sa` 在 `sb` 前面，否则在后面
3. 可以使用 `sort` 或者自己写一个快速排序

代码：
```cpp
class Solution {
public:
  string minNumber(vector<int>& nums) {
    sort(nums.begin(), nums.end(), [](auto a, auto b) {
      string sa = to_string(a),  sb = to_string(b);
      return sa + sb < sb + sa;
    });

    string ans = "";
    for (auto x: nums) {
      ans += to_string(x);
    }
    return ans;
  }
};
```

## [面试题61. 扑克牌中的顺子](https://leetcode.cn/problems/bu-ke-pai-zhong-de-shun-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 对五个数进行排序
2. 遍历数组如果碰到 0，则 `count++`，记录第一个非零元素下标
3. 如果最后一个数与第一个非零元素之差小于 5，则可以构成顺子
4. 如果遍历过程中遇到重复元素，则直接返回 `false`

代码：
```cpp
class Solution {
public:
  bool isStraight(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int count = 0;
    for (int i = 0; i < 4; i++) {
      if (nums[i] == 0) count++;
      else if (nums[i] == nums[i + 1]) return false;
    }
    return nums[4] - nums[count] < 5;
  }
};
```

## 快速排序
```cpp
void quick_sort(int a[], int l, int r) {
  if (l >= r) return;
  int i = l - 1, j = r + 1, x = a[l + r >> 1];
  while (i < j) {
    do i++; while (a[i] < x);
    do j--; while (a[j] > x);
    if (i < j) swap(a[i], a[j]);
  }
  quick_sort(a, l, j);
  quick_sort(a, j + 1, r);
}
```
