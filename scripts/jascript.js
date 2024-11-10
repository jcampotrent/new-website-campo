// JavaScript for dynamic welcome message
function getWelcomeMessage() {
    const now = new Date();
    const hour = now.getHours();
    let message = '';
  
    if (hour >= 5 && hour < 12) {
      message = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
      message = 'Good Afternoon!';
    } else {
      message = 'Good Evening!';
    }
  
    document.getElementById('welcome-message').innerHTML = message;
  }
  
  window.onload = getWelcomeMessage; // Run on page load
  
  // Form validation
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      event.preventDefault(); // Prevent form submission
    }
  });

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
};

backToTopButton.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll smoothly to the top
};
  