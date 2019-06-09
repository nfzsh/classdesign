<template>
  <div>
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
    deleted: () => import("@/super_manager/view/deleted")
  },
  created() {
    bus.$on(bus.courses, data => {
      this.courses = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.courses);
  }
};
</script>
