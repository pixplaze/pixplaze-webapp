<script>
export default {
  name: 'cubic-loader',
  props: {
    variant: String
  }
}
</script>

<template>
  <div class="cubic-loader outer" :class="variant? variant : 'default'">
      <div class="inner"></div>
  </div>
</template>

<style scoped>
.cubic-loader.outer {
  width: 60px;
  height: 60px;
  display: flex;
  margin: auto;
}

.cubic-loader .inner {
  width: 40px;
  height: 40px;
  margin: auto;

  box-sizing: border-box;

  animation: rotate 1.5s infinite cubic-bezier(0.3,1,0,1);
}

@keyframes rotate {
  0%   {background-position: 0    0, 100% 0,    100% 100%, 0 100%}
  33%  {background-position: 0    0, 100% 0,    100% 100%, 0 100%;width:60px;height: 60px}
  66%  {background-position: 100% 0, 100% 100%, 0    100%, 0 0   ;width:60px;height: 60px}
  100% {background-position: 100% 0, 100% 100%, 0    100%, 0 0   }
}

.cubic-loader.default .inner {
  background:
    linear-gradient(var(--color-green-grass-transparent) 0 0),
    linear-gradient(var(--color-green-grass) 0 0),
    linear-gradient(var(--color-green-grass-dark) 0 0),
    linear-gradient(var(--color-green-grass-light) 0 0);
  background-size: 20px 20px;
  background-repeat: no-repeat;
}

.cubic-loader.emerald .inner {
  background:
    linear-gradient(var(--color-green-emerald-semi-light) 0 0),
    linear-gradient(var(--color-green-emerald-dark) 0 0),
    linear-gradient(var(--color-green-emerald-semi-dark) 0 0),
    linear-gradient(var(--color-green-emerald-light) 0 0);
  background-size: 20px 20px;
  background-repeat: no-repeat;
}
</style>