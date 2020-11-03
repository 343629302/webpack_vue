import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { host } from "config/host.js";
const url =
  process.env.NODE_ENV === "development" ? host.development : host.production;

/**
 * @description 登录
 * @param  username 账号
 * @param  password 密码
 */
export async function login(username, password) {
  const res = await axios.post(
    `${url}/login`,
    qs.stringify({
      code: username,
      pwd: password
    })
  );
  const data = res.data;
  if (data.ok) {
    return data;
  } else {
    Vue.prototype.$toast(data.message);
  }
}

/**
 * @description 刷新token
 * @param token 旧的token
 */
export function refreshToken(token) {
  try {
    return axios.get(`${url}/token/refresh/${token}`);
  } catch (err) {
    Vue.prototype.$toast("请重新登录");
  }
}
