import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function init() {
  axios.get("/admin/main").then(response => {
    setTimeout(() => {
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}

export function add(user) {
  axios.post("/super_manager/add", user).then(response => {
    setTimeout(() => {
      let res = response.data.res;
      if (res == "") {
        alert("添加成功");
      } else {
        alert("数据库错误");
      }
    }, 500);
  });
}

export function deleted(number) {
  axios.post(`/super_manager/deleted/${number}`).then(response => {
    setTimeout(() => {
      alert(response.data.res);
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}

export function updata(user) {
  axios.post("/super_manager/updata", user).then(response => {
    setTimeout(() => {
      let res = response.data.res;
      alert(res);
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}
