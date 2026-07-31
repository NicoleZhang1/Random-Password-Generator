const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = ""
let password2 = ""
let password1El = document.getElementById("password-one-el")
let password2El = document.getElementById("password-two-el")
let passwordLength = 15

function getRandomCharacter() {
     let randomChar = characters[Math.floor(Math.random() * characters.length)]
     return randomChar
}

function generatePasswords() {
    password1 = ""
    password2 = ""
    for (let i = 0; i <= passwordLength; i++) {
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }
    changeText()
}

function changeText() {
    password1El.textContent = password1
    password2El.textContent = password2
}