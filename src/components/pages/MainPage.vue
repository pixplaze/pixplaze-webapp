<script>
export default {
  name: 'main-page'
}
</script>

<template>
  <!-- <template #aside>
    fsdf
  </template> -->
  <!-- <template #main> -->
    <section class="content"><cubic-loader v-if="true" :variant="''"/></section>
    <section class="content">
      <textured-button
        style="padding-top: 20px; padding-bottom: 20px"
        :variant="'grass'">
          Купить
      </textured-button>
      <!-- <textured-button :variant="'stone'"></textured-button> -->
    </section>
  <!-- </template> -->
</template>

<style scoped></style>