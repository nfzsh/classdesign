import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

let token = sessionStorage.getItem("token");
if (token == null) {
  window.location.href = "./login.html";
} else {
  new Vue({
    render: h => h(App)
  }).$mount("#teacher");
}
