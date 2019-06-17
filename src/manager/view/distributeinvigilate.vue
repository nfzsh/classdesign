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
  props: ["invigilate", "users"],
  data: () => ({
    unumber: null
  }),
  methods: {
    distributeinvigilate() {
      distributeinvigilate(this.unumber, this.invigilate);
    },
    redistribute() {
      let con = confirm(`是否重新分配:${this.invigilate.no}？`);
      if (con == true) {
        redistribute(this.invigilate);
      } else {
        alert("已取消！");
      }
    }
  }
};
</script>
