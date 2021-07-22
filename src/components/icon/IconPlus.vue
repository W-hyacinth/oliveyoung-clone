<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 16 16">
    <g fill="none" fill-rule="evenodd">
      <title>더하기 아이콘</title>
        <path d="M0 0H16V16H0z"/>
        <path :stroke="color" :stroke-width="stroke" d="M3 8L13 8"/>
        <path :stroke="color" :stroke-width="stroke" d="M3 8L13 8" transform="rotate(90 8 8)"/>
    </g>
</svg>
</template>

<script>
export default {
  name: 'IconPlus',
  props: {
    size: {
      type: String,
      default: '16',
      validator: function (value) {
        return !isNaN(parseInt(value))
      }
    },
    stroke: {
      type: String,
      default: '1.2',
      validator: function (value) {
        return !isNaN(parseInt(value))
      }
    },
    color: {
      type: String,
      default: '#202429'
    }
  }
}
</script>
