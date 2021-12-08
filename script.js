let passwordEl = document.getElementById('password');
let chars = '0123456789abcdefghijklmnopqrstuvwxyz!£$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let passwordLength = 12;
let password = '';

for(let i = 0; i < passwordLength; i++) {
    passwordEl.innerText += chars[Math.round(Math.random() * chars.length)];
}
// passwordEl.innerText = password;
