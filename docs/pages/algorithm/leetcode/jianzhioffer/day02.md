# 第 2 天 链表（简单）

## [剑指 Offer 06. 从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
### 非递归解法
思路：

1. 声明一个栈
2. 遍历链表，链表节点的值入栈
3. 出栈顺序就是从尾到头

代码：
```cpp
class Solution {
public:
  vector<int> reversePrint(ListNode* head) {
    vector<int> res;
    stack<int> st;
    while (head != NULL) {
      st.push(head->val);
      head = head->next;
    }
    while (!st.empty()) {
      res.push_back(st.top());
      st.pop();
    }
    return res;
  }
};
```
### 递归解法
思路：

1. 递归结束条件：当前节点为空，返回 `[]`
2. 回溯操作：`[] + [cur->val]`

代码：
```cpp
class Solution {
public:
  vector<int> reversePrint(ListNode* head) {
    if (head == NULL) return vector<int>{};  
    vector<int> res = reversePrint(head->next);
    res.push_back(head->val);
    return res;
  }
};
```
## [剑指 Offer 24. 反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
### 非递归解法
思路：

1. 定义两个节点：`prev = head`，`cur = head->next`
2. 遍历链表：使用 `tmp` 保存 `cur->next`，然后 `cur->next = prev`，最后往后移动，即 `prev = cur` 和 `cur = tmp`
3. 返回 `prev`

代码：
```cpp
class Solution {
public:
  ListNode* reverseList(ListNode* head) {
    if (head == NULL || head->next == NULL) return head;
    auto prev = head, cur = head->next;
    head->next = NULL;
    while (cur != NULL) {
      auto tmp = cur->next;
      cur->next = prev;
      prev = cur;
      cur = tmp;
    }
    return prev;
  }
};
```
### 递归解法
思路：

1. 递归结束条件：链表没有或者只有一个元素，不需要反转，直接返回
2. 回溯操作：`cur->next->next = cur` 和 `cur->next = null`

代码：
```cpp
class Solution {
public:
  ListNode* reverseList(ListNode* head) {
    if (head == NULL || head->next == NULL) return head;
    auto newHead = reverseList(head->next);
    head->next->next = head;
    head->next = NULL;
    return newHead;
  }
};
```
## [剑指 Offer 35. 复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)
思路：

1. 创建一个哈希表，存储当原节点到复制节点的映射
2. 遍历链表，将节点的 `next` 和 `random` 指向复制节点，即通过哈希表来查找 `hash[cur->next]` 和 `hash[cur->random]`
```cpp
class Solution {
public:
  Node* copyRandomList(Node* head) {
    if (head == nullptr) return nullptr;
    unordered_map<Node*, Node*> hash;
    auto cur = head;
    while (cur != nullptr) {
      hash[cur] = new Node(cur->val);
      cur = cur->next;
    }
    cur = head;
    while (cur != nullptr) {
      hash[cur]->next = hash[cur->next];
      hash[cur]->random = hash[cur->random];
      cur = cur->next;
    }
    return hash[head];
  }
};
```
## 总结
对于部分递归的写法可能不像$n$的阶乘和斐波那契数列这种问题有着明显的递归公式，但是只要找到递归公式，我们就能写出递归解法，拿反转链表举例：
此时要解决的问题是$f(node)$，即把以$node$为头节点的链表反转。我们考虑$f(n)$和$f(n-1)$的关系，也就是$f(node)$和$f(node\rightarrow next)$的关系。
对于 `1->2->3->4->5->null`，此时递归公式是什么？
假设$f(node=2)$已解决，那$f(node=1)$如何解决？很明显，只要我们交换$node=1$和$node=2$就行了，即递归公式为 $f(node) = f(node\rightarrow next) + 反转\ node\ 和\ node\rightarrow next$。具体操作就是：

1. `cur->next->next = cur`
2. `cur->next = null`
