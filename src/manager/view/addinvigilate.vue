<template>
  <div>
    <br />添加监考信息：
    <br />
    <label>
      工号：
      <input type="text" v-model="exam.userNum" />
    </label>
    <label>
      课程：
      <input type="text" v-model="exam.name" />
    </label>
    <label>
      考场：
      <input type="text" v-model="exam.classRoom" />
    </label>
    <br />
    <label>
      开始时间：{{ exam.startTime | formatDate }}
      <input type="datetime-local" v-model="exam.startTime" />
    </label>
    <label>
      结束时间：{{ exam.endTime | formatDate }}
      <input type="datetime-local" v-model="exam.endTime" />
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
    exam: {
      name: null,
      classRoom: null,
      userNum: null,
      startTime: null,
      endTime: null
    }
  }),
  methods: {
    addinvigilate() {
      if (this.exam.startTime > this.exam.endTime) {
        alert("结束时间必须大于开始时间");
      } else {
        addinvigilate(this.exam);
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
