<template>
  <div>
    <label>
      姓名：
      <input type="text" v-model="user.name" />
    </label>
    <label>
      简介：
      <input type="text" v-model="user.intro" />
    </label>
    <label>
      电话：
      <input type="text" v-model="user.mobile" />
    </label>
    <button @click="updata">修改</button>
  </div>
</template>

<script>
import { updata } from "@/manager/js/manager";
export default {
  props: ["user"],
  methods: {
    updata() {
      updata(this.user);
      this.$nextTick(() => {
        this.user = {
          no: null,
          name: null,
          password: null,
          intro: null,
          mobile: null
        };
      });
    }
  }
};
</script>
