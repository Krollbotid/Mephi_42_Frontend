let imageUrls = [];

for (let i = 0; i < 5; i++) {
    let url = prompt(`Введите URL изображения ${i + 1}:`);
    imageUrls.push(url);
}

function loadImage(url) {
    return new Promise( function(resolve, reject) {
        let img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("cannot load image" + url));
    })
}

function loadMyImages(urls) {
    return Promise.allSettled(urls.map((url) => {return loadImage(url)}))
}


loadMyImages(imageUrls).then(function(imgs) {
    for (let res of imgs) {
        let status = res['status']
        let img = res['value']
        element = null
        if (status === "fulfilled") {
            element = img
            element.style.width = '600px';
        } else {
            element = document.createElement("p")
            element.textContent = "Can't load image"
        }
        document.body.appendChild(element);
    }
})
