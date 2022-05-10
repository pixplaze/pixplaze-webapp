<template>
  <rcon-console/>
  <section class="test">
    <textured-button>Трава зелёная</textured-button>
    <textured-button :variant="'stone'">Я каменб</textured-button>
    <mc-button>Суперкек</mc-button>
    <mc-button>Суперкек</mc-button>
  </section>
  <section class="test">
    <menu-button/>
  </section>
</template>

<script>
import RconConsole from '@/components/RconConsole'

export default {
  name: 'App',
  components: {
    RconConsole
  }
}
</script>

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
