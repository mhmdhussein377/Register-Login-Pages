document
    .getElementById("signin-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const base_url = "http://localhost/RegisterLogin/backend";

        const username = document
            .querySelector(".signin-form .username")
            .value;
        const password = document
            .querySelector(".signin-form .password")
            .value;
        const wrongPasswordElement = document.querySelector(".wrong-password")
        const userNotFoundElement = document.querySelector(".user-not-found")

        let signinData = new URLSearchParams();
        signinData.append("username", username);
        signinData.append("password", password);

        fetch(base_url + "/signin.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: signinData
        }).then((respnse) => respnse.json()).then((data) => {
            console.log(data)
            if (data.status === "logged in") {
                localStorage.setItem("username", data.username)
                window.location.href = "/frontend/dashboard.html";
            } else if (data.status === "wrong password") {
                wrongPasswordElement
                    .classList
                    .add("show");
                setTimeout(() => {
                    wrongPasswordElement
                        .classList
                        .remove("show")
                }, 3000)
            } else {
                userNotFoundElement
                    .classList
                    .add("show")
                setTimeout(() => {
                    userNotFoundElement
                        .classList
                        .remove("show");
                }, 3000);
            }
        }).catch((error) => {
            console.log(error);
        });
    });
