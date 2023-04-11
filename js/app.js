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
  get dnis(){
    return this.#dni;
  }
  set dnis(nuevoDni){
    this.#dni = nuevoDni
  }
  get edades(){
    return this.#edad
  }
  set edades(nuevaEdad){
    this.#edad = nuevaEdad
  }
  get sexos(){
    return this.#sexo
  }
  set sexos(nuevoSexo){
    this.#sexo = nuevoSexo
  }
  get pesos(){
    return this.#sexo
  }
  set pesos(nuevoPeso){
    this.#peso = nuevoPeso
  }
  get alturas(){
    return this.#altura
  }
  set alturas(nuevaAltura){
    this.#altura = nuevaAltura
  }
  get anioNacimientos(){
    return this.#anioNacimiento
  }
  set anioNacimientos(nuevoAnio){
    this.#anioNacimiento = nuevoAnio
  }
}


function subirElementos() {
    let inputNombre = document.getElementById(`nombre`);
    let inputDni = document.getElementById(`dni`);
    let inputEdad = document.getElementById(`edad`);
    let inputHombre = document.getElementById(`hombre`).checked
    let inputMujer = document.getElementById(`mujer`).checked
    let sexo = ""
    if (inputHombre === true){
        sexo = "hombre"
    } else if(inputMujer === true){
        sexo = "mujer"
    }
    let inputPeso = document.getElementById(`peso`);
    let inputAltura = document.getElementById(`altura`);
    let inputAnio = document.getElementById(`nacimiento`);
    let personas = new Persona(inputNombre.value , inputDni.value, inputEdad.value, sexo, inputPeso.value, inputAltura.value, inputAnio.value);
    console.log(personas)
}
