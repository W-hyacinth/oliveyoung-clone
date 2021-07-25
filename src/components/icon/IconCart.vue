<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="parseInt(size) + 3" viewBox="0 0 18 17">
    <title>장바구니 아이콘</title>
    <g :fill="color" fill-rule="evenodd" :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.456 3.142S4.366.267 7.048.267c0 0 2.23.062 2.23 2.678M12.227 15.712H1.506c-.68 0-1.237-.53-1.237-1.176l.053-9.998c0-.646.556-1.176 1.236-1.176h10.617c.68 0 1.237.53 1.237 1.176l.052 9.998c0 .647-.556 1.176-1.237 1.176zM4.455 5.206L4.455 3.387M9.278 5.206L9.278 3.387" transform="translate(1 1)"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconCart',
  props: {
    size: {
      type: String,
      default: '15',
      validator: function (value) {
        return !isNaN(parseInt(value)) || parseInt(value) <= 0
      }
    },
    strokeColor: {
      type: String,
      default: '#000'
    },
    color: {
      type: String,
      default: 'none'
    }
  }
}
</script>
