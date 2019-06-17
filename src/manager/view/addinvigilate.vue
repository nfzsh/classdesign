<template>
  <div>
    <br />添加监考信息：
    <br />
    <label>
      工号：
      <input type="text" v-model="invigilate.userNum" />
    </label>
    <label>
      课程：
      <input type="text" v-model="invigilate.name" />
    </label>
    <label>
      考场：
      <input type="text" v-model="invigilate.classRoom" />
    </label>
    <br />
    <label>
      开始时间：{{ invigilate.startTime | formatDate }}
      <input type="datetime-local" v-model="invigilate.startTime" />
    </label>
    <label>
      结束时间：{{ invigilate.endTime | formatDate }}
      <input type="datetime-local" v-model="invigilate.endTime" />
    </label>
    <br />
    <button @click="addinvigilate">添加</button>
  </div>
</template>

<script>
import { addinvigilate } from "@/manager/js/manager";
import { formatDate } from "@/js/date";
export default {
  data: () => ({
    invigilate: {
      name: null,
      classRoom: null,
      userNum: null,
      startTime: null,
      endTime: null
    }
  }),
  methods: {
    addinvigilate() {
      if (this.invigilate.startTime > this.invigilate.endTime) {
        alert("结束时间必须大于开始时间");
      } else {
        addinvigilate(this.invigilate);
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
