<template>
  <div>
    <select v-model="unumber">
      <option v-for="(u, index) in users" :key="index">{{ u.number }}</option>
    </select>
    <button @click="distributeinvigilate">提交</button>
    <button @click="redistribute">重新分配</button>
  </div>
</template>

<script>
import { distributeinvigilate } from "@/manager/js/manager";
import { redistribute } from "@/manager/js/manager";
export default {
  props: ["exam", "users"],
  data: () => ({
    unumber: null
  }),
  methods: {
    distributeinvigilate() {
      distributeinvigilate(this.unumber, this.exam);
    },
    redistribute() {
      let con = confirm(`是否重新分配:${this.exam.no}？`);
      if (con == true) {
        redistribute(this.exam);
      } else {
        alert("已取消！");
      }
    }
  }
};
</script>
