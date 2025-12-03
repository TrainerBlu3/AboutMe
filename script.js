document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value.trim();
  let isValid = true;

  if(!isValidName(name)){

  }
 
  if (!isValidEmail(email)) {
    const emailError = document.getElementById('emailError');
    emailError.textContent = "Please enter a valid email";
    emailError.classList.add("show");
    isValid = false;
  }

  // // If all validations pass,
  if (isValid) 
    console.log("Form submitted successfully!");
  //   // Optionally submit the form data to some backend PHP}
});

function isValidName(name){
  
}

function isValidEmail(email) {
  return email.match(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,63}$/) !== null;
}

