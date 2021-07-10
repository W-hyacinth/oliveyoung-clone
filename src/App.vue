<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'reset-css'
import './assets/scss/common.scss'
import './CommonMixin'
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
