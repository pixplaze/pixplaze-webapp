<script>
import CubicInput from '@/components/ui/CubicInput'
import CubicButton from '@/components/ui/CubicButton'

export default {
  name: 'login-page',
  components: {
    CubicInput,
    CubicButton
  }
}

</script>

<template>
  <form action="" class="login-form">
    <cubic-input
      :id="'test-input'"
      :name="'test-input'"
      :type="'text'"
      :placeholder="'введите текст'"
    />
    <cubic-button>
      Жмакни
    </cubic-button>
  </form>
</template>

<style>
  .login-form {
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .login-form > * {
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>