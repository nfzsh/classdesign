<template>
  <div id="super_manager">
    <super_main />
    <alert />
    <a href="./manager.html">更改考试</a>
  </div>
</template>

<script>
import { init } from "@/super_manager/js/super_manager";
export default {
  components: {
    super_main: () => import("@/super_manager/view/main"),
    alert: () => import("@/components/AlertDialog")
  },
  created() {
    init();
  }
};
</script>
