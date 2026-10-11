
// Simple JavaScript for the tourism website

// Dark and light mode
function changeMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
}

// Search destinations
function searchDestinations() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("destination-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Filter activities
function filterActivities(category) {
    let cards = document.getElementsByClassName("activity-card");

    for (let i = 0; i < cards.length; i++) {
        if (category === "all" || cards[i].classList.contains(category)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Booking form validation
function validateBooking() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let people = document.getElementById("people").value;
    let message = document.getElementById("bookingMessage");

    if (name === "" || email === "" || people === "") {
        message.innerHTML = "Please fill in all required fields.";
        message.className = "alert alert-danger";
        return false;
    }

    localStorage.setItem("visitorName", name);
    message.innerHTML = "Booking request submitted successfully!";
    message.className = "alert alert-success";
    return false;
}

// Contact form validation
function validateContact() {
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage");
    let result = document.getElementById("contactResult");

    if (name === "" || email === "" || message === "") {
        document.getElementById("contactResult").innerHTML =
            "Please complete all required fields.";
        document.getElementById("contactResult").className =
            "alert alert-danger";
        return false;
    }

    document.getElementById("contactResult").innerHTML =
        "Thank you! Your message has been received.";
    document.getElementById("contactResult").className =
        "alert alert-success";
    return false;
}

// Booking cost calculator
function calculateCost() {
    let people = Number(document.getElementById("calcPeople").value);
    let days = Number(document.getElementById("calcDays").value);
    let result = document.getElementById("costResult");

    if (people < 1 || days < 1) {
        result.innerHTML = "Enter valid numbers.";
        return;
    }

    let cost = people * days * 450;
    result.innerHTML = "Estimated cost: M" + cost;
}

// Gallery next/previous
let galleryImages = [
    "images/maletsunyane.png",
    "images/katse-dam.png",
    "images/thaba-bosiu.png",
    "images/sehlabathebe.png"
];

let currentImage = 0;

function nextImage() {
    currentImage++;
    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }
    document.getElementById("mainGallery").src = galleryImages[currentImage];
}

function previousImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }
    document.getElementById("mainGallery").src = galleryImages[currentImage];
}

// Show saved visitor name
window.addEventListener("load", function () {
    let savedName = localStorage.getItem("visitorName");
    let welcome = document.getElementById("savedName");

    if (savedName && welcome) {
        welcome.innerHTML = "Welcome back, " + savedName + "!";
    }
});
