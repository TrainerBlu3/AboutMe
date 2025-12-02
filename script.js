// Contact Form Validation (only runs if form exists)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Only run form validation if contact form exists
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectSelect = document.getElementById("subject");
    const messageTextarea = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    // Validate email format
    function isValidEmail(email) {
      return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/) !== null;
    }

    // Show error
    function showError(input, message) {
      const errorElement = document.getElementById(input.id + "Error");
      errorElement.textContent = message;
      errorElement.classList.add("show");
      input.classList.add("invalid");
    }

    // Clear error
    function clearError(input) {
      const errorElement = document.getElementById(input.id + "Error");
      errorElement.textContent = "";
      errorElement.classList.remove("show");
      input.classList.remove("invalid");
    }

    // Real-time validation on blur
    nameInput.addEventListener("blur", function () {
      if (this.value.trim().length < 2) {
        showError(this, "Name must be at least 2 characters");
      } else {
        clearError(this);
      }
    });

    emailInput.addEventListener("blur", function () {
      if (!isValidEmail(this.value)) {
        showError(this, "Please enter a valid email");
      } else {
        clearError(this);
      }
    });

    subjectSelect.addEventListener("change", function () {
      if (this.value) {
        clearError(this);
      }
    });

    messageTextarea.addEventListener("blur", function () {
      if (this.value.trim().length < 10) {
        showError(this, "Message must be at least 10 characters");
      } else {
        clearError(this);
      }
    });

    // Form submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate name
      if (nameInput.value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate email
      if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email");
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate subject
      if (!subjectSelect.value) {
        showError(subjectSelect, "Please select a subject");
        isValid = false;
      } else {
        clearError(subjectSelect);
      }

      // Validate message
      if (messageTextarea.value.trim().length < 10) {
        showError(messageTextarea, "Message must be at least 10 characters");
        isValid = false;
      } else {
        clearError(messageTextarea);
      }

      if (!isValid) {
        formMessage.textContent = "Please fix the errors above";
        formMessage.className = "show error";
        return;
      }

      // Success
      formMessage.textContent =
        "Message sent successfully! I'll get back to you soon.";
      formMessage.className = "show success";
      form.reset();

      // Hide message after 3 seconds
      setTimeout(() => {
        formMessage.classList.remove("show");
      }, 3000);
    });
  }

});