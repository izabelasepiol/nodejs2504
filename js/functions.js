//const helloWorld = () => {
//    console.log ("hello world 2")
//}

//const sum = (a, b) => {
//    console.log("suma wynosi:", a + b)
//}
//    
//module.exports = {helloWorld, sum
//}

console.log("Hello World")

const example = () => {
const fromInput = document.getElementById("example").value;
document.getElementById("tekst").innerText = fromInput;
}

document.getElementById("btn").addEventListener("click", example)

