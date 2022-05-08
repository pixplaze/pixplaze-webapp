<script>
export default {
    name: 'mc-button',
    props: {
      variant: String
    }
}
</script>

<template>
  <button
    class="mc-button button"
    :class="variant ? variant : 'regular'"
    type="button">
    <slot>Кнопка</slot>
  </button>
</template>

<style scoped>
.button {
  position: relative;
  z-index: 1;

  outline: none;
  user-select: none;
  cursor: pointer;

  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;

  font-family: 'Minecraft';
  background-color: transparent;

  transition-property: box-shadow, border, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.mc-button::before {
  z-index: -1;
  content: "";
  position: absolute;
  
  transition-property: box-shadow, background-color, height, width;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

/* MINECRAFT SUBMIT */

.mc-button.submit {
  color: var(--color-main-foreground);
  background-color: var(--color-green-grass);
  border: 2px solid var(--color-green-grass);

  /* transition: border .2s ease */
}

.mc-button.submit::before {
  height: 10%;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-green-grass-dark);
}

.mc-button.submit:hover {
  /* border: 2px solid var(--color-green-grass-dark); */
}

.mc-button.submit:active {
  /* border: 2px solid var(--color-green-grass); */
}

.mc-button.submit:hover::before {
  height: 20%;
}

.mc-button.submit:focus {
  box-shadow: 0 0 0 5px var(--color-green-grass-transparent);
}

.mc-button.submit:active::before {
  height: 0%;
}

/* MINECRAFT REGULAR */

.mc-button.regular {
  color: var(--color-green-grass);
  border: 2px solid var(--color-green-grass)
}

.mc-button.regular:focus {
  box-shadow: 0 0 0 5px var(--color-green-grass-transparent);
}

.mc-button.regular:hover {
  color: var(--color-main-foreground);
  background-color: var(--color-green-grass-transparent);
}

.mc-button.regular::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 0%;
  background-color: var(--color-green-grass);
}

.mc-button.regular:hover::before {
  height: 100%;
}
</style>