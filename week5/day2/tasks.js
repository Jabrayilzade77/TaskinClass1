// const Company = {
//     id:"4B9766FD-7407-4E0E-9F03-7FB43487E457",
//     brand:"HP",
//     model: "ProBook 450 15.6 inch G10 Notebook PC Wolf Pro Security Edition",
//     screen_size:"14-15 inc",
//     battery_level: "90%",
//     price: 2000,
//     count:10,
//     discount_percentage:10,
//     calculateProfit : function() {
//         let result = this.price - ((this.price*this.discount_percentage)/100)
//         return result * this.count
//     },
//     displayBatteryLevel: function () {
//         return `Batareya miqdari: ${this.battery_level}`
        
//     },x
//     displayDetails: function() {
//       return `Ekran olcusu: ${this.screen_size} \nBrand: ${this.brand} \nModel: ${this.model}`
//     },
//     calculateDiscount :function () {
//         return `Endirimli qiymet: ${this.price - ((this.price*this.discount_percentage)/100)}`
//     }
// }

// console.log(Company.calculateProfit());
// console.log(Company.displayBatteryLevel());
// console.log(Company.displayDetails());
// console.log(Company.calculateDiscount());

const Company1 = {
    id:"4B9766FD-7407-4E0E-9F03-7FB43487E457",
    brand:"HP1",
    model: "ProBook 450 15.6 inch G10 Notebook PC Wolf Pro Security Edition",
    screen_size:"14-15 inc",
    battery_level: "90%",
    price: 2000,
    count:10,
    discount_percentage:10,
    calculateProfit : function() {
        let result = this.price - ((this.price*this.discount_percentage)/100)
        return result * this.count
    },
    displayBatteryLevel: function () {
        return `Batareya miqdari: ${this.battery_level}`
        
    },
    displayDetails: function() {
      return `Ekran olcusu: ${this.screen_size} \nBrand: ${this.brand} \nModel: ${this.model}`
    },
    calculateDiscount :function () {
        return `Endirimli qiymet: ${this.price - ((this.price*this.discount_percentage)/100)}`
    }
}
const Company2 = {
    id:"4B9766FD-7407-4E0E-9F03-7FB43487E457",
    brand:"HP2",
    model: "ProBook 450 15.6 inch G10 Notebook PC Wolf Pro Security Edition",
    screen_size:"14-15 inc",
    battery_level: "90%",
    price: 3000,
    count:10,
    discount_percentage:10,
    calculateProfit : function() {
        let result = this.price - ((this.price*this.discount_percentage)/100)
        return result * this.count
    },
    displayBatteryLevel: function () {
        return `Batareya miqdari: ${this.battery_level}`
        
    },
    displayDetails: function() {
      return `Ekran olcusu: ${this.screen_size} \nBrand: ${this.brand} \nModel: ${this.model}`
    },
    calculateDiscount :function () {
        return `Endirimli qiymet: ${this.price - ((this.price*this.discount_percentage)/100)}`
    }
}
const Company3 = {
    id:"4B9766FD-7407-4E0E-9F03-7FB43487E457",
    brand:"HP3",
    model: "HP EliteBook 865 16 inch G10 Notebook PC Wolf Pro Security Edition",
    screen_size:"14-15 inc",
    battery_level: "90%",
    price: 4000,
    count:10,
    discount_percentage:10,
    calculateProfit : function() {
        let result = this.price - ((this.price*this.discount_percentage)/100)
        return result * this.count
    },
    displayBatteryLevel: function () {
        return `Batareya miqdari: ${this.battery_level}`
        
    },
    displayDetails: function() {
      return `Ekran olcusu: ${this.screen_size} \nBrand: ${this.brand} \nModel: ${this.model}`
    },
    calculateDiscount :function () {
        return `Endirimli qiymet: ${this.price - ((this.price*this.discount_percentage)/100)}`
    }
}

let product_array = [Company1,Company2,Company3]
const search_price = 2000
const newArr =  []
function FilterbyPrice (product_array, search_price) {
    // for (let i = 0; i < product_array.length; i++) {
    //     if(search_price<product_array[i].price){
    //         newArr.push(product_array[i].model)
    //     }
        
    // }
    let filtered=product_array.filter(x=>x.price>search_price)
    return filtered
}
let filteredProdcts=FilterbyPrice(product_array,search_price)
for (let i = 0; i < filteredProdcts.length; i++) {
    console.log(filteredProdcts[i].model);
    
}

// let search_name = "HP2"

// function FilterbyName (product_array, search_name) {
//     for (let i = 0; i < product_array.length; i++) {
//         if(product_array[i].brand === search_name){
//             return true
//         }
        
//     }
//     return false
// }

// console.log(FilterbyName(product_array, search_name));


// function GetTotalProfit (product_array) {
    
//     let sum = 0

//     for (let i = 0; i < product_array.length; i++) {
//         sum+=product_array[i].calculateProfit()
        
//     }
//     return sum
// }

// console.log(GetTotalProfit(product_array));


// function AddPrice (product_array) {
//     const newArr = []

//     for (let i = 0; i < product_array.length; i++) {
//         newArr.push((product_array[i].price)*10)
        
//     }
//     return newArr
// }

// console.log(AddPrice(product_array));