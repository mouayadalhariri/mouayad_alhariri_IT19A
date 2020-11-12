console.log("Strings")

// konkatenering

let fornamn = "Mouayad"
let efternamn = "Alhariri"
let namn = fornamn + " " + efternamn
let adress = "kronhusgatan 9"
let telefon = "112"
let alder = "18 år"

/*
Namn: Mouayad Alhariri
Ålder: 18 år
Adress: Kronhusgatan 9
Telefon: 112
*/

console.log("Namn: " + namn +"\n" + "adress: " + adress +"\n" + "Telefon: " + telefon +"\n" + "Ålder: " + alder)


let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "adress: " + adress +"<br>" + "Telefon: " + telefon +"<br>"+ "Ålder: " + alder

// indexering
let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabet.length
console.log(`Antal bokstaver i alfabetet är ${antal_bokstaver}`)