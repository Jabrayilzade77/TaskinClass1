function outer() {
    let count = 0
    return function inner(){
        return ++count
    }
}

const counter = outer()

console.log(counter());
console.log(counter());
console.log(counter());



// function Calculator(val=0) {
//     let memory = val
//     return{

//     }
// }