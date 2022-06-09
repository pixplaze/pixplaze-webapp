<script>
export default {
  name: 'float-box',
}
</script>

<template>
<div class="float-box">
  <slot></slot>
</div>
</template>

<style scoped>
.float-box {
  padding: 30px;
  /* padding-top: 50px; */
  box-sizing: border-box;

  color: var(--color-main-foreground);
  border: 2px solid var(--color-green-grass);
  box-shadow: 0 0 20px 20px #00000010;
  background-color: #74B44ABB;
}

.float-box.glass {
  z-index: 2;
  position: absolute;

  width: fit-content;
  height: fit-content;
  max-width: 400px;

  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto; */

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.float-box.message {
  position: fixed;

  bottom: 0;
  left: 0;
  right: 0;

  max-width: none;
  width: auto;
  
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>