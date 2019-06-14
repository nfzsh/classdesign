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
          <th>invigilate</th>
        </tr>
      </thead>
      <tr v-for="(u, index) in users" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ u.no }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.invigilate }}</td>
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
    <addinvigilate />
    <br />
    监考信息管理：
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
        <td>
          <deletedinvigilate v-bind:ino="i.no" />
        </td>
        <td>
          <button @click="updatainvigilate">修改</button>
        </td>
        <td v-if="updatainvigilateshow">
          <updatainvigilate v-bind:invigilate="i" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { formatDate } from "@/js/date.js";
export default {
  components: {
    add: () => import("@/manager/view/add"),
    deleted: () => import("@/manager/view/deleted"),
    updata: () => import("@/manager/view/updata"),
    addinvigilate: () => import("@/manager/view/addinvigilate"),
    deletedinvigilate: () => import("@/manager/view/deletedinvigilate"),
    updatainvigilate: () => import("@/manager/view/updatainvigilate")
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
    invigilates: [
      {
        no: null,
        course: null,
        place: null,
        startTime: null,
        endTime: null
      }
    ],
    updatashow: false,
    updatainvigilateshow: false,
    date: null
  }),
  methods: {
    updata() {
      this.updatashow = !this.updatashow;
    },
    updatainvigilate() {
      this.updatainvigilateshow = !this.updatainvigilateshow;
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
    bus.$on(bus.invigilates, data => {
      this.invigilates = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.users);
    bus.$off(bus.invigilates);
  }
};
</script>
