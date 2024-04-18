const btn_icon = document.querySelector(".btn_icon")
const icon_list = document.querySelector(".icon_list")


btn_icon.addEventListener("click",function (e) {
    e.preventDefault()
    icon_list.style.display = "flex"
})