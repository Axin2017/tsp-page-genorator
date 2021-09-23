<template>
  <SyncPage v-bind.sync="pageConfig">
    <template v-slot:filterOpration>
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleSearch">查询</el-button>
    </template>
    <template v-slot:tabOpration>
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleSearch">查询</el-button>
    </template>
  </SyncPage>
</template>

<script>
import SyncPage from "@/components/SyncPage";
import filterConfig from "./filterConfig";
import createTabConfig from "./tabConfig";
import _ from "lodash";

export default {
  name: "syncPageTest",
  components: {
    SyncPage,
  },
  data() {
    this.initialConfig = {
      filterConfig: filterConfig,
      filter: {
        input: "adfasdddddddddddddf",
        over24: true,
      },
      tabConfig: createTabConfig({ tab1: 0 }),
      tab: "tab2",
      tableConfig: {
        props: {},
        columnsConfig: [
          {
            id: "index",
            label: "序号",
            dataIndex: "index",
            props: {
              type: "index",
            },
          },
          {
            id: "name",
            label: "姓名",
            dataIndex: "name",
          },
          {
            id: "sex",
            label: "性别",
            dataIndex: "sex",
            render: (row) => {
              return row.sex === 1 ? "男" : "女";
            },
          },
          {
            id: "op",
            label: "操作",
            render: function () {
              return <button>1</button>;
            },
          },
        ],
      },
      tableData: [
        { name: "谭新", sex: 1 },
        { name: "蔓芝", sex: 0 },
        { name: "非池", sex: 1 },
      ],
      total: 3,
      pagination: {
        currentPage: 1,
        pageSize: 2,
      },
    };
    return {
      pageConfig: _.cloneDeep(this.initialConfig),
    };
  },
  mounted() {},
  methods: {
    handleSearch() {
      this.pageConfig.pagination.currentPage = 1;
      this.pageConfig.tabConfig = createTabConfig({ tab1: 20 });
      console.log(this.pageConfig);
    },
    handleReset() {
      this.pageConfig.filter = _.cloneDeep(this.initialConfig.filter);
    },
  },
  watch: {
    // pageConfig: {
    //   handler() {
    //     console.log(this.pageConfig);
    //   },
    //   deep: true,
    // },
  },
};
</script>

<style>
</style>