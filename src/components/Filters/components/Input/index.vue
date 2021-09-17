<template>
  <el-input
    :value="value"
    @input="handleChange"
    v-bind="elementProps"
  />
</template>

<script>
export default {
  name: 'MSInput',
  props: ['value', 'elementProps'],
  methods: {
    handleChange(v) {
      this.$emit('change', v)
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>