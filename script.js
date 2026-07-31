let password1 = ""
let password2 = ""
let password1El = document.getElementById("password-one-el")
let password2El = document.getElementById("password-two-el")

function generatePasswords() {
    changeText()
}

function changeText() {
    password1El.textContent = password1
    password2El.textContent = password2
}