let text = prompt("write your string")
if (typeof(text) !== 'string') {
    alert("wrong type of data")
} else {
    let result = text.split("").reverse().join("");
    if (text === result) {
        alert("Да")
    } else {
        alert("Нет")
    }
}
