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
    监考信息：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>no</th>
          <th>course</th>
          <th>place</th>
          <th>startTime</th>
          <th>endTime</th>
        </tr>
      </thead>
      <tr v-for="(i, index) in invigilates" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ i.no }}</td>
        <td>{{ i.course }}</td>
        <td>{{ i.place }}</td>
        <td>{{ i.startTime | formatDate }}</td>
        <td>{{ i.endTime | formatDate }}</td>
        <td>{{ i.status }}</td>
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
      no: null,
      name: null,
      password: null,
      intro: null,
      mobile: null,
      invigilate: null
    },
    invigilates: [
      {
        no: null,
        course: null,
        place: null,
        startTime: null,
        endTime: null,
        status: null
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
