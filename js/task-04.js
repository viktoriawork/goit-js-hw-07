const counter = document.getElementById("counter");

document.addEventListener("click", event => {
    const action = event.target.dataset.action;
    const counterElement = document.getElementById("value");
    switch (action) {
        case 'increment':
            counterElement.innerText++;
            break;
        case 'decrement':
            counterElement.innerText--;
            break;
        default:
            console.log("Неизвестное действие")
    }
});