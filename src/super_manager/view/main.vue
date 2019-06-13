<template>
  <div>
    <add />
    <br />
    普通管理员信息管理：
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
      </tr>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  components: {
    add: () => import("@/super_manager/view/add"),
    deleted: () => import("@/super_manager/view/deleted")
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
    ]
  }),
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
