import { defineConfig } from "vitepress";

import { NavItemList } from "./NavItems";
import { SideBarList } from "./SideBar";

export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/avatar.jpg" }],
  ],
  base: "/",
  title: "夕漫的小宇宙",
  description: "前端学习记录",
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
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