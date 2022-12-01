# 第 1 天 栈与队列（简单）

## [剑指 Offer 09. 用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
思路：$\sqrt{3x-1}+(1+x)^2$

1. 声明两个栈
2. 对于入队操作：直接将元素 `push` 进第一个栈中
3. 对于出队操作：先将第一个栈中的元素移入第二个栈，然后第二个栈的栈顶元素出栈，再将第二个栈中的元素移回第一个栈

代码：
```cpp
class CQueue {
public:
  stack<int> st1, st2;
  CQueue() {}
  
  void appendTail(int value) {
    st1.push(value);
  }
  
  int deleteHead() {
    if (st1.empty()) return -1;
    while (!st1.empty()) {
      st2.push(st1.top());
      st1.pop();
    }
    int value = st2.top();
    st2.pop();
    while (!st2.empty()) {
      st1.push(st2.top());
      st2.pop();
    }
    return value;
  }
};
```
## [剑指 Offer 30. 包含 min 函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
思路：

1. 声明两个栈，一个用于存元素（`x_stack`），另一个用于维护最小值（`min_stack`）
2. 对于 `push` 操作，存元素的栈正常操作，维护最小值的栈检查要 `push` 的元素是否小于 `min_stack` 的栈顶元素，如果小于，则将该元素 `push` 进 `min_stack`，否则再 `push` 一个与栈顶元素相同的元素
3. 对于 `pop` 操作，两个栈都直接 `pop`
4. 满足上述操作后，`min_stack` 的栈顶元素就是当前元素的最小值，此时获得最小值的操作就是 $O(1)$ 的

代码：
```cpp
class MinStack {
public:
  stack<int> st;
  stack<int> min_stack;
  MinStack() {
    min_stack.push(INT_MAX);
  }
  
  void push(int x) {
    st.push(x);
    min_stack.push((x < min_stack.top() ? x : min_stack.top()));
  }
  
  void pop() {
    st.pop();
    min_stack.pop();
  }
  
  int top() {
    return st.top();
  }
  
  int min() {
    return min_stack.top();
  }
};
```
