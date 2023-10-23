<script>
export default {
  name: 'App',
  components: {
    // HolygrailTemplate
  },
  data: () => ({loaded: false}),
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || 'holygrail-layout'
      
      return layoutName
    }
  }
}
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style>
* {
  font-family: 'Montserrat';
}

section.test {
  display: flex;
  margin: 20px;
  margin-top: 50px;
}
</style>
