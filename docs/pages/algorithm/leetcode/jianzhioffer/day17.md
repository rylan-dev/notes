# 第 17 天 排序（中等）

## [剑指 Offer 40. 最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：快排

代码：
```cpp
class Solution {
public:
  vector<int> getLeastNumbers(vector<int>& arr, int k) {
    quickSort(arr, 0, arr.size() - 1);
    return vector<int>(arr.begin(), arr.begin() + k);
  }

  void quickSort(vector<int>& arr, int l, int r) {
    if (l >= r) return ;
    int i = l - 1, j = r + 1, x = arr[l + r >> 1];
    while (i < j) {
      do i++; while (arr[i] < x);
      do j--; while (arr[j] > x);
      if (i < j) swap(arr[i], arr[j]);
    }
    quickSort(arr, l, j);
    quickSort(arr, j + 1, r);
  }
};
```

## [剑指 Offer 41. 数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：堆
1. 使用两个堆来维护该数据流，小的元素放在大根堆，大的元素放在小根堆
2. 如果小根堆和大根堆元素数量相等，可以选择一个堆存放下一个数据，涉及到后面整个数据量为奇数时取哪一个
3. 如果不相等，那么下一个数据放到元素少的堆里
4. 最后拿堆顶计算中位数

```cpp
class MedianFinder {
public:
  priority_queue<int> a;
  priority_queue<int, vector<int>, greater<int>> b;
  /** initialize your data structure here. */
  MedianFinder() {
    
  }
  
  void addNum(int num) {
    // 推入时先推到另一个堆以拿到最值
    if (a.size() != b.size()) {
      b.push(num);
      a.push(b.top());
      b.pop();
    } else {
      a.push(num);
      b.push(a.top());
      a.pop();
    }
  }
  
  double findMedian() {
    return a.size() == b.size() ? (a.top() + b.top()) / 2.0 : b.top();
  }
};
```
