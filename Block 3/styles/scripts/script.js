// https://www.youtube.com/watch?v=QLOrdXFJBvE (Video used to help with this code)

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form'); // Get the newsletter form element
  form.addEventListener('submit', function (e) { 
    e.preventDefault(); 
    const email = document.getElementById('email').value; // Get the value of the email input
    if (email && email.includes('@')) { // Check if the email contains '@' character
      alert('Thank you for subscribing!'); 
      form.reset(); 
    } else {
      alert('Please enter a valid email address.'); // Show error message if email is invalid
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form'); // Get the form element
  const emailInput = document.getElementById('email'); 
  const errorMessage = document.createElement('div'); 
  errorMessage.style.color = 'red'; // Set the error message text color to red
  errorMessage.style.marginTop = '10px'; 
  form.appendChild(errorMessage); 

  form.addEventListener('submit', function (e) { // Add an event listener for form submission
    e.preventDefault(); 

    const email = emailInput.value.trim(); // Get the email input value and trim any extra spaces

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

    if (email === '') { 
      errorMessage.textContent = 'Please enter an email address.'; // Show error message for empty input
    } else if (!emailRegex.test(email)) { 
      errorMessage.textContent = 'Please enter a valid email address.'; // Show error message for invalid email
    } else {
      errorMessage.textContent = ''; 
      alert('Thank you for subscribing!'); // Show success message
      form.reset(); 
    }
  });
});
