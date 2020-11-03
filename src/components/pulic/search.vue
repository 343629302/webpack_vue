<template>
  <div class="search-input-warpper" :style="{ width: `${inputWidth}px` }">
    <el-input
      v-model="myval"
      clearable
      class="input"
      size="small"
      :placeholder="placeholder"
      @keyup.enter.native="search"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="search"
      ></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入搜索关键词"
    },
    inputWidth: {
      type: String,
      default: "185"
    }
  },
  data() {
    return {
      myval: this.value
    };
  },
  watch: {
    value(val) {
      this.myval = val;
    },
    myval(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    search() {
      this.$emit("search", this.myval);
    }
  }
};
</script>

<style scoped lang="scss">
.search-input-warpper {
  .el-input {
    ::v-deep .el-input-group__append {
      padding: 0px;
      width: 38px;
      background-color: #2d8cf0;
      border-color: #2d8cf0;
      .el-button {
        color: #fff;
      }
    }
  }
}
</style>
