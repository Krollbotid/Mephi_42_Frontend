let imageUrls = [];

for (let i = 0; i < 3; i++) {
    let url = prompt(`Введите URL изображения ${i + 1}:`);
    imageUrls.push(url);
}

function addImages() {
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
  
    imageUrls.forEach((url) => {
        let img = new Image();
        img.onload = function() {
            img.style.maxWidth = '960px';
            img.style.height = 'auto';
            container.appendChild(img);
        };
        img.onerror = function() {
            let p = document.createElement('p');
            p.textContent = 'Can’t load image';
            container.appendChild(p); 
        };
        img.src = url;
    });

    document.body.appendChild(container);
}

addImages();
