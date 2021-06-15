const input = document.getElementById("name-input");
input.addEventListener('input', () => {
    document.getElementById("name-output").innerText = input.value === '' ? 'незнакомец' : input.value;
});