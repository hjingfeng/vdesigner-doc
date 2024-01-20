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

  head: [
    [
      'script',
      {},
      `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b34611a1089b74cfada251ba2d213e81";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],

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
