const trigger = document.getElementById("email-popup-trigger");
const popup = document.getElementById("email-popup");
const closeBtn = document.getElementById("close-popup");
const form = document.getElementById("contact-form");
const formSection = document.getElementById("form-section");
const successSection = document.getElementById("success-section");
const backToSiteBtn = document.getElementById("back-to-site");

trigger.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "block";
  formSection.style.display = "block";
  successSection.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

backToSiteBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_ID", "template_ID", this)
    .then(() => {
      form.reset(); // Clear the form
      formSection.style.display = "none";
      successSection.style.display = "block";
    })
    .catch((error) => {
      alert("Failed to send message. Try again later.");
      console.error(error);
    });
});