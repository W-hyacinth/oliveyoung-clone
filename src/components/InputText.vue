<template>
  <input type="text" ref="input" :value="value" @input="updateInput">
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    focus: function () {
      this.$refs.input.focus()
    },
    updateInput: function (event) {
      this.$emit('input', event.target.value.trim())
    }
  },
  watch: {
    value: function (val) {
      this.value = val
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
