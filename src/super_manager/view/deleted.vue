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
      deleted(this.no);
    }
  }
};
</script>
