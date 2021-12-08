let passwordEl = document.getElementById('password');
let chars = '0123456789abcdefghijklmnopqrstuvwxyz!£$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let passwordLength = Number.MAX_SAFE_INTEGER / 200000000;
let password = '';

for(let i = 0; i < passwordLength; i++) {
    passwordEl.innerText += chars[Math.round(Math.random() * chars.length)];
}
// passwordEl.innerText = password;
