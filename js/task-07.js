const input = document.getElementById("font-size-control");
input.addEventListener('input', () => {
    document.getElementById('text').style.fontSize = input.value + 'px';
});