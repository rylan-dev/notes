# 第 12 天 双指针（简单）

## [剑指 Offer 25. 合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：双指针

1. 定义两个指针分别指向两个链表，往后遍历
2. 哪个小就把当前的值接入结果链表中，直接任意一个链表为空
3. 最后把剩余的链表元素接到结果链表中

代码：

```cpp
class Solution {
public:
  ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode* head = new ListNode(-1);
    auto cur = head;
    while (l1 != nullptr && l2 != nullptr) {
      if (l1->val <= l2->val) {
        cur->next = new ListNode(l1->val);
        l1 = l1->next;
      } else {
        cur->next = new ListNode(l2->val);
        l2 = l2->next;
      }
      cur = cur->next;
    }
    while (l1 != nullptr) {
      cur->next = new ListNode(l1->val);
      cur = cur->next;
      l1 = l1->next;
    }
    while (l2 != nullptr) {
      cur->next = new ListNode(l2->val);
      cur = cur->next;
      l2 = l2->next;
    }
    return head->next;
  }
};
```

## [剑指 Offer 52. 两个链表的第一个公共节点](https://leetcode.cn/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=1v5v651)

思路：双指针

1. 从两个起始点开始走，直到两个指针相等
2. 如果指针为空，则指向另起点
3. 最后的状态要么都为 null，要么处于相交节点

代码：

```cpp
class Solution {
public:
  ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    auto a = headA, b = headB;
    while (a != b) {
      if (a == nullptr) {
        a = headB;
      } else {
        a = a->next;
      }
      if (b == nullptr) {
        b = headA;
      } else {
        b = b->next;
      }
    }
    return a;
  }
};
```