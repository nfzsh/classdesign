<template>
  <div>
    <add />
    <br />普通管理员信息管理：
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>number</th>
          <th>name</th>
        </tr>
      </thead>
      <tr v-for="(u, index) in users" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ u.number }}</td>
        <td>{{ u.name }}</td>
        <td>
          <deleted v-bind:number="u.number" />
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
        number: null,
        name: null,
        password: null,
        intro: null,
        phonenum: null,
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
