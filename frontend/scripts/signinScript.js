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
            if(data.status === "logged in") {
                console.log("logged in")
            }
            // window.location.href = "dashboard.html"
        }).catch((error) => {
            console.log(error);
        });
    });
