function Validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (!values.email) {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!values.password) {
      errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password must contain at least 8 characters, including uppercase, lowercase, and a number";
    }
  
    return errors;
  }
  
  export default Validation;