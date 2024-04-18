fetch("http://localhost:3000/urunadi")
.then((x)=>x.json())
.then(data=>cards(data))



const row = document.querySelector(".row")

function cards(products) {
  products.forEach(element => {
    row.innerHTML += `<div class="col-sm">
    <div class="card">
        <img class="card-img-top" src=${element.image} alt="Card image cap" >
        <div class="card-body">
        <a href="detail.html?id=${element.id}">
        <h5 class="card-title">${element.title}</h5>
        </a>
         
          <p class="card-text"><span style="font-weight:bold">Price:</span> ${element.price} $</p>
          <p class="card-text" ><span style="font-weight:bold">Category:</span> ${element.category}</p>
          <p class="card-text" style="font-weight:bold">Rating: ${element.rating?.rate}⭐️</p>
          
        </div>
      </div>
  </div>`
});
}












































// const sorted = document.getElementById("sorted")
// let arr = []

// sorted.addEventListener("click",function (e) {
//   e.preventDefault()
//   fetch("http://localhost:3000/urunadi")
//   .then((x)=>x.json())
//   .then(data=>function () {
//     arr.push(data.price)
//   })

//   console.log(arr);
// })

