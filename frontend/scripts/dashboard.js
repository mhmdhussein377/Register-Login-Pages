const username = document.querySelector(".dashboard h1")

username.innerHTML = localStorage.getItem("username")