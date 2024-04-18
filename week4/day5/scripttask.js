// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9]


// task1
// function concatArray(arr1,arr2) {
//     // return arr1.concat(arr2)
//     return arr1 + " " + arr2
    
// }

// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))


//task2

// const arr = [1,2]


// function DaxilEt(num1,num2) {
//     for (let i = 0; i < num1; i++) {
//         arr.push(num2)
        
//     }
//     console.log(arr);
// }

// DaxilEt(4,3)

// function yeriDeyis(arr,currentIndex,nextIndex) {

//    let element=arr[currentIndex]
//     arr.splice(currentIndex,1)
//     arr.splice(nextIndex,0,element)
//     return arr
// }

// console.log(yeriDeyis([10,20,30,40,50],0,2))

// task4

// function reqemDoldur(num1,num2) {
//     const arr = []

//     for (let i = num1; i <= num2; i++) {
    
//         arr.push(i)
//     }

//     return arr
// }

// console.log(reqemDoldur(10,15));



//task5(oz usulunu yoxla spluice method)

// 5.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5]))
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// const arr1 = [1,2,3,3,3,4,5]
// const arr2 = []


// function deleteRepeate(arr1) {
//     for (let i = 0; i < arr1.length; i++) {
//         if(!arr2.includes(arr1[i])) {
//             arr2.push(arr1[i])
//         }   
        
//     }
//     return arr2
// }
// console.log(deleteRepeate([1,2,3,3,3,4,5],[]));



//task6
// Daxil edilən iki arraydə fərqli olan elementləri qaytaran funksiya yazın.
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Expected Output:
// [3, 10, 100]


// const arr1 = [1, 2, 3]
// const arr2 = [100, 2, 1, 10]


// function difference(arr1,arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         if(!arr1.includes(arr2[i])) {
//             arr1.push(arr2[i])
//         }   
        
//     }
//     return arr1
// }

// console.log(difference(arr1,arr2));


//task7
// Funksiyanı yazın.
// console.log(deep([1, [2], [3, [[4]]],[5,6]]));
// Expected Output:
// [1, 2, 3, 4, 5, 6]


// const arr1 = [1, [2], [3, [[4]]],[5,6]]

// const arr2 = []
// function deep(arr1,arr2) {
//    arr2 = arr1.flat(3);

//     return arr2
// }

// console.log(deep(arr1,arr2));


// Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array , ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni deyilsə false qaytarsın.

// console.log(checkFactors([2,3,4,6],12))
// Expected Output:
// true
// console.log(checkFactors([2,3,4,5],12))
// Expected Output:
// false

// task8
// const arr = [2,3,4,5]
// let reqem = 12
// let counter = 0
// function checkFactors(arr,reqem) {
//     for (let i = 0; i < arr.length; i++) {
//         if(reqem % arr[i] == 0){
//             counter++
//         }
        
//     }
//     if(arr.length==counter){
//         return true 
//     }
//     else {
//         return false
//     }
// }

// console.log(checkFactors(arr,reqem));


// Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"

// const mySentence = "a short sentence";

// function sentenceCapitalization(mySentence) {
//     for (let i = 0; i < mySentence.length; i++) {
//     if(mySentence[i] == ''){
//         let boyuk_herf = mySentence.toUpperCase()
//     }
  
    
// }
//         return boyuk_herf
// }


// console.log(sentenceCapitalization(mySentence));
// const str = "    Hello World!    ";
// const trimmedStr = str.trim();
// console.log(trimmedStr); // Output: "Hello, World!"




// 1. Bir funksiya yazın. İki parametr qəbul etsin. Biri rəqəmlərdən ibarət array olsun, digəri isə sadəcə rəqəm. Funksiyanız arraydəki ədədlərin həmin rəqəmdən böyük olanlarını yeni bir arraydə qaytarmalıdır.

// const arr = [1,2,3,4,5,6,7,8,9]
// let num = 5
// const arr1 = []

// function max_arrays_elements(arr,num) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > num){
//             arr1.push(arr[i] + 10)
//         }
        
//     }
//     return arr1
// }

// console.log(max_arrays_elements(arr,num));

// array element elementin indeksin qaytar yoxdursa -1 qaytarsin 

const arr = [1,2,3,4,5,6,7,8,9]
let num = 9

function max_arrays_elements(arr,num) {
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] == num){
        return indexof(arr[i])
       }
       else{
        return -1
       }
        
    }
    
}
console.log(max_arrays_elements(arr,num));