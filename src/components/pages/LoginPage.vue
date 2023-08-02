<script>
import CubicInput from '@/components/ui/CubicInput'

export default {
  name: 'login-page',
  components: {
    CubicInput
  },
  data: () => ({

  })
}

</script>

<template>
  <form action="" class="login-form">
    <cubic-input
      :id="'test-input'"
      :name="'test-input'"
      :type="'password'"
    />
  </form>
</template>

<style>
  .login-form {
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .login-form > input {
    width: 300px;
  }
</style>