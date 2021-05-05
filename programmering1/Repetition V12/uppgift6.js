console.log("Upggift 6");

// Skapa en variabel tal och ge den värdet 5

function tecken(tal){
    // Checka om talet är positivt, negativt eller noll
    if (tal > 0){
        return "Positivt"
    }else if (tal < 0){
        return "Negative"
    }else {
        return "Noll"
    }

}

// anropa funktionen med inparametern 5
console.log(`-1 är ${tecken(-1)}`)