import axios from "@/util/MyAxios";

export function login(user) {
  axios.post("/login", user).then(response => {
    let token = response.headers["token"];
    let role = response.headers["role"];
    if (token != null) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      if (sessionStorage.getItem("role") == "6983f953b49c88210cb9") {
        window.location.href = "./manager.html";
      } else if (sessionStorage.getItem("role") == "bb63e5f7e0f2ffae845c") {
        sessionStorage.removeItem("number");
        sessionStorage.setItem("number", user.number);
        window.location.href = "./teacher.html";
      } else {
        alert("出现未知的错误！");
      }
    }
  });
}
