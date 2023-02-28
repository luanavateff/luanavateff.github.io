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
/*let prioridadUno = document.querySelector('#gris')
let prioridadDos = document.querySelector('#verde')
let prioridadTres = document.querySelector('#naranja')
let prioridadCuatro = document.querySelector('#rojo')*/
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

//para que se vea qué prioridad se selecciona
/*prioridadUno.addEventListener('click', ()=>{
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
})*/



//para que el formulario no actúe por default
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
})

//evento crear tarea
crearTarea.addEventListener('click', ()=>{
    //acá traigo el valor del tipo de tarea elegida
    let tipoa = tipo.value
    console.log(tipoa)
    //creo el modelo que se tiene que imprimir en la lista
    let modelo = `<ul class='a'><div id= 'contenedor'>
    <img src="images/${tipoa}.png" alt="" class="icono" id='foto'>    
    <h1>${tit.value}</h1>
    <br>
    <button class="delete"><span class="material-symbols-outlined">delete</span></button>
    <input type="checkbox" class='check'>
    <p>${desc.value}</p>
    </div></ul>`
    contenedorTareas.innerHTML += modelo;
    
    //hago que la selección de prioridad ponga el color correspondiente
    let formPrioridades = document.getElementsByName('formPrioridad');
    let colorPrioridad = formPrioridades.value;
    let contenedor = document.getElementById('contenedor')
        console.log(colorPrioridad);
    if (colorPrioridad == 'baja'){
        console.log('prioridad baja');
        contenedor.classList.add('gris')
    }
    if (colorPrioridad == 'media'){
        console.log('prioridad media')
        contenedor.classList.add('verde')
    }
    if (colorPrioridad == 'alta'){
        console.log('prioridad alta')
        contenedor.classList.add('naranja')
    }
    if (colorPrioridad == 'urgente'){
        console.log('prioridad urgente')
        contenedor.classList.add('rojo')
    }




    //hago que se cierre el pop, aparezca el add y siga sin aparecer el inicio
    popup.classList.remove('active');
    addButton.classList.remove('inactive');
    inicio.classList.add('desaparecer');
    
    //borro los datos del formulario
    tit.value = "";
    desc.value = "";
    tipo.value = "";
    
    
    /*prioridadUno.classList.remove('elegida')
    prioridadDos.classList.remove('elegida')
    prioridadTres.classList.remove('elegida')
    prioridadCuatro.classList.remove('elegida')*/
    

//hago que se pueda borrar la tarea
    let ul = document.querySelector('.a')
    let eliminar = document.querySelector('.delete')
    eliminar.addEventListener('click', ()=>{
        console.log('a')
        ul.classList.add('borrame')
    })
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


/*let prioridad = document.querySelector('button[name=formPrioridad]')
let prioridadElegida = prioridad.value
console.log(prioridadElegida)*/




