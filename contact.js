const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! 🚀");
  form.reset();
});
