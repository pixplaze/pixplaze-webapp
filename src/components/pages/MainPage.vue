<script>
import RconConsole from '@/components/RconConsole'
import TriptychSlider from '@/components/TriptychSlider'
import GlassPane from '@/components/GlassPane'
import TextBox from '@/components/TextBox'
import FloatBox from '@/components/FloatBox'

export default {
  name: 'main-page',
  components: {
    RconConsole,
    TriptychSlider,
    GlassPane,
    TextBox,
    FloatBox,
  },
  data: () => ({
    sliderItemWidth: 500,
    sliderCollapsed: false
  }),
  computed: {
    getSliderItemWidth() {
      return this.sliderItemWidth
    }
  },
  methods: {
    resizeSlider() {
      let width = window.innerWidth

      if (width > 1200) {
        this.sliderCollapsed = false
        this.sliderItemWidth = 500
        return
      }

      if (width > 710 && width < 1200) {
        this.sliderCollapsed = false
        this.sliderItemWidth = 300
        return
      }
      
      if (width < 710) {
        this.sliderCollapsed = true
        this.sliderItemWidth = 180
        return
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeSlider)
    this.resizeSlider()
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
      <triptych-slider :itemWidth="sliderItemWidth" :collapsed="sliderCollapsed"/>
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
      <float-box class="glass message"><mc-button>Кнопка 1</mc-button><mc-button>Кнопка 2</mc-button></float-box>
    </section>
    <section class="content">
      <text-box></text-box>
    </section>
    <section class="content" style="display: flex; gap: 10px; flex-wrap: wrap;">
      <glass-pane v-for="i in 20" :key="i">0{{i}}</glass-pane>
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
</style>