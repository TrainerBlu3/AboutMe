document.getElementById('contactForm').addEventListener('submit', function () {
  e.preventDefault(); // Prevent form submission


  //   // Clear previous error messages
  //   document.getElementById(“passwordError”).innerHTML = “”;
  // // Get input values
  const email = document.getElementById('email').value.trim();
  let isValid = true;
  // // Validate password
  if (isValidEmail(email)) {

  }else{
    //error msg
    console.log("email error");
    isValid = false;
  }
  //   document.getElementById(“passwordError”).innerHTML = “Password is required.”;
  //   isValid = false;
  // } else if (password.length < 8) {
  //   document.getElementById(“passwordError”).innerHTML = “Password must be at least 8 characters.”;
  //   isValid = false;
  // }
  // // If all validations pass,
  if (isValid) 
    console.log("Form submitted successfully!");
  //   // Optionally submit the form data to some backend PHP}
});

function isValidEmail(email) {
  return email.match(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,63}$/) !== null;
}