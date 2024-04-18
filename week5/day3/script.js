// Array.prototype.yusifEach = "Hi"

// Array.prototype.yusifEach = function () {
//     console.log("Salam",this);
// }

// Array.prototype.yusifEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i])      
//     }
// }

// const arr1 = [1,2,3,4]
// const arr2 = [-1,2,-4]
// const arr3 = [1,2,3,4]

// // console.log(arr1.yusifEach);
// // arr1.yusifEach()

// arr2.yusifEach(x=>x>0 && console.log(x))


function Milk(id,name,price,fatPercent,madeİn) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.fatPercent = fatPercent;
    this.madeİn = madeİn;
}

const myMilk1 = new Milk("1","Pea milk",20,2,"China")
const myMilk2 = new Milk("2","Coconut milk",10,3,"America")
const myMilk3 = new Milk("3","Rice milk",15,5,"Azerbaycan")

const newArr = []
newArr.push(myMilk1,myMilk2,myMilk3)
// task1.1
// newArr.forEach(x=>console.log(x))
// console.log(newArr);

//task1.2
// newArr.forEach(x => x.id === "1" && console.log(x))

// const found = newArr.find((x) => x.id=="1")
// console.log(found);


//task 1.3
// const sum = 0
// const edediOrta = newArr.reduce(
//     (accumulator, currentValue) =>  accumulator + currentValue.fatPercent,sum,
// )

// console.log(edediOrta/3);

//task 1.4


// const check = newArr.filter((x) => x.fatPercent>3)
// check.forEach(x=>console.log(x))


//task 1.5 

// function Artir(newArr,number) {
//    newArr.map((x) => x.price+=number)
//    return newArr
// }

// console.log(Artir(newArr,5));


//task 1.6
// let sum = 0
// function PriceQaytar(newArr) {
//     newArr.map(x=> sum+=x.price)
//     return sum
// }

// console.log(PriceQaytar(newArr));

//task 1.7
// newArr.forEach(x => x.id === "1" && console.log(x))

// const found = newArr.find((x) => x.id=="1")
// console.log(found);

//task 1.8

//   let maxPrice=  newArr.sort((a, b) => a.price - b.price);
// console.log(murad[newArr.length-1].name);
 

//task 1.9
// let sorted=  newArr.sort((a, b) => a.price - b.price);
// const enBoyuk = sorted[newArr.length-1].price;
// const enKicik = sorted[0].price;
// const result = enBoyuk - enKicik
// console.log(result);


// newArr.forEach(x=> x.madeİn==="Azerbaycan" ? console.log(true): console.log(false))


//task 1.10
// console.log(newArr.some((x) => x.madeİn === "Azerbaycan"));







function Employee (name,surname,age,isMale =true,department,experienceYear,salary =0) {
    this.name = name
    this.surname = surname
    this.age = age
    this.isMale = isMale
    this.department = department
    this.experienceYear = experienceYear
    this.salary = salary
}

const FirstPerson = new Employee("John","Doe",20,"man","vfgvfdv",2020,20000)


// function getFullName(FirstPerson) {
//     return FirstPerson.surname[0] + "." + FirstPerson.name.toUpperCase()
    
// }

// console.log(getFullName(FirstPerson));

// function generateID(FirstPerson) {
//     return FirstPerson.department.slice(0,2).toUpperCase() + Math.floor(1000+Math.random() * 9000);

// }

// console.log(generateID(FirstPerson));

