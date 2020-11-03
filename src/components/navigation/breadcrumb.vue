<template>
  <div class="breadcrumb-warpper">
    <div class="back-btn">
      <i class="el-icon-arrow-left"></i>
    </div>
    <span>当前位置 :</span>
    <span>{{ activeRouterTitle }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //当前路由名称
      activeRouterTitle: ""
    };
  },
  created() {
    //初始化的时候赋值给当前路由
    this.activeRouterTitle = this.$route.meta.title;
  },
  watch: {
    /**
     * @description 当路由改变的时候重新获取路由
     * @param to 跳转到的路由
     */
    $route(to) {
      this.activeRouterTitle = to.meta.title;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-warpper {
  height: 42px;
  display: flex;
  align-items: center;
  padding-left: 11px;
  flex-shrink: 0;
  .back-btn {
    left: 10px;
    margin-right: 6px;
    cursor: pointer;
    padding: 0px 4px;
    i {
      line-height: 17px;
      width: 17px;
      background-color: #2d8cf0;
      border-radius: 50%;
      height: 17px;
      font-size: 12px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  & > span:nth-of-type(1) {
    margin-right: 5px;
  }
  span {
    font-size: 13px;
    color: #999;
  }
}
</style>
