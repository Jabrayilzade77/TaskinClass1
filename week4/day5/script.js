// function decleration


// function ikiQatiniTap(eded) {
//     console.log(eded*2);
// }

// ikiQatiniTap(55)
// ikiQatiniTap(5)
// ikiQatiniTap(15)


// function showInfo(name= "Anonim", position= "Isci") {
//     console.log(name + " " + position);
// }

//Parametr name, position
// showInfo("Yusif","Sirket muduru")
// showInfo("Yusif")

// showInfo()



//decleration function
//Argument Yusif,Sirket muduru



//Function Expression

// const ikiyeQatla = function (eded) {
//     console.log(eded*2);
    
// }

// ikiyeQatla(10)
// ikiyeQatla(20)


// Arrow function


// const ikiyeVur = num => {
//     console.log(num*2);
// }

// ikiyeVur(45)


//decleration



//expression

// const checkResult = function (eded) {
//     if(eded%2==0){
//         return true
//     }
//     else{
//         return false
//     }
    
// }

// console.log(checkResult(24));


//arrow function

// const checkCutTek = eded => {
//     if(eded%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checkCutTek(24));

//arrow qisa 
// const checkCutTek1 = eded => eded%2===0

// console.log(checkCutTek1(24));



function showElement(num1,num2, ...parms) {
    console.log(num1);
    console.log(num2);
    //rest operator
    console.log(parms);

    //spret operator
    console.log(...parms);

    
}


showElement(2,3,4,5,6,7)