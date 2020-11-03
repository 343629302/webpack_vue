import axios from "axios";
import Vue from "vue";
import store from "@/store";
import { refreshToken } from "api/login.js";
import { host } from "config/host.js";

const self = Vue.prototype;

// axios 默认不发送cookie，需要全局设置true发送cookie
axios.defaults.withCredentials = true;
// 创建axios实例
const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? host.development : host.production,
  timeout: 10000 // 请求超时时间
});

/*刷新token的过期时间判断*/
function isRefreshTokenExpired() {
  let last = parseInt(sessionStorage.getItem("lastTokenTime")); // 这是在登陆时候或者刷新token时候保存的时间戳
  let now = new Date().getTime();
  let stamp = now - last;
  let minutes = parseInt(stamp / (1000 * 60));
  return minutes >= 28 ? true : false;
}

// 请求前拦截
request.interceptors.request.use(
  config => {
    if (window.sessionStorage.getItem("token")) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${sessionStorage.getItem(
        "token"
      )}`;
    }
    const token = sessionStorage.getItem("token");
    /*判断token是否将要过期*/
    if (isRefreshTokenExpired() && token) {
      /*判断是否正在刷新*/
      const state = store.state;
      if (state && !state.isRefreshing) {
        store.commit("setTokenRefreshing", true);
        refreshToken(token)
          .then(() => {
            let time = new Date().getTime();
            sessionStorage.setItem("lastTokenTime", time);
            store.commit("setTokenRefreshing", false);
          })
          .catch(() => {
            self.$toast("网络异常，请重新登录");
          });
      }
    }
    //检查权限
    // if (config.permission && !permission.checkPermission(config.permission)) {
    //   return Promise.reject({
    //     response: {
    //       status: 403
    //     },
    //     config: config
    //   });
    // }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 请求后拦截
request.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.message && response.config.silent !== true) {
      self.$toast(res.message);
    }
    return response;
  },
  error => {
    if (error.response && error.response.status) {
      const status = error.response.status;
      if (status === 500) {
        self.$toast("服务器错误!");
      } else if (status === 403) {
        self.$toast("你没有权限进行此操作!");
      } else if (status === 401) {
        self.$toast("用户长时间没有操作，请重新登录！");
      } else {
        if (status != 406) {
          self.$toast("网络错误!");
        }
      }
    }
    return Promise.reject(error);
  }
);

export default request;
