<script>
export default {
  name: 'cubic-input',
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
    }
  }
}
</script>

<template>
  <input :id="id" :name="name" :type="type">
</template>

<style scoped>
input {
  height: 35px;
  /* box-shadow: inset; */
}
</style>