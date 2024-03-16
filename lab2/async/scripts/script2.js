let imageUrls = [];

for (let i = 0; i < 5; i++) {
    let url = prompt(`Введите URL изображения ${i + 1}:`);
    imageUrls.push(url);
}

function imgLoad(url, container) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Can’t load image'));
        img.src = url;
    });
}


let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';

async function addImagesInOrder() {
    try {
        for (let url of imageUrls) {
            let img = await imgLoad(url, container);
            img.style.maxWidth = '960px';
            img.style.height = 'auto';
            container.appendChild(img)
        }
        return 'Images loaded successfully';
    } catch (error) {
        return error;
    }
}

addImagesInOrder()
.then((result) => {
    console.log("Result: " + result);
    document.body.appendChild(container);
})
.catch((error) => {
    let p = document.createElement('p');
    p.textContent = error.message;
    container.appendChild(p);
});

imgLoad(url, container)
.then(
    function (img) {
    img.style.maxWidth = '960px';
    img.style.height = 'auto';
    container.appendChild(img)
    },
    function (error) {
        let p = document.createElement('p');
        p.textContent = error.message;
        container.appendChild(p);
    }
)
