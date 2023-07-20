document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const base_url = "http://localhost/RegisterLogin/backend";

        const username = document
            .querySelector(".signup-form .username")
            .value;
        const email = document
            .querySelector(".signup-form .email")
            .value;
        const password = document
            .querySelector(".signup-form .password")
            .value;
        const confirmPassword = document
            .querySelector(".signup-form .confirm-password")
            .value;
        const wrongCredentialsElement = document.querySelector(".wrong-credentials")

        let signupData = new URLSearchParams();
        signupData.append("username", username);
        signupData.append("email", email);
        signupData.append("password", password);
        signupData.append("confirm_password", confirmPassword);

        fetch(base_url + "/signup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: signupData
        }).then((respnse) => respnse.json()).then((data) => {
            if (data.status === "failed") {
                wrongCredentialsElement
                    .classList
                    .add("show")
                setTimeout(() => {
                    wrongCredentialsElement
                        .classList
                        .remove("show")
                }, 3000)
            } else {
                console.log(data)
                localStorage.setItem("username", data.username)
                window.location.href = "/frontend/dashboard.html"
            }
        }).catch((error) => {
            console.log(error);
        });
    });
