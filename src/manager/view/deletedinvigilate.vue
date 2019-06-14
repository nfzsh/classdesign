<template>
  <div>
    <button @click="deletedinvigilate">删除</button>
  </div>
</template>

<script>
import { deletedinvigilate } from "@/manager/js/manager";
export default {
  props: ["ino"],
  methods: {
    deletedinvigilate() {
      let con = confirm(`确定删除：${this.ino}`);
      if (con == true) {
        deletedinvigilate(this.ino);
      } else {
        alert("已取消！");
      }
    }
  }
};
</script>
