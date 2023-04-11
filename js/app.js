/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona 
creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones: --
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar 
las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e 
indicar en un alert el resultado de la función correspondiente.
*/

let btnSubir = document.getElementById(`btnSubir`).addEventListener(`click`, subirElementos);
let btnEdad = document.getElementById(`btnEdad`).addEventListener(`click`, revisarEdad);
class Persona {
  //privadas
  #nombre;
  #dni;
  #edad;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
  constructor(nombre, dni, edad, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#edad = edad;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
  }
  get nombres() {
    return this.#nombre;
  }
  set nombres(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get dnis() {
    return this.#dni;
  }
  set dnis(nuevoDni) {
    this.#dni = nuevoDni;
  }
  get edades() {
    return this.#edad;
  }
  set edades(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get sexos() {
    return this.#sexo;
  }
  set sexos(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  get pesos() {
    return this.#peso;
  }
  set pesos(nuevoPeso) {
    this.#peso = nuevoPeso;
  }
  get alturas() {
    return this.#altura;
  }
  set alturas(nuevaAltura) {
    this.#altura = nuevaAltura;
  }
  get anioNacimientos() {
    return this.#anioNacimiento;
  }
  set anioNacimientos(nuevoAnio) {
    this.#anioNacimiento = nuevoAnio;
  }
  //metodos
  mostrarGeneracion(mes) {
    //let mes = parseInt(document.getElementById(`nacimiento`).value);
    console.log(`este variable es mes ${mes}`);
    if (mes >= 1930 && mes <= 1948) {
      alert(
        `esta persona pertenece a la generacion silent generation y su rasgo caracteristico es austeridad`
      );
    } else if (mes >= 1949 && mes <= 1968) {
      alert(
        `esta persona pertenece a la generacion baby boom y su rasgo caracteristico es ambicion`
      );
    } else if (mes >= 1969 && mes <= 1980) {
      alert(
        `esta persona pertenece a la generacion generacion X y su rasgo caracteristico es obsesion por el exito`
      );
    } else if (mes >= 1981 && mes <= 1993) {
      alert(
        `esta persona pertenece a la generacion generacion Y (millennials) y su rasgo caracteristico es frustracion`
      );
    } else if (mes >= 1994 && mes <= 2010) {
      alert(
        `esta persona pertenece a la generacion generacion Z y su rasgo caracteristico es irreverencia`
      );
    }else{
        alert(`ingrese un numero valido`)
    }
  }
}

let inputNombre = document.getElementById(`nombre`);
let inputDni = document.getElementById(`dni`);
let inputEdad = document.getElementById(`edad`);
let inputPeso = document.getElementById(`peso`);
let inputAltura = document.getElementById(`altura`);

function revisarEdad() {
  console.log(parseInt(inputEdad.value));
  if (parseInt(inputEdad.value) >= 18) {
    alert(`esta persona es mayor de edad`);
  } else {
    alert(`esta persona es menor`);
  }
}

function subirElementos() {
    let inputHombre = document.getElementById(`hombre`).checked
    let inputMujer = document.getElementById(`mujer`).checked
    let sexo = ""
    if (inputHombre === true){
        sexo = "hombre"
    } else if(inputMujer === true){
        sexo = "mujer"
    }
    let inputAnio = document.getElementById(`nacimiento`);
    const personas = new Persona(inputNombre.value , inputDni.value, inputEdad.value, sexo, inputPeso.value, inputAltura.value, inputAnio.value);
    personas.mostrarGeneracion(parseInt( inputAnio.value))
    console.log(personas)
    let seccion = document.getElementById("seccionNueva");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = `Persona: <br>
    Nombre: ${inputNombre.value} <br>
    Edad: ${inputEdad.value} <br>
    DNI: ${inputDni.value} Sexo: ${sexo} <br>
    Peso: ${inputPeso.value}KG Altura: ${inputAltura.value} metros <br>
    Año de Nacimiento: ${inputAnio.value}`
    parrafo.className = "text-center text-info"
    seccion.appendChild(parrafo)
}
