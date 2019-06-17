<template>
  <div>
    <button @click="deleted">删除</button>
  </div>
</template>

<script>
import { deleted } from "@/super_manager/js/super_manager";
export default {
  props: ["number"],
  methods: {
    deleted() {
      let con = confirm(`确定删除：${this.number}`);
      if (con == true) {
        deleted(this.number);
      } else {
        alert("已取消！");
      }
    }
  }
};
</script>
