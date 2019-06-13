<template>
  <div>
    <div>
      员工号：{{ user.no }}
      <br />
      姓名：{{ user.name }}
      <br />
      简介：{{ user.intro }}
      <br />
      电话：{{ user.mobile }}
      <br />
    </div>
    <br />
    <button @click="updata">修改用户信息</button>
    <template v-if="updatashow">
      <updata v-bind:user="user" />
    </template>
    <br />
    <div>
      {{ formatDate(date) }}
    </div>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { formatDate } from "@/js/date.js";
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
      mobile: null,
      invigilate: null
    },
    updatashow: false,
    date: 231644131688
  }),
  methods: {
    updata() {
      this.updatashow = !this.updatashow;
    },
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  // filters: {
  //   formatDate(time) {
  //     var date = new Date(time);
  //     return formatDate(date, "yyyy-MM-dd hh : mm");
  //   }
  // },
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
