const input = document.getElementById("validation-input");
input.addEventListener('blur', () => {
    const requiredLength = input.dataset.length;
    if (input.value.length === parseInt(requiredLength)) {
        input.className = 'valid';
    } else {
        input.className = 'invalid';
    }
})