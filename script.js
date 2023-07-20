document
    .getElementById('signin-form')
    .addEventListener('submit', function (event) {
        event.preventDefault()

        const username = document
            .querySelector(".signin-form .username")
            .value;
        const password = document
            .querySelector(".signin-form .password")
            .value;

        let signinData = new URLSearchParams();
        signinData.append("username", username);
        signinData.append("password", password);

        fetch("http://localhost/signuplogin/signup.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: signinData
        }).then((respnse) => respnse.json()).then((data) => {
            console.log("Response from server: ", data);
        }).catch((error) => {
            console.log(error);
        });
    });
