let colorPicker = document.querySelector("#rektangel")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundColor = "gold"

colorPicker.addEventListener("change", colorchanger)

function colorchanger(event){
let color = event.target.value;
console.log(color)
 

}