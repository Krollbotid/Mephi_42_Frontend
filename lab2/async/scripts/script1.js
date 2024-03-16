let count = localStorage.getItem('pageLoadCount');

// Проверяем, если значение счетчика уже есть, увеличиваем его на 1, иначе устанавливаем значение 1
count = (count === null) ? 1 : parseInt(count) + 1;

localStorage.setItem('pageLoadCount', count);
alert('Вы загрузили/обновили эту страницу ' + count + ' раз(а).');
