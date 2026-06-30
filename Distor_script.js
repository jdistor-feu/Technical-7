document.addEventListener("DOMContentLoaded", function () {
    var greetingText = document.getElementById("greetingText");
    var bioToggle = document.getElementById("bioToggle");
    var aboutExtras = document.getElementById("aboutExtras");
    var contactForm = document.getElementById("contactForm");
    var formMessage = document.getElementById("formMessage");

    var hour = new Date().getHours();
    var greeting = "Hello";

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    greetingText.textContent = greeting + ", welcome to my portfolio";

    bioToggle.addEventListener("click", function () {
        if (aboutExtras.classList.contains("hidden")) {
            aboutExtras.classList.remove("hidden");
            bioToggle.textContent = "Hide More About Me";
        } else {
            aboutExtras.classList.add("hidden");
            bioToggle.textContent = "Show More About Me";
        }
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "" || subject === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = "Please write at least 10 characters in the message.";
            return;
        }

        formMessage.textContent = "Thank you, " + name + ". Your message has been sent.";
        window.alert("Message sent successfully.");
        contactForm.reset();
    });
});
