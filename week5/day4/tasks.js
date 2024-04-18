// class Car{
//     constructor(brend,model,color,year,speed,fuelCapacity,km,fuelFor1km,currentFuel){
//         this.brend = brend
//         this.model = model
//         this.color = color
//         this.year = year
//         this.speed = speed
//         this.fuelCapacity = fuelCapacity
//         this.km = km
//         this.fuelFor1km = fuelFor1km
//         this.currentFuel = currentFuel
//     }

//     showInfo(){
//         return `Brend: ${this.brend}\nModel: ${this.model}\nColor: ${this.color}\nYear: ${this.year}\nSpeed: ${this.speed}\nFuelCapacity: ${this.fuelCapacity}\nKm: ${this.km}\nFuelFor1km: ${this.fuelFor1km}`

//     }
//     AddFuel(yanacaq){
//         if(yanacaq+this.currentFuel>this.fuelCapacity){
//             return "yanacaq çənində yetəri qədər yer yoxdur."
//         }
//         else{
//             return `yanacaq uğurla əlavə olundu" + ${this.currentFuel += yanacaq}`
//         }
//     }
//     Drive(gedilecekYol){

//         if(this.fuelFor1km*gedilecekYol >= this.currentFuel){
//             return "yetəri qədər yanacaq yoxdur"
//         }
//         else{
//             return `ünvana çatdıq ${this.currentFuel} 
// Brend: ${this.brend}\nModel: ${this.model}\nColor: ${this.color}\nYear: ${this.year}\nSpeed: ${this.speed}\nFuelCapacity: ${this.fuelCapacity}\nKm: ${this.km}\nFuelFor1km: ${this.fuelFor1km}`
//         }
//     }
// }
// const masin = new Car("BMW","F10","purple",2018,200,60,3000,100,20)
// // console.log(masin);
// console.log(masin.showInfo());

// const masin1 = new Car("BMW","F10","purple",2018,200,60,3000,5,20)
// // console.log(masin1.AddFuel(40));

// console.log(masin1.Drive(2));



class Human{
    constructor(name,surname,age=0,gender,nationally){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.nationally = nationally;
    }
    getFullName(){

    }
    getBirthYear(){

    }
    newDate(){

    }
    currentYear(){

    }
}

class User extends Human{
    constructor(name,surname,age=0,gender,nationally,username,email,isAdmin,isLogged,password,bio){
        super(name,surname,age,gender,nationally);
        this.username = username
        this.email = email
        this.isAdmin = isAdmin
        this.isLogged = isLogged
        this.password = password
        this.bio = bio
    }
    changePassword (currentPassword,newPassword){
        if(this.password === currentPassword){
            
            if(this.password === newPassword){
                alert("Eynidir.")
            }else{
                this.password = newPassword
                return this.password
            }
        
        }
        else{
            alert("kohne parol yalnisdir.")
        }
        
    }
    changeEmail(usersArray,newEmail ){
      
        for (let i = 0; i < usersArray.length; i++) {
            
                const yoxlama = usersArray.find((x)=> x.email === newEmail)
                if(yoxlama){
                    alert("var")
                }
                else{
                    usersArray.email = newEmail
                    return usersArray
                }
            
            
        }
    }
}


const user1 = new User("yuska1","esed77@gmail.com",true,true,"123456789","Men Yusif adminem","yusif","hfudg",20,"male","azeri")
const user2 = new User("esed","esed77@gmail.com",true,true,"123456789","Men Yusif adminem")
const user3 = new User("rufet","rufet@gmail.com",true,true,"123456789","Men Yusif adminem")
const usersArray = [user1,user2,user3]
// console.log(user1.changePassword("123456789","yusifadmin"));
console.table(user1);
console.log(user1.changeEmail(usersArray,"ysuifcebrayilzade@gmail.com"))