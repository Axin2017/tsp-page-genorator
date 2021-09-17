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
  name: 'SyncPage',
  props: ['filter', 'filterConfig', 'tab', 'tabConfig', 'tableData', 'total', 'tableConfig', 'pagination'],
  components: {
    Filters,
    List,
    Tab,
  },
  methods: {
    handleFilterChange(dataKey, value) {
      this.$emit('update:filter', {
        ...this.filter,
        [dataKey]: value,
      })
    },
    handleTabChange(value) {
      this.$emit('update:tab', value)
    },
    handleTableChange(type, payload) {
      switch(type) {
        case 'page':
          this.$emit('update:pagination', {
            ...this.pagination,
            currentPage: payload
          })
          break;
        default:
          break;
      }
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>