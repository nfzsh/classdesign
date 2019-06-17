import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function init() {
  axios.get("/manager/main").then(response => {
    setTimeout(() => {
      bus.$emit(bus.users, response.data.users);
      bus.$emit(bus.invigilates, response.data.invigilates);
      bus.$emit(bus.userinvigilates, response.data.userinvigilates);
    }, 500);
  });
}

export function add(user) {
  axios.post("/manager/add", user).then(response => {
    setTimeout(() => {
      alert(response.data.res);
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}

export function deleted(number) {
  axios.post(`/manager/deleted/${number}`).then(response => {
    setTimeout(() => {
      alert(response.data.res);
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}

export function updata(user) {
  axios.post("/manager/updata", user).then(response => {
    setTimeout(() => {
      let res = response.data.res;
      alert(res);
      bus.$emit(bus.users, response.data.users);
    }, 500);
  });
}

export function addinvigilate(invigilate) {
  axios.post("/manager/addinvigilate", invigilate).then(response => {
    setTimeout(() => {
      alert(response.data.res);
      bus.$emit(bus.invigilates, response.data.invigilates);
    }, 500);
  });
}

export function deletedinvigilate(inumber) {
  axios.post(`/manager/deletedinvigilate/${inumber}`).then(response => {
    setTimeout(() => {
      alert(response.data.res);
      bus.$emit(bus.invigilates, response.data.invigilates);
    }, 500);
  });
}

export function updatainvigilate(invigilate) {
  axios.post("/manager/updatainvigilate", invigilate).then(response => {
    setTimeout(() => {
      let res = response.data.res;
      alert(res);
      bus.$emit(bus.invigilates, response.data.invigilates);
    }, 500);
  });
}

export function distributeinvigilate(unumber, invigilate) {
  axios
    .post(`/manager/distributeinvigilate/${unumber}`, invigilate)
    .then(response => {
      let con = confirm(`${response.data.res}是否继续？`);
      if (con == true) {
        isdistributeinvigilate(unumber, invigilate);
      } else {
        alert("已取消！");
      }
    });
}

export function isdistributeinvigilate(unumber, invigilate) {
  axios
    .post(`/manager/isdistributeinvigilate/${unumber}`, invigilate)
    .then(response => {
      bus.$emit(bus.users, response.data.users);
      alert(response.data.res);
    });
}

export function redistribute(invigilate) {
  axios.post("/manager/redistribute", invigilate).then(response => {
    alert(response.data.res);
    bus.$emit(bus.invigilates, response.data.invigilates);
    bus.$emit(bus.userinvigilates, response.data.userinvigilates);
  });
}
