<script>
export default {
  name: 'header-nav',
}
</script>

<template>
<div class="header-nav content">
  <div class="nav-wrapper"><menu-button/></div>
</div>
</template>

<style scoped>
.header-nav {
  position: relative;
  display: flex;
  z-index: 1;
  height: 60px;

  border-bottom: 1px solid var(--color-green-grass);
  box-shadow: 0 5px 0 0 var(--color-green-grass-transparent);
  background-color: var(--color-main-foreground);
}

.nav-wrapper {
  margin-top: auto;
  margin-bottom: auto;
}
</style>