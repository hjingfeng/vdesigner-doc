<script setup lang="ts">
import { VTLink } from '@vue/theme'
</script>

<template>
  <section id="sitemap" class="flex justify-center mt-10">
    <div class="container">
      <div class="flex justify-between">
        <div class="sitemap-col">
          <h4>VDesigner</h4>
          <div>可视化WEB组态工具</div>
        </div>

        <div class="sitemap-col">
          <h4>产品</h4>
          <ul>
            <li>
              <VTLink href="https://2d.vdesigner.work/index">2D/2.5D设计</VTLink>
            </li>
          </ul>
        </div>

        <div class="sitemap-col">
          <h4>文档</h4>
          <ul>
            <li>
              <VTLink href="/zh/guide/index">快速上手</VTLink>
            </li>
            <li>
              <VTLink href="/zh/guide/designer-intro">介绍</VTLink>
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4>微信咨询</h4>
          <img width="100" src="/images/wechat.png" alt="微信" />
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
#sitemap {
  background: var(--vt-c-bg-soft);
}

#sitemap .container {
  padding: 16px 0;
  max-width: 1152px;
}

#sitemap h4 {
  font-weight: 500;
  color: var(--vt-c-text-1);
  margin-bottom: 0.25em;
}

.sitemap-col {
  margin-bottom: 0;
  break-inside: avoid;
}
</style>
