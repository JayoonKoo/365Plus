const toggleBtn = document.querySelector(".toggle-btn");
const toggle = document.querySelector(".menu");
const header= document.querySelector(".header");
const todo = document.querySelector(".section--todo");

toggleBtn.addEventListener("click", () => {
	toggle.classList.toggle('hidden');
	header.classList.toggle('resize');
	todo.classList.toggle('resize');
});
