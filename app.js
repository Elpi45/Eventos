
let formulario = document.getElementById("form")

formulario.addEventListener("submit", datosForm)

function datosForm(e){
    //cancelamos cuando el usuario mete mal el dedo
    e.preventDefault();
    //capturamos los datos de los input
    let datos = e.target
    //obtenemos los datos ingresados y enviados en el evento
    console.log(datos.children[0].value)
    console.log(datos.children[1].value)
}

    