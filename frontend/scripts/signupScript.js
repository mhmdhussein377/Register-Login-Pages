document
    .getElementById("signup-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const base_rul = "http://localhost/RegisterLogin/backend";

        const username = document
            .querySelector(".signup-form .username")
            .value;
        const email = document
            .querySelector(".signup-form .email")
            .value;
        const password = document
            .querySelector(".signup-form .password")
            .value;
        const confirmPassword = document.querySelector(".signup-form .confirm-password").value;

        let signupData = new URLSearchParams();
        signupData.append("username", username);
        signupData.append("email", email);
        signupData.append("password", password);
        signupData.append("confirm_password", confirmPassword);


        fetch(base_rul + "/signup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: signupData
        }).then((respnse) => respnse.json()).then((data) => {
            console.log("Response from server: ", data);
        }).catch((error) => {
            console.log(error);
        });
    });
