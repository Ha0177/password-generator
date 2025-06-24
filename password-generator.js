const lengthInput = document.querySelector('.input.length');
const generateBtn = document.querySelector('.generate-btn');
const output = document.querySelector('.password-output');

generateBtn.addEventListener('click', function() {
    let inputLength = lengthInput.value;
    if (inputLength < 4 || inputLength > 32) {
        output.textContent = "Please enter a value between 4 and 32.";
        return
    }
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const number = "0123456789".split("");
    const special = "!@#$%^&*()_+-=[]{}|;:',.<>?/".split("");
    const allCharacters = uppercase.concat(lowercase, number, special);
    let password = [];
    for (let i = 0; i < inputLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password.push(allCharacters[randomIndex]);
        output.textContent = password.join("");
    }
});
