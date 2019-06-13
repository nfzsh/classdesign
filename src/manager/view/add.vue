<template>
  <div>
    <label>添加教师</label>
    <br />
    <label>
      员工号：
      <input type="text" v-model="user.no" />
    </label>
    <label>
      姓名：
      <input type="text" v-model="user.name" />
    </label>
    <label>
      密码：
      <input type="password" v-model="user.password" />
    </label>
    <label>
      简介：
      <input type="text" v-model="user.intro" />
    </label>
    <label>
      电话：
      <input type="text" v-model="user.mobile" />
    </label>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { add } from "@/manager/js/manager";
export default {
  data: () => ({
    user: {
      no: null,
      name: null,
      password: null,
      intro: null,
      mobile: null,
      invigilate: null
    }
  }),
  methods: {
    add() {
      add(this.user);
    }
  }
};
</script>
