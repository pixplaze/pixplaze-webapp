<script>
export default {
  name: 'textured-button',
  props: {
    variant: String
  }
}
</script>

<template>
  <button class="textured-button button" :class="variant? variant : ''" type="button">
    <slot>Класс, блок</slot>
    <div class="textured-wrapper">
      <div class="textured-text"><span><slot>Класс, блок</slot></span></div>
      <div class="textured-block"></div>
    </div>
  </button>
</template>

<style scoped>
.textured-button {
  width: fit-content;

  border: none;
}

.textured-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 100%;

  transition-property: transform;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}

.textured-block {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  left: 0;

  background: url('../../dev/grass_1.png');
  background-repeat: repeat-x;
  background-color: var(--color-brown-dark);
}

.textured-text {
  display: flex;
  color: var(--color-main-foreground);
  height: 100%;

  padding-left: 30px;
  padding-right: 30px;

  background-color: var(--color-green-grass-light);

  transition-property: height, transform;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}

.textured-text span {
  margin-top: auto;
  margin-bottom: auto;
  font-family: 'Minecraft';
}

.textured-button:hover .textured-text {
  height: 70%;
}

.textured-button:active .textured-wrapper {
  transform: translateY(5px);
}

/* STONE STYLE */

.textured-button.stone .textured-block {
  background: url('../../dev/stone.png');
  background-repeat: repeat-x repeat-y;
  background-color: var(--color-gray-stone-light);
}

.textured-button.stone .textured-text {
  background-color: var(--color-gray-stone-light);
}
</style>