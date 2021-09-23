<template>
  <el-tabs :value="tab" type="card" @tab-click="handleTabClick" class="tabs-box">
    <el-tab-pane v-for="item in tabConfig" :name="item.label" :tab="item.value" :key="item.value">
      <span slot="label">{{ renderLabel(item) }}</span>
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
    },
    renderLabel(item) {
      if (item.render) {
        return item.render(item)
      }
      return item.label
    }
  },
};
</script>

<style>
.tabs-box {
  margin-top: 20px;
}
</style>