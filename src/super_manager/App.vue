<template>
  <div id="super_manager">
    <super_main />
    <alert />
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
