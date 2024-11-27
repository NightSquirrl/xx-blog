import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";

// add icons what you will need
const safelist = ["i-ri-home-line", "i-ri-price-tag-3-fill","i-ri-increase-decrease-fill"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",
  vite: {
    base: "/xx-blog/",
  },
  themeConfig: {
    banner: {
      enable: true,
      title: "欣欣子的笔记站",
    },

    pages: [
      {
        name: "前端开发相关文档",
        url: "/links/",
        icon: "i-ri-increase-decrease-fill",
        color: "dodgerblue",
      },
      {
        name: "技巧分享",
        url: "/craftsmanship/",
        icon: "i-ri-price-tag-3-fill",
        color: "hotpink",
      },
    ],

    footer: {
      since: 2024,
      powered: false,
      beian: {
        enable: false,
        icp: "",
      },
    },
  },

  unocss: { safelist },
});
