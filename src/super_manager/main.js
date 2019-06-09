import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let token = sessionStorage.getItem("token");
if (token == null) {
  window.location.href = "./login.html";
} else {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}
