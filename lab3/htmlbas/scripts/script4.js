let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
document.getElementById('counter').innerText = counter + ' clics';

function showAverage() {
    if (!localStorage.getItem('start')) {
        alert("Что-то пошло не так")
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
    document.getElementById('counter').innerText = counter + ' clics';
}

let button = document.body.children[0]
button.onclick = increment




