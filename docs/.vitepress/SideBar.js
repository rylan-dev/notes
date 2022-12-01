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
      text: "数据结构与算法",
      collapsable: true,
      items: [
        { link: "/pages/network/test", text: "LeetCode" },
        
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