let namn="Mouayad"

function sayhello(){
    let alder = 18
    console.log(`Hej ${name}, du är ${alder} år gammal`)
}

sayhello()


function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera (2,5)}`)

function subtrhera(tal1, tal2){
    let summa = tal1-tal2
    return summa
}

console.log(`10-5=${subtrhera (2,5)}`)

function dividera(tal1, tal2){
    let summa = tal1/tal2
   if (tal2 == 0){
       return "får ej dela med 0"
   }
    return summa
}

console.log(`15/5=${dividera (15,5)}`)

function multiplicera(tal1, tal2){
    let summa = tal1*tal2
    return summa
}

console.log(`4*16=${multiplicera (4,16)}`)

function CirkelArea(radie){
    let area = Math.PI*radie**2
    return area
}

let area10 = CirkelArea(10)

console.log(`Arean av en cirkel med radie 10 l.e. är ${area10} a.e.`)