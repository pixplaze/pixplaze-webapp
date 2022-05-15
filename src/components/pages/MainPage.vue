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
    <section class="content buttons">
      <textured-button :variant="'grass'">Трава</textured-button>
      <textured-button :variant="'stone'">Камень</textured-button>
      <textured-button :variant="'flat'">Плоскость</textured-button>
      <mc-button>Минимализм</mc-button>
      <arrow-button :variant="'left'"/>
      <arrow-button :variant="'right'"/>
      <arrow-button :variant="'up'"/>
      <arrow-button :variant="'down'"/>
      <!-- <textured-button :variant="'stone'"></textured-button> -->
    </section>
  <!-- </template> -->
</template>

<style scoped>
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.buttons > .button {
  margin-right: 20px;
}
</style>