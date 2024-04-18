// task1

// for (let i = 0; i < 5; i++) {
//     console.log((i+1) +  " Yusif");
    
// }


// task2
// for (let i = 20; i > 0; i--) {
//     console.log(i);
    
// }


// task3
// const arr = ["Bakı","Gəncə","Sumqayıt"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// for (const i of arr) {
//     console.log(i);
// }


// task4
// const arr = ["Bakı","Gəncə","Sumqayıt"]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] +  " indeks " +i);
    
// }

// for (const i of arr) {
//     console.log(i);
// }

// for (const i in arr) {
//     console.log(arr[i]);
// }

// task5
// const arr = [1,4,5,6,7,8,34,56,98]

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i];

// }
// console.log(sum);



// task6
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
    
// }


// task7
// for (let i = 0; i < 50; i+=3) {
//     console.log(i);
    
// }


// task8
// for (let i = 0; i < 50; i+=2) {
// console.log(i);    
// }


// task9
// for (let i = 0; i < 50; i+=8) {
// console.log(i);    
// }



// task10
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//     sum+=i

// }
// console.log(sum);



// task11
// let eded = Number(prompt("Eded daxil edin:"))

// let faktorial = 1

// for (let i = 1; i <= eded; i++) {
    
//     faktorial*=i
// }
// console.log(faktorial);


// task12
// for (let i = 0; i < 100; i++) {
//     if(i%15==0){

//         console.log(i + " FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log(i + " Fizz");
        
//     }
//     else if(i%5==0){

//         console.log(i + " Buzz");
//     }
      
// }


// task13
// let eded = Number(prompt("3 reqemli eded:"))

// let teklik = Math.floor(eded%10)
// let onluq = Math.floor((eded/10)%10)
// let yuzluk = Math.floor(eded/100)


// let isArmstrong = teklik**3 + onluq**3 + yuzluk**3;

// if(eded === isArmstrong){
//     console.log(eded + " Armstronq nömrəsidir");
// }



// task14
// let eded = Number(prompt("3 reqemli eded:"))

// let teklik = Math.floor(eded%10)
// let onluq = Math.floor((eded/10)%10)
// let yuzluk = Math.floor((eded/100)%10)
// let minlik = Math.floor(eded/1000)


// let First = onluq + minlik
// let Second = teklik + yuzluk


// console.log(First*Second);


// task15
// const arr = [1,3,5,7]
// let hasil = 1
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     hasil*=arr[i]
//     sum+=arr[i]

// }
// if(hasil%2==0){
// console.log(sum);
// }
// else{
//     console.log(0);
// }


// task16
// const arr = [2,4,3,14,8,9]
// let isCutdur = true

// for (let i = 0; i < arr.length; i++) {
    
//     if(arr[i] % 2 !== 0){
//         isCutdur =false
    
//         }
//     // else if(arr[i] % 2 === 0){
//     //     isCutdur=true
//     // }
// }

// console.log(isCutdur);


// task17
// const arr = [2,4,6,8]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]
// }
// console.log((sum/arr.length));


// task18
// let soz = prompt("Soz daxil edin:")
// let herf = prompt("Herf daxil edin: ")

// for (let i = 0; i < soz.length; i++) {
//     if(soz[i] === herf)    {
//         console.log("true");
//         break
//     }
//     else{
//         console.log("false");
//         break
        
//     }
// }


// task19
// let soz = prompt("Soz daxil edin:")
// let herf = prompt("Herf daxil edin: ")
// let count = 0
// for (let i = 0; i < soz.length; i++) {
//     if(soz[i] === herf)    {
//         count++
//     }
    
// }

// console.log(count);


// task20
// let soz = prompt("Soz daxil edin:")
// const saitler = ['a','ı','o','u','e','ə','i','ö','ü']
// let count = 0
// for (let i = 0; i < saitler.length; i++) {
//     for (let j = 0; j < soz.length; j++) {
//         if(soz[j] === saitler[i]){
//             count++
//         }
        
//     }
// }
// console.log(count);


// task21

// let eded = prompt("Ededi daxil edin:")
// let sum=0
// let hasil = 1
// for (let i = 0; i < eded.length; i++) {
//     sum+=Number(eded[i])
//     hasil*=Number(eded[i])
// }

// console.log("Cem: " + sum + "Hasil: " + hasil + "Ededi orta: " + (sum/eded.length));




// task22
// let eded = Number(prompt("Ededi daxil edin:"))

// for (let i = 0; i <= eded; i++) {
//     if(eded%i==0){
//         console.log(i);
//     }
// }


