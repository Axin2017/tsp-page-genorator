<template>
  <div>
    <Filters
      :filter="filter"
      :filterConfig="filterConfig"
      @filterChange="handleFilterChange"
    />
    <Tab
      :tab="tab"
      :tabConfig="tabConfig"
      @tabChange="handleTabChange"
    />
    <List
      :tableData="tableData"
      :total="total"
      :tableConfig="tableConfig"
      :pagination="pagination"
      @tableChange="handleTableChange"
    />
  </div>
</template>

<script>
import Filters from '../Filters'
import List from '../List'
import Tab from '../Tab'

export default {
  name: 'Page',
  props: ['filter', 'filterConfig', 'tab', 'tabConfig', 'tableData', 'total', 'tableConfig', 'pagination'],
  components: {
    Filters,
    List,
    Tab,
  },
  methods: {
    handleFilterChange(dataKey, value) {
      this.$emit('filterChange', dataKey, value)
    },
    handleTabChange(value) {
      this.$emit('tabChange', value)
    },
    handleTableChange(type, ...payload) {
      this.$emit('tableChange', type, payload)
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>