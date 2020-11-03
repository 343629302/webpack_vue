<template>
  <div class="left-navigation-warpper">
    <ul>
      <li
        v-for="(item, index) in routers"
        :key="index"
        @click="routeJump(item)"
        :class="{ active: activeRouter === item.path }"
      >
        <div>
          <span>{{ item.meta.title }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //当前路由
      activeRouter: ""
    };
  },
  created() {
    //初始化的时候赋值给当前路由
    this.activeRouter = this.$route.path;
  },
  computed: {
    /**
     * @description 获取所有的一级路由
     */
    routers() {
      const router = this.$router.options.routes;
      const index = router.findIndex(item => item.path == "/teacher");
      return router[index].children.filter(item => {
        return !item.meta.notListen;
      });
    }
  },
  methods: {
    /**
     * @description 路由跳转
     * @param item 跳转到的路由的值
     */
    routeJump(item) {
      this.$router.push(item.path);
    }
  },
  watch: {
    /**
     * @description 当路由改变的时候重新获取路由
     * @param to 跳转到的路由
     */
    $route(to) {
      if (!to.meta.notListen) {
        this.activeRouter = to.path;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.left-navigation-warpper {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 8px 1px rgba(34, 34, 34, 0.15);
  border-radius: 0 10px 10px 0;
  min-height: 400px;
  height: 100%;
  ul {
    padding-top: 25px;
    li {
      font-size: 12px;
      letter-spacing: 1px;
      color: #7a808c;
      height: 42px;
      line-height: 42px;
      padding-left: 38px;
      padding-right: 20px;
      cursor: pointer;
      &.active {
        background-color: #ecf5ff;
        border-left: 4px solid #2d8cf0;
        color: #2d8cf0;
        padding-left: 34px !important;
        font-weight: 700;
      }
    }
  }
}
</style>
