# 第 3 天 字符串（简单）

## [剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
思路：

1. 对于字符串可变的编程语言，直接算出空格数量，然后把字符串长度变长，遍历字符串，遇到空格就直接替换
2. 对于字符串不可变的编程语言，每一个字符先存到数组中，然后拼接

代码：
```cpp
class Solution {
public:
  string replaceSpace(string s) {
    string ans = "";
    for (int i = 0; i < s.size(); i++) {
      if (s[i] == ' ') {
        ans += "%20";
      } else {
        ans += s[i];
      }
    }
    return ans;
  }
};
```
## [剑指 Offer 58 - II. 左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/description/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
思路：遍历字符串进行拼接即可

代码：
```cpp
class Solution {
public:
  string reverseLeftWords(string s, int n) {
    string ans = "";
    for (int i = n; i < n + s.size(); i++) ans += s[i % s.size()];
    return ans;
  }
};
```
