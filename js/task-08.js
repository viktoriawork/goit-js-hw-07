document.addEventListener('click', ev => {
    const button = ev.target;
    console.log(button);
    const container = document.getElementById('boxes');
    switch (button.dataset.action) {
        case 'render':
            const newDiv = document.createElement('div');
            newDiv.style.height = (30 + 10 * container.childNodes.length) + 'px';
            newDiv.style.width = (30 + 10 * container.childNodes.length) + 'px';
            let color = Math.floor(Math.random()*16777215).toString(16);
            console.log(color);
            while(color.length < 6) {
                color = '0'.concat(color);
            }
            newDiv.style.backgroundColor = '#' + color;
            console.log(newDiv);
            container.appendChild(newDiv);
            break;
        case 'destroy':
            container.innerHTML = '';
            break;
        default:
            console.log("Неизвестное действие");
    }
})