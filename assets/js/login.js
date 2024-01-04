/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', () => {
  // Select relevant buttons
  const userBtn = document.getElementById('user-btn');
  const profileBtn = document.getElementById('user-btn-bottom');
  const loginWrapper = document.getElementById('loginWrapper');

  // Function to toggle the login wrapper visibility
  function toggleLoginWrapper() {
    loginWrapper.classList.toggle('hidden');
  }

  // Add click event listeners to the buttons
  userBtn.addEventListener('click', toggleLoginWrapper);
  profileBtn.addEventListener('click', toggleLoginWrapper);

  // Optional: Close the login wrapper if the close button is clicked
  const closeLoginBtn = document.getElementById('closeLoginBtn'); // Assuming you have a close button
  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', toggleLoginWrapper);
  }
});

function validateLogin() {
  // Add your login validation logic here
  // For a simple example, you can check if the username and password are not empty
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert('Login successful!');
  } else {
    alert('Please enter both username and password.');
  }
}
