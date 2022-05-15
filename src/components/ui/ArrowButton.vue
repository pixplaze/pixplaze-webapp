<script>
export default {
  name: 'arrow-button',
  props: {
    variant: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
<button
  class="arrow-button button"
  :class="variant"
  type="button">
  <div class="wrapper">
    <div class="row upper"></div>
    <div class="row middle"></div>
    <div class="row lower"></div>
  </div>
</button>
</template>

<style scoped>
.arrow-button {
  width: 35px;
  height: 35px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  
  transition: .3s ease;
}

.wrapper {
  position: relative;
  width: 25px;
  height: 25px;
  
}

.row {
  position: absolute;
  height: 5px;
  width: 80%;
  top: 0;
  right: 0;
  margin: 5px;

  background-color: #dfdfdf;

  transition: all .1s ease;
}

/* DIRECTION STYLES */

.arrow-button.left .wrapper {
  transform: rotate(-135deg);
}

.arrow-button.right .wrapper {
  transform: rotate(45deg);
}

.arrow-button.up .wrapper {
  transform: rotate(-45deg);
}

.arrow-button.down .wrapper {
  transform: rotate(135deg);
}

/* ACTIVE STYLES */

.arrow-button.left:active {
  transform: translateX(-10px);
}

.arrow-button.right:active {
  transform: translateX(10px);
}

.arrow-button.up:active {
  transform: translateY(-10px);
}

.arrow-button.down:active {
  transform: translateY(10px);
}
/* 
.arrow-button:focus {
  background-color: var(--color-green-grass-transparent);
}

.arrow-button:focus .row {
  background-color: var(--color-green-grass);
} */

/* STATIC STYLES */

.row.middle {
  transform-origin: right bottom;
}

.row.lower {
  transform: rotate(-90deg) translate(5px, 0px);
  transform-origin: right bottom;
}

/* HOVER STYLES */

.arrow-button:hover .row {
  background-color: var(--color-green-grass);
}

.arrow-button:hover .row.upper,
.arrow-button:hover .row.lower {
  width: 60%;
}

.arrow-button:hover .row.middle {
  transform: rotate(-45deg) translateY(-1px);
}
</style>