const value = document.querySelector("#length-value");
const input = document.querySelector("#input-length");
const passwordOutput = document.getElementById('password-output');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const specialChars = document.getElementById('specials');
const generateBtn = document.getElementById('generate');

value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

function copyText() {
    // Copy text into clipboard
    navigator.clipboard.writeText(passwordOutput.textContent);
}

function generatePassword() {
    const length = input.value;
    let charset = "";
    const lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const specialCharsCharset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let output = "";

    if (uppercase.checked) {charset += upperCaseCharset;}
    if (lowercase.checked) {charset += lowerCaseCharset;}
    if (numbers.checked) {charset += numbersCharset;}
    if (specialChars.checked) {charset += specialCharsCharset;}
    if (!uppercase.checked && !lowercase.checked && !numbers.checked && !specialChars.checked) {
        alert("Please select at least one option")
    }

    for (let i = 0, n = charset.length; i < length; ++i) {
        output += charset.charAt(Math.floor(Math.random() * n));
    }

    passwordOutput.innerText = output;
}

generateBtn.addEventListener('click', generatePassword);
