let textBox = document.getElementById('textBox');
let powerOn = false;

function addToTextBox(value) {
    if (powerOn) {
        textBox.value += value + ' ';
    } else {
        alert('Ligue o dispositivo antes de usar!');
    }
}

function togglePower() {
    powerOn = !powerOn;
    textBox.value = '';
}



function clearTextBox() {
    textBox.value = '';
}
