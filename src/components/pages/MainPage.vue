<script>
import RconConsole from "@/components/RconConsole"
import TriptychSlider from "@/components/TriptychSlider"
export default {
  name: 'main-page',
  components: {
    RconConsole,
    TriptychSlider
  },
  updated() {
    console.log('main page updated')
  }
}
</script>

<template>
  <!-- <template #aside>
    fsdf
  </template> -->
  <!-- <template #main> -->
    <section class="content"><cubic-loader v-if="true" :variant="''"/></section>
    <section class="content">
      <triptych-slider/>
    </section>
    <section class="content buttons">
      <textured-button :variant="'grass'">Трава</textured-button>
      <textured-button :variant="'stone'">Камень</textured-button>
      <textured-button :variant="'flat'">Плоскость</textured-button>
      <mc-button>Минимализм</mc-button>
      <!-- <textured-button :variant="'stone'"></textured-button> -->
    </section>
    <section class="content arrows">
      <arrow-button :variant="'left'"/>
      <arrow-button :variant="'right'"/>
      <arrow-button :variant="'up'"/>
      <arrow-button :variant="'down'"/>
    </section>
    <section class="content">
      <rcon-console/>
    </section>
  <!-- </template> -->
</template>

<style scoped>
.buttons, .arrows {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
<style>
img.item {
  width: 500px;
}
@media screen and (max-width: 710px) {
  img.item {
    width: 300px!important;
  }
}
</style>