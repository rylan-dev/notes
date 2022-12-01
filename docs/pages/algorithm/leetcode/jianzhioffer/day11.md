# 第 11 天 双指针（简单）

## [剑指 Offer 18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：

1. 定义两个指针 `prev` 和 `cur` ，一前一后
2. 然后遍历链表，知道找到要删除的节点，即满足 `cur->val = val`
3. 最后执行 `prev->next = cur->next`
4. 但是如果要删除的是头节点，该方法不适用，所以需要特判（使用虚拟头节点就不用）

代码：

```cpp
class Solution {
public:
  ListNode* deleteNode(ListNode* head, int val) {
    if (head == nullptr) return nullptr;
    if (head->val == val) return head->next;
    auto prev = head, cur = head->next;
    while (cur != nullptr && cur->val != val) {
      prev = cur;
      cur = cur->next;
    }
    prev->next = cur->next;
    return head;
  }
};
```

## [剑指 Offer 22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：快慢指针

1. 定义两个指针 `fast` 和 `slow`
2. 先让 `fast` 往后走 `k` 步
3. 然后 `slow` 和 `fast` 一起向后走，知道 `fast` 走到尾节点后面，此时 `slow` 就是倒数第 `k` 个节点

代码：

```cpp
class Solution {
public:
  ListNode* getKthFromEnd(ListNode* head, int k) {
    auto slow = head, fast = head;
    for (int i = 0; i < k; i++) {
      fast = fast->next;
    }
    while (fast != nullptr) {
      slow = slow->next;
      fast = fast->next;
    }
    return slow;
  }
};
```