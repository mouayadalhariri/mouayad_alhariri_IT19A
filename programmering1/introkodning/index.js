
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