
const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";
    // Ensure at least one of each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest with random chars
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle password to avoid predictable pattern
    password = shuffleString(password);

    passwordBox.value = password;
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

async function copyPassword() {
    if (!passwordBox.value) {
        alert("Please generate a password first!");
        return;
    }
    try {
        await navigator.clipboard.writeText(passwordBox.value);
        alert("Password copied to clipboard!");
    } catch (err) {
        alert("Failed to copy password.");
    }
}

