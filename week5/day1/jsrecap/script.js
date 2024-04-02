let budget = 5000;

let isProgramRunning = true
while(isProgramRunning){
    isProgramRunning = confirm("Program davam etsinmi ?")
    const userInput = prompt(`
    1-pul daxil etmek,
    2-pul cekmek,
    3-balansi gostermek,
    4-proqrami dayandir.
    secmek istediyiniz reqemi daxil edin:
    `)

    switch (userInput) {
        case 1:
            const userInput1 = prompt("Daxil edilecek mebleg :")
            if(isNaN(userInput)){
                alert("reqem daxil edin!!!")
                break;
            }
            budget+= +userInput
            break
        case 2:
            const userInput2 = prompt("Cekmek istediyiniz mebleg :")
            if(isNaN(userInput2)){
                alert("reqem daxil edin!!!")
                break;
                }
                if(budget<userInput2){
                    alert("Balansinizda kifayet qeder mebleg yoxdur")
                    break
                }
            budget-= +userInput2
            break
        case 3:
            alert(budget)
            break
        case 4:
            isProgramRunning = false
            break
        default:
            break;
    }
}