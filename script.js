document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "✅ Thank you! Your message has been sent.";
});
