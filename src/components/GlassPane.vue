<script>
export default {
  name: 'glass-pane',
}
</script>

<template>
<div class="glass-pane">
    <div class="reflection"></div>
    <div class="reflection _1"></div>
    <!-- <div class="reflection _1"></div> -->
    <div class="glass-pane-inner"><slot>00</slot></div>
</div>
</template>

<style scoped>
.glass-pane {
  position: relative;
  display: flex;

  width: 100px;
  height: 100px;

  cursor: pointer;
  user-select: none;
  overflow: hidden;

  background-color: var(--color-green-grass);
  background-image: url('../dev/glass_pane.svg');
  background-size: contain;

  box-shadow: 0 0 20px 1px #00000020;
}

.glass-pane-inner {
  margin: auto;
  width: fit-content;
  height: fit-content;
}

.reflection {
  z-index: 1;
  position: absolute; 
  top: 0;
  bottom: 0;

  width: 200%;
  height: 20%;
  margin: auto;
  margin-left: -50%;

  transition: all .2s ease;
  transform: rotate(-45deg) translateY(-300%);
  
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(254,254,254,0.5) 100%);
}

.reflection._1 {
  height: 10%;
  margin-left: -30%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(254,254,254,0.3) 100%);
}

.glass-pane:hover .reflection {
  /* height: 40%; */
  
  transform: rotate(-45deg) translateY(-100%);
}
</style>