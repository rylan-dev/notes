export const SideBarList = {
  "/pages/frontend-basis": [
    {
      text: "HTML",
      collapsible: true, // 是否开启折叠
      items: [
        {
          text: "表单",
          link: "/pages/frontend-basis/html/test",
        },
      ],
    },
    {
      text: "CSS",
      collapsible: true,
      items: [
        {
          text: "布局",
          link: "/pages/frontend-basis/css/test",
        },
      ],
    },
    {
      text: "JavaScript",
      collapsible: true,
      items: [
        {
          text: "ES6语法",
          link: "/pages/frontend-basis/javascript/test",
        },
      ],
    },
  ],
  "/pages/engineer": [
    {
      text: "Node 基础知识",
      collapsable: true,
      items: [
        { link: "/pages/engineer/test", text: "包管理器" },
      ],
    },
  ],
  "pages/algorithm": [
    {
      text: "剑指 Offer 刷题",
      collapsable: true,
      items: [
        { link: "/pages/algorithm/leetcode/jianzhioffer/day01", text: "第 1 天 栈与队列（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day02", text: "第 2 天 链表（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day03", text: "第 3 天 字符串（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day04", text: "第 4 天 查找算法（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day05", text: "第 5 天 查找算法（中等）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day06", text: "第 6 天 搜索与回溯算法（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day07", text: "第 7 天 搜索与回溯算法（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day08", text: "第 8 天 动态规划（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day09", text: "第 9 天 动态规划（中等）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day10", text: "第 10 天 动态规划（中等）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day11", text: "第 11 天 双指针（简单）" },
        { link: "/pages/algorithm/leetcode/jianzhioffer/day12", text: "第 12 天 双指针（简单）" },
      ],
    },
  ],
  "/pages/network/": [
    {
      text: "计算机网络",
      collapsable: true,
      items: [
        { link: "/pages/network/test", text: "概述" },
        
      ],
    },
  ],
};