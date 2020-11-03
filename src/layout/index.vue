<template>
  <div class="layout-warpper">
    <el-scrollbar>
      <el-container>
        <el-header> </el-header>
        <div class="background-box"></div>
        <el-container>
          <el-aside width="181px">
            <left-navigation></left-navigation>
          </el-aside>
          <el-main>
            <div class="main-warpper">
              <breadcrumb></breadcrumb>
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
import LeftNavigation from "components/navigation/left-navigation.vue";
import Breadcrumb from "components/navigation/breadcrumb.vue";
export default {
  components: {
    LeftNavigation,
    Breadcrumb
  }
};
</script>

<style lang="scss" scoped>
.layout-warpper {
  width: 100%;
  height: 100%;
  & > .el-scrollbar {
    width: 100%;
    height: 100%;
    & > ::v-deep .el-scrollbar__wrap {
      overflow: hidden;
      & > .el-scrollbar__view {
        & > .el-container {
          .background-box {
            position: fixed;
            top: 0;
            background-image: linear-gradient(#00befa, #0097f3, #0160ea);
            height: 200px;
            z-index: -1;
            border-radius: 0 0 40px 40px;
            width: 100%;
          }
          .el-header {
            margin-top: 15px;
            margin-bottom: 10px;
          }
          .el-main {
            min-width: 1240px;
            box-sizing: border-box;
            padding: 0px;
            height: calc(100vh - 90px);
            & > .main-warpper {
              background: #f8f8f9;
              height: 100%;
              overflow: hidden;
              margin: 0px 25px;
              border-radius: 10px;
              box-shadow: 0 3px 8px 1px rgba(34, 34, 34, 0.15);
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }
}
</style>
