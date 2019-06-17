<template>
  <div>
    <add />
    <br />教师信息管理：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>number</th>
          <th>name</th>
          <th>invigilate</th>
        </tr>
      </thead>
      <tr v-for="(u, index) in users" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ u.number }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.invigilate }}</td>
        <td>
          <deleted v-bind:number="u.number" />
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
    <br />监考信息管理：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>number</th>
          <th>course</th>
          <th>place</th>
          <th>startTime</th>
          <th>endTime</th>
        </tr>
      </thead>
      <tr v-for="(i, index) in invigilates" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ i.number }}</td>
        <td>{{ i.course }}</td>
        <td>{{ i.place }}</td>
        <td>{{ i.startTime | formatDate }}</td>
        <td>{{ i.endTime | formatDate }}</td>
        <td>
          <deletedinvigilate v-bind:inumber="i.number" />
        </td>
        <td>
          <button @click="updatainvigilate">修改</button>
        </td>
        <td>
          <button @click="distributeinvigilate">分配</button>
        </td>
        <td v-if="updatainvigilateshow">
          <updatainvigilate v-bind:invigilate="i" />
        </td>
        <td v-if="distributeinvigilateshow">
          <distributeinvigilate v-bind:invigilate="i" v-bind:users="users" />
        </td>
      </tr>
    </table>

    监考分配：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>user-number</th>
          <th>invigilate-number</th>
        </tr>
      </thead>
      <tr v-for="(ui, index) in userinvigilates" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ ui.user.number }}</td>
        <td>{{ ui.invigilate.number }}</td>
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
    updatainvigilate: () => import("@/manager/view/updatainvigilate"),
    distributeinvigilate: () => import("@/manager/view/distributeinvigilate")
  },
  data: () => ({
    users: [
      {
        number: null,
        name: null,
        password: null,
        intro: null,
        mobile: null,
        invigilate: null
      }
    ],
    invigilates: [
      {
        number: null,
        course: null,
        place: null,
        startTime: null,
        endTime: null,
        status: null
      }
    ],
    userinvigilates: [
      {
        user: {
          number: null,
          name: null,
          password: null,
          intro: null,
          mobile: null,
          invigilate: null
        },
        invigilates: {
          number: null,
          course: null,
          place: null,
          startTime: null,
          endTime: null,
          status: null
        }
      }
    ],
    updatashow: false,
    updatainvigilateshow: false,
    distributeinvigilateshow: false
  }),
  methods: {
    updata() {
      this.updatashow = !this.updatashow;
    },
    updatainvigilate() {
      this.updatainvigilateshow = !this.updatainvigilateshow;
    },
    distributeinvigilate() {
      this.distributeinvigilateshow = !this.distributeinvigilateshow;
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
    bus.$on(bus.userinvigilates, data => {
      this.userinvigilates = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.users);
    bus.$off(bus.invigilates);
    bus.$off(bus.userinvigilates);
  }
};
</script>
