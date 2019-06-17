<template>
  <div>
    <div>
      工号：{{ user.number }}
      <br />
      姓名：{{ user.name }}
      <br />
      专业：{{ user.pro }}
      <br />
      简介：{{ user.intro }}
      <br />
      电话：{{ user.phonenum }}
      <br />
      密码：{{ user.password }}
      <br />
    </div>
    <br />
    <button @click="updata">修改用户信息</button>
    <template v-if="updatashow">
      <updata v-bind:user="user" />
    </template>
    <br />监考信息：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>课程名称</th>
          <th>地点</th>
          <th>监考人数</th>
          <th>开始时间</th>
          <th>结束时间</th>
        </tr>
      </thead>
      <tr v-for="(i, index) in invigilates" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ i.name }}</td>
        <td>{{ i.classRoom }}</td>
        <td>{{ i.userNmu }}</td>
        <td>{{ i.startTime | formatDate }}</td>
        <td>{{ i.endTime | formatDate }}</td>
      </tr>
    </table>
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
      number: null,
      name: null,
      password: null,
      intro: null,
      mobile: null,
      invigilate: null
    },
    invigilates: [
      {
        name: null,
        classRoom: null,
        userNum: null,
        startTime: null,
        endTime: null
      }
    ],
    updatashow: false
  }),
  methods: {
    updata() {
      this.updatashow = !this.updatashow;
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh : mm");
    }
  },
  created() {
    bus.$on(bus.user, data => {
      this.user = data;
    });
    bus.$on(bus.invigilates, data => {
      this.invigilates = data;
    });
    bus.$on(bus.userinvigilates, data => {
      this.userinvigilates = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.user);
    bus.$off(bus.invigilates);
    bus.$off(bus.userinvigilates);
  }
};
</script>
