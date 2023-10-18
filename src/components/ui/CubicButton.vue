<script>
import UiInteractive from '@/components/ui/UiInteractive';

export default {
  name: 'cubic-button',
  components: {
    UiInteractive
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
<ui-interactive class="cubic-button framed" :class="{'disabled': disabled}">
  <button type="button">
    <slot></slot>
  </button>
</ui-interactive>
</template>

<style scoped>
.cubic-button.shadowed {
  box-shadow: 0 4px 0 #DDDDDD;
}

.cubic-button.shadowed:hover {
  box-shadow: 0 0 0 #DDDDDD;
  transition: .25s ease;
}

button {
  cursor: pointer;
  color: var(--color-main-font-light);
  background-color: var(--color-green-grass-light-1);
  border: 2px solid var(--color-green-grass-1);
  box-shadow: inset 0 -4px 0 var(--color-green-grass-dark-1);
}

button:active {
  padding-bottom: 1px;
  background-color: #73B349;
  border-color: #97C667;
  box-shadow: inset 0 0 0 var(--color-green-grass-dark-1);
  transition: .1s ease;
}

button:active + ::after {
  top: -8px;
  left: -8px;
  bottom: -8px;
  right: -8px;
}

.cubic-button.disabled button {
  background-color: white;
  box-shadow: inset 0 -4px 0 black;
}
</style>