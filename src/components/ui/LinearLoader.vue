<script>
export default {
  name: 'linear-loader',
}
</script>

<template>
<div class="linear-loader">
  <div class="row upper"></div>
  <div class="row middle"></div>
  <div class="row lower"></div>
</div>
</template>

<style scoped>
  .linear-loader {
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    height: 5px;
    width: 100%; /* */
  }

  .row {
    position: absolute;
    box-sizing: border-box;
    height: 100%;
  }

  .upper {
    z-index: 2;
    background-color: var(--color-brown-dark);
    animation: anim-upper 1.5s ease infinite;
  }

  .middle {
    z-index: 1;
    background-color: var(--color-green-grass-dark);
    animation: anim-middle 1.5s ease infinite;
  }

  .lower {
    z-index: 0;
    background-color: var(--color-green-grass-transparent);
    animation: anim-lower 1.5s ease infinite;
  }


@keyframes anim-upper {
  0% {
    left: -50%;
    width: 0%;
  }
  50% {
    /* left: 0%; */
    /* width: 100%; */
  }
  100% {
    left: 100%;
    width: 40%;
  }
}

@keyframes anim-middle {
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    /* left: 50%; */
    width: 50%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}

@keyframes anim-lower {
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    left: 0%;
    /* width: 100%; */
  }
  100% {
    left: 100%;
    width: 100%;
  }
}
</style>