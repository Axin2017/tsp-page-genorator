<template>
  <el-checkbox
    :value="value"
    @change="handleChange"
    v-bind="elementProps"
  />
</template>

<script>
export default {
  name: 'MSCheckBox',
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