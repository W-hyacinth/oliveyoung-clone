<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <title>뒤로가기 아이콘</title>
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0H24V24H0z" transform="translate(-16 -40) translate(0 24) translate(16 16)"/>
      <path :stroke="color" :stroke-width="stroke" d="M12 4L4 12 12 20" transform="translate(-16 -40) translate(0 24) translate(16 16)"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconBack',
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
      default: '1.5',
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
