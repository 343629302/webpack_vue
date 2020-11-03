<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :width="`${dialogWidth}px`"
    class="customize-dialog-win"
    :before-close="hide"
    append-to-body
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    dialogWidth: {
      type: String,
      default: "400"
    }
  },
  data() {
    return {
      //弹窗显示
      dialogVisible: false
    };
  },
  methods: {
    /**
     * @description 弹窗关闭
     */
    hide() {
      this.dialogVisible = false;
      this.$emit("win-hide");
    },
    /**
     * @description 弹窗显示
     */
    show() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.customize-dialog-win {
  ::v-deep .el-dialog {
    border-radius: 10px;
    .el-dialog__header {
      padding: 14px 20px;
      border-bottom: 1px solid #e8e8e8;
      .el-dialog__title {
        font-size: 16px;
      }
    }
    .el-dialog__body {
      padding: 0px;
    }
  }
}
</style>
