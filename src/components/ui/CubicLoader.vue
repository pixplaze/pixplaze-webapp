<script>
export default {
  name: 'cubic-loader'
}
</script>

<template>
  <div class="cubic-loader"></div>
</template>

<style scoped>
.cubic-loader {
  width: 40px;
  height: 40px;
  margin: auto;
  background:
    linear-gradient(var(--color-green-grass-transparent) 0 0),
    linear-gradient(var(--color-green-grass) 0 0),
    linear-gradient(var(--color-green-grass-dark) 0 0),
    /* linear-gradient(var(--color-brown-dark) 0 0); */
    linear-gradient(var(--color-green-grass-light) 0 0);
  box-sizing: border-box;
  background-size: 20px 20px;
  background-repeat:no-repeat;
  animation: rotate 1.5s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes rotate {
  0%   {background-position: 0    0, 100% 0,    100% 100%, 0 100%}
  33%  {background-position: 0    0, 100% 0,    100% 100%, 0 100%;width:60px;height: 60px}
  66%  {background-position: 100% 0, 100% 100%, 0    100%, 0 0   ;width:60px;height: 60px}
  100% {background-position: 100% 0, 100% 100%, 0    100%, 0 0   }
}
</style>