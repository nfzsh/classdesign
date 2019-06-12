<template>
  <div>
    <button @click="deleted">删除</button>
  </div>
</template>

<script>
import { deleted } from "@/super_manager/js/super_manager";
export default {
  props: ["no"],
  methods: {
    deleted() {
      let con = confirm(`确定删除：${this.no}`);
      if (con == true) {
        deleted(this.no);
      } else {
        alert("已取消！");
      }
    }
  }
};
</script>
