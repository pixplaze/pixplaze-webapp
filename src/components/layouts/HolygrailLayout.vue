<script>
import HeaderNav from '@/components/HeaderNav'
import FooterInfo from '@/components/FooterInfo'

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/store/global.js'

export default {
  name: 'holygrail-layout',
  components: {
    HeaderNav,
    FooterInfo
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
    <footer-info/>
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

.page-body.content, .footer-info.content {
  padding-bottom: 50px;
}
.page-body {
  display: flex;
  overflow: hidden;
  height: min-content;
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

<style>
@media screen and (max-width: 710px) {
  .page-body.content, .footer-info.content {
    padding-left: 0;
    padding-right: 0;
  }

  section.content.buttons>button {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0;
  }
  .arrows {
    justify-content: space-between;
  }
}
</style>