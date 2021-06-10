const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".section--todo .todo-list");

const TODO_KEY = "todoList";

let toDos = [];

function saveToDo() {
	localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
	const parentDiv = event.path[2];
	parentDiv.remove();
	toDos = toDos.filter(todo => parentDiv.id != +todo.id);
	saveToDo();
}

function paintToDo(newToDoObj) {
	const div = document.createElement("div");
	div.id = newToDoObj.id;
	div.classList.add("container");
	const li = document.createElement("li");
	const span = document.createElement("span");
	const dateSpan = document.createElement("span");
	dateSpan.innerText = newToDoObj.yymmdd;
	span.innerText = newToDoObj.text;
	const button = document.createElement("button");
	button.innerText = "Complete 👊 ";
	button.addEventListener('click', deleteTodo)
	li.appendChild(dateSpan);
	li.appendChild(span);
	li.appendChild(button);
	div.appendChild(li)
	todoList.appendChild(div);
}

function handleSubmit(event) {
	const date = new Date();
	const year = date.getFullYear();
	const month = +date.getMonth() + 1;
	const hours = String(date.getHours()).padStart(2,"0") ;
	const minuts = String(date.getMinutes()).padStart(2, "0");
	event.preventDefault();
	const newToDo = todoInput.value;
	todoInput.value = "";
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
		yymmdd: `${hours}:${minuts}, ${month}월 ${year}`,
	}
	toDos.push(newToDoObj);
	saveToDo(newToDoObj);
	paintToDo(newToDoObj);
}

todoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
	parseToDos = JSON.parse(savedToDos);
	toDos = parseToDos;
	parseToDos.forEach(paintToDo);
}