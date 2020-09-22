let weight = prompt("Hur mycket vikt har du med dig?")
let längd = prompt("Hur lång är din väska?")
let bredd = prompt("Hur mycket bredd har du?")
let höjd = prompt("Hur hög är din väska?")

if (weight >= 8 || längd >=55 || bredd >=40 || höjd >= 23) {
    console.log("vikten är inte godkänd")
} else {
    console.log("Godkänd")
}
