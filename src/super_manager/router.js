import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/mian",
      props: true,
      component: () => import("@/super_manager/view/main.vue"),
      children: [
        {
          path: "/deleted",
          props: true,
          component: () => import("@/super_manager/view/deleted.vue")
        }
      ]
    }
  ]
});
