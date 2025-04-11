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

//JS Code for the Categories Page -- Henry

function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  dropdown.classList.toggle('show');
}

// Close all dropdowns if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
