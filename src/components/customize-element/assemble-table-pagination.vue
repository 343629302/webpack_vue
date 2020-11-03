<template>
  <div class="assemble-table-pagination-warpper h-100">
    <div class="table">
      <customize-table
        :tableData="tableData"
        :hasSelection="hasSelection"
        :multipleSelect="multipleSelect"
        @handle-selection-change="handleSelectionChange"
        ref="table"
      >
        <slot></slot>
      </customize-table>
    </div>
    <div class="pagination">
      <customize-pagination
        :total="total"
        :position="position"
        @handle-page-change="handlePageChange"
        @handle-size-change="handleSizeChange"
      ></customize-pagination>
    </div>
  </div>
</template>

<script>
import CustomizeTable from "./customize-table.vue";
import CustomizePagination from "./customize-pagination.vue";
export default {
  components: {
    CustomizeTable,
    CustomizePagination
  },
  data() {
    return {
      //每页条数
      size: 10,
      //页码
      page: 1
    };
  },
  props: {
    //表单数据
    tableData: {
      type: Array,
      default: () => []
    },
    //是否含有选择框
    hasSelection: {
      type: Boolean,
      default: false
    },
    //选择框是否多选
    multipleSelect: {
      type: Boolean,
      default: true
    },
    //数据长度
    total: {
      type: Number,
      default: 0
    },
    //分页器位置
    position: {
      type: String,
      default: "right"
    }
  },
  methods: {
    /**
     * @description 处理表单选择改变
     * @param list 已选列表
     */
    handleSelectionChange(list) {
      this.$emit("handle-selection-change", list);
    },
    /**
     * @description 页码数改变
     * @param index 页码数
     */
    handlePageChange(index) {
      this.page = index;
      this.$emit("get-table-list");
    },
    /**
     * @description 每条页面数改变
     * @param size 条数
     */
    handleSizeChange(size) {
      this.size = size;
      this.$emit("get-table-list");
    },
    /**
     * @description 返回信息给上一层
     * @return info 信息
     */
    getPageInfo() {
      return {
        page: this.page,
        size: this.size
      };
    },
    /**
     * @description 清除选择
     */
    clearSelection() {
      this.$refs.table.clearSelection();
    }
  }
};
</script>

<style lang="scss" scoped>
.assemble-table-pagination-warpper {
  display: flex;
  flex-direction: column;
  .table {
    flex: 1;
    height: calc(100% - 50px);
  }
  .pagination {
    margin-top: 15px;
    flex-shrink: 0;
  }
}
</style>
