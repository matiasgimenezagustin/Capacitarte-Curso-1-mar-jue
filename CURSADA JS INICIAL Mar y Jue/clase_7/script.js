const formlarioHTML = document.getElementById('formularioRegistro')

/* window.addEventListener('mousemove', (e) =>{
    console.log('EJE X: ' + e.clientX + ' ; ' + 'EJE y: ' + e.clientY)
}) */
formlarioHTML.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let password = formlarioHTML.contrasenia.value
    let username = formlarioHTML.username.value
    localStorage.setItem('user', JSON.stringify({password: password, username: username}))
    if(username == 'pepe' && password == 'admin1234'){
        window.location.href = '/home.html'
    }
    else{
        const errorHTML = document.getElementById('errorText')
        errorHTML.innerHTML = 'Usuario o Contraseña no valido'
    }
})

/* Teniendo en cuenta que tendras un formulario con

nombre
edad
contrasenia

Si el nombre es ´juan´ la edad es '28' y la contrasenia es 'admin1234' vas a decir por alerta 'hola jefe', sino diras por alerta 'fuera de aqui'
*/