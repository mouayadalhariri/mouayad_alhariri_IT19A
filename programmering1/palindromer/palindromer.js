//den här koden är för att 
let knapp = document.querySelector("#knapp")

let p_rak = document.getElementById("rak")

let p_reverse = document.getElementById("reverse")

let p_result = document.getElementById("result")



knapp.addEventListener("click", Palindrom)



 function Palindrom() {

    let string = document.querySelector("#input").value
    let res = string.split("");

    console.log(res)

    p_rak.innerHTML = string
    let rev = string.split("").reverse()
    console.log(rev)

    p_reverse.innerHTML = rev.join("")

    if (res.join("") === rev.join("")){
        console.log("Palindrom")
        p_result.innerHTML = "Palindrom"
        p_result.style.color = "white"
    } else {
        console.log("INTE")
        p_result.innerHTML = "Inte palindrom"
        p_result.style.color = "orange"
    }


}
