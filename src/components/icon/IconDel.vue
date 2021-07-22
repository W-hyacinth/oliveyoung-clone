<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>삭제 아이콘</title>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" :fill="color"/>
    <path d="M15 9L9 15" :stroke="strokeColor" :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 9L15 15" :stroke="strokeColor" :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: 'IconDel',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function (value) {
        return !isNaN(parseInt(value)) || parseInt(value) <= 0
      }
    },
    stroke: {
      type: String,
      default: '2',
      validator: function (value) {
        return !isNaN(parseInt(value)) || parseInt(value) <= 0
      }
    },
    color: {
      type: String,
      default: '#8C9196'
    },
    strokeColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style>

</style>
