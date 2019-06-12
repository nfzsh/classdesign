<template>
  <div>
    员工号：{{ user.no }}
    <br />
    姓名：{{ user.name }}
    <br />
    简介：{{ user.intro }}
    <br />
    电话：{{ user.mobile }}
    <br />
    <button @click="updata">修改用户信息</button>
    <template v-if="updatashow">
      <updata />
    </template>
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  components: {
    updata: () => import("@/teacher/view/updata")
  },
  data: () => ({
    user: {
      no: null,
      name: null,
      password: null,
      intro: null,
      mobile: null
    }
  }),
  created() {
    bus.$on(bus.user, data => {
      this.user = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.user);
  }
};
</script>
