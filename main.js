//pagina de inicio
let inicio = document.querySelector('.inicio')
let contenedorTareas = document.querySelector("#contenedor")
//formulario
let popup = document.querySelector('.popup')
let formulario = document.querySelector('.formulario')
let tipo = document.querySelector('#tipo');
//let tipoa = document.getElementsByTagName('option')

let desc = document.querySelector('#desc');
let tit = document.querySelector('#tit');
//botones
let addButton = document.querySelector('#addbutton')
let cerrarpop = document.querySelector('.cerrar')
let prioridades = document.querySelector('.prioridad')
let prioridadUno = document.querySelector('#gris')
let prioridadDos = document.querySelector('#verde')
let prioridadTres = document.querySelector('#naranja')
let prioridadCuatro = document.querySelector('#rojo')
let crearTarea = document.querySelector('#crear')

addButton.addEventListener('click', ()=>{
    popup.classList.add('active')
    addButton.classList.add('inactive')
    inicio.classList.add('desaparecer')
})
cerrarpop.addEventListener('click', ()=>{
    if(formulario == 'submit'){
        popup.classList.remove('active');
    addButton.classList.remove('inactive');
    inicio.classList.add('desaparecer');
    }else{
    popup.classList.remove('active')
    addButton.classList.remove('inactive')
    inicio.classList.remove('desaparecer')
}
})

prioridadUno.addEventListener('click', ()=>{
    prioridadUno.classList.add('elegida')
    prioridadDos.classList.remove('elegida')
    prioridadTres.classList.remove('elegida')
    prioridadCuatro.classList.remove('elegida')
})
prioridadDos.addEventListener('click', ()=>{
    prioridadDos.classList.add('elegida')
    prioridadUno.classList.remove('elegida')
    prioridadTres.classList.remove('elegida')
    prioridadCuatro.classList.remove('elegida')
})
prioridadTres.addEventListener('click', ()=>{
    prioridadTres.classList.add('elegida')
    prioridadUno.classList.remove('elegida')
    prioridadDos.classList.remove('elegida')
    prioridadCuatro.classList.remove('elegida')
})
prioridadCuatro.addEventListener('click', ()=>{
    prioridadCuatro.classList.add('elegida')
    prioridadUno.classList.remove('elegida')
    prioridadTres.classList.remove('elegida')
    prioridadDos.classList.remove('elegida')
})



formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
})


crearTarea.addEventListener('click', ()=>{
    let tipoa = tipo.value
    let modelo = `<div class='contenedor'>
    <img src="images/rana.png" alt="" class="icono">    
    <h1>${tit.value}</h1>
    <h3>${tipoa}</h3>
      
    <button type="checkbox" class="check"></button>
    <p>${desc.value}</p>
    
    </div>`
    contenedorTareas.innerHTML += modelo;
    popup.classList.remove('active');
    addButton.classList.remove('inactive');
    inicio.classList.add('desaparecer');
tit.value = "";
desc.value = "";
tipo.value = "";
prioridadUno.classList.remove('elegida')
prioridadDos.classList.remove('elegida')
prioridadTres.classList.remove('elegida')
prioridadCuatro.classList.remove('elegida')
})

/*`<div>
//<h1>${tit.value}</h1>
//<h3>${tipoa}</h3>  
//<p>${desc.value}</p>
//</div>`
//
//tit.value = "";
//desc.value = "";
//tipo.value = "";
//})*/

