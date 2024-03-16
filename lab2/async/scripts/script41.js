/*let imageUrls = [];

for (let i = 0; i < 5; i++) {
    let url = prompt(`Введите URL изображения ${i + 1}:`);
    imageUrls.push(url);
}
*/

let imageUrls = [
    "https://plaky.com/blog/wp-content/uploads/2023/08/Intro.jpg",
    "https://amdg.ru/upload/NewFolder/mem-pro-reklamu.png",
    "https://news.store.rambler.ru/img/8216a3fa1bdcc02143a78295811e74ac",
    "https://news.store.rambler.ru/img/9dd07f9efa5d53d64aa28990a7e87768",
    "https://img2.joyreactor.cc/pics/post/%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B0%D1%83%D0%BD%D0%BE%D0%B2-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-8345505.jpeg"
]

function loadImage(url) {
    return new Promise( function(resolve, reject) {
        let img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("cannot load image" + url));
    })
}

async function loadMyImages(urls) {
    imgs = await Promise.allSettled(urls.map((url) => {return loadImage(url)}))
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
}

loadMyImages(imageUrls).then(function(res) {
})