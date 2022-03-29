const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juliana Aparicio";
const tema = "TEMA 4";

const arrayProfesionales = [
  {
    id: 0,
    estaHabilitado: false,
    nombre: "Huber Wilkins",
    email: "huberwilkins#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
  },
  {
    id: 1,
    estaHabilitado: true,
    nombre: "Goldie Haley",
    email: "goldiehaley#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 3,
  },
  {
    id: 2,
    estaHabilitado: false,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 9,
  },
  {
    id: 3,
    estaHabilitado: false,
    nombre: "Leanne Burch",
    email: "leanneburch#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 13,
  },
  {
    id: 4,
    estaHabilitado: false,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 75,
  },
  {
    id: 5,
    estaHabilitado: true,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 32,
  },
  {
    id: 6,
    estaHabilitado: true,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 67,
  },
  {
    id: 7,
    estaHabilitado: true,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 2,
  },
  {
    id: 8,
    estaHabilitado: true,
    nombre: "Guerra Bright",
    email: "guerrabright#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 9,
    estaHabilitado: true,
    nombre: "Dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    nombre: "Stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
  },
  {
    id: 11,
    estaHabilitado: false,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 12,
    estaHabilitado: true,
    nombre: "Mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 2,
  },
  {
    id: 13,
    estaHabilitado: false,
    nombre: "Ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 23,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A

const appProfesionales = {
  profesionales: arrayProfesionales,
  // B
  listarProfesionales: function (arrayProf) {
    for (let i = 0; i < arrayProf.length; i++) {
      let habilitado = arrayProf[i].estaHabilitado ? "ok" : "inactivo";
      console.log(
        `id ${arrayProf[i].id} ${habilitado}, ${arrayProf[i].especialidad}, ${arrayProf[i].nombre},
        consultas: ${arrayProf[i].cantidadConsultas}, email: ${arrayProf[i].email}`
      );           
    }    
  },
  // C
  filtrarHabilitadosPorEspecialidad: function (especialidadSolictada) {
    let habilitados = [];
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].estaHabilitado && this.profesionales[i].especialidad === especialidadSolictada) {
        habilitados.push(this.profesionales[i]);
      } 
    }
    return habilitados;
  },
  // D
  buscarPorID: function(id) {
    for (let i = 0; i < this.profesionales.length; i++) {
      if (id === this.profesionales[i].id) {
        return this.profesionales[i];
      }
    }
  }, 
  // E
  realizarConsulta: function (id) {
    let profesionalBuscado = this.buscarPorID(id);
    profesionalBuscado.cantidadConsultas += 1;
    return profesionalBuscado;
  }, 
  // F
  corregirEmails: function () {
    for (let i = 0; i < this.profesionales.length; i++) {
      let email = this.profesionales[i].email;
      let emailErroneo = email.indexOf("#");
      if (emailErroneo != -1) {
        let emailCorregido = email.replace("#", "@");
        this.profesionales[i].email = emailCorregido;
      } 
    }
    return this.profesionales;
  }
}



// F
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí

appProfesionales.listarProfesionales(appProfesionales.profesionales);

console.log(o);

console.log(v, oo + "   C. filtrarHabilitadosPorEspecialidad('Cardiologia')");
// Ejecución aquí

appProfesionales.listarProfesionales(appProfesionales.filtrarHabilitadosPorEspecialidad('Cardiologia'));

console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí

console.log(appProfesionales.buscarPorID(1));

console.log(o);

console.log(v, oo + "  E. realizarConsulta()");
// Ejecución aquí

appProfesionales.listarProfesionales(appProfesionales.realizarConsulta(1));

console.log(o);

console.log(v, oo + " F. corregirNombres");
// Ejecución aquí

appProfesionales.corregirEmails(); 

appProfesionales.listarProfesionales(appProfesionales.corregirEmails());

console.log(o);