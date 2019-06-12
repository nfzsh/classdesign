<template>
  <div id="manager">
    <manager_main />
    <alert />
  </div>
</template>

<script>
import { init } from "@/manager/js/manager";
export default {
  components: {
    manager_main: () => import("@/manager/view/main"),
    alert: () => import("@/components/AlertDialog")
  },
  created() {
    init();
  }
};
</script>
