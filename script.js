let skillsButton = document.getElementById("skillsButton");
let certificationsButton = document.getElementById("certificationsButton");
let educationButton = document.getElementById("educationButton");
let achievementsButton = document.getElementById("achievementsButton");
let skillsTab = document.getElementById("skillsTab");
let certificationsTab = document.getElementById("certificationsTab");
let educationTab = document.getElementById("educationTab");
let achievementsTab = document.getElementById("achievementsTab");
certificationsButton.addEventListener("click", function() {
    certificationsTab.classList.remove("d-none");
    skillsTab.classList.add("d-none");
    educationTab.classList.add("d-none");
    achievementsTab.classList.add("d-none");
    certificationsButton.classList.add("tab-recolor");
    achievementsButton.classList.remove("tab-recolor");
    skillsButton.classList.remove("tab-recolor");
    educationButton.classList.remove("tab-recolor");
    certificationsButton.classList.add("tab-recolor");
});
educationButton.addEventListener("click", function() {
    educationTab.classList.remove("d-none");
    skillsTab.classList.add("d-none");
    certificationsTab.classList.add("d-none");
    achievementsTab.classList.add("d-none");
    educationButton.classList.add("tab-recolor");
    achievementsButton.classList.remove("tab-recolor");
    skillsButton.classList.remove("tab-recolor");
    educationButton.classList.add("tab-recolor");
    certificationsButton.classList.remove("tab-recolor");
});
skillsButton.addEventListener("click", function() {
    certificationsTab.classList.add("d-none");
    skillsTab.classList.remove("d-none");
    educationTab.classList.add("d-none");
    achievementsTab.classList.add("d-none");
    skillsButton.classList.add("tab-recolor");
    achievementsButton.classList.remove("tab-recolor");
    skillsButton.classList.add("tab-recolor");
    educationButton.classList.remove("tab-recolor");
    certificationsButton.classList.remove("tab-recolor");
});
achievementsButton.addEventListener("click", function() {
    educationTab.classList.add("d-none");
    skillsTab.classList.add("d-none");
    certificationsTab.classList.add("d-none");
    achievementsTab.classList.remove("d-none");
    achievementsButton.classList.add("tab-recolor");
    skillsButton.classList.remove("tab-recolor");
    educationButton.classList.remove("tab-recolor");
    certificationsButton.classList.remove("tab-recolor");
});
let myForm = document.getElementById("myForm");

function sendMail() {
    let parms = {
        name: document.getElementById("nameEl").value,
        email: document.getElementById("emailEl").value,
        message: document.getElementById("messageEl").value
    }
    emailjs.send("service_n8txauo", "template_bvfyh1c", parms).then(function(res) {
        alert("success" + res.status);
    });
};
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
});
