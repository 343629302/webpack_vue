<template>
  <div class="customize-pagination-warpper" :style="{ 'text-align': position }">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      background
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //每页条数
      size: 10,
      //页码
      page: 1
    };
  },
  props: {
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
     * @description 每条页面数改变
     * @param size 条数
     */
    handleSizeChange(size) {
      this.size = size;
      this.$emit("handle-size-change", size);
    },
    /**
     * @description 页码数改变
     * @param index 页码数
     */
    handleCurrentChange(index) {
      this.page = index;
      this.$emit("handle-page-change", index);
    }
  }
};
</script>
