//task 1

//let reqem = prompt("Saniyeni daxil edin:")
// let deqiqe = Math.floor(reqem/60);
// let saniye = reqem%60;

// console.log(deqiqe + " deqiqe " + saniye + " saniye ");

// task2
// let temperatur = prompt("Temperaturu daxil edin:")
// let selsi = 5/9 * (temperatur-32);

// console.log(selsi);

// task3
// let reqem1 = Number(prompt("First value:"));
// let reqem2 = Number(prompt("Second value:"));
// let reqem3 = Number(prompt("Three value:"));
// let reqem4 = Number(prompt("Fourth value:"));
// let reqem5 = Number(prompt("Fifthy value:"));

// let sum = Number(reqem1+reqem2+reqem3+reqem4+reqem5);
// let result = Number(sum/5);

// console.log(result);

// task4
// let tarix = Number(prompt("Dogum ilinizi daxil edin:"))
// let yas = 2024 - tarix;
// console.log(yas);

// task5
// let eded = Number(prompt("Ededi daxil edin:"))
// let faiz = Number(prompt("Faizi daxil edin"));

// let result = (eded*faiz)/100;

// console.log(result);

// task6
// let katet1 = Number(prompt("1ci kateti daxil edin:"))
// let katet2 = Number(prompt("2ci kateti daxil edin:"))

// let result = (katet1*katet2)/2;

// console.log(result);

// task7
// let pul = Number(prompt("Kredit miqdarini daxil edin:"));
// let faiz = Number(prompt("Faiz derecesini daxil edin:"));
// let muddet = Number(prompt("Kredit muddetini daxil edin:"));

// let reqem = (pul*faiz)/100;
// pul += reqem;
// let result = Number(pul/muddet);

// console.log(result);

// task8
// let ad = prompt("Adinizi daxil edin:");
// let soyad = prompt("Soyadinizi daxil edin:");

// console.log(`Salam ${ad} ${soyad}`);

// task9
// let teref = Number(prompt("terefi daxil edin:"))

// let perimetr = teref*4;
// let sahe = teref**2;

// console.log(`perimetr ${perimetr} sahe ${sahe}`);

// task10
// let eded1 = Number(prompt("Eded 1 :"))
// let eded2 = Number(prompt("Eded 2 :"))

// let ceminKubu = (eded1+eded2)**3;
// let kublarCemi = (eded1**3) + (eded2**3);

// console.log(`cemin kubu ${ceminKubu} kublar cemi ${kublarCemi}`);

// task11
// let yas = Number(prompt("yasinizi daxil edin:"))

// if(yas > 0 && yas > 125){
//     console.log("Siz pensiya yasina catmisiniz.");
// }
// else{
//     console.log("Siz pensiya yasina catmamisiz..");
// }

// task12
// let teref1 = Number(prompt("teref 1:"))
// let teref2 = Number(prompt("teref 2:"))
// let teref3 = Number(prompt("teref 3:"))

// if(teref1>0 && teref2>0 && teref3>0){
//     if(teref1==teref2 && teref2==teref3 && teref1==teref3){
//     console.log("Beraberterefli ucbucaq");
// }
// else if(teref1==teref2 || teref2==teref3 || teref1==teref3){
//     console.log("Beraberyanli ucbucaq");
// }
// else{
//     console.log("Muxtelif terefli ucbucaq");
// }
// }
// else {
//     console.log("Ededler musbet deyil");
// }

// task13
// let reqem = Number(prompt("Ededi daxi edin:"))

// if(reqem>0){
//   if(reqem%2 == 0){
//     console.log("Eded cutdur");
// }
// else{
//     console.log("Eded tekdir");
// }
// }
// else{
//     console.log("Eded musbet deyil");
// }


// task14
// let month = Number(prompt("Ayi daxil edin:"));

// switch (month) {
//   case 1:
//     console.log("Yanvar") ;
//     break;
//   case 2:
//     console.log("Fevral");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Aprel");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Iyun");
//     break;
//   case 7:
//     console.log("Iyul");
//     break;
//   case 8:
//     console.log("Avqust");
//     break;
//   case 9:
//     console.log("Sentyabr");
//     break;
//   case 10:
//     console.log("Oktyabr");
//     break;
//   case 11:
//     console.log("Noyabr");
//     break;
//   case 12:
//     console.log("Dekabr");
//     break;
// }


