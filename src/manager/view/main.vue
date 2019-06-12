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
    添加监考信息：
  </div>
</template>

<script>
import bus from "@/util/Bus";
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
        mobile: null
      }
    ],
    updatashow: false
  }),
  methods: {
    updata() {
      this.updatashow = !this.updatashow;
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
