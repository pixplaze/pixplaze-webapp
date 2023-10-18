<script>
export default {
  name: 'ui-interactive'
}
</script>

<template>
  <div class="ui-interactive">
    <slot></slot>
  </div>
</template>

<style>
:root {
  --ui-interactive-border-on-hover-width: 2px;
  --ui-interactive-border-on-focus-width: 4px;
  --ui-interactive-border-distance: -4px;
}

.ui-interactive {
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0 0 0 var(--ui-interactive-border-on-focus-width) transparent;
}

.ui-interactive > input,
.ui-interactive > button {
  position: inherit;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;

  height: 40px;
  width: 300px;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  
  font-family: Minecraft, Arial, Helvetica, sans-serif;
  font-size: 16px;
}

/* .ui-interactive:focus-within,
.ui-interactive:focus-within {
  box-shadow: 0 0 0 var(--ui-interactive-border-on-focus-width) var(--color-main-font);
  transition: .25s ease;
} */

.ui-interactive > input {
  line-height: 40px;
}

.ui-interactive > buutton {
  padding-bottom: 4px;
}

.framed {
  position: relative;
}
  
.framed:after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  display: inline-block;
  z-index: 0;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  border: var(--ui-interactive-border-on-hover-width) solid transparent;
}
  
/* .framed:hover:after {
  top: var(--ui-interactive-border-distance);
  left: var(--ui-interactive-border-distance);
  bottom: var(--ui-interactive-border-distance);
  right: var(--ui-interactive-border-distance);

  border: var(--ui-interactive-border-on-hover-width) solid var(--color-main-font);
  -webkit-transition: .1s ease-out;
  -moz-transition: .1s ease-out;
  -o-transition: .1s ease-out;
  transition: .1s ease-out;
} */

.framed:active:after {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  opacity: 0;
}
</style>