<script>
import HeaderNav from '@/components/HeaderNav'

export default {
  name: 'holygrail-template',
  components: {
    HeaderNav
  }
}
</script>

<template>
<div class="page-wrapper">
  <header>
    <header-nav/>
  </header>
  <div class="page-body content">
    <aside>
      
    </aside>
    <main>
              
    </main>
  </div>
  <footer>
    <!-- <div class="footer-info"></div> -->
  </footer>
</div>
</template>

<style>
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

header {
  content: "";
}

footer {
  height: 300px;
  content: "";
  background: url(../dev/assets/background.png);
}

.footer-info {
  border-top: 2px solid var(--color-gray-steel);
}

.page-body {
  display: flex;
}

aside {
  min-width: 500px;
  background-color: var(--color-gray-silver);
}

main {
  width: 100%;
  background-color: var(--color-main-foreground);
}
</style>