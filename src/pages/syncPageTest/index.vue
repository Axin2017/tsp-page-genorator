<template>
  <SyncPage
    v-bind.sync="pageConfig"
  >
  </SyncPage>
</template>

<script>
import SyncPage from '@/components/SyncPage'
import filterConfig from './filterConfig';
import tabConfig from './tabConfig';
import tableConfig from './tableConfig';

export default {
  name: 'syncPageTest',
  components: {
    SyncPage,
  },
  data() {
    return {
      pageConfig: {
        filterConfig: filterConfig,
        filter: {
          input: 'adfasdddddddddddddf',
          over24: true,
        },
        tabConfig: tabConfig,
        tab: 'tab2',
        tableConfig: tableConfig,
        tableData: [
          { name: '谭新', sex: 1},
          { name: '蔓芝', sex: 0},
          { name: '非池', sex: 1},
        ],
        total: 3,
        pagination: {
          currentPage: 1,
          pageSize: 2
        }
      }
    }
  },
  mounted() {
    
  },
  methods: {
    handleChange(dataKey, value) {
      console.log(`${dataKey} = ${value}`)
      this.filter[dataKey] = value;
    },
    handleTabChange(tab) {
      // console.log(tab)
      this.tab = tab;
    },
    hanldeTableChange(type, payload) {
      console.log(type, payload);
    }
  },
  watch: {
    pageConfig: {
      handler() {
        console.log(this.pageConfig);
      },
      deep: true
    }
  }
}
</script>

<style>

</style>