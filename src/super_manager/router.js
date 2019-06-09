import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/super_manager/mian",
      props: true,
      component: () => import("@/super_manager/App.vue"),
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
