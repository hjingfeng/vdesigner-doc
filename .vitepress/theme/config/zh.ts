import { DefaultTheme, LocaleSpecificConfig } from 'vitepress';

export const config: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    //siteTitle: 'VDesigner',
    lastUpdatedText: '上次更新',
    returnToTopLabel: '返回顶部',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/zh/guide/index',
        activeMatch: '/zh',
      },
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '快速上手', link: '/zh/guide/quick-start' },
          { text: '设计器介绍', link: '/zh/guide/designer-intro' },
        ],
      },
      {
        text: '核心概念',
        items: [
          { text: '项目与图纸', link: '/zh/concept/project-drawing' },
          { text: '画布', link: '/zh/concept/canvas' },
          { text: '组件', link: '/zh/concept/components' },
          { text: '属性', link: '/zh/concept/property' },
          { text: '事件', link: '/zh/concept/event' },
          { text: '动画', link: '/zh/concept/animation' },
          { text: '数据通信', link: '/zh/concept/data' },
          { text: '项目运行', link: '/zh/concept/preview' },
        ],
      },
      /* {
        text: '内置组件库',
        items: [
          { text: '基础图库', link: '/zh/libs/base' },
          { text: 'ECharts图表', link: '/zh/libs/echarts' },
          { text: '大屏装饰', link: '/zh/libs/bigscreen' },
          { text: '地图', link: '/zh/libs/map' },
        ],
      },
      {
        text: '进阶',
        items: [
          { text: '自定义数据解析', link: '/zh/senior/base' },
          { text: '数据绑定', link: '/zh/senior/data-bind' },
          { text: '组件状态', link: '/zh/senior/state' },
          { text: '动画特效', link: '/zh/senior/animation' },
        ],
      }, */
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
