import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function init() {
  axios.get("/super_manager/main").then(response => {
    setTimeout(() => {
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}

export function add(user) {
  axios.post("/super_manager/add", user).then(response => {
    setTimeout(() => {
      let res = response.data.res;
      alert(res);
      bus.$emit(bus.users, response.data.users);
      if (res == "管理员已存在！") {
        let con = confirm(`是否更新：${user.number}（工号和密码不能更新）`);
        if (con == true) {
          updata(user);
        } else {
          alert("已取消！");
        }
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
