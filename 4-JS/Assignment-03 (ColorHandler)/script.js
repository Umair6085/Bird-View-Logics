function colorHandler(){
    let n = Math.random()*16777215;
    let a = Math.ceil(n)
    let code = "#" + a.toString("16")
    document.querySelector("body").style.backgroundColor = code;
    document.getElementById("btn").style.backgroundColor = code;
    document.getElementById("txt").innerHTML = code;
}
// console.log(code)