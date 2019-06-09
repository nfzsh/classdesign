<template>
  <div id="super_mnger">
    <mian />
    <alert />
  </div>
</template>

<script>
import { init } from "@/super_manager/js/super_manager";

export default {
  components: {
    mian: () => import("@/super_manager/view/main"),
    alert: () => import("@/components/AlertDialog")
  },
  data: () => ({
    user: [
      {
        no: null,
        name: null
      }
    ]
  }),
  created() {
    init();
  }
};
</script>
