function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        alert('Error en la expresión');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}