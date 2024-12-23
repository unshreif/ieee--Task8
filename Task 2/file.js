const userMessage = prompt("Please enter a message:");
for (let i = 1; i <= 6; i++) {
    const heading = document.createElement(`h${i}`);
    heading.textContent = userMessage;
    document.body.appendChild(heading);
}