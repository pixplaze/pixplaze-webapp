<script>
export default {
  name: 'menu-button',
  data: () => ({
    expanded: false
  }),
  methods: {
    onClick() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<template>
  <button
    class="menu-button button"
    type="button"
    :class="{'expanded': expanded}"
    @click="onClick">
    <div class="row upper"></div>
    <div class="row middle"></div>
    <div class="row lower"></div>
  </button>
</template>

<style scoped>
.menu-button {
  width: 40px;
  height: 35px;

  display: grid;
  grid-template-rows: 5px 5px 5px;
  gap: 5px;

  padding: 5px;
  border: none;
  /* box-shadow: 0 0 0 1px red; */
  background-color: transparent;
}

.row {
  height: 5px;
  background-color: var(--color-semi-dark);

  transition-property: background-color, width, transform;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.row.upper {
    width: 60%;
}

.row.middle {
    width: 80%;
}

.row.lower {
    width: 70%;
}

.menu-button:hover .row {
  width: 100%;
}

.menu-button:hover .row.upper {
  background-color: var(--color-green-grass);
}

.menu-button:hover .row.middle {
  background-color: var(--color-green-grass-light);
}

.menu-button:hover .row.lower {
  background-color: var(--color-brown-dark);
}

.menu-button.expanded .row.upper {
  top: 0;
  width: 100%;
  transform: translateY(10px) rotate(135deg);
}

.menu-button.expanded .row.middle {
  width: 100%;
  transform: rotate(45deg);
}

.menu-button.expanded .row.lower {
  width: 100%;
  transform: translateY(-10px) rotate(135deg);
}
</style>