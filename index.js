let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0","1","2","3","4","5","6","7","8","9","(",")","{","}","?","_","`","!","@","#","$","%","^",
"&","*","+","=","[","]",",","|",":",";","<",">",".","?","/"];
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let number = document.getElementById("number")
let password = document.getElementById("password")
let copy = document.getElementById("copy-btn")
let desiredLength = 8

// generate a random number and use it to index the characters array
function getRandomCharacter() {
    randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex] // returns a random character from the array
}

// incrementing and decrementing 

// decrementing when - is clicked
minus.addEventListener("click", function() {
    curNumber = parseInt(number.textContent)
    if (curNumber > 8) {
        curNumber--
        desiredLength = curNumber
        if (curNumber < 10) {
            number.textContent = "0" + curNumber
        } else {
            number.textContent = curNumber
        }
    }
})

// incrementing when + is clicked
plus.addEventListener("click", function() {
    curNumber = parseInt(number.textContent)
    if (curNumber < 16) {
        curNumber++
        desiredLength = curNumber
        if (curNumber < 10) {
            number.textContent = "0" + curNumber
        } else {
            number.textContent = curNumber
        }
    } 
})

// generate random password 
function generateRandomPassword() {
    let randomPassword = ""

    // get user specified number of random characters
    for (let i = 0; i < desiredLength; i++) {
        randomPassword += getRandomCharacter()
    }
    password.textContent = randomPassword // display on screen
}

// copy password to clipboard when copy button is clicked
function copyText() {
    navigator.clipboard.writeText(password.innerText).then(function() {
        alert("Copied to clipboard")
    })
}