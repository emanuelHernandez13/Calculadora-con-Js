let ac = document.getElementById('ac');
let cero = document.getElementById('cero');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let igual = document.getElementById('igual');
let punto = document.getElementById('punto');
let suma = document.getElementById('suma');
let division = document.getElementById('dividir');
let porcentaje = document.getElementById('porcentaje');
let multiplicacion = document.getElementById('multip');
let resta = document.getElementById('resta');
let borrar = document.getElementById('borrar');

// Obtener valor de contenedor de datos
const tomandoDigitos =(x) => {
    let allResult = document.getElementById('allResults').innerHTML += x;
    console.log(x)
}

// Limpiar pantalla
const limpiarPantalla = () => {
    document.getElementById('allResults').innerHTML =" ";
}

const escribirenPantalla = () => {
   let result = eval(document.getElementById("allResults").innerHTML);
   document.getElementById("allResults").innerHTML = result;
}

// tomando todos los datos
cero.addEventListener("click", () => {
    tomandoDigitos(cero.value)
})

uno.addEventListener('click', () => {
    tomandoDigitos(uno.value)
})

dos.addEventListener("click", () =>{
    tomandoDigitos(dos.value)
})

tres.addEventListener("click", ()=> {
    tomandoDigitos(tres.value)
})

cuatro.addEventListener("click", () => {
    tomandoDigitos(cuatro.value)
})

cinco.addEventListener("click", () => {
    tomandoDigitos(cinco.value)
})

seis.addEventListener("click", () => {
    tomandoDigitos(seis.value)
})

siete.addEventListener("click", () => {
    tomandoDigitos(siete.value)
})

ocho.addEventListener("click", () => {
    tomandoDigitos(ocho.value)
})

nueve.addEventListener("click", () => {
    tomandoDigitos(nueve.value)
})


// Operadores
punto.addEventListener("click", () => {
    tomandoDigitos(punto.value)
})

suma.addEventListener("click", () => {
    tomandoDigitos(suma.value)
})

resta.addEventListener("click", () => {
    tomandoDigitos(resta.value)
})

division.addEventListener("click", () => {
    tomandoDigitos(division.value)
})

cuatro.addEventListener("click", () => {
    tomandoDigitos(cuatro.value)
})

multiplicacion.addEventListener("click", () => {
    tomandoDigitos(multiplicacion.value)
})

porcentaje.addEventListener("click", () => {
    tomandoDigitos(porcentaje.value)
})

// Resultado
igual.addEventListener("click", () => {
    escribirenPantalla()
})

borrar.addEventListener("click", () => {
    limpiarPantalla()
})

ac.addEventListener("click", () => {
    limpiarPantalla()
})

















