<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="닫기 아이콘">
    <path d="M18 6L6 18" :stroke="color" :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" :stroke="color" :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: 'IconClose',
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
      default: '#000'
    }
  }
}
</script>
