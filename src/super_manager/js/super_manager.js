import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function init() {
  axios.get("/super_manager/main").then(response => {
    setTimeout(() => {
      bus.$emit(bus.user, response.data.user);
    }, 500);
  });
}

export function deleted(no) {
  axios.post(`/super_manager/deleted/${no}`).then(response => {
    setTimeout(() => {
      bus.$emit(bus.user, response.data.user);
    }, 500);
  });
}
