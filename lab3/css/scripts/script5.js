let circle = document.querySelector('.circle');


Mover = function(event) {
    let x = event.clientX;
    let y = event.clientY;

    circle.style.left = (x - 30) + 'px'; // 30 - половина ширины круга
    circle.style.top = (y - 30) + 'px'; // 30 - половина высоты круга
}

document.addEventListener('mousemove', Mover);

