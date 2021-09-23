<template>
  <el-row>
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      border
      :header-cell-style="{ background: '#E5E5E8' }"
      style="width: 100%"
      @sort-change="handleSorterChange"
      @filter-change="handleFilterChange"
      v-bind="tableConfig.props || {}"
    >
      <el-table-column
        v-for="column in tableConfig.columnsConfig"
        :key="column.id"
        :label="column.label"
        :prop="column.dataIndex"
        align="center"
        v-bind="column.props || {}"
      >
        <template v-slot="scope" v-if="column.render">
          <TableCell :render="column.render" :row="scope.row" />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination-box"
      @current-change="handlePageChange"
      :current-page="pagination.currentPage"
      :page-size="pagination.pageSize"
      @size-change="handlePageSizeChange"
      layout="total,prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </el-row>
</template>

<script>
import TableCell from './TableCell';
export default {
  name: "List",
  components: { TableCell },
  props: ["tableData", "total", "tableConfig", "pagination"],
  mounted() {
  },
  methods: {
    handleSorterChange(column, prop, order) {
      this.$emit("tableChange", "sorter", column, prop, order);
    },
    handleFilterChange(filters) {
      this.$emit("tableChange", "filter", filters);
    },
    handlePageChange(page) {
      this.$emit("tableChange", "page", page);
    },
    handlePageSizeChange(size) {
      this.$emit("tableChange", "size", size);
    },
  },
};
</script>

<style>
.pagination-box {
  position: sticky;
  bottom: 0;
  margin-right: 80px;
  height: 45px;
  padding: 10px 0 0;
  line-height: 45px;
  text-align: right;
  background: #fff;
}
</style>