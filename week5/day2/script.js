// const masinlar = {
//     marka:"BMW",
//     model:"F10",
//     reng:"purple",
//     sayHi: function () {
//         console.log(this.reng);
//     }
// }

// console.log(masinlar.marka);
// console.log(masinlar.model);
// console.log(masinlar["reng"]);

// masinlar.sayHi()


// const friend = []

// const friends = {
//     name:"Yusif"
// }

//     for (let i = 0; i < 3; i++) {
//         friend.push(friends.name) 
// }

// console.log(friend);


// const friends = []

// function addFriend(friends) {
//     const name = prompt("Adinizi yazin ")
//     const age = prompt("Yasinizi yazin ")

//     const obj = {
//         name,
//         age
//     }

//     friends.push(obj)

// }

// for (let i = 0; i < 3; i++) {
//     addFriend(friends)
    
// }

// console.log(addFriend(friends));


// const masinlar = {
//     marka:"BMW",
//     model:"F10",
//     reng:"purple",
    
// }

// const result = Object.keys(masinlar)
// const result1 = Object.values(masinlar)
// const result2 = Object.entries(masinlar)


// console.log(result);
// console.log(result1);
// console.log(result2);


// const person = {
//     fullName: function (name,age) {
//         return this.name + " " + " " + this.age
        
//     }
// }

// const person1 = {
//     name: "Yusif",
//     age: 20
     
// }

// const result1 = person.fullName.apply(person1,["Yusif",20]);
// const result2 = person.fullName.call(person1,"Yusif",20);

// console.log(result1);
// console.log(result2);


// const person = {
//     name: "Esed",
//     age:19,
//     fullName: function (greeting) {
//         return this.name + " " + " " + this.age + " " + greeting
        
//     }
// }

// const person1 = {
//     name: "Yusif",
//     age: 20
     
// }

// let cagiris = person.fullName.bind(person1)

// const result1 = person.fullName.apply(person1,["Yusif",20]);
// const result2 = person.fullName.call(person1,"Yusif",20);





// console.log(result1);
// console.log(result2);
// console.log(cagiris("Xos geldiniz"));
