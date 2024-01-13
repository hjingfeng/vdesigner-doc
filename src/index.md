---
layout: home
title: vdesigner - 可视化web组态设计器
hero:
  name: 可视化Web组态工具
  text: 2D/2.5D/3D 大屏创作
  tagline: 简单、极速，适用于多行业场景的可视化构建和展示
  image:
    src: /images/screen.jpg
    alt: VDesigner
  actions:
    - theme: brand
      text: 免费设计(2D)
      link: https://2d.vdesigner.work
    - theme: alt
      text: 快速上手
      link: /zh/guide/index
    #- theme: alt
    #  text: 在Github上查看
    #  link: https://github.com/vitejs/vite
features:
  - icon: 💡
    title: 零代码、拖拽式设计构建，更简单、更快速
    details: 组件拖拽式设计，无需编写前端代码，可轻松完成UI设计、交互事件和远程数据点绑定的设计。
  - icon: ⚡️
    title: 前后端隔离，无缝集成
    details: 内置支持标准Mqtt、Websocket、Http协议，支持各类后端数据。
  - icon: 🛠️
    title: 丰富的组件
    details: 内置基础图形、流程图等丰富的组件库，开箱即用可极大提升开发效率。
---

<script setup>
import SiteMap from '@theme/components/zh/SiteMap.vue'
</script>
<style lang="scss">
  .VPHome {
    padding-bottom: 0 ! important;
  }
  .Navbar__title {
    display: block !important;
  }
</style>
<SiteMap/>