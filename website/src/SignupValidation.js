function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;

    if (values.forename === "") {
        error.forename = "Forename should not be empty";
    } else {
        error.forename = "";
    }

    if (values.lastname === "") {
        error.lastname = "Lastname should not be empty";
    } else {
        error.lastname = "";
    }

    if (values.username === "") {
        error.username = "Username should not be empty";
    } else {
        error.username = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match the required pattern";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password didn't match the required pattern";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
