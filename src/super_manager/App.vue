<template>
  <div id="super_mnger">
    <alert />
  </div>
</template>

<script>
import { init } from "@/super_manager/js/super_manager";

export default {
  components: {
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
