function get_id(id){
    return document.getElementById(id).value
}

function repair_number(x){
    if(x < 0) return `(${x})`
    else return x
}

function czyNaN(x){
    if(isNaN(x)) return 'Podana wartość nie jest liczbą.'
    else return x
}

function toFloat(x){
    x = parseFloat(x)
    if(!isNaN(x)) return x
    else return 'Podana wartość nie jest liczbą.'
}

function napisz(content){
    return document.getElementById('wynik').innerHTML = content
}

function isZero(x){
    if(x == 0) return 'Nie wolno dzielić przez zero!'
    else return x
}

function pobierz(){
    let numbers = {
        a: czyNaN(get_id('a')),
        b: czyNaN(get_id('b'))
    }
    return numbers
}

//main function's
async function dodaj(){
    
    let numbers = pobierz()

    numbers.a = toFloat(numbers.a)
    numbers.b = toFloat(numbers.b)

    const wynik = numbers.a + numbers.b
    const total = `Wynik dodawania liczb <br> ${repair_number(numbers.a)} + ${repair_number(numbers.b)} = <b> ${repair_number(wynik)} </b>`
    napisz(total)
}

async function odejmij(){
    
    let numbers = pobierz()

    numbers.a = toFloat(numbers.a)
    numbers.b = toFloat(numbers.b)

    const wynik = numbers.a - numbers.b
    const total = `Wynik odejmowania liczb <br> ${repair_number(numbers.a)} - ${repair_number(numbers.b)} = <b> ${repair_number(wynik)} </b>`
    napisz(total)

}

async function mnoz(){

    let numbers = pobierz()

    numbers.a = toFloat(numbers.a)
    numbers.b = toFloat(numbers.b)

    const wynik = numbers.a * numbers.b
    const total = `Wynik mnożenia liczb <br> ${repair_number(numbers.a)} * ${repair_number(numbers.b)} = <b> ${repair_number(wynik)} </b>`
    napisz(total)

}

async function dziel(){

    let numbers = pobierz()

    numbers.a = toFloat(numbers.a)
    numbers.b = isZero(toFloat(numbers.b))

    const wynik = numbers.a / numbers.b
    const total = `Wynik dzielenia liczba <br> ${repair_number(numbers.a)} : ${repair_number(numbers.b)} = <br> ${repair_number(wynik)} </b>`
    napisz(total)

}
