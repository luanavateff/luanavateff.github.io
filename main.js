//pagina de inicio
let inicio = document.querySelector('.inicio')
let contenedorTareas = document.querySelector("#contenedorPrimero")
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
let prioridades = document.querySelectorAll('.prioridad')
let prioridadUno = document.querySelector('.prioridad gris')
let prioridadDos = document.querySelector('.prioridad verde')
let prioridadTres = document.querySelector('.prioridad naranja')
let prioridadCuatro = document.querySelector('.prioridad rojo')

let crearTarea = document.querySelector('#crear')
let cancelarTarea = document.querySelector('#cancelar')

//comportamientos de botón add y cerrar
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



//para que el formulario no actúe por default
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
})

//evento crear tarea
crearTarea.addEventListener('click', ()=>{
    //acá traigo el valor del tipo de tarea elegida
    let tipoa = tipo.value
    console.log(tipoa)
    let formPrioridades = document.querySelector('input[name=prioridad]:checked').value

    //creo el modelo que se tiene que imprimir en la lista
    let modelo = `<ul class='a'><div id= 'contenedor' class="prioridad-${formPrioridades}">
    <img src="images/${tipoa}.png" alt="" class="icono" id='foto'>    
    <h1>${tit.value}</h1>
    <br>
    <button class="delete"><span class="material-symbols-outlined">delete</span></button>
    <input type="checkbox" class='check'>
    <p>${desc.value}</p>
    </div></ul>`
    contenedorTareas.innerHTML += modelo;
    
    //hago que la selección de prioridad ponga el color correspondiente    
        console.log(formPrioridades)
        if(formPrioridades == ['gris']){
            console.log('gris');
        }else if(formPrioridades == ['verde']){
            console.log('verde');
        }else if(formPrioridades == ['naranja']){
            console.log('amarillo');
        }else if(formPrioridades == ['rojo']){
            console.log('rojo');
        }



    //hago que se cierre el pop, aparezca el add y siga sin aparecer el inicio
    popup.classList.remove('active');
    addButton.classList.remove('inactive');
    inicio.classList.add('desaparecer');
    
    //borro los datos del formulario
    tit.value = "";
    desc.value = "";
    tipo.value = "";
    

    //hago que se pueda borrar la tarea
    let ul = document.querySelector('.a')
    let eliminar = document.querySelector('.delete')
    
    eliminar.addEventListener('click', ()=>{
        console.log('a')
        ul.classList.add('borrame')
    });
    //me falta hacer que los demás se puedan eliminar y no solo el primero
})

    //evento cancelar tarea
cancelarTarea.addEventListener('click', ()=>{
    console.log('soy la cancelación')
    if(formulario != 'submit'){
    popup.classList.remove('active');
    addButton.classList.remove('inactive');
    inicio.classList.add('desaparecer');
    }else {
    popup.classList.remove('active')
    addButton.classList.remove('inactive')
    inicio.classList.remove('desaparecer')
}
})
//me faltó entender cómo hacer para que si no hay tareas vuelva el inicio, no se me ocurrio la condición




