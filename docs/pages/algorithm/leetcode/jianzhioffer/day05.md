# 第 5 天 查找算法（中等）

## [剑指 Offer 04. 二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

思路：

1. 根据题意，二维数组的每一行和每一列开始到结尾，数组元素大小都是非递减的，因此可以采用二分查找
2. 如果直接从第一个元素开始查找，是不可行的，因为并不能保证第二列的第一个元素一定大于第一列的最后一个元素
3. 可以观察到，我们可以从右上角或者左下角开始查找，以右上角为例，如果目标比它小，说明在左边，列数减一，如果目标比它大，说明在下面，行数加一，直到找到元素

代码：

```cpp
class Solution {
public:
  bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
    if (matrix.size() == 0) return false;
    int n = matrix.size(), m = matrix[0].size();
    int i = 0, j = m - 1;
    while (i < n && j >= 0) {
      if (matrix[i][j] > target) {
        j--;
      } else if (matrix[i][j] < target) {
        i++;
      } else {
        return true;
      }
    }
    return false;
  }
};
```

## [剑指 Offer 11. 旋转数组的最小数字](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

思路：

1. 数组原本是非递减的，虽然经过旋转，但它任然具有二段性，可以使用二分查找
2. 二分的本质是边界，此题的边界就是数组的最小值
3. 但是本题还有一些特殊的情况需要额外处理
   - 如果数组没有进行旋转，那二分的结果是最后一个元素，此时需要返回第一个元素
   - 如果旋转发生在重复元素的中间，那么旋转后的数组不具有二段性，因此需要对数组进行处理使其具有二段性，具体的做法是将旋转数组末尾的那些元素去除

代码：

```cpp
class Solution {
public:
  int minArray(vector<int>& numbers) {
    int target = numbers[0];
    int l = 0, r = numbers.size() - 1;
    while (r >= 0 && numbers[0] == numbers[r]) {
      r--;
    }
    while (l < r) {
      int mid = (l  + r) >> 1;
      if (numbers[mid] < target) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return min(numbers[l], numbers[0]);
  }
};
```

## [剑指 Offer 50. 第一个只出现一次的字符](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

思路：

1. 要找出第一个只出现一次的字符，只需统计字符出现的数量，因为只有小写字母，所以可以直接使用一个数组，当然，如果还有其他字符，数组是不方便的，所以可以使用一个哈希表来存储
2. 统计完成后，再次对字符串进行遍历，如果数量为 1，直接返回

代码：

```cpp
class Solution {
public:
  char firstUniqChar(string s) {
    map<char, int> mp;
    for (auto c: s) {
      mp[c]++;
    }
    for (auto c: s) {
      if (mp[c] == 1) return c;
    }
    return ' ';
  }
};
```