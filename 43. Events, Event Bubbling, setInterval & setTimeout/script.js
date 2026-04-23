let button = document.getElementById("btn")


document.addEventListener("click", ()=>{
//  alert("I was clicked. Yayyyy!")
    document.querySelector(".box").innerHTML = "You are clicked. Enjoy your click"
})

let btn = document.getElementById("btn1")
document.addEventListener("contextmenu", ()=>{
 alert("Dont hack us by right click please.") 
})