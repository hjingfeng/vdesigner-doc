import { defineConfig } from 'vitepress';
import { zhThemeConfig } from './theme/config/zh';

export default defineConfig({
  title: 'VDesigner',
  titleTemplate: ':title - VDesigner',
  description: 'A web configuration, visualization designer tools',

  // 文档目录
  srcDir: './src',
  // 项目构建输出目录
  outDir: './dist',

  locales: {
    root: { label: '简体中文', lang: 'zh', link: '/index', ...zhThemeConfig },
  },

  markdown: {
    lineNumbers: true,
  },

  sitemap: {
    hostname: 'https://www.vdesigner.work',
  },
});
