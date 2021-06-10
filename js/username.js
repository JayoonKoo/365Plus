const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const USER_KEY = 'userName';
const HIDDEN_CN = 'hidden';

function loginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USER_KEY, userName);
  loginForm.classList.add(HIDDEN_CN);
  paintUserName(userName);
}

function paintUserName(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CN);
}

const savedUserName = localStorage.getItem(USER_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CN);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintUserName(savedUserName);
}