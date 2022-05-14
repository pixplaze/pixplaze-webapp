<script>
import HeaderNav from '@/components/HeaderNav'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/store/global.js'

export default {
  name: 'holygrail-layout',
  components: {
    HeaderNav
  },
  setup() {
    const global = useGlobalStore()

    const {
      loading,
      asideExpanded
    } = storeToRefs(global)

    return {
      loading,
      asideExpanded
    }
  }
}
</script>

<template>
<div class="page-wrapper">
  <header>
    <header-nav v-model:asideExpanded="asideExpanded"/>
    <linear-loader v-if="loading"/>
  </header>
  <div class="page-body content">
    <aside :class="{'expanded': asideExpanded}">
      <!-- <slot name="aside"></slot> -->
    </aside>
    <main>
      <!-- <slot name="main"></slot> -->
      <slot></slot>
    </main>
  </div>
  <footer>
    <!-- <div class="footer-info"></div> -->
  </footer>
</div>
</template>

<style>
/** */

/** */
html, body, #app, .page-wrapper {
  height: 100%;
  background-color: var(--color-gray-silver);
}

.page-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.content {
  padding-left: 30px;
  padding-right: 30px;
}

section.content {
  margin-top: 50px;
}

header {
  content: "";
}

footer {
  height: 300px;
  content: "";
  background: url(../../assets/img/background.png);
}

.footer-info {
  border-top: 2px solid var(--color-gray-steel);
}

.page-body {
  display: flex;
}

aside {
  min-width: 0;
  background-color: var(--color-gray-silver);
  transition: min-width .5s ease;
}

aside.expanded {
  min-width: 375px;
}


main {
  width: 100%;
  background-color: var(--color-main-foreground);
}
</style>