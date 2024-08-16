const form = document.getElementById('regForm');

const name = document.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const password = document.getElementById("password");
const subject = document.getElementById("subject");
const agree = document.getElementById("agree");

const nameError = document.getElementById("name-error");
const addressError = document.getElementById("address-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const subjectError = document.getElementById("subject-error");
const agreeError = document.getElementById("agree-error");

const clearErrors = () => {
    nameError.textContent = '';
    addressError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    subjectError.textContent = '';
    agreeError.textContent = '';
};

const validateForm = () => {
    let isValid = true;
    clearErrors();

    if (name.value === "" || /\d/.test(name.value)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (email.value === "" || !email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password.value === "" || password.value.length < 6) {
        passwordError.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (address.value === "") {
        addressError.textContent = "Please enter your address.";
        isValid = false;
    }

    if (subject.value === "") {
        subjectError.textContent = "Please select your course.";
        isValid = false;
    }

    if (!agree.checked) {
        agreeError.textContent = "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}

form.addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault(); 
    }  
});
