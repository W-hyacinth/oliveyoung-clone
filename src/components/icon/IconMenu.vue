<template>
  <svg :width="size" :height="size" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>메뉴 아이콘</title>
    <g :fill="color">
      <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
    </g>
    <g :fill="color">
      <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
    </g>
    <g :fill="color">
      <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20 C512,404.954,503.046,396,492,396z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconMenu',
  props: {
    size: {
      type: String,
      default: '24',
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
