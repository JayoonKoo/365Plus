const userForm = document.querySelector("#user-form");
const userInput = document.querySelector("#user-form input");
const hello = document.querySelector(".hello");

const USERNAME_CN = "userName";
const HIDDEN_CN = "hidden";

const currentUserName = localStorage.getItem(USERNAME_CN);

if (currentUserName === null) {
  userForm.classList.remove(HIDDEN_CN);
  userForm.addEventListener("submit", getUserName);
} else {
  setHello(currentUserName);
}

function getUserName(event) {
  event.preventDefault();
  const inputUserName = userInput.value;
  localStorage.setItem(USERNAME_CN, inputUserName);
  userForm.classList.add(HIDDEN_CN);
  setHello(inputUserName)
}

function setHello (userName) {
  hello.classList.remove(HIDDEN_CN);
  hello.innerText = `어서오세요!😄 ${userName}님.`;
}
