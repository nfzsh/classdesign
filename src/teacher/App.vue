<template>
  <div id="teacher">
    <teacher_main />
    <alert />
  </div>
</template>

<script>
import { init } from "@/teacher/js/teacher";
export default {
  components: {
    teacher_main: () => import("@/teacher/view/main"),
    alert: () => import("@/components/AlertDialog")
  },
  created() {
    let number = sessionStorage.getItem("number");
    init(number);
  }
};
</script>
