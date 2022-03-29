const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);


const jsonHelper = require("./lecturaEscritura");
let arrDeptos = jsonHelper.leerJson("departamentos") 
// importo el array de deptos en formato json, a mi variable arrDeptos. No sirve tenerlo si puedo llamar directo en mi obj.

const inmobiliaria = {
    // lee el json donde esta mi "array" de deptos.
    departamentos: jsonHelper.leerJson("departamentos"), 
    
    // va a recibir un array, y lo va a listar en string.
    listarDepartamentos: function(arrayDeptos){
        arrayDeptos.forEach(depto => { // depto es mi elemento que está iterando. Es como depto.[i]
            let disponible = depto.disponible ? "disponible" : "alquilado" // Ifternario para definir el true como disp y false alquilado
            console.log(`id: ${depto.id}, precio: ${depto.precioAlquiler}, está ${disponible}, ${depto.ambientes} ambientes `);
        });
    },

    buscarPorId: function(id) {
        // this.departamento es donde está mi array. Si el id que busco coincide con el que me pasan, retorna el objeto. 
        return this.departamentos.find(depto => depto.id === id);
    },

    departamentosNoDisponibles: function(){
        return this.departamentos.filter((depto) => depto.disponible === false)
    },   // depto mi iteracion => cuando depto.disponible sea false, retornamelo. En forma de array (x el filter)

    departamentosDisponibles: function(){
        return this.departamentos.filter((depto) => depto.disponible === true)
    },

    calcularRecaudacion: function(){
        let alquilados = this.departamentosNoDisponibles() // en alquilados, guardo el valor de los deptos no disponibles. Para usar estos valores en mi funcion
        let valor = alquilados.reduce((acum, depto) => acum + depto.precioAlquiler, 0)
        // en valor, está almacenado el reduce.        acumulador + propiedad que va a sumar + dnde arranca.
        return `El valor de la recaudación es de: ${valor}`
    },

    filtrarPorAmbientes: function(ambientes){
    return this.departamentos.filter((depto) => depto.ambientes >= ambientes)
    },

    filtrarPorPrecio: function (precioMaximo){
        let disponibles = this.departamentosDisponibles()
        return disponibles.filter((depto) => depto.precioAlquiler <= precioMaximo)
    },

    rebajarPrecioAlquiler: function (dto){
        let disponibles = this.departamentosDisponibles()
        let descuento = (100 - dto) / 100 
        disponibles.forEach(depto => { 
            depto.precioAlquiler = depto.precioAlquiler * descuento
            // depto.precioAlquiler *= depto.precioAlquiler * descuento
        jsonHelper.escribirJson("departamentos", this.departamentos)
        console.log(depto); // me devuelve depto por separado en cada vuelta.
        });

    },

    ordenarPorPrecio: function (arrayDeptos){
        return arrayDeptos.sort((a, b) => a.precioAlquiler - b.precioAlquiler)
    }
}

console.log(v, oo + " A. Listar Departamentos");
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos)
// ejecuto el valor departamento de mi objeto inmobiliaria.

console.log(v, oo + " A. Buscar por Id");
console.log(inmobiliaria.buscarPorId(10));                                
// No se puede usar listarDepto pq la propiedad find devuelve un objeto y no un array.

console.log(v, oo + " A. Deptos no disponibles");
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosNoDisponibles())
// Acá sí te trae un array, por ende puedo usar listar.departamentos.

console.log(v, oo + " A. Deptos disponibles");
inmobiliaria.listarDepartamentos(inmobiliaria.departamentosDisponibles())
// Acá sí te trae un array, por ende puedo usar listar.departamentos.

console.log(v, oo + " Calcular Recaudacion");
console.log(inmobiliaria.calcularRecaudacion());
// Trae un SOLO valor. Por ende, sin listar.

console.log(v, oo + " Filtrar por Ambientes");
inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorAmbientes(2))

console.log(v, oo + " Filtrar por precio");
inmobiliaria.listarDepartamentos(inmobiliaria.filtrarPorPrecio(100000))

console.log(v, oo + " Rebajas");
inmobiliaria.rebajarPrecioAlquiler(10);

console.log(v, oo + " Ordenar");
console.table(inmobiliaria.ordenarPorPrecio(inmobiliaria.departamentos));