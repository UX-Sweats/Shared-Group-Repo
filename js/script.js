//JS Code for the Signin page

document.addEventListener("DOMContentLoaded", function () {
  // Wait until the page is fully loaded

  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    // Stop the form from submitting normally
    event.preventDefault();

    // Get the user's input and remove extra spaces
    const userInput = document.getElementById("userInput").value.trim();

    // Check if the input is empty
    if (userInput === "") {
      alert("Please enter your email or phone number.");
    } else {
      console.log("User input:", userInput);
      alert("Welcome! Logging you in...");
    }
  });
});
