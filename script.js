function toggleDropdown() {
    let dropdown = document.getElementById("dropdownMenu");
    let selectBox = document.querySelector(".custom-select");

    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      selectBox.classList.remove("active");
    } else {
      dropdown.style.display = "block";
      selectBox.classList.add("active");
    }
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropdownMenu");
    let selectBox = document.querySelector(".custom-select");

    if (!selectBox.contains(event.target)) {
      dropdown.style.display = "none";
      selectBox.classList.remove("active");
    }
  });
  //Email send //
  (function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});