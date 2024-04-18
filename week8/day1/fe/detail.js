let id = new URLSearchParams(location.search).get("id");
fetch("http://localhost:3000/urunadi/" + id)
  .then((x) => x.json())
  .then((data) => console.log(data));

const img_detail = document.querySelector(".img_detail");
const detail_title = document.querySelector(".detail_title");
const detail_price =  document.querySelector(".detail_price");
const price_category =  document.querySelector(".price_category");
const price_count =  document.querySelector(".price_count");
const price_description =  document.querySelector(".price_description");
const price_rating =  document.querySelector(".price_rating");


function createCrad(image,title, price, category,  count,description, rating) {
    
}
