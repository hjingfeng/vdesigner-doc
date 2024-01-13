import { defineConfig } from 'vitepress';
import { config as zhConfig } from './theme/config/zh';

export default defineConfig({
  title: 'VDesigner',
  titleTemplate: ':title - VDesigner',
  description: 'A web configuration, visualization designer tools',

  // 文档目录
  srcDir: './src',
  // 项目构建输出目录
  outDir: './dist',

  locales: {
    root: { label: '简体中文', lang: 'zh', ...zhConfig },
  },

  markdown: {
    lineNumbers: true,
  },

  sitemap: {
    hostname: 'https://www.vdesigner.work',
  },
});
