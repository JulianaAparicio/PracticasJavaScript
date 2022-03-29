//Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura debe ser mayor a 1,30 m.
function subirMontaña (edad, altura) {
    let edadLimite = 12 
    let alturaLimite = 130
    return edad > edadLimite && altura > alturaLimite
}

console.log (subirMontaña(15,125))

//Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos debe usar el flash.

function usarFlash (hayLuz, hayMovimiento) {
    return !hayLuz  || hayMovimiento 
}


console.log(usarFlash(true,false));

//Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones parciales, o si obtiene un 4 en el examen final. 

function aprobado (nota1, nota2, final) {
    return (nota1 > 7 && nota2 > 7) || final >= 4; 
}

console.log(aprobado(2,3,8))

//Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus prácticas de piano y lo hizo de memoria.

function verTelevision(tarea,practicaPiano, practicaMemoria) {
    return tarea && (practicaMemoria && practicaPiano)
}

console.log(verTelevision(true,true,false))