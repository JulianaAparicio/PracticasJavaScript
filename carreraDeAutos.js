const jsonHelper = require("./jsonHelper");

const concesionaria = {
  //En el archivo JS en el que tenemos requeridas nuestras funciones de lectura / escritura de archivos, crea el objeto literal concesionaria, luego agrega la propiedad autos, la cual deberá tener la lista de vehículos del archivo json (previamente parseada). Verifica que puedas visualizar esta propiedad correctamente
  autos: jsonHelper.leerArchivo("AUTOS"),
  //Al objeto concesionaria crea un método llamado agregarAuto el cual recibe como parámetros: una marca, un modelo, el año del vehículo, el precio, y la patente. El método deberá agregar el nuevo auto a la propiedad autos, y debemos guardar en nuestra base de datos (reescribir el JSON) la lista actualizada Pdta: todos los vehículos nuevos tienen su propiedad vendido como false por defecto
  agregarAuto: function (marca, modelo, anio, precio, patente) {
    let autoNuevo = {
      marca,
      modelo,
      anio,
      precio,
      patente,
      vendido: false,
    };
    this.autos.push(autoNuevo);
    jsonHelper.escribirArchivo("AUTOS", this.autos);
    return "Auto agregado";
  },
  //Por último crea el método venderAuto el cual deberá recibir una patente por parámetro, y tendrá que recorrer la lista de autos de concesionaria y cuando encuentre al auto indicado, deberá modificar su propiedad vendido a true. Luego actualizar nuestra base de datos con la lista actualizada como en el punto anterior.
  venderAuto: function(patente){
      for (let i = 0; i < this.autos.length; i++) {
          if (patente === this.autos[i].patente) {
              this.autos[i].vendido = true;
          }
      }
      jsonHelper.escribirArchivo("AUTOS", this.autos);
      return "Auto vendido";
  },
  //Crear un método llamado totalDeVentas que recorra la lista de autos y vaya sumando todos los precios de vehículos que hayan sido vendidos, y que retorne el precio total.
  totalDeVentas: function(){
      let total = 0;
      for (let i = 0; i < this.autos.length; i++) {
          if (this.autos[i].vendido) {
              total += this.autos[i].precio;
          }
      }
      return "El total de las ventas es: " + total;
  },
  //Crea un método llamado eliminarAuto el cual deberá recibir una patente por parámetro y eliminar el vehículo indicado. Investiga cómo podés hacer para poder eliminar un elemento en específico de un array. Luego deberás actualizar la base de datos siguiendo los pasos para actualizar la lista como en puntos anteriores.
  eliminarAuto: function(patente){
    let arrayAutos = this.autos;
    for (let i = 0; i < arrayAutos.length; i++) {
        if (patente === arrayAutos[i].patente) {
            arrayAutos.splice(i)
        }
    }
    jsonHelper.escribirArchivo("AUTOS", arrayAutos);
    return "Vehiculo eliminado";
  }
};

// console.log(concesionaria.agregarAuto("Toyota", "Etios", 2020, 1850, "AS324FV"));
// console.log(concesionaria.venderAuto("WAU329"));
// console.log(concesionaria.totalDeVentas());
console.log(concesionaria.eliminarAuto("AS324FV"));