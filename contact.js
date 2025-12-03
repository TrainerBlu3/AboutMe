// Contact Form Event Listener
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');
  const formMessage = document.getElementById("formMessage");

  //Check if fields have valid input

  if (!isValidNameLength(name)) {
    nameError.textContent = "Name must be at least 2 characters";
    nameError.classList.add("show");
    isValid = false;
  } else if (!isValidName(name)) {
    nameError.textContent = "Name must be letters only";
    nameError.classList.add("show");
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (!isValidEmail(email)) {
    emailError.textContent = "Please enter a valid email";
    emailError.classList.add("show");
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if(!subject){
    subjectError.textContent = "Please select a subject";
    subjectError.classList.add("show");
    isValid = false;
  } else {
    subjectError.textContent = "";
  }

  if (!isValidMsg(message)) {
    messageError.textContent = "Message must be at least 10 characters";
    messageError.classList.add("show");
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // If all input fields are valid: show success message and reset form

  if (isValid) {
    formMessage.textContent =
      "Message sent successfully! I'll get back to you soon.";
    formMessage.className = "show success";
    document.getElementById('contactForm').reset();

    setTimeout(() => {
      formMessage.classList.remove("show");
    }, 2500);
  }

});

// Validation functions

function isValidNameLength(name) {
  return name.length > 1;
}

function isValidName(name) {
  return name.match(/^[a-zA-Z\s]+$/) !== null;
}

function isValidEmail(email) {
  return email.match(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,63}$/) !== null;
}

function isValidMsg(msg) {
  return msg.length > 10;
}

