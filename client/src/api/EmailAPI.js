import axios from "axios";

export function handleSubmit(email) {
    // email.preventDefault();
    axios
        .post("/register", {
            email,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
