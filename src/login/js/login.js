import axios from "@/util/MyAxios";

export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    if (token != null) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      if (sessionStorage.getItem("role") == "SUPER_MANAGER") {
        window.location.href = "./super_manager.html";
      } else if (sessionStorage.getItem("role") == "MANAGER") {
        window.location.href = "./manager.html";
      } else if (sessionStorage.getItem("role") == "TEACHER") {
        sessionStorage.removeItem("no");
        sessionStorage.setItem("no", user.no);
        window.location.href = "./teacher.html";
      } else {
        alert("出现未知的错误！");
      }
    }
  });
}
