const formlarioHTML = document.getElementById('formularioRegistro')

/* window.addEventListener('mousemove', (e) =>{
    console.log('EJE X: ' + e.clientX + ' ; ' + 'EJE y: ' + e.clientY)
}) */
formlarioHTML.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    console.log(formlarioHTML.contrasenia.value)
    console.log(formlarioHTML.username.value)
    console.log('se envio mi formulario')
})