import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "styles/element-variable.scss";
import CustomizeDialogWin from "components/customize-element/customize-dialog-win.vue";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component("win", CustomizeDialogWin);
Vue.prototype.$toast = Vue.prototype.$message.error;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
