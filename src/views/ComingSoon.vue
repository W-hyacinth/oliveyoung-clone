<template>
  <div></div>
</template>

<script>
export default {
  name: 'ComingSoon',
  created () {
    alert('현재는 홈과 검색 페이지만 오픈되어 있어요.\n')
    this.$router.go(-1)
  }
}
</script>

<style lang="scss" scoped>

</style>
