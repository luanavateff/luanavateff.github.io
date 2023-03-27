//traigo las pantallas
let pantallas = document.querySelectorAll('.col')
//form del comienzo
let formJugadores = document.getElementById('formJugadores')
//jugadores
let jugadorUno = document.getElementById('jugador1').value
let jugadorDos = document.getElementById('jugador2').value
let nombreJugadores = document.querySelector('.nombreJugadores')
let btnJugar = document.getElementById('btnJugar')

//falta el boton para volver atrás y el boton del carrousel
let btnVolver = document.getElementById('btnVolver')
let btnResultados = document.getElementById('btnResultado')
let btnNueva = document.getElementById('btnNueva')
let btnGuardar = document.getElementById('btnGuardar')
let carousel = document.querySelector('.carousel-inner')
let miCarousel = document.querySelector('#carouselCartas')

let jugadores = []
let cartas = []
//acá hago que se fije si en el localStorage no tiene ya el mazo cargado y si no lo tiene que lo cargue
if (localStorage.getItem("mazoCompleto")){
    cartas = JSON.parse(localStorage.getItem("mazoCompleto"));
} else {
    fetch ('https://thronesapi.com/api/v2/Characters')
        .then(res=>res.json())
        .then(response=> guardarMazo(response))
        console.log('hay mazo')
}
//la constante para que se guarde el mazo y el local storage lo guarde ahí
const guardarMazo = (mazoDesdeLaApi)=>{
    cartas = mazoDesdeLaApi;
    localStorage.setItem('mazoCompleto', JSON.stringify(cartas))
}

let partidas = []

//muestra la pantalla que se utiliza
const mostrarPantalla = (p) => {
    pantallas.forEach((pantalla) => {
        pantalla.classList.add('d-none')
        if(pantalla.id === p){
            pantalla.classList.remove('d-none')
        }
    })
}

const iniciarJuego = () => {
    mostrarPantalla('resultado')

    const cartasJuego = []

//que sume cartas hasta tener 6
    while (cartasJuego.length < 6){
        //obtengo numeros del mazo de cartas
        dameRandom = Math.floor(Math.random()*cartas.length)
        //para que no se repitan las cartas de los jugadores
        if(cartasJuego.indexOf(cartas[dameRandom]) == -1){
            cartasJuego.push(cartas[dameRandom]);
        }
    }
    console.log('estas son las cartas random: ', cartasJuego)
    let active =''
    cartasJuego.forEach((carta,index) =>{
        if (index == 0) active = 'active'
        else active = ''
        
        carousel.innerHTML += `<div class="carousel-item ${active}">
        <img src=${carta.imageUrl} class="d-block w-100" alt="...">
        <div class="carousel-caption">
        <h5>${carta.fullName}</h5>
        <p>${carta.title}</p>
        <p>Puntos: ${carta.id}</p>
        </div>
        </div>`
        
    })
    //jugadores[0].cartas.push(cartas[1])
    jugadores[0].cartas.push(cartasJuego.slice(0,3))
    jugadores[1].cartas.push(cartasJuego.slice(3,6))
    
    console.log(jugadores[0].nombre, jugadores[0].cartas)
    console.log(jugadores[1].nombre, jugadores[1].cartas)



    /*jugadores.forEach((jugadores) => {
        nombreJugadores.innerHTML += `<span> ${jugadores.nombre} </span>
        <span> ${jugadores.cartas} </span>`
    })*/
}
const myCarousel = document.getElementById('carouselCartas')
carousel
myCarousel.addEventListener('slide.bs.carousel', event =>{
    console.log('hola')
})

const loadingJuego = () => {
    mostrarPantalla('loading')
    setTimeout(() => {
        iniciarJuego()
    }, 3000);
}

formJugadores.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('Inicia el juego')

    if(e.target.jugador1.value && e.target.jugador2.value){
        jugadores = [
            {
                nombre: e.target.jugador1.value,
                cartas : [],
                puntaje: 0,
            },
            {
                nombre: e.target.jugador2.value,
                cartas : [],
                puntaje:0,
            }
        ]
        console.log('hay jugadores')
        loadingJuego()
    }else{
        alert('Por favor cargá jugadores')
    }
    formJugadores.reset()
})
btnVolver.addEventListener('click', ()=>{
    mostrarPantalla('home')
})
btnResultados.addEventListener('click', ()=>{
    mostrarPantalla('ganador')
})
btnGuardar.addEventListener('click', ()=>{
    mostrarPantalla('loading')
    //aca hay que hacer un local storage
})
btnNueva.addEventListener('click',()=>{
    mostrarPantalla('home')
})