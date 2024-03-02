let text = prompt("write your list")
try {
    var words = text.split(',');
    var result = words.join('.');
    alert(result)
} catch (e) {
    console.log(e)
}