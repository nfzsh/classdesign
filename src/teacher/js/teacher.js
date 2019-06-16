import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function init(no) {
  axios.get(`/teacher/main/${no}`).then(response => {
    setTimeout(() => {
      alert(response.data.res);
      bus.$emit(bus.user, response.data.user);
      bus.$emit(bus.invigilates, response.data.invigilates);
    }, 500);
  });
}

export function updata(user) {
  axios.post("/teacher/updata", user).then(response => {
    setTimeout(() => {
      let res = response.data.res;
      alert(res);
      bus.$emit(bus.user, response.data.user);
    }, 500);
  });
}
