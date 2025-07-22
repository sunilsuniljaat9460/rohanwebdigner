// form-alert.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
  this.reset();
});
