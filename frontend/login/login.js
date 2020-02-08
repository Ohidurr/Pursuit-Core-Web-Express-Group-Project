document.addEventListener("DOMContentLoaded", () =>{
  let loginButton = document.querySelector("#logInBtn");
  let loginForm = document.querySelector("#loginForm");
  loginButton.addEventListener("submit", userCheck);
})

const noUser = () => {
  clearP()
  const p = document.querySelector("p");
  p.innerText = "No User With That Information. Click Sign up.";
}

const userCheck = async () => {
  const userName = document.querySelector("#userLoginInput").value;
  const password = document.querySelector("#loginPasswordInput").value;
  const res = await axios.get("http://localhost:3000/users/")
  let users = res.data.body
  for (let user of users) {
    if (username === user.username) {
        if (password === user.password) {
            return userFound()
        }
    }
}
return noUser()
}

const userFound = async () => {
  window.location.href = "../singleUserProfile/singleUserProfile.html"
}