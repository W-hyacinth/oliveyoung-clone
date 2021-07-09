<template>
  <div>
    {{ this.$route.params.code === '404' ? 'Not Found' : this.$route.params.code }}
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style>

</style>
