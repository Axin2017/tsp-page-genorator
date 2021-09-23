<template>
  <div>
    <Filters
      :filter="filter"
      :filterConfig="filterConfig"
      @filterChange="handleFilterChange"
    />
    <div class="filter-op">
      <slot name="filterOpration"></slot>
    </div>
    <div class="tab-box">
      <Tab :tab="tab" :tabConfig="tabConfig" @tabChange="handleTabChange" />
      <div class="tab-op">
        <slot name="tabOpration"></slot>
      </div>
    </div>

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
import Filters from "../Filters";
import List from "../List";
import Tab from "../Tab";

export default {
  name: "SyncPage",
  props: [
    "filter",
    "filterConfig",
    "tab",
    "tabConfig",
    "tableData",
    "total",
    "tableConfig",
    "pagination",
  ],
  components: {
    Filters,
    List,
    Tab,
  },
  methods: {
    resetPage() {
      this.$emit("update:pagination", {
        ...this.pagination,
        currentPage: 1,
      });
    },
    handleFilterChange(dataKey, value) {
      this.$emit("update:filter", {
        ...this.filter,
        [dataKey]: value,
      });
    },
    handleTabChange(value) {
      this.$emit("update:tab", value);
      this.resetPage()
    },
    handleTableChange(type, payload) {
      switch (type) {
        case "page":
          this.$emit("update:pagination", {
            ...this.pagination,
            currentPage: payload,
          });
          break;
        default:
          break;
      }
    },
  },
  mounted() {},
};
</script>

<style>
.filter-op {
  text-align: right;
}
.tab-box {
  position: relative;
}
.tab-op {
  position: absolute;
  right: 0;
  top: 0;
}
.el-button {
  width: 100px;
}
</style>