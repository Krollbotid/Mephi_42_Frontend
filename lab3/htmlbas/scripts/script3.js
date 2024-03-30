let counter = Number(localStorage.getItem('counter'))
if (!Number.isFinite(counter)) {
    counter = 0
}
document.getElementById('counter').innerText = counter;

let increment = function() {
    counter++;
    document.getElementById('counter').innerText = counter;
    localStorage.setItem('counter', counter);
}

let button = document.body.children[0]
button.onclick = increment