console.log("hej detta är if_sats lektion 2 ")


/* skriv ett program som låter användaren 
mata in sin ålder. Programmet ska avgöra 
om personen får kolla på en 15-årsgräns 
film på bio */

let age = prompt("Hur gammal är du?")

if (age <= 15) {
    console.log("Du får kolla på en 15-årsålder film")
} else if (age >=15) {
    console.log ("Du får kolla på en 18-årsålder film")
} else {
    console.log("Du får kolla på en 7-årsålder film")
}

/* utöka programmet till att kolla om 
användaren får titta på en 7-årsgräns 
på bio */

/* utöka programmet till att kolla om 
användaren får titta på en 18-årsgräns 
på bio */

// uppgift
/* en enkelbiljett: 30kr
en månadskort: 775kr
Fråga hur många gånger användaren 
åker spårvagn och avgör om det är värt 
att köpa månadskort eller inte. */
 let num = prompt ("Hur många gånger åker du?")
 if (num >= 26) {
     console.log("Köp månadskort som kostar 775kr")
 } else {
     console.log("Köp en enkelbiljett som kostar 30kr")
 }