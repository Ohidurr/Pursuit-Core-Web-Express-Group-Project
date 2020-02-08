document.addEventListener("DOMContentLoaded", () =>{
  let loginButton = document.querySelector("#logInBtn");
  let loginForm = document.querySelector("#loginForm");
  loginButton.addEventListener("click", userCheck);
})

const noUser = () => {
  clearP()
  const p = document.querySelector("p");
  p.innerText = "No User With That Information. Click Sign up.";
}

const userCheck = async () => {
  const userName = document.querySelector("#userLoginInput").value;
  const password = document.querySelector("#loginPasswordInput").value;
  const res = await axios.get("http://")
}