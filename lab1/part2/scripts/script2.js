let number = prompt("n")
let arr = new Array()
let prime = false, primenum = 1
for (i = 0; i < number; ++i) {
    while (!prime) {
        prime = true
        ++primenum
        for (value of arr) {
            if ((primenum % value) == 0) {
                prime = false
                break
            }
        }
    }
    prime = false
    arr[arr.length] = primenum
}
let text = "" + arr[0]
for (i = 1; i < number; ++i) {
    text += " " + arr[i]
}
alert(text)
