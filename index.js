var formulario = document.getElementById("form-login")
var pass = document.getElementById("pass-login")
var id = document.getElementById("ID-login")


var expMay = RegExp("[A-Z]");
var expMin = RegExp("[a-z]");
var expNum = RegExp("[0-9]");

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    var error = ""
    if (!pass.value.match(expMay)) {
        error += "Debe temer una mayuscula"
    }if (!pass.value.match(expMin)) {
        error += "Debe temer una minuscula"
    }if (!pass.value.match(expNum)) {
                error += "Debe temer un numero"
    }
    if (error == "") {
        window.comunicacion.registroValido([id.value, pass.value]);
    } else {
        alert(error)
    }
           

})

