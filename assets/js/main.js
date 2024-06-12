// Function to display user avatar
function displayAvatar() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const userDataString = localStorage.getItem(loggedInUser);
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const avatarData = userData.avatar;
      if (avatarData) {
        document.getElementById("avatarImage").src = avatarData;
      } else {
        console.error("Avatar data not found in user data.");
      }
    } else {
      console.error("User data not found in LocalStorage for logged-in user.");
    }
  } else {
    console.error("No logged-in user found in LocalStorage.");
  }
}

// Check if user is logged in and update the username placeholder accordingly
document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    displayAvatar();
    document.getElementById("userLabel").textContent = loggedInUser;
    document.getElementById("signupButton").style.display = "none";
    document.getElementById("userProfile").style.display = "flex";
    document.getElementById("progress-bar").style.display = "inline-flex";
    document.getElementById("badge-card").style.display = "flex";
    document.getElementById("mark-complete").style.display = "flex";
  } else {
    document.getElementById("signupButton").style.display = "flex";
    document.getElementById("loginButton").style.display = "flex";
    document.getElementById("signupButtonCTA").style.display = "flex";
    document.getElementById("loginButtonCTA").style.display = "flex";
    document.getElementById("mark-complete").style.display = "none";
  }
});

//Function to handle signout
function handleLogout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "/"; // Reload the page after signout to update the UI
}

// Event listener for signout button click
document.getElementById("logoutButton").addEventListener("click", function () {
  handleLogout();
});
