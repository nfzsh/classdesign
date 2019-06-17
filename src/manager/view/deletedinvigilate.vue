<template>
  <div>
    <button @click="deletedinvigilate">删除</button>
  </div>
</template>

<script>
import { deletedinvigilate } from "@/manager/js/manager";
export default {
  props: ["inumber"],
  methods: {
    deletedinvigilate() {
      let con = confirm(`确定删除：${this.inumber}`);
      if (con == true) {
        deletedinvigilate(this.inumber);
      } else {
        alert("已取消！");
      }
    }
  }
};
</script>
