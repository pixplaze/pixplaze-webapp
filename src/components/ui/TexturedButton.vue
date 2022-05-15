<script>
export default {
  name: 'textured-button',
  props: {
    variant: {
      type: String,
      default: 'grass'
    }
  }
}
</script>

<template>
  <button class="textured-button button" :class="variant" type="button">
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

  color: transparent;
  transition: .3s ease;
}

.textured-wrapper {
  z-index: 1;
  position: absolute;
  overflow: hidden;

  top: 0;
  left: 0;
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

  background: url('../../assets/img/grass_1.png');
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

.textured-button.grass:active .textured-wrapper,
.textured-button.stone:active .textured-wrapper {
  transform: translateY(15px);
}

/* STONE STYLE */

.textured-button.stone .textured-block {
  background: url('../../assets/img/stone.png');
  background-repeat: repeat-x repeat-y;
  background-color: var(--color-gray-stone-light);
}

.textured-button.stone .textured-text {
  background-color: var(--color-gray-stone-light);
}

/* FLAT STYLE */

.textured-button.flat {
  padding-top: 20px;
  padding-bottom: 20px;
  color: transparent;
  box-shadow: 0 5px 0 0 rgba(161, 161, 161, 51%);
}

.textured-button.flat .textured-text {
  height: 90%;
  background-color: var(--color-green-grass-light);
}

.textured-button.flat .textured-block {
  background: none;
  background-color: var(--color-green-grass);
}

.textured-button.flat:hover {
  box-shadow: 5px 5px 0 0 rgba(161, 161, 161, 51%);
}

.textured-button.flat:active {
  transform: translate(5px, 5px);
  box-shadow: 0 0 0 0 rgba(161, 161, 161, 51%);
}
</style>