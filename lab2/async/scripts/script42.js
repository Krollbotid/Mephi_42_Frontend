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
        img.onload = () => resolve([img, url]);
        img.onerror = () => resolve([null, url]); // reject(new Error("cannot load image" + url));
    })
}

function loadMyImages(urls) {
    return Promise.race(urls.map((url) => {return loadImage(url)}))
}

function addElementToBody(element) {
    document.body.appendChild(element);
}

async function loadWithoutOrder(urls) {
    urls = urls.slice()
    let imgs = []
    let n = urls.length
    for (let i = 0; i < n; i++) {
        console.log("iter: " + i)
        console.log(urls)
        let res = await loadMyImages(urls);

        let img = res[0];
        let url = res[1];
        if (img === null) {
            console.log("cannot load image");
            element = document.createElement("p")
            element.textContent = "Can't load image"
            document.body.appendChild(element);
        } else {
            img.style.width = '600px'
            document.body.appendChild(img);            
            imgs.push(img)
        }
        console.log(url);
        let ind = urls.indexOf(url);
        urls.splice(ind, 1);
    }
    return imgs
}

loadWithoutOrder(imageUrls).then(function(res) {
})
// proof - break one of urls