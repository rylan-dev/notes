import { defineConfig } from "vitepress";

import { NavItemList } from "./NavItems";
import { SideBarList } from "./SideBar";

export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/avatar.jpg" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" }],
  ],
  base: "/",
  title: "夕漫的小宇宙",
  description: "前端学习记录",
  markdown: {
    theme: "material-palenight",
    config: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  themeConfig: {
    // 文档标题
    siteTitle: "夕漫的小宇宙",
    // 文档LOGO
    logo: "/avatar.jpg",
    // 顶部栏导航栏
    nav: NavItemList,
    // 侧边栏
    sidebar: SideBarList,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Rylan",
    },
  },
});