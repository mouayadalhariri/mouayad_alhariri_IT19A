console.log("Uppgift 5, räkna ord i en mening")

// Skapa en variabel som heter mening
// Ge den värdet "Skolan är öppen"
let mening = prompt("Skriv in din mening")

// Räkna ord i de meningen
// Delat upp mening till en lista av ord separerade med mellanslag
let ordlista = mening.split(" ")
let antal_ord = ordlista.length // Detta ger oss längden av en lista 
console.log(ordlista)

// Vill skriva Antal or i listan är 7 st
console.log(`Antal ord i listan är ${antal_ord} st`)