<template>
  <Page
    :filterConfig="filterConfig"
    :filter="filter"
    @filterChange="handleChange"

    :tabConfig="tabConfig"
    :tab="tab"
    @tabChange="handleTabChange"

    :tableConfig="tableConfig"
    :tableData="tableData"
    :total="total"
    :pagination="pagination"
    @tableChange="hanldeTableChange"
  >

  </Page>
</template>

<script>
import Page from '@/components/Page'
import filterConfig from './filterConfig';
import tabConfig from './tabConfig';
import tableConfig from './tableConfig';

export default {
  name: 'pageTest',
  components: {
    Page,
  },
  data() {
    return {
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
  },
  mounted() {
    setTimeout(() => {
      this.tab = 'tab3'
      this.pagination.currentPage = 2;
    }, 2000)
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
  }
}
</script>

<style>

</style>