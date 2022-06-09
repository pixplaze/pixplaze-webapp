<script>
export default {
  name: 'text-box',
}
</script>

<template>
<div class="text-box">
  <slot>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam orci, ornare id neque vel, pretium varius nulla. Morbi nec velit vulputate, porttitor mauris ac, suscipit sem. Sed imperdiet imperdiet ipsum, sit amet sodales ipsum iaculis id. Mauris aliquet velit risus, ut luctus est tincidunt in. Aliquam vitae sapien augue. Nullam et quam massa. Nam justo leo, elementum et dictum a, tempor non ligula. Morbi id felis in nulla mattis sodales. In ac lorem ac erat tincidunt condimentum. Aliquam eget tortor mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac aliquet nisl. Proin consectetur orci pretium, vulputate nibh eu, semper mauris. Nam sed tortor varius mi faucibus accumsan id in tortor. Vivamus mattis turpis id tellus commodo, sit amet vestibulum urna dignissim. Pellentesque vel lorem aliquet, tempor est eget, viverra ligula.
  </slot>
</div>
</template>

<style scoped>
.text-box {
  padding: 20px;
  padding-left: 35px;
  padding-right: 30px;

  border-left: 5px solid var(--color-green-grass);
  background-color: var(--color-gray-silver);
}
</style>