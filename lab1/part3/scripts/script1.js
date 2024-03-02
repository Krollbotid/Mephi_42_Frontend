try {
    let arr = prompt("write your list of number divided by commas").split(",").map(Number)
    arr.sort(function(a, b) {
        return a - b
    })
    alert(arr)
} catch (e) {
    console.log(e)
    alert("wrong input")
}