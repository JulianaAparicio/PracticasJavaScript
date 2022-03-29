const { array } = require("prop-types")

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

let peliculas2 = ["star trek", "blabla",  "rocky 2", "pulpo ficcion",  "la vida es fea"]

function convertirAMayusculas(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
    }
    return array
  }

function pasajeDeElementos(array1, array2) {
    let largo = array1.length
    for (let i = 0; i < largo; i++){
        if (array2[i]==="la vida es fea"){
            let infiltrado = array2[i]
        }
        array1.push(array2.pop().toUpperCase())
    }
    return array1
  }

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
  
function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = []
    for (let i = 0; i < asia.length; i++){
        comparacionesAsiaEuropa[i] = asia[i] === europa[i]
    }
    return comparacionesAsiaEuropa
  }


let A = [5,8,4,9,5]
let B = [8,7,8,6,8]
let C = [7,5,10,8,3]

function puntajePromedio(participante){
    let total = 0
    for (let i = 0; i < participante.length; i++){
        total = total + participante[i]
    }
    return total/participante.length
}

function puntajeMayor(participante){
    let mayor = 0;
    for (let i = 0; i < participante.length; i++){
        if (participante[i] > mayor){
            mayor = participante[i]
        }
    }
    return mayor
}

function competencia(primero, segundo, tercero){
    let prmayor = 0
    let ganadorpr = ""
    let prPrimero = puntajePromedio(primero)
    let prSegundo = puntajePromedio(segundo)
    let prTercero = puntajePromedio(tercero)

    if (prPrimero > prSegundo && prPrimero > prTercero){
        prmayor = prPrimero
        ganadorpr = "A";
    }
    else if (prSegundo > prTercero){
        prmayor = prSegundo
        ganadorpr = "B";
    }
    else {
        prmayor = prTercero
        ganadorpr = "C";
    }

    let pumayor = 0
    let ganadorPu = ""
    let puPrimero = puntajeMayor(primero)
    let puSegundo = puntajeMayor(segundo)
    let puTercero = puntajeMayor(tercero)

    if (puPrimero > puSegundo && puPrimero > puTercero){
        pumayor = puPrimero
        ganadorPu = "A";
    }
    else if (puSegundo > puTercero){
        pumayor = puSegundo
        ganadorPu = "B";
    }
    else {
        pumayor = puTercero
        ganadorPu = "C";

    }

    return "El promedio mayor es " + prmayor + " del ganador " + ganadorpr + " y el mejor puntaje es de " + pumayor + " del ganador " + ganadorPu
}

console.log(competencia(A,B,C));