<script>
import UiInteractive from '@/components/ui/UiInteractive'

export default {
  name: 'cubic-input',
  components: {
    UiInteractive
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false
    }
  },
}
</script>

<template>
  <ui-interactive class="framed">
    <input :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    />
  </ui-interactive>
</template>

<style scoped>
input {
  color: var(--color-main-font);
  border: 2px solid var(--color-green-grass);
  box-shadow: inset 4px 4px 0 0 #DDDDDD;
}

input::placeholder {
  color: #DDDDDD;
}
</style>