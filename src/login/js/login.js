import axios from "@/util/MyAxios";

export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    if (token != null) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      if (sessionStorage.getItem("role") == "ADMIN_ROLE") {
        window.location.href = "./super_manager.html";
      } else if (sessionStorage.getItem("role") == "STUDENT_ROLE") {
        sessionStorage.removeItem("number");
        sessionStorage.setItem("number", user.number);
        window.location.href = "./teacher.html";
      } else {
        alert("出现未知的错误！");
      }
    }
  });
}
