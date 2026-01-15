document.getElementById("appointForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let isValid = true;

  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent + "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (firstName === "") {
    document.getElementById("firstNameError").textContent =
      "First Name can't be empty";
    isValid = false;
  } else if (firstName.length < 3) {
    document.getElementById("firstNameError").textContent =
      "First Name atleast 3 character long";
    isValid = false;
  }
  if (lastName === "") {
    document.getElementById("lastNameError").textContent =
      "Last Name can't be empty";
    isValid = false;
  } else if (lastName.length < 3) {
    document.getElementById("lastNameError").textContent =
      "Last Name atleast 3 character long";
    isValid = false;
  }
  if (email === "") {
    document.getElementById("emailError").textContent = "Email can't be empty";
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").textContent =
      "Please enter valid email";
    isValid = false;
  }
  if (message === "") {
    document.getElementById("messageError").textContent =
      "Message can't be empty";
    isValid = false;
  }
  if (isValid) {
    alert("Your request is submitted. We will get back to you soon!");
    document.getElementById("appointForm").reset();
  }
});
