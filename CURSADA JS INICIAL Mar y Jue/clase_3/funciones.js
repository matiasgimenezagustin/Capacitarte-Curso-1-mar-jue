const carritoDeCompras = [
    {
        nombre: 'zanahoria',
        precio: 400,
        cantidad: 3
    },
    {
        nombre: 'papa',
        precio: 300,
        cantidad: 2
    }
]






function decirNombre ( ){
    console.log('hola pepe')
}


/* 
let hambre = 20

function dormir(){
    console.log('me voy a dormir')
}
function comer(){
    hambre = hambre + 40
    console.log('Ya comi')
}

function tenerHambre (){
    if(hambre < 40){
        console.log('tengo hambre')
        comer()
        tenerHambre()
    }
    else{
        console.log('no tengo hambre')
        dormir()
    }
}

tenerHambre()
 */






const personaje = {
    nombre: "Lucas",
    dinero: 20,
    energia: 10,
    precioXHora: 10
}
function dormir(horas){
    personaje.energia += horas * 10
    console.log('ahora tengo ' + personaje.energia + ' energia')
}
function verificarEnergia (){
    if(personaje.energia > 20){
        console.log("Aun tengo bastante energia")
    }else{
        console.log('Ya estoy cansado...')
    }
}
function trabajar(horas){
    verificarEnergia()
    if(personaje.energia > 20){
        console.log('Hoy trabajare ' + horas + ' horas')
        let ganancia = personaje.precioXHora * horas
        personaje.dinero = personaje.dinero + ganancia
        console.log('Hoy gane $' + ganancia)
        decirDinero()
    }
    else{
        dormir(2)
        trabajar(horas)
    }
}
function decirDinero (){
    console.log('Tengo $' + personaje.dinero)
}


trabajar(2)