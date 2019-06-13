<template>
  <div>
    <add />
    <br />
    教师信息管理：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>no</th>
          <th>name</th>
        </tr>
      </thead>
      <tr v-for="(u, index) in users" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ u.no }}</td>
        <td>{{ u.name }}</td>
        <td>
          <deleted v-bind:no="u.no" />
        </td>
        <td>
          <button @click="updata">修改</button>
        </td>
        <td v-if="updatashow">
          <updata v-bind:user="u" />
        </td>
      </tr>
    </table>

    <br />
    监考信息管理：
    <br />
    添加监考信息：
    <br />
    <input type="datetime-local" v-model="date" />
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { formatDate } from "@/js/date.js";
export default {
  components: {
    add: () => import("@/manager/view/add"),
    deleted: () => import("@/manager/view/deleted"),
    updata: () => import("@/manager/view/updata")
  },
  data: () => ({
    users: [
      {
        no: null,
        name: null,
        password: null,
        intro: null,
        mobile: null,
        invigilate: null
      }
    ],
    updatashow: false,
    date: null
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
    bus.$on(bus.users, data => {
      this.users = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.users);
  }
};
</script>
