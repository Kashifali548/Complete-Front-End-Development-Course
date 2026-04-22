// try all these mthod in browser console

document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTML
document.querySelector(".container").tagName
document.querySelector(".container").textContent
document.querySelector(".box").innerHTML = "Hey I am Kashif Ali" 

document.querySelector(".box").attributes
document.querySelector(".box").hasAttribute
document.querySelector(".box").getAttribute
document.querySelector(".box").setAttribute
document.querySelector(".box").className
document.querySelector(".box").classList
document.querySelector(".box").classList.add
document.querySelector(".box").classList.remove
document.querySelector(".box").classList.toggle


let div = document.createElement("div");
div.innerHTML = "I have inseted by <b>Kashif Ali</b>"
div.setAttribute("class", "created");
// document.querySelector(".container").append(div); 
document.querySelector(".container").after(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforeend", "Hello my name is <b>Kashif Ali</b>")