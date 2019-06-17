<template>
  <div>
    <label>添加教师</label>
    <br />
    <label>
      员工号：
      <input type="text" v-model="user.number" />
    </label>
    <label>
      姓名：
      <input type="text" v-model="user.name" />
    </label>
    <label>
      密码：
      <input type="password" v-model="user.password" />
      <label>
        专业：
        <input type="text" v-model="user.pro" />
      </label>
    </label>
    <label>
      简介：
      <input type="text" v-model="user.intro" />
    </label>
    <label>
      电话：
      <input type="text" v-model="user.phonenum" />
    </label>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { add } from "@/manager/js/manager";
export default {
  data: () => ({
    user: {
      number: null,
      name: null,
      password: null,
      intro: null,
      phonenum: null,
      exam: null
    }
  }),
  methods: {
    add() {
      add(this.user);
    }
  }
};
</script>
