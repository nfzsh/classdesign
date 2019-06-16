<template>
  <div>
    <label>
      场次：
      <input type="text" v-model="invigilate.no" />
    </label>
    <label>
      课程：
      <input type="text" v-model="invigilate.course" />
    </label>
    <label>
      考场：
      <input type="text" v-model="invigilate.place" />
    </label>
    <br />
    <label>
      开始时间：{{ invigilate.startTime | formatDate }}
      <input type="datetime-local" v-model="invigilate.startTime" />
    </label>
    <br />
    <button @click="updatainvigilate">提交</button>
  </div>
</template>

<script>
import { updatainvigilate } from "@/manager/js/manager";
import { formatDate } from "@/js/date";
export default {
  props: ["invigilate"],
  methods: {
    updatainvigilate() {
      if (this.invigilate.startTime > this.invigilate.endTime) {
        alert("结束时间必须大于开始时间");
      } else {
        updatainvigilate(this.invigilate);
      }
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh : mm");
    }
  }
};
</script>