// task15
// let eded = Number(prompt("Ededi daxil edin:"))

// if(eded%5==0 && eded%3==0){
//     console.log("Eded 3 e ve 5 e tam bolunur");
// }
// else{
//     console.log("Eded bolunmur");
// }


// task16
// let reqem = Number(prompt("Ededi daxil edin:"))

// if(reqem>0){
//     if(reqem%2==0){
//         console.log("bölündü");
//     }
//     else{
//         console.log(reqem%2);
//     }
// }



// task17
// let eded1 = Number(prompt("1ci Ededi daxil edin:"))
// let eded2 = Number(prompt("2ci Ededi daxil edin:"))

// let hasil = eded1*eded2;

// if(hasil >=0){
// console.log("Eded musbetdir");
// }
// else{
//     console.log("Eded menfidir");

// }


// task18
// let reqem = Number(prompt("Ededi daxil edin:"))


// if(reqem>=1 && reqem<=100){
//     console.log("Eded araliqdadir");
// }
// else{
//     console.log("Eded araliqda deyil");
// }


// task19
// let eded1 = Number(prompt("1ci Ededi daxil edin:"))
// let eded2 = Number(prompt("2ci Ededi daxil edin:"))
// let eded3 = Number(prompt("3ci Ededi daxil edin:"))

// if(eded1 >eded2 && eded1>eded3){
//     console.log(eded1);
// }

// else if(eded2>eded1 && eded2>eded3){
//     console.log(eded2);
// }
// else if(eded3>eded1 && eded3>eded2){
//     console.log(eded3);
// }



// task20
// let bal = prompt("Balinizi daxil edin:")


// if(bal >=90){
//     console.log("A");
    
// }
// if(bal >=80 && bal<=89){
//     console.log("B");
    
// }
// if(bal >=70 && bal <= 79){
//     console.log("C");
    
// }
// if(bal >=60 && bal <= 69){
//     console.log("D");
    
// }
// if(bal <=60){
//     console.log("F");
    
// }




// task21
// let yas = Number(prompt("Yasinizi daxil edin:"))
// if(yas < 18){
//     console.log("Yeniyetmə");
// }
// else if(yas >= 18 && yas <=64){
//     console.log("Yetkin");
// }
// else if(yas >= 65){
//     console.log("Yaşlı");
// }


// task22
// let x = Number(prompt("x:"))
// let y = Number(prompt("y:"))

// if( x>0 && y<0 ){
//     console.log(4*x+2*y+4);
// }
// else if(x>0 && y==0){
// console.log(2*x-y+3 ); 
// }
// else if( x<0 && y>0){
//     console.log(3*x+4*y+3);
// }



// task23
// let reqem1 = Number(prompt("reqem 1:"))
// let reqem2 = Number(prompt("reqem 2:"))
// let emel = Number(prompt("Riyazi emel daxil edin: 1(toplama) 2(cixma) 3(vurma) 4(bolme)"))


// switch (emel) {
//     case 1:
//         console.log(reqem1+reqem2);
//         break;
//     case 2:
//         console.log(reqem1-reqem2);
//         break;
//     case 3:
//         console.log(reqem1*reqem2);
//         break;
//     case 4:
//         console.log(reqem1/reqem2);
//         break;
//     default:
//         console.log("Zəhmət olmasa düzgün əməl daxil edin");
//         break;
// }




let randomEded =Math.floor( Math.random() * 100);
let bizimEded = Number(prompt("Bir eded daxil edin:"))


let randomonluq = Math.floor(randomEded/10)
let randomteklik = Math.floor(bizimEded%10)

let reqemonluq = Math.floor(bizimEded/10);
let reqemteklik = Math.floor(bizimEded%10)

console.log(randomEded);
if(randomEded==bizimEded){
    console.log( "Siz 1000 manat qazandınız yazın");
}
else if(randomonluq==reqemteklik && randomteklik==reqemonluq){
    console.log( "Siz 500 manat qazandınız");
}
else if(randomonluq==randomteklik || randomonluq==reqemonluq){
    console.log(" Siz 100 manat qazandınız");
}
else {
    console.log("Bir daha sınayın");
}


