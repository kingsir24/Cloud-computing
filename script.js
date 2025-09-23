document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.querySelector('input[placeholder="Your Name"]').value;
  var email = document.querySelector('input[placeholder="Your Email"]').value;
  var message = document.querySelector('textarea').value;

  if (name && email && message) {
    // ✅ Save to sessionStorage
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("message", message);

    // Show confirmation message
    document.getElementById('msg').innerHTML = 'Message saved in sessionStorage! ✅';
    document.getElementById('contactForm').reset();

    // Show saved data below form
    document.getElementById('savedData').innerHTML = `
      <h3>Stored Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  } else {
    document.getElementById('msg').innerHTML = '⚠ Please fill in all fields.';
  }
});

// ✅ Load saved data on page reload (if session still active)
window.onload = function() {
  if (sessionStorage.getItem("name")) {
    document.getElementById('savedData').innerHTML = `
      <h3>Stored Details</h3>
      <p><strong>Name:</strong> ${sessionStorage.getItem("name")}</p>
      <p><strong>Email:</strong> ${sessionStorage.getItem("email")}</p>
      <p><strong>Message:</strong> ${sessionStorage.getItem("message")}</p>
    `;
  }
};
