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

.mc-button::before {
  z-index: -1;
  content: "";
  position: absolute;
  
  transition-property: box-shadow, background-color, height, width, transform, top;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
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