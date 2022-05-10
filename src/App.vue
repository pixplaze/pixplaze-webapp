<template>
  <holygrail-template>
    <!-- <rcon-console/>
    <section class="test">
      <textured-button>Трава зелёная</textured-button>
      <textured-button :variant="'stone'">Я каменб</textured-button>
      <mc-button>Суперкек</mc-button>
      <mc-button>Суперкек</mc-button>
    </section>
    <section class="test">
      <menu-button/>
    </section> -->
  </holygrail-template>
</template>

<script>
// import RconConsole from '@/components/RconConsole'
import HolygrailTemplate from '@/components/HolygrailTemplate'

export default {
  name: 'App',
  components: {
    // RconConsole,
    HolygrailTemplate
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
