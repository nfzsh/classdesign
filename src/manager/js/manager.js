import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

export function init() {
  axios.get("/manager/main").then(response => {
    setTimeout(() => {
      bus.$emit(bus.users, response.data.users);
      bus.$emit(bus.invigilates, response.data.invigilates);
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

export function deleted(no) {
  axios.post(`/manager/deleted/${no}`).then(response => {
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

export function deletedinvigilate(ino) {
  axios.post(`/manager/deletedinvigilate/${ino}`).then(response => {
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
