function validateForm() {
    // Retrieve form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    
    // Set error messages to empty strings
    var nameError = "";
    var emailError = "";
    var phoneError = "";
    var passwordError = "";
    
    // Validate name
    if (name === "") {
      nameError = "Name is required";
    }
    
    // Validate email
    if (email === "") {
      emailError = "Email is required";
    } else if (!isValidEmail(email)) {
      emailError = "Invalid email format";
    }
    
    // Validate phone
    if (phone === "") {
      phoneError = "Phone is required";
    } else if (!isValidPhone(phone)) {
      phoneError = "Invalid phone format";
    }
    
    // Validate password
    if (password === "") {
      passwordError = "Password is required";
    } else if (!isValidPassword(password)) {
      passwordError = "Password must be at least 8 characters long";
    }
    
    // Display error messages
    document.getElementById("name-error").innerHTML = nameError;
    document.getElementById("email-error").innerHTML = emailError;
    document.getElementById("phone-error").innerHTML = phoneError;
    document.getElementById("password-error").innerHTML = passwordError;
    
    // Return false if there are errors
    if (nameError || emailError || phoneError || passwordError) {
      return false;
    }
    
    return true;
  }
  
  // Validate email format
  function isValidEmail(email) {
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
  }
  
  // Validate phone format
  function isValidPhone(phone) {
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }
  
  // Validate password length
  function isValidPassword(password) {
    return password.length >= 8;
  }
  