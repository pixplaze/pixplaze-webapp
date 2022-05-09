<script>
export default {
  name: 'grass-button',
}
</script>

<template>
  <button class="grass-button button" type="button">
    <div class="grass-text"><span><slot>Класс, блок</slot></span></div>
    <div class="grass-block"></div>
  </button>
</template>

<style scoped>
.grass-button {
  display: block;
  position: relative;
  z-index: 1;

  width: fit-content;
  height: 60px;
  padding: 0;

  border: none;
  
  transition-property: transform;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}

.grass-button > * {
  padding-left: 30px;
  padding-right: 30px;
}

.grass-block {
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  left: 0;

  background: url('../../dev/grass.png');
  background-repeat: repeat-x;
  background-color: var(--color-brown-dark);

  transition-property: top, bottom;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}

.grass-text {
  display: flex;
  font-family: 'Minecraft';
  color: white;
  height: 60%;

  background-color: var(--color-green-grass-light);

  transition-property: height;
  transition-duration: 0.1s;
  transition-timing-function: ease;
}

.grass-text span {
  margin-top: auto;
  margin-bottom: auto;
  font-family: 'Minecraft';
}

.grass-button:hover .grass-text {
  height: 50%;
}

.grass-button:active .grass-text {
  height: 100%;
}

.grass-button:focus {
  /* box-shadow: 0 0 0 5px var(--color-green-grass-transparent); */
}

.grass-button:active {
  transform: translateY(5px);
}
</style>