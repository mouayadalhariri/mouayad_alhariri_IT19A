// modulusoperator
console.log(`${5%2}`)

// avgöra om talet är jämnt eller udda
let tal = 5
// tal%2 är 0: jämnt
// tal%2 är 1: udda

if (tal%2 === 0) {
    console.log("jämnt")
} else {
    console.log("udda")
}

// uppgift
// 1. låt användaren skriva in ett tal
// 2. avgör om talet är positivt, 0 eller negativt
let tal1 = prompt("Ange ett tal: ")

if (tal1 > 0 ){
    console.log("positivt")
} else if (tal1 == 0){
    console.log("Talet är 0")
}else {
    console.log("negativt")
}
