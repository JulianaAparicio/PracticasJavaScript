// -------------- 1

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

// console.log(peliculas[1]);

// --------------- 2

function aMayusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
}

// console.log(aMayusculas(peliculas)); 

// --------------- 3

let peliculas2 =["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"] 

function unirPeliculas(array1, array2){
    aMayusculas(array2)
    array1[1] = array1[1].toUpperCase()
    array1.push(array2[0]);
    array1.push(array2[1]);
    array1.push(array2[2]);
    array1.push(array2[3]);
    array1.push(array2[4]);
    return array1
}

// console.log(unirPeliculas(peliculas, peliculas2));


// ----------- 4
/* 
let miListaDePeliculas = unirPeliculas(peliculas, peliculas2);

let elementoBorrado = miListaDePeliculas.pop()

console.log(elementoBorrado," fue eliminado. La lista queda asi: ", miListaDePeliculas);
 */
// ----------- 5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararScores(array1, array2){
    let auxiliar = []
    if (array1[0]===array2[0]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }

    if (array1[1]===array2[1]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[2]===array2[2]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[3]===array2[3]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[4]===array2[4]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[5]===array2[5]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[6]===array2[6]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[7]===array2[7]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    if (array1[8]===array2[8]){
        auxiliar.push("Iguales")
    } else {
        auxiliar.push("Distinto")
    }
    return auxiliar
}

console.log(compararScores(asiaScores,euroScores));