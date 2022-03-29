//Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en las siguientes condiciones:
//Debe medir más o igual de 1,40m y menos de 2 metros.
//Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
//Si mide menos de 1,20m, no podrá subir ni acompañado.

function puedeSubir (altura, acompañado, penalizado){
    if(altura >= 1.4 && altura < 2){
        return true;
    } else if(altura < 1.4 && altura >= 1.2 && acompañado){
        return true;
    } else{
        return false;
    }
}

//Modificar la función para impedir la subida al juego si la persona fue penalizada por no respetar las normas y reglas del juego.

function puedeSubir (altura, acompañado, penalizado){
    if (penalizado){
        return false;
    }else{
        if(altura >= 1.4 && altura < 2){
            return true;
        } else if(altura < 1.4 && altura >= 1.2 && acompañado){
            return true;
        } else{
            return false;
        }
    }
    }
    