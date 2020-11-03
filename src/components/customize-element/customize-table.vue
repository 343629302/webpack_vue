<template>
  <div class="customize-table-warpper h-100">
    <el-table
      :data="tableData"
      stripe
      ref="table"
      style="width: 100%"
      border
      class="customize-table"
      @selection-change="handleSelectionChange"
      :row-style="rowStyle"
      @row-click="rowClick"
      :header-cell-style="{
        backgroundColor: '#f6f8fb',
        color: '#4c5559',
        borderColor: 'transparent'
      }"
    >
      <el-table-column type="selection" width="55" v-if="hasSelection">
      </el-table-column>
      <slot></slot>
      <div slot="empty">
        <div class="empty">
          <img src="../../assets/images/blank_bg2.png" alt="" />
          <span>暂无数据</span>
        </div>
      </div>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //已选列表
      selectionList: []
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
    }
  },
  methods: {
    /**
     * @description 处理表单选择改变
     * @param list 已选列表
     */
    handleSelectionChange(list) {
      if (!this.multipleSelect) {
        let len = list.length;
        if (len > 1) {
          this.$refs.table.clearSelection();
          this.$refs.table.toggleRowSelection(list[len - 1]);
          return;
        }
      }
      this.selectionList = list;
      this.$emit("handle-selection-change", list);
    },
    /**
     * @description 点击表单行触发，行选择
     * @param item 表单项具体值
     */
    rowClick(item) {
      if (this.hasSelection) {
        this.$refs.table.toggleRowSelection(item);
      }
    },
    /**
     * @description 表单行样式回调
     * @param row 行的具体值
     * @param rowIndex 行的索引值
     * @return 不同行的样式
     */
    rowStyle({ row }) {
      const index = this.selectionList.findIndex(item => item.id === row.id);
      return index != -1 ? { "background-color": "#ecf5ff" } : "";
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
.customize-table-warpper {
  overflow: auto;
  ::v-deep .customize-table {
    font-size: 12px;
    tr {
      &:hover {
        td {
          background-color: #ecf5ff !important;
        }
      }
      &.el-table__row--striped {
        background-color: #fcfcfc;
        td {
          background-color: transparent;
        }
      }
      &.hover-row {
        td {
          background-color: #ecf5ff !important;
        }
      }
      td {
        border-color: transparent;
      }
    }
  }
  ::v-deep .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 70px;
    img {
      width: 201px;
      height: 155px;
    }
    span {
      font-size: 13px;
    }
  }
}
</style>
