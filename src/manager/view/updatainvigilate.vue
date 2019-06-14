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
    <label>
      结束时间：{{ invigilate.endTime | formatDate }}
      <input type="datetime-local" v-model="invigilate.endTime" />
    </label>
    <br />
    <button @click="updatainvigilate">提交</button>
  </div>
</template>

<script>
import { updatainvigilate } from "@/manager/js/manager";
export default {
  props: ["invigilate"],
  methods: {
    updatainvigilate() {
      updatainvigilate(this.invigilate);
    }
  }
};
</script>
