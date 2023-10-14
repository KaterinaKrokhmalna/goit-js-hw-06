
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = registerForm.elements.email.value;
    const password = registerForm.elements.password.value;

    if (!email || !password) {
        alert("Bсі поля повинні бути заповнені!");
        return;
    }

    else {
        console.log({"email": email, "password" : password});
    }
    registerForm.reset();
})
