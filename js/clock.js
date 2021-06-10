const clockEl = document.querySelector(".clock");

function getTime() {
	const date = new Date();
	const hour = String(date.getHours()).padStart(2, "0");
	const minuts = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clockEl.innerText = `${hour}:${minuts}:${seconds}`
}
setInterval(getTime, 1000);