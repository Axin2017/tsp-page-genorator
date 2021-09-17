<template>
  <el-tabs :value="tab" type="card" @tab-click="handleTabClick">
    <el-tab-pane v-for="item in tabConfig" :name="item.label" :tab="item.value" :key="item.value">
      <span slot="label">{{ item.label }}</span>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "Tab",
  props: ["tab", "tabConfig"],
  methods: {
    handleTabClick(tab) {
      this.$emit('tabChange', tab.name)
    }
  },
};
</script>

<style>
</style>