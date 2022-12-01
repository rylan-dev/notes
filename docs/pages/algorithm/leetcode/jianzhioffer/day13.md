# 第 13 天 双指针（简单）

## [剑指 Offer 21. 调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 初始化两个指针 `i` 和 `j`，一个指向头，一个指向尾
2. 两个指针向中间靠：
   - 如果 `nums[i]` 为偶数，`nums[j]` 为奇数，则交换两数，并移动两指针
   - 如果都为奇数，则 `i` 指针移动
   - 如果都为偶数，则 `j` 指针移动
   - 如果 `nums[i]` 为奇数，`nums[j]` 为偶数，直接移动两指针

代码：
```cpp
class Solution {
public:
  vector<int> exchange(vector<int>& nums) {
    int i = 0, j = nums.size() - 1;
    while (i < j) {
      if (nums[i] % 2 == 0 && nums[j] % 2 == 1) {
        swap(nums[i], nums[j]);
        i++;
        j--;
      } else if (nums[i] % 2 == 1 && nums[j] % 2 == 1) {
        i++;
      } else if (nums[i] % 2 == 0 && nums[j] % 2 == 0) {
        j--;
      } else {
        i++;
        j--;
      }
    }
    return nums;
  }
};
```

## [剑指 Offer 57. 和为s的两个数字](https://leetcode.cn/problems/he-wei-sde-liang-ge-shu-zi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路；
1. 初始化两个指针 `i` 和 `j`，一个指向头，一个指向尾
2. 由于数组递增排序
   - 如果 `nums[i] + nums[j] < target`，`i` 往后移动
   - 如果 `nums[i] + nums[j] > target`，`j` 往前移动
   - 否则相等，返回 `nums[i]` 和 `nums[j]`

代码：
```cpp
class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    int i = 0, j = nums.size() - 1;
    while (i < j) {
      if (nums[i] + nums[j] == target) {
        return vector<int>{nums[i], nums[j]};
      } else if (nums[i] + nums[j] > target) {
        j--;
      } else {
        i++;
      }
    }
    return vector<int>{-1, -1};
  }
};
```
注：如果数组无序，可以使用哈希表

## [剑指 Offer 58 - I. 翻转单词顺序](https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：
1. 首尾空格去除
2. 反转整个字符串
3. 对每个单词进行反转
4. 这道题有一些边界情况需要实现时具体处理

代码：
```cpp
class Solution {
public:
  string reverseSentence(string s) {
    if (s.size() == 0) return "";
    string res = "";
    int i = 0, j = s.size() - 1;
    while (i < s.size() && s[i] == ' ') i++;
    while (j >= 0 && s[j] == ' ') j--;
    for (int k = i; k <= j; k++) {
      res += s[k];
    }
    i = 0, j = res.size() - 1;
    while (i < j) {
      swap(res[i++], res[j--]);
    }
    return res;
  }
  string reverseWords(string s) {
    string res = "";
    s = reverseSentence(s);
    cout << s << endl;
    if (s.size() == 0) return "";
    int i = 0, j = 0;
    while (i < s.size() && j < s.size()) {
      string tmp = "";
      while (s[j] != ' ') {
        tmp += s[j++];
        if (j == s.size()) break;
      }
      res += reverseSentence(tmp);
      if (j != s.size()) res += ' ';
      while (s[j] == ' ') j++;
      i = j;
    }
    return res;
  }
};
```
