
// skapar en variabel som heter name och tilldelar det värdet "Mouayad"
let name = "Mouayad" // sträng
let age = 18 // heltal, int

console.log(`Hej ${name} du är ${age} år gammal`)

if (age >= 18){
    console.log("Du är vuxen")
} else {
    console.log("Du är barn")
}

// DOM - Document Object Model
let text = document.querySelector("#text")
text.innerHTML = `hej`

// skapar variable för p-taggarna
let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

let button = document.querySelector("#knapp")

// lägger till en eventlyssnare till knappen
button.addEventListener("click", math)

function math(event){
    console.log("math-funktionen köra")

    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)
   add.innerHTML = `${num1}+${num2}=${num1+num2} `
   sub.innerHTML = `${num1}-${num2}=${num1-num2} `
   mult.innerHTML = `${num1}*${num2}=${num1*num2} `
   div.innerHTML = `${num1}/${num2}=${num1/num2} `
}