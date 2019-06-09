<template>
  <div id="super_mnger">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>no</th>
          <th>name</th>
        </tr>
      </thead>
      <tr v-for="(u, index) in user" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ u.no }}</td>
        <td>{{ u.name }}</td>
        <td>
          <delbutton v-bind:no="u.no" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { init } from "@/super_manager/js/super_manager";

export default {
  components: {
    delbutton: () => import("@/super_manager/view/deleted")
  },
  data: () => ({
    user: [
      {
        no: null,
        name: null
      }
    ]
  }),
  created: () => {
    init();
    bus.$on(bus.user, data => {
      this.user = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.user);
  }
};
</script>
