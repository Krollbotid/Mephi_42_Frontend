function f(value) {
    this.count += value
}


let Counter = {
    count : 0,
    add: f,
    sub: function(value) {
        this.count -= value
    }
}
let text
let value
f(12, 45)
while ((text = prompt("write value")) !== "stop") {
    try {
        value = Number(text)
        Counter.add(value)
        alert(Counter.count)
    } catch (e) {
        alert("Universe collapsing in 5, 4, 3, 2, 1...")
    }
}