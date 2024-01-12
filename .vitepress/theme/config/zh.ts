import { DefaultTheme, LocaleSpecificConfig } from 'vitepress';

export const zhThemeConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    siteTitle: 'VDesigner',
    lastUpdatedText: '上次更新',
    returnToTopLabel: '返回顶部',
    nav: [
      {
        text: '文档',
        link: '/zh/guide/index',
      },
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '快速上手', link: '/zh/guide/quick-start' },
          { text: '设计器介绍', link: '/zh/guide/designer-intro' },
        ],
      },
    ],
    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: '目录', // 右侧大纲标题文本配置
    },
    // 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    footer: {
      copyright: `Copyright © 2018-${new Date().getFullYear()} <a href="https://beian.miit.gov.cn" style="padding-left:10px">豫ICP备2023027317号-2</a>`,
    },
  },
};
