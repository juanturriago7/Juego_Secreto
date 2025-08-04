let numeroSecretro = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecretro);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  console.log(intentos);
  if (numeroDeUsuario === numeroSecretro) {
    asignarTextoElemento(
      "p",
      `Acercaste el número en ${intentos} ${intentos == 1 ? "vez" : "veces"}  `
    );
    //Activar el botón porque en el html tiene el atributo disabled
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroDeUsuario > numeroSecretro) {
    //El usuario no acertó
    asignarTextoElemento("p", "El número secreto es menor");
  } else {
    asignarTextoElemento("p", "El número secreto es mayor");
  }
  intentos++;
  limpiarCaja();
  return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}

function generarNumeroSecretro() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si el numero generado está incluido en la lista
  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  //Si ya sorteamos todos los numeros
  if (listaNumeroSorteados.length == numeroMaximo) {
    asignarTextoElemento ("p","Ya se sortearon todos los números posibles");
  } else {
    if (listaNumeroSorteados.includes(numeroGenerado)) {
      return generarNumeroSecretro();
    } else {
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  //Indicar mensaje de intervalo de números
  asignarTextoElemento("h1", "Número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  //Generar el número aleatorio
  numeroSecretro = generarNumeroSecretro();
  //Inicializar el número de intentos
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Llamar condiciones iniciales
  condicionesIniciales();
  //Desahbilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

