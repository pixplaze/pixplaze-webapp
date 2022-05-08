<template>
  <rcon-console/>
  <section class="test">
    <mc-button :variant="'submit'">Суперкек</mc-button>
    <mc-button>Суперкек</mc-button>
    <mc-button>Суперкек</mc-button>
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
  margin: 20px;
  margin-top: 50px;
}
</style>
