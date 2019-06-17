<template>
  <div id="app">
    <form ref="login">
      账号：
      <input v-model="user.number" />
      <br />密码：
      <input type="password" v-model="user.password" />
      <br />
      <button type="button" @click="login">登录</button>
    </form>
    <alert />
  </div>
</template>

<script>
import { login } from "./js/login";

export default {
  components: {
    alert: () => import("@/components/AlertDialog")
  },
  data: () => ({
    user: {
      number: null,
      password: null
    }
  }),
  methods: {
    login() {
      login(this.user);
      this.$nextTick(() => {
        this.user = {
          number: null,
          password: null
        };
      });
    }
  }
};
</script>
