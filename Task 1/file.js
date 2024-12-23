alert("Welcome to my site");
const userName = prompt("Please enter your name:");
const userColor = prompt("Please choose a color (red, green, or blue):").toLowerCase();
let color;
if (userColor === "red" || userColor === "green" || userColor === "blue") {
    color = userColor;
} else {
    color = "black";
}
const welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = `Welcome ${userName}`;
welcomeMessage.style.color = color;
document.body.appendChild(welcomeMessage);