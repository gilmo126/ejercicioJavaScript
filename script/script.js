
var intento = 0
var numer = document.querySelector('#numero')
var adivina = Math.floor(Math.random() * 10+1)
var impNumero = document.getElementById('intento') 
var listaNumeros = " " 
var pista = document.getElementById('pista')
var anterior = document.getElementById('anteriores')
var inputSend = document.getElementById('inputSend')
var boton_reinicio

function adivinanumero() {
     let usuarioNumero = numer.value
     listaNumeros = listaNumeros + " - "+usuarioNumero
     anterior.textContent = listaNumeros
     anterior.style.backgroundColor = "grey"
     intento ++
     
     if( usuarioNumero == adivina){
        gano()
     }
     else{
         fallo(usuarioNumero)
     }
     

    }

function fallo(usuarioNumero){
    if(intento>=3)
    {
        pista.textContent = "Perdio!!!"
        pista.style.backgroundColor = "red"
        finDelJuego()
    }
    else 
    {
        mostrarPista(usuarioNumero)
    }

}
function gano() {

    pista.textContent = "GANADOR!!!"
    pista.style.backgroundColor = "green"
    finDelJuego()
}

function mostrarPista(usuarioNumero){
   if(usuarioNumero > adivina)
    {
        pista.textContent = "el numero ingresado es mayor al numero secreto"
    }
    else{
        pista.textContent = "el numero ingresado es menor al numero secreto"
    }
    pista.style.backgroundColor = "yellow"
}

function reiniciar(){
  inputSend.disabled = false
  intento = 0
  adivina = Math.floor(Math.random() * 10+1)
  listaNumeros.textContent = " " 
  numer.textContent = " "
  pista.textContent = " "
  document.body.removeChild(boton_reinicio)

}
   
function finDelJuego() {
    boton_reinicio = document.createElement('button')
    boton_reinicio.textContent = "reinicia el juego"
    boton_reinicio.addEventListener('click', reiniciar)
    document.body.appendChild(boton_reinicio)
    inputSend.disabled = true
}
