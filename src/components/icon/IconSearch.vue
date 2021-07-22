<template>
<svg :width="size" :height="size" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>검색 아이콘</title>
  <g :fill="color">
    <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587zM202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
  </g>
</svg>
</template>

<script>
export default {
  name: 'IconSearch',
  props: {
    size: {
      type: String,
      default: '28',
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
