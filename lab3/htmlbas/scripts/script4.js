let counter = Number(localStorage.getItem('counter'))
if (!Number.isFinite(counter)) {
    counter = 0
}
document.getElementById('counter').innerText = counter + ' clicks';

function showAverage() {
    if (!localStorage.getItem('start')) {
        alert("Что-то пошло не так. Исправляем.")
        localStorage.setItem('start', new Date())
        return
    }
    let startTime = new Date(localStorage.getItem('start'));
    let duration = (new Date() - startTime) / 1000;
    let average = counter / duration;
    document.getElementById('avg').innerText = average.toFixed(3) + ' clicks/sec';
}

let increment = function() {
    if (counter > 0) {
        showAverage();
    } else {
        localStorage.setItem('start', new Date())
    }
    counter++;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').innerText = counter + ' clicks';
}
let reset = function() {
    localStorage.setItem('counter', 0);
    counter = 0
    localStorage.setItem('start', null);
}


let button = document.getElementById('clicker')
button.onclick = increment
let resetbut = document.getElementById('reset')
resetbut.onclick = reset
