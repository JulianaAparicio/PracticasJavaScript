const jsonHelper = require("./jsonHelper");

const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juliana Aparicio";
const tema = "1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const gestionDePeliculas = {
    // B
    peliculas: jsonHelper.leerJson("peliculas"),
    // C
    listarPeliculas: function (arrayPelis) {
        arrayPelis.forEach(pelicula => {
            let premiada = pelicula.fuePremiada ? "premiada" : "sin premios";
            console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración de ${pelicula.duracion} minutos, ${premiada} (${pelicula.calificacionIMDB}/10 en IMDB)`);
        });
    },
    // D
    buscarPorTitulo: function (titulo) {
        return this.peliculas.find((pelicula) => pelicula.titulo === titulo);
    },
    // E
    peliculasPremiadas: function () {
        return this.peliculas.filter((pelicula) => pelicula.fuePremiada === true);
    },
    // F
    filtrarPorDuracion: function (min, max) {
        return this.peliculas.filter((pelicula) => pelicula.duracion >= min && pelicula.duracion <= max);
    },
    // G
    ordenarPorCalificacion: function () {
        return this.peliculas.sort((a, b) => a.calificacionIMDB - b.calificacionIMDB);
    },
    // H
    duracionTotal: function () {
        let sumatoria = this.peliculas.reduce((acum, pelicula) => acum + pelicula.duracion, 0)
        return `La duración de todas las películas sumadas es de ${sumatoria} minutos`; 
    },
    // I
    premiarPeliculaPorTitulo: function (titulo) {
        let peliculaEncontrada = this.buscarPorTitulo(titulo);
        if (peliculaEncontrada){
            peliculaEncontrada.fuePremiada = true;
            jsonHelper.escribirJson("peliculas", this.peliculas);
        }
    }
};



/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí

gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);

console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí

console.log(gestionDePeliculas.buscarPorTitulo("Liebestraum"));

console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí

gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPremiadas());

console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí

gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorDuracion(200,450));

console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí

gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorCalificacion());

console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí

console.log(gestionDePeliculas.duracionTotal());

console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí

console.log(gestionDePeliculas.buscarPorTitulo("Career Girls"));
gestionDePeliculas.premiarPeliculaPorTitulo("Career Girls");
console.log(gestionDePeliculas.buscarPorTitulo("Career Girls"));

console.log(o);
